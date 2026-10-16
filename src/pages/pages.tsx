import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, Camera, Check, ChevronDown, Minus, Plus, ShieldCheck, Snowflake, Sun, Trash2, Truck, Undo2, X } from "lucide-react";
import { useMemo, useState } from "react";
import { brands, demoReviews, discountPercent, faqs, formatSAR, products } from "../data/vehicles";
import { ProductVisual, Stars, useStore } from "../store/store";
import { Breadcrumbs, BrandGrid, FabricTech, IMG_FABRIC_LAYERS, IMG_ICE_CRYSTAL, ProductCard, SectionHead, SmartImage, VehicleFinder, useFilteredProducts } from "../components/shop";

/* ============ HOME ============ */
export function Home() {
  const best = useFilteredProducts({ sort: "best" }).slice(0, 8);
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(800px 400px at 80% 20%, #1E3A52 0%, transparent 60%), radial-gradient(600px 300px at 20% 90%, #C8A96A33 0%, transparent 60%)" }} />
        <div className="container-x relative grid gap-8 py-10 md:py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12.5px]"><Sun className="h-4 w-4 text-accent" /> مصممة حسب مقاس الزجاج لكل موديل</span>
            <h1 className="mt-4 text-[30px] font-bold leading-[1.5] md:text-[44px]">شمسية مصممة لسيارتك</h1>
            <p className="mt-3 max-w-xl text-[15px] leading-8 text-white/80">شمسيات سيارات Premium مصممة حسب مقاس الزجاج لكل موديل، لتوفير تغطية دقيقة وحماية أفضل من حرارة الشمس.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/finder" className="rounded-lg bg-accent px-7 py-3 font-bold text-primary">اختر سيارتك</Link>
              <Link to="/shop?sort=best" className="rounded-lg border border-white/30 px-7 py-3 font-bold hover:bg-white/10">الأكثر مبيعًا</Link>
            </div>
            <div className="mt-6 flex items-center gap-3 text-[13px] text-white/75">
              <Stars value={5} /><span><b className="text-white">4.8/5</b> · أكثر من 350 تقييم (بيانات تجريبية)</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/15">
            <ProductVisual seed="hero-mercedes" className="aspect-[16/10] w-full" />
            <div className="flex items-center justify-between bg-white px-4 py-3 text-foreground">
              <div className="text-[13px]"><b>Mercedes-Benz E-Class · W213</b><span className="block text-muted-foreground">تغطية كاملة للزجاج الأمامي</span></div>
              <Link to="/product/mercedes-e-w213-premium" className="rounded-lg bg-primary px-4 py-2 text-[13px] font-bold text-white">تسوق الآن ←</Link>
            </div>
          </div>
        </div>
        <div className="container-x relative pb-8"><VehicleFinder /></div>
      </section>

      {/* BRANDS */}
      <section className="container-x py-10">
        <SectionHead title="اختر ماركة سيارتك" sub="بيانات تجريبية — اختر الماركة لعرض الموديلات المتوافقة" link={["/shop", "عرض الكل"]} />
        <BrandGrid />
      </section>

      {/* BEST SELLERS */}
      <section className="border-y border-border bg-card">
        <div className="container-x py-10">
          <SectionHead title="الأكثر مبيعًا" sub="منتجات متوافقة حسب سيارتك — أسعار تجريبية" link={["/shop?sort=best", "عرض الكل"]} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{best.map((p) => <ProductCard key={p.id} p={p} />)}</div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="container-x py-12">
        <SectionHead title="مصممة لتناسب سيارتك بدقة" sub="أربع مزايا أساسية في كل شمسية" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["مقاس مخصص", "قصّ دقيق حسب رمز الجيل وسنة الصنع لكل موديل."],
            ["خامات Premium", "طبقة عاكسة للحرارة مع بطانة داخلية ناعمة."],
            ["تغطية كاملة للزجاج", "حواف ممتدة تمنع تسرب الشمس من الأطراف."],
            ["تركيب وتخزين سهل", "فرد وطي خلال ثوانٍ مع حقيبة مرفقة."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-border bg-card p-5 card-shadow"><ShieldCheck className="h-6 w-6 text-secondary" /><b className="mt-2 block">{t}</b><p className="text-[13.5px] text-muted-foreground">{d}</p></div>
          ))}
        </div>

        {/* comparison */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card card-shadow">
          <div className="border-b border-border px-5 py-4"><h3 className="text-lg font-bold">لماذا تختار شمسيتنا؟</h3><p className="text-[13px] text-muted-foreground">مقارنة توضيحية (محتوى تجريبي)</p></div>
          <div className="overflow-x-auto"><table className="w-full min-w-[520px] text-[14px]">
            <thead><tr className="bg-muted/60 text-right"><th className="px-5 py-3 font-semibold">الميزة</th><th className="px-5 py-3 font-semibold">شمسيتنا</th><th className="px-5 py-3 font-semibold">شمسية تقليدية</th></tr></thead>
            <tbody>
              {[["مقاس مخصص", "✓", "✕"], ["تغطية كاملة", "✓", "✕"], ["خامات عالية الجودة", "✓", "△"], ["مظهر فاخر", "✓", "✕"], ["مصممة حسب موديل السيارة", "✓", "✕"]].map(([f, a, b]) => (
                <tr key={f} className="border-t border-border"><td className="px-5 py-3 font-semibold">{f}</td>
                  <td className="px-5 py-3"><span className="inline-grid h-7 w-7 place-items-center rounded-full bg-success/15 font-bold text-success">{a}</span></td>
                  <td className="px-5 py-3"><span className="inline-grid h-7 w-7 place-items-center rounded-full bg-muted font-bold text-muted-foreground">{b}</span></td></tr>
              ))}
            </tbody>
          </table></div>
        </div>

        {/* before/after */}
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border"><div className="bg-muted px-5 py-3 font-bold">بدون شمسية — دخول مباشر للشمس</div><ProductVisual seed="before-no-shade" className="aspect-[16/9] opacity-80" /></div>
          <div className="overflow-hidden rounded-2xl border border-primary"><div className="bg-primary px-5 py-3 font-bold text-white">مع الشمسية — تغطية كاملة للزجاج</div><ProductVisual seed="after-with-shade" className="aspect-[16/9]" /></div>
        </div>
        <p className="mt-3 text-center text-[13px] font-bold">فرق واضح في تغطية الزجاج <span className="font-normal text-muted-foreground">(صور توضيحية تجريبية، بدون ادعاءات مبالغ فيها)</span></p>
      </section>

      {/* FABRIC TECH — supplier images */}
      <section className="border-y border-border bg-card">
        <div className="container-x py-10"><FabricTech /></div>
      </section>

      {/* REVIEWS preview */}
      <section className="border-y border-border bg-card"><div className="container-x py-10">
        <SectionHead title="ماذا يقول عملاؤنا؟" sub="تقييمات تجريبية لأغراض العرض فقط — ليست تقييمات حقيقية" link={["/reviews", "كل التقييمات"]} />
        <div className="mb-5 flex items-center gap-3"><b className="text-3xl">4.8 / 5</b><Stars value={5} size={18} /><span className="text-sm text-muted-foreground">أكثر من 350 تقييم</span></div>
        <div className="grid gap-3 md:grid-cols-3">{demoReviews.slice(0, 3).map((r) => <ReviewCard key={r.id} r={r} />)}</div>
      </div></section>

      {/* CUSTOMER PHOTOS preview */}
      <section className="container-x py-10">
        <SectionHead title="شاهدها على سيارات عملائنا" sub="صور تجريبية placeholder — تُستبدل بصور حقيقية لاحقًا" link={["/gallery", "معرض الصور"]} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {["Mercedes E-Class", "BMW 5 Series", "Lexus ES", "Range Rover", "Land Cruiser"].map((c) => (
            <div key={c} className="overflow-hidden rounded-xl border border-border bg-card"><ProductVisual seed={c} className="aspect-square" /><p className="px-3 py-2 text-[12.5px] font-bold">{c}</p></div>
          ))}
        </div>
      </section>

      {/* FAQ preview */}
      <section className="container-x pb-12">
        <SectionHead title="الأسئلة الشائعة" link={["/faq", "كل الأسئلة"]} />
        <FaqList limit={4} />
      </section>
    </div>
  );
}

