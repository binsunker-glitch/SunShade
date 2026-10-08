import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { Car, ChevronDown, Heart, ShoppingCart } from "lucide-react";
import { brands, discountPercent, formatSAR, products, type Product } from "../data/vehicles";
import { ProductVisual, Stars, useStore } from "../store/store";

/* ---------- Vehicle Finder ---------- */
export function VehicleFinder({ compact = false }: { compact?: boolean }) {
  const { vehicle, setVehicle } = useStore();
  const nav = useNavigate();
  const brand = brands.find((b) => b.slug === vehicle.brandSlug);
  const model = brand?.models.find((m) => m.name === vehicle.model);
  const gen = model?.generations.find((g) => g.code === vehicle.generation);
  const ready = vehicle.brandSlug && vehicle.model && vehicle.generation && vehicle.year;

  const go = () => {
    if (!ready) return;
    const b = brand!.slug, m = vehicle.model.toLowerCase().replace(/[^a-z0-9]+/g, "-"), g = vehicle.generation.toLowerCase();
    nav(`/${b}/${encodeURIComponent(m)}/${g}/${vehicle.year}`);
  };

  const sel = "w-full rounded-lg border border-border bg-card py-3 pr-3 pl-8 text-[14px] font-medium outline-none focus:border-accent disabled:opacity-50";
  return (
    <section aria-label="اختر سيارتك" className={compact ? "" : "relative z-10"}>
      <div className="rounded-2xl border border-border bg-card p-5 card-shadow md:p-6">
        {!compact && (
          <div className="mb-4 flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-accent"><Car className="h-5 w-5" /></span>
            <div><h2 className="text-lg font-bold leading-6">اختر سيارتك</h2><p className="text-[13px] text-muted-foreground">اعثر على الشمسية المناسبة لسيارتك خلال ثوانٍ</p></div>
          </div>
        )}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="relative block"><span className="mb-1 block text-[12.5px] font-semibold text-muted-foreground">1 · ماركة السيارة</span>
            <select className={sel} value={vehicle.brandSlug} onChange={(e) => setVehicle({ brandSlug: e.target.value, model: "", generation: "", year: null })}>
              <option value="">اختر الماركة</option>{brands.map((b) => <option key={b.slug} value={b.slug}>{b.nameAr} · {b.name}</option>)}
            </select><ChevronDown className="pointer-events-none absolute left-3 bottom-3 h-4 w-4 text-muted-foreground" /></label>
          <label className="relative block"><span className="mb-1 block text-[12.5px] font-semibold text-muted-foreground">2 · الموديل</span>
            <select className={sel} disabled={!brand} value={vehicle.model} onChange={(e) => setVehicle({ model: e.target.value, generation: "", year: null })}>
              <option value="">اختر الموديل</option>{brand?.models.map((m) => <option key={m.name} value={m.name}>{m.name}</option>)}
            </select><ChevronDown className="pointer-events-none absolute left-3 bottom-3 h-4 w-4 text-muted-foreground" /></label>
          <label className="relative block"><span className="mb-1 block text-[12.5px] font-semibold text-muted-foreground">3 · الجيل / الفئة</span>
            <select className={sel} disabled={!model} value={vehicle.generation} onChange={(e) => setVehicle({ generation: e.target.value, year: null })}>
              <option value="">اختر الجيل</option>{model?.generations.map((g) => <option key={g.code} value={g.code}>{g.code} · {g.years}</option>)}
            </select><ChevronDown className="pointer-events-none absolute left-3 bottom-3 h-4 w-4 text-muted-foreground" /></label>
          <label className="relative block"><span className="mb-1 block text-[12.5px] font-semibold text-muted-foreground">4 · السنة</span>
            <select className={sel} disabled={!gen} value={vehicle.year ?? ""} onChange={(e) => setVehicle({ year: Number(e.target.value) })}>
              <option value="">اختر السنة</option>{gen?.yearList.map((y) => <option key={y} value={y}>{y}</option>)}
            </select><ChevronDown className="pointer-events-none absolute left-3 bottom-3 h-4 w-4 text-muted-foreground" /></label>
        </div>
        <button onClick={go} disabled={!ready} className="mt-4 w-full rounded-lg bg-primary py-3.5 text-[15px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">
          عرض الشمسيات المناسبة {ready ? `← ${brand?.nameAr} ${vehicle.model} ${vehicle.generation} ${vehicle.year}` : ""}
        </button>
        {!ready && <p className="mt-2 text-center text-[12.5px] text-muted-foreground">مثال: Mercedes-Benz ← E-Class ← W213 ← 2023</p>}
      </div>
    </section>
  );
}

