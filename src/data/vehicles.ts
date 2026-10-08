export interface Generation {
  code: string;
  years: string; // e.g. "2020–2023"
  yearList: number[];
}

export interface CarModel {
  name: string;
  generations: Generation[];
}

export interface Brand {
  slug: string;
  name: string;
  nameAr: string;
  models: CarModel[];
}

export const brands: Brand[] = [
  {
    slug: "mercedes", name: "Mercedes-Benz", nameAr: "مرسيدس بنز",
    models: [
      { name: "E-Class", generations: [{ code: "W213", years: "2020–2023", yearList: [2020, 2021, 2022, 2023] }, { code: "W214", years: "2024–2026", yearList: [2024, 2025, 2026] }] },
      { name: "C-Class", generations: [{ code: "W206", years: "2022–2026", yearList: [2022, 2023, 2024, 2025, 2026] }] },
      { name: "S-Class", generations: [{ code: "W223", years: "2021–2026", yearList: [2021, 2022, 2023, 2024, 2025, 2026] }] },
      { name: "GLE", generations: [{ code: "V167", years: "2020–2026", yearList: [2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
    ],
  },
  {
    slug: "bmw", name: "BMW", nameAr: "بي إم دبليو",
    models: [
      { name: "5 Series", generations: [{ code: "G30", years: "2017–2023", yearList: [2017, 2018, 2019, 2020, 2021, 2022, 2023] }, { code: "G60", years: "2024–2026", yearList: [2024, 2025, 2026] }] },
      { name: "3 Series", generations: [{ code: "G20", years: "2019–2026", yearList: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
      { name: "X5", generations: [{ code: "G05", years: "2019–2026", yearList: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
    ],
  },
  {
    slug: "lexus", name: "Lexus", nameAr: "لكزس",
    models: [
      { name: "ES", generations: [{ code: "XZ10", years: "2019–2026", yearList: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
      { name: "LX", generations: [{ code: "J310", years: "2022–2026", yearList: [2022, 2023, 2024, 2025, 2026] }] },
      { name: "RX", generations: [{ code: "ALH10", years: "2023–2026", yearList: [2023, 2024, 2025, 2026] }] },
    ],
  },
  {
    slug: "range-rover", name: "Range Rover", nameAr: "رينج روفر",
    models: [
      { name: "Range Rover", generations: [{ code: "L460", years: "2022–2026", yearList: [2022, 2023, 2024, 2025, 2026] }] },
      { name: "Defender", generations: [{ code: "L663", years: "2020–2026", yearList: [2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
    ],
  },
  {
    slug: "porsche", name: "Porsche", nameAr: "بورشه",
    models: [
      { name: "Cayenne", generations: [{ code: "E3", years: "2019–2026", yearList: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
      { name: "911", generations: [{ code: "992", years: "2020–2026", yearList: [2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
    ],
  },
  {
    slug: "audi", name: "Audi", nameAr: "أودي",
    models: [
      { name: "A6", generations: [{ code: "C8", years: "2019–2026", yearList: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
      { name: "Q7", generations: [{ code: "4M", years: "2020–2026", yearList: [2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
    ],
  },
  {
    slug: "toyota", name: "Toyota", nameAr: "تويوتا",
    models: [
      { name: "Land Cruiser", generations: [{ code: "J300", years: "2022–2026", yearList: [2022, 2023, 2024, 2025, 2026] }] },
      { name: "Camry", generations: [{ code: "XV80", years: "2024–2026", yearList: [2024, 2025, 2026] }] },
      { name: "Hilux", generations: [{ code: "AN120", years: "2020–2026", yearList: [2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
    ],
  },
  {
    slug: "gmc", name: "GMC", nameAr: "جي إم سي",
    models: [
      { name: "Yukon", generations: [{ code: "GMT1", years: "2021–2026", yearList: [2021, 2022, 2023, 2024, 2025, 2026] }] },
      { name: "Sierra", generations: [{ code: "T1", years: "2019–2026", yearList: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
    ],
  },
  {
    slug: "cadillac", name: "Cadillac", nameAr: "كاديلاك",
    models: [
      { name: "Escalade", generations: [{ code: "GMT1", years: "2021–2026", yearList: [2021, 2022, 2023, 2024, 2025, 2026] }] },
    ],
  },
  {
    slug: "genesis", name: "Genesis", nameAr: "جينيسيس",
    models: [
      { name: "G80", generations: [{ code: "RG3", years: "2021–2026", yearList: [2021, 2022, 2023, 2024, 2025, 2026] }] },
      { name: "GV80", generations: [{ code: "JX1", years: "2021–2026", yearList: [2021, 2022, 2023, 2024, 2025, 2026] }] },
    ],
  },
  {
    slug: "ford", name: "Ford", nameAr: "فورد",
    models: [
      { name: "Explorer", generations: [{ code: "U625", years: "2020–2026", yearList: [2020, 2021, 2022, 2023, 2024, 2025, 2026] }] },
      { name: "F-150", generations: [{ code: "P702", years: "2021–2026", yearList: [2021, 2022, 2023, 2024, 2025, 2026] }] },
    ],
  },
];

export interface Product {
  id: string;
  slug: string;
  name: string;
  brandSlug: string;
  brand: string;
  model: string;
  generation: string;
  years: string;
  yearList: number[];
  price: number;
  oldPrice: number;
  rating: number;
  reviewsCount: number;
  badge?: "الأكثر مبيعًا" | "Premium" | "جديد";
  stock: string;
  coverage: string;
  isNew?: boolean;
  soldCount?: number;
}

/** بيانات تجريبية — قابلة للاستبدال لاحقًا من مالك المتجر */
export const products: Product[] = [
  { id: "p1", slug: "mercedes-e-w213-premium", name: "شمسية أمامية Premium", brandSlug: "mercedes", brand: "Mercedes-Benz", model: "E-Class", generation: "W213", years: "2020–2023", yearList: [2020, 2021, 2022, 2023], price: 189, oldPrice: 229, rating: 4.8, reviewsCount: 127, badge: "الأكثر مبيعًا", stock: "متوفر", coverage: "تغطية كاملة", soldCount: 840 },
  { id: "p2", slug: "mercedes-e-w214-premium", name: "شمسية أمامية Premium", brandSlug: "mercedes", brand: "Mercedes-Benz", model: "E-Class", generation: "W214", years: "2024–2026", yearList: [2024, 2025, 2026], price: 199, oldPrice: 249, rating: 4.9, reviewsCount: 86, badge: "Premium", stock: "متوفر", coverage: "تغطية كاملة", isNew: true, soldCount: 310 },
  { id: "p3", slug: "bmw-5-g30-premium", name: "شمسية أمامية Premium", brandSlug: "bmw", brand: "BMW", model: "5 Series", generation: "G30", years: "2017–2023", yearList: [2017, 2018, 2019, 2020, 2021, 2022, 2023], price: 189, oldPrice: 229, rating: 4.7, reviewsCount: 143, badge: "الأكثر مبيعًا", stock: "متوفر", coverage: "تغطية كاملة", soldCount: 720 },
  { id: "p4", slug: "bmw-5-g60-premium", name: "شمسية أمامية Premium", brandSlug: "bmw", brand: "BMW", model: "5 Series", generation: "G60", years: "2024–2026", yearList: [2024, 2025, 2026], price: 199, oldPrice: 239, rating: 4.8, reviewsCount: 64, badge: "جديد", stock: "متوفر", coverage: "تغطية كاملة", isNew: true, soldCount: 190 },
  { id: "p5", slug: "lexus-es-premium", name: "شمسية أمامية Premium", brandSlug: "lexus", brand: "Lexus", model: "ES", generation: "XZ10", years: "2019–2026", yearList: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], price: 179, oldPrice: 219, rating: 4.8, reviewsCount: 211, badge: "الأكثر مبيعًا", stock: "متوفر", coverage: "تغطية كاملة", soldCount: 950 },
  { id: "p6", slug: "toyota-lc300-premium", name: "شمسية أمامية Premium", brandSlug: "toyota", brand: "Toyota", model: "Land Cruiser", generation: "J300", years: "2022–2026", yearList: [2022, 2023, 2024, 2025, 2026], price: 209, oldPrice: 259, rating: 4.9, reviewsCount: 178, badge: "Premium", stock: "متوفر", coverage: "تغطية كاملة", soldCount: 680 },
  { id: "p7", slug: "range-rover-l460-premium", name: "شمسية أمامية Premium", brandSlug: "range-rover", brand: "Range Rover", model: "Range Rover", generation: "L460", years: "2022–2026", yearList: [2022, 2023, 2024, 2025, 2026], price: 219, oldPrice: 269, rating: 4.7, reviewsCount: 92, stock: "كمية محدودة", coverage: "تغطية كاملة", soldCount: 340 },
  { id: "p8", slug: "porsche-cayenne-premium", name: "شمسية أمامية Premium", brandSlug: "porsche", brand: "Porsche", model: "Cayenne", generation: "E3", years: "2019–2026", yearList: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], price: 219, oldPrice: 259, rating: 4.8, reviewsCount: 58, badge: "Premium", stock: "متوفر", coverage: "تغطية كاملة", soldCount: 260 },
  { id: "p9", slug: "audi-a6-premium", name: "شمسية أمامية Premium", brandSlug: "audi", brand: "Audi", model: "A6", generation: "C8", years: "2019–2026", yearList: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], price: 189, oldPrice: 229, rating: 4.6, reviewsCount: 74, stock: "متوفر", coverage: "تغطية كاملة", soldCount: 290 },
  { id: "p10", slug: "genesis-g80-premium", name: "شمسية أمامية Premium", brandSlug: "genesis", brand: "Genesis", model: "G80", generation: "RG3", years: "2021–2026", yearList: [2021, 2022, 2023, 2024, 2025, 2026], price: 189, oldPrice: 229, rating: 4.7, reviewsCount: 49, badge: "جديد", stock: "متوفر", coverage: "تغطية كاملة", isNew: true, soldCount: 150 },
  { id: "p11", slug: "gmc-yukon-premium", name: "شمسية أمامية Premium", brandSlug: "gmc", brand: "GMC", model: "Yukon", generation: "GMT1", years: "2021–2026", yearList: [2021, 2022, 2023, 2024, 2025, 2026], price: 209, oldPrice: 249, rating: 4.7, reviewsCount: 66, stock: "متوفر", coverage: "تغطية كاملة", soldCount: 220 },
  { id: "p12", slug: "cadillac-escalade-premium", name: "شمسية أمامية Premium", brandSlug: "cadillac", brand: "Cadillac", model: "Escalade", generation: "GMT1", years: "2021–2026", yearList: [2021, 2022, 2023, 2024, 2025, 2026], price: 219, oldPrice: 259, rating: 4.8, reviewsCount: 41, stock: "متوفر", coverage: "تغطية كاملة", soldCount: 130 },
];

export interface DemoReview {
  id: string;
  name: string;
  car: string;
  rating: number;
  text: string;
  date: string;
}

/** تقييمات تجريبية لأغراض العرض فقط — ليست تقييمات حقيقية */
export const demoReviews: DemoReview[] = [
  { id: "r1", name: "محمد أحمد", car: "Mercedes E-Class 2023", rating: 5, text: "المقاس ممتاز والتغطية كاملة والخامة ممتازة. التركيب يأخذ أقل من دقيقة.", date: "2026-05-12" },
  { id: "r2", name: "سارة العتيبي", car: "Lexus ES 2024", rating: 5, text: "فرق واضح في حرارة المقصورة. الخامة فخمة والحواف مرتبة.", date: "2026-06-02" },
  { id: "r3", name: "عبدالله القحطاني", car: "Toyota Land Cruiser 2023", rating: 5, text: "تناسب الزجاج تمامًا حتى مع وجود الكاميرا الأمامية. التخزين سهل.", date: "2026-04-21" },
  { id: "r4", name: "نورة الشمري", car: "BMW 5 Series 2024", rating: 4, text: "جودة عالية وتغليف مرتب. أتمنى توفر ألوان إضافية للحقيبة.", date: "2026-07-08" },
  { id: "r5", name: "فهد الدوسري", car: "Range Rover 2023", rating: 5, text: "أفضل شمسية جربتها. ثابتة ولا تسقط مع الاهتزاز.", date: "2026-03-15" },
  { id: "r6", name: "ريم الحربي", car: "Audi A6 2022", rating: 5, text: "طلبت حسب الموديل ووصلت مطابقة تمامًا. الشحن كان سريعًا للرياض.", date: "2026-08-01" },
];

export const faqs = [
  { q: "هل الشمسية مناسبة لسيارتي؟", a: "نعم إذا اخترت الماركة والموديل والجيل والسنة من أداة «اختر سيارتك». كل منتج مصمم بمقاس زجاج محدد ولا نعرض لك إلا المنتجات المتوافقة. (محتوى تجريبي)" },
  { q: "كيف أتأكد من المقاس؟", a: "اختر سيارتك من الأعلى وستظهر لك صفحة التوافق: الماركة، الموديل، رمز الجيل (مثل W213)، وسنوات الصنع. طابقها مع بطاقة سيارتك." },
  { q: "هل تناسب السيارة التي تحتوي على كاميرا أمامية؟", a: "نعم، القصّات مصممة لتفادي منطقة الكاميرا والحساسات في معظم الموديلات الحديثة مع الحفاظ على تغطية كاملة." },
  { q: "هل يمكن استخدامها يوميًا؟", a: "نعم، مصممة للفرد والطي اليومي خلال ثوانٍ، وتأتي مع حقيبة تخزين تحفظها خلف المقعد أو في الصندوق." },
  { q: "كيف يتم تخزينها؟", a: "تُطوى بحركة دائرية بسيطة وتوضع في حقيبتها المرفقة. يوجد دليل تركيب مصور مع كل طلب." },
  { q: "هل يمكن استرجاع المنتج؟", a: "نعم وفق سياسة الاستبدال والاسترجاع (محتوى تجريبي قابل للتعديل من مالك المتجر). تواصل معنا عبر واتساب وسنساعدك." },
  { q: "كم مدة الشحن داخل السعودية؟", a: "الشحن لجميع مناطق المملكة. مدة الشحن وتكلفته وحالات الشحن المجاني تعرض في صفحة الشحن (محتوى تجريبي)." },
  { q: "هل الشمسية للزجاج الأمامي فقط؟", a: "نعم، هذا المنتج مخصص للزجاج الأمامي فقط بمقاس دقيق لكل موديل." },
];

export function discountPercent(p: Product) {
  return Math.round((1 - p.price / p.oldPrice) * 100);
}

export function formatSAR(n: number) {
  return `${n} ر.س`;
}