export function ReviewCard({ r }: { r: { name: string; car: string; rating: number; text: string; date: string } }) {
  return (
    <article className="rounded-xl border border-border bg-card p-4 card-shadow">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-bold text-accent">{r.name.charAt(0)}</span>
        <div><b className="block text-[14px]">{r.name}</b><small className="text-[12px] text-muted-foreground">{r.car} · {r.date}</small></div>
      </div>
      <div className="mt-2"><Stars value={r.rating} /></div>
      <p className="mt-1 text-[14px] leading-7">"{r.text}"</p>
      <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-[11.5px] font-bold text-success"><Check className="h-3.5 w-3.5" /> شراء موثّق (تجريبي)</span>
    </article>
  );
}

export function FaqList({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const list = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="grid gap-2">
      {list.map((f, i) => (
        <div key={f.q} className="overflow-hidden rounded-xl border border-border bg-card">
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-right font-bold" aria-expanded={open === i}>
            {f.q}<ChevronDown className={`h-4 w-4 shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="border-t border-border px-4 py-3 text-[14px] leading-8 text-foreground/85">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

/* ============ FINDER PAGE ============ */
export function FinderPage() {
  return (
    <div className="container-x py-8">
      <Breadcrumbs items={[["اختر سيارتك"]]} />
      <h1 className="mt-2 text-2xl font-bold">اختر سيارتك</h1>
      <p className="text-muted-foreground">اعثر على الشمسية المناسبة لسيارتك خلال ثوانٍ — المسار: اختر السيارة ← الموديل ← السنة ← المنتجات المتوافقة</p>
      <div className="mt-4"><VehicleFinder /></div>
      <div className="mt-6"><SectionHead title="أو اختر الماركة مباشرة" /><BrandGrid /></div>
    </div>
  );
}

/* ============ SHOP ============ */
export function Shop() {
  const [params] = useSearchParams();
  const { query, setQuery, vehicle, resetVehicle } = useStore();
  const initialQ = params.get("q") ?? "";
  const sort = params.get("sort") ?? "best";
  const onlyDeals = params.get("filter") === "deals";
  const [localSort, setLocalSort] = useState(sort);
  const [maxPrice, setMaxPrice] = useState(269);
  const [minRating, setMinRating] = useState(0);
  const q = initialQ || query;
  const all = useFilteredProducts({ sort: localSort, onlyDeals, q, vehicleFilter: !!vehicle.brandSlug });
  const list = all.filter((p) => p.price <= maxPrice && p.rating >= minRating);
  const hasVehicle = !!vehicle.brandSlug;

  return (
    <div className="container-x py-8">
      <Breadcrumbs items={[["تسوق الشمسيات"]]} />
      <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
        <div><h1 className="text-2xl font-bold">{onlyDeals ? "العروض" : localSort === "best" && !initialQ ? "الأكثر مبيعًا" : "تسوق الشمسيات"}</h1>
          <p className="text-[13.5px] text-muted-foreground">{list.length} منتج · {hasVehicle ? `مفلتر حسب: ${vehicle.model} ${vehicle.generation} ${vehicle.year ?? ""}` : "اختر سيارتك لعرض المتوافق فقط"}</p></div>
        {hasVehicle && <button onClick={resetVehicle} className="flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-1.5 text-[13px] font-bold"><X className="h-4 w-4" /> إزالة فلتر السيارة</button>}
      </div>

      <div className="mt-4 grid gap-5 lg:grid-cols-[240px_1fr]">
        <aside className="h-fit rounded-xl border border-border bg-card p-4 lg:sticky lg:top-40" aria-label="الفلاتر">
          <b>الفلاتر</b>
          <div className="mt-3 border-t border-border pt-3">
            <small className="font-bold text-muted-foreground">البحث</small>
            <input value={q} onChange={(e) => setQuery(e.target.value)} placeholder="Mercedes E-Class 2023" className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent" />
            <div className="mt-2 flex flex-wrap gap-1.5 text-[11.5px]">{["Mercedes E-Class 2023", "شمسية BMW 5 Series", "Lexus ES 2024"].map((s) => <button key={s} onClick={() => setQuery(s)} className="rounded-full bg-muted px-2.5 py-1 hover:bg-border">{s}</button>)}</div>
          </div>
          <div className="mt-3 border-t border-border pt-3"><small className="font-bold text-muted-foreground">الماركة</small>
            <div className="mt-1.5 grid gap-1">{brands.map((b) => <Link key={b.slug} to={`/brand/${b.slug}`} className="rounded-md px-2 py-1.5 text-[13.5px] hover:bg-muted">{b.nameAr} · {b.name}</Link>)}</div></div>
          <div className="mt-3 border-t border-border pt-3"><small className="font-bold text-muted-foreground">السعر حتى {maxPrice} ر.س</small>
            <input type="range" min={150} max={269} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="mt-2 w-full accent-[#0F1F2E]" /></div>
          <div className="mt-3 border-t border-border pt-3"><small className="font-bold text-muted-foreground">التقييم</small>
            <div className="mt-1.5 flex gap-1.5">{[0, 4.5, 4.8].map((r) => <button key={r} onClick={() => setMinRating(r)} className={`rounded-md border px-2.5 py-1 text-[12.5px] font-bold ${minRating === r ? "border-primary bg-primary text-white" : "border-border"}`}>{r === 0 ? "الكل" : `${r}+`}</button>)}</div></div>
        </aside>
        <div>
          <div className="mb-3 flex items-center gap-2">
            <label className="text-[13px] font-semibold">الترتيب:</label>
            <select value={localSort} onChange={(e) => setLocalSort(e.target.value)} className="rounded-lg border border-border bg-card px-3 py-2 text-[13.5px] font-semibold">
              <option value="best">الأكثر مبيعًا</option><option value="rating">الأعلى تقييمًا</option>
              <option value="price-asc">السعر من الأقل للأعلى</option><option value="price-desc">السعر من الأعلى للأقل</option><option value="new">الأحدث</option>
            </select>
          </div>
          {list.length === 0 ? <div className="rounded-xl border border-border bg-card p-10 text-center"><b>لا توجد منتجات مطابقة</b><p className="text-sm text-muted-foreground">جرّب إزالة فلتر السيارة أو تغيير البحث.</p><Link to="/finder" className="mt-3 inline-block rounded-lg bg-primary px-5 py-2.5 font-bold text-white">اختر سيارتك</Link></div>
            : <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>}
        </div>
      </div>
    </div>
  );
}

/* ============ BRAND / VEHICLE ============ */
export function BrandPage() {
  const { slug } = useParams();
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return <div className="container-x py-16">الماركة غير موجودة</div>;
  const list = products.filter((p) => p.brandSlug === brand.slug);
  return (
    <div className="container-x py-8">
      <Breadcrumbs items={[[brand.nameAr, `/brand/${brand.slug}`]]} />
      <h1 className="mt-2 text-2xl font-bold">شمسيات {brand.nameAr} · {brand.name}</h1>
      <p className="text-muted-foreground">اختر الموديل ثم الجيل والسنة — مثال SEO: /{brand.slug}/e-class/w213/2023</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {brand.models.map((m) => (
          <div key={m.name} className="rounded-xl border border-border bg-card p-5 card-shadow">
            <b className="text-lg">{brand.name} {m.name}</b>
            <div className="mt-2 grid gap-2">{m.generations.map((g) => (
              <div key={g.code} className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-muted/60 px-3 py-2.5">
                <span className="text-[14px] font-bold">{g.code} · {g.years}</span>
                <span className="flex flex-wrap gap-1.5">{g.yearList.slice(0, 4).map((y) => <Link key={y} to={`/${brand.slug}/${m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/${g.code.toLowerCase()}/${y}`} className="rounded-md bg-card border border-border px-2.5 py-1 text-[12.5px] font-bold hover:border-accent">{y}</Link>)}{g.yearList.length > 4 && <span className="text-[12px] text-muted-foreground">+{g.yearList.length - 4}</span>}</span>
              </div>
            ))}</div>
          </div>
        ))}
      </div>
      <div className="mt-6"><SectionHead title={`منتجات ${brand.nameAr}`} /><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div></div>
    </div>
  );
}

export function VehiclePage() {
  const { brandSlug, modelSlug, genSlug, year: yearStr } = useParams();
  const brand = brands.find((b) => b.slug === brandSlug);
  const model = brand?.models.find((m) => m.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === modelSlug);
  const gen = model?.generations.find((g) => g.code.toLowerCase() === genSlug);
  const year = Number(yearStr);
  const list = products.filter((p) => p.brandSlug === brandSlug && (!gen || p.generation.toLowerCase() === genSlug) && (!year || p.yearList.includes(year)));
  if (!brand) return <div className="container-x py-16">السيارة غير موجودة</div>;
  return (
    <div className="container-x py-8">
      <Breadcrumbs items={[[brand.nameAr, `/brand/${brand.slug}`], [`${model?.name ?? ""} ${gen?.code ?? ""} ${year || ""}`]]} />
      <div className="mt-2 rounded-2xl bg-primary p-5 text-white md:p-6">
        <h1 className="text-xl font-bold md:text-2xl">شمسيات {brand.name} {model?.name} {gen?.code} {year || ""} — متوافقة 100%</h1>
        <p className="text-[13.5px] text-white/75">مقاس مخصص للزجاج الأمامي · تغطية كاملة · تركيب خلال ثوانٍ (بيانات تجريبية)</p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      {list.length === 0 && <p className="mt-4 rounded-xl border border-border bg-card p-6 text-center">لا توجد منتجات مطابقة لهذه السنة — <Link to="/finder" className="font-bold text-secondary">اختر سنة أخرى</Link></p>}
    </div>
  );
}

/* ============ PRODUCT ============ */
export function ProductPage() {
  const { slug } = useParams();
  const p = products.find((x) => x.slug === slug) ?? products[0];
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const [qty, setQtyLocal] = useState(1);
  const [img, setImg] = useState(0);
  const [full, setFull] = useState(false);
  const gallery = ["على خلفية بيضاء", "مركبة على السيارة", "قماش مقرب", "الحواف والخياطة", "التركيب", "مطوية", "التغليف", "صورة عميل (تجريبية)"];
  const jsonLd = { "@context": "https://schema.org", "@type": "Product", name: `شمسية أمامية مخصصة لـ ${p.brand} ${p.model} ${p.generation}`, aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviewsCount } };

  return (
    <div className="container-x py-8">
      <Breadcrumbs items={[[p.brand, `/brand/${p.brandSlug}`], [`${p.model} ${p.generation}`, `/${p.brandSlug}/${p.model.toLowerCase().replace(/[^a-z0-9]+/g, "-")}/${p.generation.toLowerCase()}/${p.yearList[0]}`], [p.name]]} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="mt-3 grid gap-6 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <button onClick={() => setFull(true)} className="block w-full" aria-label="تكبير الصورة"><ProductVisual seed={`${p.slug}-${img}`} className="aspect-[4/3] w-full" /></button>
            <p className="border-t border-border px-4 py-2 text-[12.5px] text-muted-foreground">{gallery[img]} · اضغط للتكبير · صورة تجريبية {img + 1}/8</p>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-2 sm:grid-cols-8">
            {gallery.map((g, i) => <button key={g} onClick={() => setImg(i)} aria-label={g} className={`overflow-hidden rounded-lg border-2 ${img === i ? "border-accent" : "border-border"}`}><ProductVisual seed={`${p.slug}-${i}`} className="aspect-square" /></button>)}
          </div>
        </div>
        <div>
          {p.badge && <span className="rounded-md bg-primary px-2.5 py-1 text-[12px] font-bold text-accent">{p.badge}</span>}
          <h1 className="mt-2 text-2xl font-bold leading-10">شمسية أمامية Premium لـ {p.brand === "Mercedes-Benz" ? "مرسيدس" : p.brand} {p.model} {p.generation}</h1>
          <div className="mt-1 rounded-lg bg-muted/70 px-3 py-2 text-[13.5px] font-semibold">التوافق: {p.brand} ← {p.model} ← {p.generation} ← {p.years} <span className="text-success">· متوافقة مع سيارتك ✓</span></div>
          <div className="mt-2 flex items-center gap-2"><Stars value={p.rating} size={16} /><b>{p.rating}</b><Link to="/reviews" className="text-[13px] text-secondary underline">{p.reviewsCount} تقييم</Link></div>
          <div className="mt-3 flex items-baseline gap-3"><b className="text-3xl text-primary">{formatSAR(p.price)}</b><s className="text-muted-foreground">{formatSAR(p.oldPrice)}</s><span className="rounded-md bg-destructive px-2 py-0.5 text-[12px] font-bold text-white">خصم {discountPercent(p)}%</span></div>
          <p className="mt-1 text-[13px] font-bold text-success">● {p.stock} — جاهز للشحن داخل السعودية</p>
          <ul className="mt-3 grid gap-1.5 text-[14px]">
            {[`مقاس مخصص لزجاج ${p.model} ${p.generation}`, "تغطية كاملة بدون فجوات", "خامات عاكسة Premium وخياطة محكمة", "تركيب خلال ثوانٍ + حقيبة تخزين"].map((b) => <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-success" />{b}</li>)}
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex items-center rounded-lg border border-border"><button onClick={() => setQtyLocal(Math.max(1, qty - 1))} className="p-2.5" aria-label="إنقاص"><Minus className="h-4 w-4" /></button><b className="w-8 text-center">{qty}</b><button onClick={() => setQtyLocal(Math.min(9, qty + 1))} className="p-2.5" aria-label="زيادة"><Plus className="h-4 w-4" /></button></div>
            <button onClick={() => addToCart(p.id, qty)} className="flex-1 rounded-lg bg-primary py-3 font-bold text-white">أضف للسلة</button>
            <button onClick={() => toggleWishlist(p.id)} aria-label="مفضلة" className={`grid h-12 w-12 place-items-center rounded-lg border border-border ${wishlist.includes(p.id) ? "bg-primary text-accent" : "bg-card"}`}>♡</button>
          </div>
          <Link to="/checkout" onClick={() => addToCart(p.id, qty)} className="mt-2 block rounded-lg bg-accent py-3 text-center font-bold text-primary">اشترِ الآن</Link>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[12px]">
            <span className="rounded-lg border border-border bg-card p-2.5"><Truck className="mx-auto h-4 w-4" />شحن داخل السعودية</span>
            <span className="rounded-lg border border-border bg-card p-2.5"><Undo2 className="mx-auto h-4 w-4" />استبدال واسترجاع</span>
            <span className="rounded-lg border border-border bg-card p-2.5"><Snowflake className="mx-auto h-4 w-4" />حماية من الحرارة</span>
          </div>
        </div>
      </div>

      {/* material */}
      <div className="mt-10">
        <SectionHead title="خامة الشمسية من الداخل" sub="صور توضيحية من المورّد — محتوى تجريبي" />
        <div className="grid gap-3 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card card-shadow">
            <SmartImage src={IMG_FABRIC_LAYERS} alt="طبقات قماش الشمسية الأربع" seed={`fabric-${p.slug}`} className="aspect-[4/3] w-full" />
            <figcaption className="border-t border-border px-4 py-2 text-[12.5px] font-semibold">تصميم مطوّر من 4 طبقات</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card card-shadow">
            <SmartImage src={IMG_ICE_CRYSTAL} alt="تقنية النانو كريستال الثلجي" seed={`ice-${p.slug}`} className="aspect-[4/3] w-full" />
            <figcaption className="border-t border-border px-4 py-2 text-[12.5px] font-semibold">تقنية النانو لعكس الحرارة والأشعة فوق البنفسجية</figcaption>
          </figure>
        </div>
      </div>

      {/* reviews on product */}
      <div className="mt-10"><SectionHead title="تقييمات هذا المنتج" sub="عينة تجريبية" link={["/reviews", "كل التقييمات"]} /><div className="grid gap-3 md:grid-cols-3">{demoReviews.slice(0, 3).map((r) => <ReviewCard key={r.id} r={r} />)}</div></div>

      {full && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4" onClick={() => setFull(false)} role="dialog" aria-label="عارض الصور">
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-card"><ProductVisual seed={`${p.slug}-${img}-full`} className="aspect-[16/10]" />
            <div className="flex items-center justify-between p-4"><span className="text-sm font-bold">{gallery[img]}</span><button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white">إغلاق ✕</button></div></div>
        </div>
      )}
    </div>
  );
}

/* ============ CART / CHECKOUT ============ */
export function CartPage() {
  const { cartDetailed, setQty, removeFromCart, subtotal } = useStore();
  const shipping = subtotal === 0 ? 0 : subtotal >= 300 ? 0 : 25;
  return (
    <div className="container-x py-8">
      <Breadcrumbs items={[["السلة"]]} />
      <h1 className="mt-2 text-2xl font-bold">سلة التسوق ({cartDetailed.reduce((s, i) => s + i.qty, 0)})</h1>
      {cartDetailed.length === 0 ? <div className="mt-4 rounded-xl border border-border bg-card p-10 text-center"><b>سلتك فارغة</b><p className="text-sm text-muted-foreground">اختر سيارتك أولًا لعرض الشمسيات المتوافقة.</p><Link to="/finder" className="mt-3 inline-block rounded-lg bg-primary px-6 py-2.5 font-bold text-white">اختر سيارتك</Link></div> : (
        <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-3">{cartDetailed.map(({ product: p, qty }) => (
            <div key={p.id} className="flex gap-3 rounded-xl border border-border bg-card p-3">
              <Link to={`/product/${p.slug}`}><ProductVisual seed={p.slug} className="h-24 w-32 rounded-lg" /></Link>
              <div className="flex-1">
                <b className="text-[14.5px]">{p.name} — {p.brand} {p.model}</b>
                <p className="text-[12.5px] text-muted-foreground">{p.brand} · {p.model} · {p.generation} · {p.years}</p>
                <div className="mt-1 flex items-center gap-2"><b>{formatSAR(p.price)}</b><s className="text-[12px] text-muted-foreground">{formatSAR(p.oldPrice)}</s></div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center rounded-lg border border-border"><button onClick={() => setQty(p.id, qty - 1)} className="p-1.5" aria-label="إنقاص"><Minus className="h-3.5 w-3.5" /></button><b className="w-7 text-center text-sm">{qty}</b><button onClick={() => setQty(p.id, qty + 1)} className="p-1.5" aria-label="زيادة"><Plus className="h-3.5 w-3.5" /></button></div>
                  <button onClick={() => removeFromCart(p.id)} className="flex items-center gap-1 text-[12.5px] text-destructive"><Trash2 className="h-3.5 w-3.5" /> حذف</button>
                  <button className="text-[12.5px] text-secondary">حفظ لاحقًا</button>
                </div>
              </div>
            </div>))}</div>
          <aside className="h-fit rounded-xl border border-border bg-card p-5 card-shadow lg:sticky lg:top-40">
            <b>ملخص الطلب</b>
            <div className="mt-3 space-y-2 text-[14px]"><div className="flex justify-between"><span>المجموع الفرعي</span><b>{formatSAR(subtotal)}</b></div>
              <div className="flex justify-between"><span>الشحن</span><b>{shipping === 0 ? "مجاني" : formatSAR(shipping)}</b></div>
              <div className="flex justify-between border-t border-border pt-2 text-[16px]"><span className="font-bold">الإجمالي</span><b className="text-primary">{formatSAR(subtotal + shipping)}</b></div></div>
            <Link to="/checkout" className="mt-4 block rounded-lg bg-primary py-3 text-center font-bold text-white">إتمام الطلب ←</Link>
            <p className="mt-2 text-center text-[12px] text-muted-foreground">شحن مجاني للطلبات فوق 300 ر.س (محتوى تجريبي)</p>
          </aside>
        </div>)}
    </div>
  );
}

export function CheckoutPage() {
  const { cartDetailed, subtotal, clearCart } = useStore();
  const [done, setDone] = useState(false);
  const shipping = subtotal >= 300 ? 0 : 25;
  if (done) return <div className="container-x py-16 text-center"><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success/15 text-3xl text-success">✓</span><h1 className="mt-4 text-2xl font-bold">شكرًا! تم استلام طلبك (تجريبي)</h1><p className="text-muted-foreground">رقم الطلب التجريبي: DEMO-2026-001 — هذه نسخة عرض فقط.</p><Link to="/" className="mt-4 inline-block rounded-lg bg-primary px-6 py-2.5 font-bold text-white">العودة للرئيسية</Link></div>;
  return (
    <div className="container-x py-8">
      <Breadcrumbs items={[["السلة", "/cart"], ["إتمام الطلب"]]} />
      <h1 className="mt-2 text-2xl font-bold">إتمام الطلب <span className="text-sm font-normal text-muted-foreground">(معاينة تجريبية — بدون دفع حقيقي)</span></h1>
      <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_320px]">
        <form className="grid gap-3 rounded-xl border border-border bg-card p-5" onSubmit={(e) => { e.preventDefault(); setDone(true); clearCart(); }}>
          <b>بيانات التوصيل داخل السعودية</b>
          <div className="grid gap-3 sm:grid-cols-2">
            <input required placeholder="الاسم الكامل" className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm" />
            <input required placeholder="الجوال 05xxxxxxxx" className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm" />
            <input required placeholder="المدينة (الرياض، جدة...)" className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm" />
            <input placeholder="الحي / الرمز البريدي" className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm" />
          </div>
          <input required placeholder="العنوان التفصيلي" className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm" />
          <b className="mt-2">الدفع</b>
          <div className="grid gap-2 text-sm">{["مدى / بطاقة ائتمانية (تجريبي)", "Apple Pay (تجريبي)", "الدفع عند الاستلام (تجريبي)"].map((m, i) => <label key={m} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5"><input type="radio" name="pay" defaultChecked={i === 0} />{m}</label>)}</div>
          <button className="rounded-lg bg-primary py-3 font-bold text-white">تأكيد الطلب · {formatSAR(subtotal + shipping)}</button>
        </form>
        <aside className="h-fit rounded-xl border border-border bg-card p-5"><b>طلبك ({cartDetailed.length})</b>
          <div className="mt-2 space-y-2 text-[13.5px]">{cartDetailed.map(({ product: p, qty }) => <div key={p.id} className="flex justify-between gap-2"><span className="line-clamp-2">{p.brand} {p.model} × {qty}</span><b>{formatSAR(p.price * qty)}</b></div>)}</div>
          <div className="mt-3 border-t border-border pt-2 text-sm"><div className="flex justify-between"><span>الشحن</span><b>{shipping === 0 ? "مجاني" : formatSAR(shipping)}</b></div><div className="mt-1 flex justify-between text-[16px]"><b>الإجمالي</b><b>{formatSAR(subtotal + shipping)}</b></div></div></aside>
      </div>
    </div>
  );
}

/* ============ CONTENT PAGES ============ */
export function ReviewsPage() {
  return (
    <div className="container-x py-8">
      <Breadcrumbs items={[["التقييمات"]]} />
      <h1 className="mt-2 text-2xl font-bold">ماذا يقول عملاؤنا؟</h1>
      <p className="text-muted-foreground">تقييمات تجريبية لأغراض العرض فقط.</p>
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-border bg-card p-4"><b className="text-4xl">4.8</b><div><Stars value={5} size={18} /><p className="text-[13px] text-muted-foreground">★★★★★ · أكثر من 350 تقييم</p></div></div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">{demoReviews.map((r) => <ReviewCard key={r.id} r={r} />)}</div>
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [] })}</script>
    </div>
  );
}

export function GalleryPage() {
  const cars = useMemo(() => [["Mercedes E-Class", "e1"], ["BMW 5 Series", "b1"], ["Lexus ES", "l1"], ["Range Rover", "r1"], ["Land Cruiser", "t1"], ["Porsche Cayenne", "p1"], ["Audi A6", "a1"], ["Genesis G80", "g1"]], []);
  return (
    <div className="container-x py-8">
      <Breadcrumbs items={[["صور العملاء"]]} />
      <h1 className="mt-2 flex items-center gap-2 text-2xl font-bold"><Camera className="h-6 w-6" /> شاهدها على سيارات عملائنا</h1>
      <p className="text-muted-foreground">صور placeholder تجريبية — تُستبدل بصور حقيقية لاحقًا.</p>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">{cars.map(([c, s]) => <div key={s} className="overflow-hidden rounded-xl border border-border bg-card"><ProductVisual seed={s} className="aspect-square" /><p className="px-3 py-2 text-[13px] font-bold">{c}</p></div>)}</div>
    </div>
  );
}

export function CarsPage() {
  const cars: [string, string, string, string][] = [
    ["تويوتا", "لاند كروزر", "SUV", "دفع رباعي فاخر"],
    ["تويوتا", "كامري", "سيدان", "عائلية"],
    ["لكزس", "LX", "SUV", "فاخرة"],
    ["مرسيدس-بنز", "E-Class", "سيدان", "فاخرة"],
    ["بي إم دبليو", "الفئة الخامسة", "سيدان", "فاخرة"],
    ["هيونداي", "سوناتا", "سيدان", "عائلية"],
    ["نيسان", "باترول", "SUV", "دفع رباعي"],
    ["فورد", "إكسبلورر", "SUV", "عائلية"],
    ["جي إم سي", "يوكن", "SUV", "كبيرة"],
    ["تويوتا", "هايلكس", "بيك أب", "عملية"],
  ];
  return (
    <div className="container-x max-w-4xl py-8">
      <Breadcrumbs items={[["قائمة السيارات"]]} />
      <h1 className="mt-2 text-2xl font-bold md:text-3xl">ظل سيارتي</h1>
      <p className="font-bold text-accent">قائمة السيارات وأنواعها</p>
      <p className="mt-1 text-[14px] text-muted-foreground">عشر سيارات شائعة في السوق السعودي مرتبة حسب الماركة والموديل ونوع الهيكل.</p>
      <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card card-shadow">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-[14px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-4 py-3 font-bold">#</th>
                <th className="px-4 py-3 font-bold">الماركة</th>
                <th className="px-4 py-3 font-bold">الموديل</th>
                <th className="px-4 py-3 font-bold">نوع الهيكل</th>
                <th className="px-4 py-3 font-bold">الفئة</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(([brand, model, body, cls], i) => (
                <tr key={i} className={`border-t border-border ${i % 2 === 1 ? "bg-muted/50" : ""}`}>
                  <td className="px-4 py-3 text-center font-bold">{i + 1}</td>
                  <td className="px-4 py-3 text-center font-bold">{brand}</td>
                  <td className="px-4 py-3 text-center">{model}</td>
                  <td className="px-4 py-3 text-center">{body}</td>
                  <td className="px-4 py-3 text-center text-muted-foreground">{cls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-3 text-[13px] text-muted-foreground">ملاحظة: قائمة تعريفية عامة، ويُنصح بتحديد سنة الصنع بدقة عند اختيار مقاس الشمسية.</p>
      <Link to="/finder" className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 font-bold text-white">اختر سيارتك لعرض الشمسية المناسبة ←</Link>
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", name: "قائمة السيارات وأنواعها — ظل سيارتي", itemListElement: cars.map(([brand, model], i) => ({ "@type": "ListItem", position: i + 1, name: `${brand} ${model}` })) })}</script>
    </div>
  );
}

export function InfoPages({ page }: { page: string }) {
  if (page === "faq") return <div className="container-x max-w-3xl py-8"><Breadcrumbs items={[["الأسئلة الشائعة"]]} /><h1 className="mt-2 text-2xl font-bold">الأسئلة الشائعة</h1><div className="mt-4"><FaqList /></div><script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) })}</script></div>;
  if (page === "shipping") return (
    <div className="container-x max-w-3xl py-8"><Breadcrumbs items={[["الشحن والاسترجاع"]]} />
      <h1 className="mt-2 text-2xl font-bold">الشحن داخل السعودية</h1>
      <p className="mt-1 text-muted-foreground">معلومات تجريبية — يستبدلها مالك المتجر بالسياسة النهائية.</p>
      <div className="mt-4 grid gap-3">
        <div className="rounded-xl border border-border bg-card p-5"><b>شحن لجميع مناطق المملكة</b><p className="text-sm text-muted-foreground">الرياض، جدة، الدمام، مكة، المدينة وجميع المناطق.</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">{[["مدة الشحن", "2–5 أيام عمل (تجريبي)"], ["تكلفة الشحن", "25 ر.س (تجريبي)"], ["الشحن المجاني", "للطلبات فوق 300 ر.س"]].map(([t, d]) => <div key={t} className="rounded-lg bg-muted/60 p-3"><b className="block text-[13px]">{t}</b><span className="text-[13px]">{d}</span></div>)}</div></div>
        <div className="rounded-xl border border-border bg-card p-5"><b>الاستبدال والاسترجاع</b><p className="mt-1 text-sm leading-8 text-foreground/85">سياسة تجريبية قابلة للتعديل: يمكنك طلب الاستبدال أو الاسترجاع خلال المدة المحددة بحالته الأصلية. إن كان المقاس غير مطابق لسيارتك المختارة نساعدك في الاستبدال. تواصل عبر واتساب لبدء الطلب.</p>
          <Link to="/faq" className="mt-2 inline-flex items-center gap-1 font-bold text-secondary">الأسئلة الشائعة <ArrowLeft className="h-4 w-4" /></Link></div>
      </div></div>);
  if (page === "about") return <div className="container-x max-w-3xl py-8"><Breadcrumbs items={[["من نحن"]]} /><h1 className="mt-2 text-2xl font-bold">من نحن</h1><div className="mt-3 rounded-xl border border-border bg-card p-6 leading-9">ظل سيارتي علامة سعودية متخصصة في شمسيات الزجاج الأمامي بمقاس كل موديل. رحلتنا: اختر السيارة ← الموديل ← السنة ← المنتج المتوافق ← الجودة ← التقييمات ← السلة ← الطلب. جميع محتويات هذا النموذج تجريبية.</div></div>;
  if (page === "wishlist") return <WishlistPage />;
  return <div className="container-x py-8"><h1 className="text-2xl font-bold">حسابي (تجريبي)</h1><p className="text-muted-foreground">تسجيل الدخول والطلبات — واجهة عرض فقط في هذا النموذج.</p><div className="mt-4 grid gap-2 rounded-xl border border-border bg-card p-5"><input placeholder="البريد أو الجوال" className="rounded-lg border border-border px-3 py-2.5 text-sm" /><input placeholder="كلمة المرور" type="password" className="rounded-lg border border-border px-3 py-2.5 text-sm" /><button className="rounded-lg bg-primary py-2.5 font-bold text-white">دخول</button></div></div>;
}

function WishlistPage() {
  const { wishlist, toggleWishlist } = useStore();
  const list = products.filter((p) => wishlist.includes(p.id));
  return (
    <div className="container-x py-8"><Breadcrumbs items={[["المفضلة"]]} /><h1 className="mt-2 text-2xl font-bold">المفضلة ({list.length})</h1>
      {list.length === 0 ? <p className="mt-4 rounded-xl border border-border bg-card p-8 text-center text-muted-foreground">لا عناصر بعد — تصفح <Link to="/shop" className="font-bold text-secondary">المنتجات</Link></p>
        : <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>}</div>);
}
