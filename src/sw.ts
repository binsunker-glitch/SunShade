/// <reference lib="webworker" />
import { cleanupOutdatedCaches, matchPrecache, precacheAndRoute } from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

declare const self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST: Array<{ url: string; revision: string | null }>;
};

// Workbox يرسل هذا بعد التثبيت؛ بدونه لن يعمل زر "تحديث الآن"
self.addEventListener('message', (event) => {
  if (event.data && (event.data as { type?: string }).type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Precache لكل ملفات البناء + تنظيف الكاش القديم عند كل إصدار
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// الصور: CacheFirst — حد أقصى 60 ملفاً لمدة 30 يوماً
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 }),
    ],
  })
);

// بيانات JSON: StaleWhileRevalidate
registerRoute(
  ({ request, url }) => request.method === 'GET' && url.pathname.endsWith('.json'),
  new StaleWhileRevalidate({
    cacheName: 'data',
    plugins: [new CacheableResponsePlugin({ statuses: [0, 200] })],
  })
);

// التنقل بين الصفحات: الشبكة أولاً، ثم نسخة التطبيق المخزنة، ثم صفحة الأوفلاين
const pagesStrategy = new NetworkFirst({
  cacheName: 'pages',
  networkTimeoutSeconds: 4,
  plugins: [new CacheableResponsePlugin({ statuses: [200] })],
});

registerRoute(
  new NavigationRoute(async (options) => {
    try {
      const response = await pagesStrategy.handle(options);
      if (response) return response;
    } catch {
      // تجاهل وانزل للبدائل المخزنة
    }
    return (
      (await matchPrecache('index.html')) ??
      (await matchPrecache('offline.html')) ??
      Response.error()
    );
  })
);
