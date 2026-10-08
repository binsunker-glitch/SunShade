# ظل سيارتي — متجر شمسيات السيارات (نموذج تجريبي)

**الموقع المنشور:** https://binsunker-glitch.github.io/SunShade/

متجر عربي RTL كامل: React + TypeScript + Tailwind CSS v4 + Lucide.

## التشغيل

```bash
cd sunshade-store
npm install
npm run dev     # http://127.0.0.1:5173
npm run build
```

## صور الخامة (الطبقات الأربع + النانو)

احفظ الصورتين بهذين الاسمين بالضبط في `public/images/`:

- `fabric-4-layers.jpg` — صورة "Upgraded 4-Layer Design"
- `ice-crystal-nano.jpg` — صورة "Ice Crystal Nano Design"

تظهران تلقائيًا في: قسم "خامة متقدمة بأربع طبقات" بالرئيسية + قسم "خامة الشمسية من الداخل" بصفحة المنتج. قبل إضافة الملفات يعرض الموقع صورة placeholder تلقائيًا.

## الصفحات (كلها مربوطة بالتنقل)

| المسار | الصفحة |
|---|---|
| `/` | الرئيسية (هيرو + Vehicle Finder + ثقة + ماركات + الأكثر مبيعًا + جودة + مقارنة + قبل/بعد + تقييمات + صور + FAQ) |
| `/finder` | اختر سيارتك (ماركة ← موديل ← جيل ← سنة ← `/brand/model/gen/year`) |
| `/shop` | قائمة المنتجات + فلاتر (ماركة/سعر/تقييم) + ترتيب + بحث + فلتر السيارة |
| `/brand/:slug` | صفحة الماركة + الموديلات والأجيال والسنوات |
| `/:brand/:model/:gen/:year` | صفحة التوافق SEO — مثال `/mercedes/e-class/w213/2023` |
| `/product/:slug` | تفاصيل المنتج + معرض 8 صور + تكبير + توافق + تقييمات + سلة/اشترِ الآن |
| `/cart` | السلة (كمية/حذف/مجموع/شحن) |
| `/checkout` | معاينة إتمام الطلب (تجريبي بدون دفع) |
| `/reviews` | التقييمات |
| `/gallery` | صور العملاء |
| `/faq` | الأسئلة الشائعة (+FAQ Schema) |
| `/shipping` | الشحن والاسترجاع |
| `/wishlist` `/account` `/about` | المفضلة / حسابي / من نحن |

## ملاحظات

- الخط: IBM Plex Sans Arabic، اتجاه RTL كامل، عملة ر.س.
- التصميم: رموز دلالية (background/foreground/card/muted/border/primary/accent) في `src/index.css` — بدون ألوان مُصلّبة.
- كل البيانات (منتجات/أسعار/تقييمات/صور) **تجريبية** وموسومة بذلك، وتُستبدل لاحقًا.
- السلة والمفضلة والسيارة محفوظة في localStorage.
- واتساب عائم + تنقل سفلي للجوال + Schema (Product/Review/Breadcrumb/FAQ).