/* ---------- Product Card ---------- */
export function ProductCard({ p }: { p: Product }) {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const wished = wishlist.includes(p.id);
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card card-shadow card-shadow-hover transition">
      <div className="relative">
        <Link to={`/product/${p.slug}`} aria-label={p.name}>
          <ProductVisual seed={p.slug} className="aspect-[4/3] w-full" />
        </Link>
        <div className="absolute right-2 top-2 flex flex-col gap-1.5">
          {p.badge && <span className={`rounded-md px-2 py-1 text-[11px] font-bold ${p.badge === "الأكثر مبيعًا" ? "bg-primary text-accent" : p.badge === "Premium" ? "bg-accent text-primary" : "bg-success text-white"}`}>{p.badge}</span>}
          <span className="rounded-md bg-destructive px-2 py-1 text-[11px] font-bold text-white">خصم {discountPercent(p)}%</span>
        </div>
        <button onClick={() => toggleWishlist(p.id)} aria-label="أضف للمفضلة" className={`absolute left-2 top-2 grid h-9 w-9 place-items-center rounded-full border border-border ${wished ? "bg-primary text-accent" : "bg-card text-foreground"}`}>
          <Heart className="h-4 w-4" fill={wished ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="text-[12px] font-semibold text-muted-foreground">{p.brand} {p.model} · {p.generation} · {p.years}</p>
        <Link to={`/product/${p.slug}`} className="font-bold leading-7 hover:text-secondary">{p.name} — {p.brand} {p.model}</Link>
        <div className="flex items-center gap-2 text-[12.5px]"><Stars value={p.rating} /><b>{p.rating}</b><span className="text-muted-foreground">({p.reviewsCount} تقييم)</span></div>
        <div className="flex items-baseline gap-2">
          <b className="text-[19px] text-primary">{formatSAR(p.price)}</b>
          <s className="text-[13px] text-muted-foreground">بدلًا من {formatSAR(p.oldPrice)}</s>
        </div>
        <p className={`text-[12.5px] font-semibold ${p.stock === "متوفر" ? "text-success" : "text-warning"}`}>● {p.stock} · {p.coverage}</p>
        <button onClick={() => addToCart(p.id)} className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-bold text-white hover:bg-secondary">
          <ShoppingCart className="h-4 w-4" /> أضف للسلة
        </button>
      </div>
    </article>
  );
}

/* ---------- Brand grid ---------- */
export function BrandGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {brands.slice(0, 10).map((b) => {
        const count = products.filter((p) => p.brandSlug === b.slug).length || b.models.length;
        return (
          <Link key={b.slug} to={`/brand/${b.slug}`} className="rounded-xl border border-border bg-card p-4 card-shadow card-shadow-hover transition">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-[18px] font-bold text-accent">{b.name.charAt(0)}</span>
            <b className="mt-2 block text-[14.5px]">{b.nameAr}</b>
            <small className="block text-[12px] text-muted-foreground">{b.name} · {count} موديلات متوفرة</small>
            <span className="mt-2 inline-block text-[12.5px] font-bold text-secondary">عرض الموديلات ←</span>
          </Link>
        );
      })}
    </div>
  );
}

/* ---------- SmartImage: real photo with SVG fallback ---------- */
export const IMG_FABRIC_LAYERS = "/images/fabric-4-layers.jpg";
export const IMG_ICE_CRYSTAL = "/images/ice-crystal-nano.jpg";

export function SmartImage({ src, alt, seed, className = "", eager = false }: { src: string; alt: string; seed: string; className?: string; eager?: boolean }) {
  const [err, setErr] = useState(false);
  if (err) return <ProductVisual seed={seed} className={className} />;
  return <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} onError={() => setErr(true)} className={`object-cover ${className}`} />;
}

