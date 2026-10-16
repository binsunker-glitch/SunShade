import { registerSW } from 'virtual:pwa-register';

export const PWA_UPDATE_EVENT = 'pwa:update-available';

let updateFn: ((reload?: boolean) => Promise<void>) | null = null;

/** تسجيل الـ Service Worker مرة واحدة عند إقلاع التطبيق */
export function registerAppSW() {
  updateFn = registerSW({
    immediate: true,
    onNeedRefresh() {
      window.dispatchEvent(new CustomEvent(PWA_UPDATE_EVENT));
    },
  });
}

/** يُستدعى من زر "تحديث الآن" — يفعّل النسخة الجديدة ويعيد التحميل */
export function applyAppUpdate() {
  if (updateFn) void updateFn(true);
  else window.location.reload();
}
