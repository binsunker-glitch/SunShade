import { useCallback, useEffect, useState } from 'react';
import { ArrowDownToLine, RefreshCw, Share, WifiOff, X } from 'lucide-react';
import { PWA_UPDATE_EVENT, applyAppUpdate } from '../pwa';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

function isIosSafari() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  const ios = /iphone|ipad|ipod/i.test(ua);
  const standalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true;
  return ios && !standalone;
}

/** زر "ثبّت التطبيق" — يظهر فقط عندما يدعم المتصفح التثبيت */
function InstallButton() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const onPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferred(e);
    };
    const onInstalled = () => setDeferred(null);
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const install = useCallback(async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
  }, [deferred]);

  if (!deferred) return null;
  return (
    <button
      onClick={install}
      className="fixed bottom-20 left-4 z-40 flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-primary card-shadow md:bottom-6 md:left-6"
      aria-label="ثبّت التطبيق على جهازك"
    >
      <ArrowDownToLine className="h-4 w-4" />
      ثبّت التطبيق
    </button>
  );
}

/** تلميح آيفون: مشاركة ← إضافة إلى الشاشة الرئيسية */
function IosHint() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isIosSafari() && !localStorage.getItem('pwa-ios-hint')) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-20 z-40 rounded-xl border border-border bg-card p-3.5 card-shadow md:bottom-6 md:right-6 md:left-auto md:max-w-sm" role="status">
      <div className="flex items-start gap-2.5">
        <Share className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
        <p className="flex-1 text-[13px] leading-6">
          <b>لتثبيت التطبيق على آيفون:</b> اضغط زر <b>مشاركة</b> في سفاري ثم اختر <b>«إضافة إلى الشاشة الرئيسية»</b>.
        </p>
        <button
          onClick={() => { localStorage.setItem('pwa-ios-hint', '1'); setShow(false); }}
          className="rounded-md p-1 hover:bg-muted"
          aria-label="إغلاق التلميح"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/** شريط انقطاع الاتصال */
function OfflineBar() {
  const [online, setOnline] = useState(typeof navigator === 'undefined' ? true : navigator.onLine);
  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);
  if (online) return null;
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-center gap-2 bg-destructive px-3 py-2 text-[13px] font-bold text-white" role="alert">
      <WifiOff className="h-4 w-4" />
      لا يوجد اتصال بالإنترنت — تتصفح النسخة المحفوظة
    </div>
  );
}

/** إشعار "تحديث جديد متاح" */
function UpdateBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onUpdate = () => setShow(true);
    window.addEventListener(PWA_UPDATE_EVENT, onUpdate);
    return () => window.removeEventListener(PWA_UPDATE_EVENT, onUpdate);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-20 z-50 rounded-xl bg-primary p-3.5 text-white card-shadow md:bottom-6 md:right-6 md:left-auto md:max-w-sm" role="status">
      <p className="text-[13.5px] font-bold">يوجد تحديث جديد للتطبيق</p>
      <div className="mt-2 flex gap-2">
        <button
          onClick={applyAppUpdate}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent py-2 text-sm font-bold text-primary"
        >
          <RefreshCw className="h-4 w-4" /> تحديث الآن
        </button>
        <button onClick={() => setShow(false)} className="rounded-lg border border-white/30 px-3 py-2 text-sm">
          لاحقاً
        </button>
      </div>
    </div>
  );
}

export default function PwaUI() {
  return (
    <>
      <OfflineBar />
      <UpdateBanner />
      <InstallButton />
      <IosHint />
    </>
  );
}