/* ---------- Fabric technology section (uses the 2 supplier images) ---------- */
export function FabricTech() {
  const layers = [
    ["طبقة عاكسة بطلاء النانو الفضي", "Nano silver-coated reflective layer — تعكس أشعة الشمس عن الزجاج."],
    ["قماش 260T بكثافة أعلى", "نسيج كثيف يمنع نفاذ الحرارة والضوء."],
    ["طبقة مقاومة للأشعة فوق البنفسجية", "UV Rays Coating — حماية إضافية من الأشعة الضارة."],
    ["طبقة فضية عاكسة سفلية", "Silver reflective layer — تعزز العزل من الجهة الداخلية."],
  ];
  return (
    <section aria-label="تقنية القماش">
      <SectionHead title="خامة متقدمة بأربع طبقات" sub="صور توضيحية من المورّد — محتوى تجريبي" />
      <div className="grid gap-4 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-2xl border border-border bg-card card-shadow">
          <SmartImage src={IMG_FABRIC_LAYERS} alt="تصميم الشمسية بأربع طبقات: طبقة نانو فضية عاكسة وقماش 260T وطبقة حماية من الأشعة فوق البنفسجية" seed="fabric-layers" className="aspect-[4/3] w-full" />
          <figcaption className="border-t border-border px-4 py-2.5 text-[12.5px] text-muted-foreground">تصميم مطوّر من 4 طبقات + رسم يوضح الفرق بين القماش أحادي الطبقة والقماش النانوي (صورة المورّد).</figcaption>
        </figure>
        <div className="rounded-2xl border border-border bg-card p-5 card-shadow md:p-6">
          <h3 className="text-lg font-bold">ماذا تعني الطبقات الأربع؟</h3>
          <ul className="mt-3 grid gap-3">
            {layers.map(([t, d], i) => (
              <li key={t} className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-sm font-bold text-accent">{i + 1}</span>
                <span><b className="block text-[14.5px]">{t}</b><small className="block text-[13px] text-muted-foreground">{d}</small></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 grid gap-4 overflow-hidden rounded-2xl border border-border bg-card card-shadow lg:grid-cols-2">
        <SmartImage src={IMG_ICE_CRYSTAL} alt="تقنية النانو كريستال الثلجي لعكس الحرارة ومقاومة الأشعة فوق البنفسجية" seed="ice-crystal" className="aspect-[16/10] w-full" />
        <div className="flex flex-col justify-center p-5 md:p-6">
          <h3 className="text-lg font-bold">تصميم النانو كريستال الثلجي</h3>
          <p className="mt-1 text-[13.5px] text-muted-foreground">فعّالية عكس الحرارة ومقاومة الأشعة فوق البنفسجية — حسب النسب التوضيحية في صورة المورّد (محتوى تجريبي).</p>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {[["99%", "حجب الأشعة فوق البنفسجية"], ["99%", "العزل الحراري"], ["70%", "تقليل الحرارة"]].map(([n, l]) => (
              <div key={l} className="rounded-xl bg-muted/70 px-2 py-3"><b className="block text-xl text-primary">{n}</b><small className="text-[12px] text-muted-foreground">{l}</small></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */
export function SectionHead({ title, sub, link }: { title: string; sub?: string; link?: [string, string] }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <div><h2 className="text-[20px] font-bold md:text-2xl">{title}</h2>{sub && <p className="text-[13.5px] text-muted-foreground">{sub}</p>}</div>
      {link && <Link to={link[0]} className="shrink-0 rounded-lg border border-border bg-card px-3 py-1.5 text-[13px] font-semibold hover:border-accent">{link[1]}</Link>}
    </div>
  );
}

export function useFilteredProducts(opts: { sort?: string; brandSlug?: string; onlyDeals?: boolean; onlyBest?: boolean; q?: string; vehicleFilter?: boolean }) {
  const { vehicle } = useStore();
  return useMemo(() => {
    let list = [...products];
    if (opts.brandSlug) list = list.filter((p) => p.brandSlug === opts.brandSlug);
    if (opts.onlyDeals) list = list.filter((p) => discountPercent(p) >= 15);
    if (opts.onlyBest) list = list.filter((p) => p.badge === "الأكثر مبيعًا" || (p.soldCount ?? 0) > 300);
    if (opts.vehicleFilter && vehicle.brandSlug) {
      list = list.filter((p) =>
        (!vehicle.brandSlug || p.brandSlug === vehicle.brandSlug) &&
        (!vehicle.model || p.model === vehicle.model) &&
        (!vehicle.generation || p.generation === vehicle.generation) &&
        (!vehicle.year || p.yearList.includes(vehicle.year)));
    }
    if (opts.q) {
      const q = opts.q.trim().toLowerCase();
      if (q) list = list.filter((p) => `${p.brand} ${p.model} ${p.generation} ${p.years} ${p.name} شمسية`.toLowerCase().includes(q));
    }
    switch (opts.sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "new": list.sort((a, b) => Number(b.isNew ?? false) - Number(a.isNew ?? false)); break;
      default: list.sort((a, b) => (b.soldCount ?? 0) - (a.soldCount ?? 0));
    }
    return list;
  }, [opts.sort, opts.brandSlug, opts.onlyDeals, opts.onlyBest, opts.q, opts.vehicleFilter, vehicle]);
}

export function Breadcrumbs({ items }: { items: [string, string?][] }) {
  return (
    <nav aria-label="مسار التنقل" className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-muted-foreground">
      <Link to="/" className="hover:text-primary">الرئيسية</Link>
      {items.map(([label, to], i) => (
        <span key={i} className="flex items-center gap-1.5"><span>/</span>{to ? <Link to={to} className="hover:text-primary">{label}</Link> : <span className="font-semibold text-foreground">{label}</span>}</span>
      ))}
    </nav>
  );
}
