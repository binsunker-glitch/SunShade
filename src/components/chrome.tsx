import { Link, useNavigate } from "react-router-dom";
import { Car, Heart, Menu, MessageCircle, Search, ShoppingCart, User, X, Ruler, BadgeCheck, Truck, Star } from "lucide-react";
import { useState } from "react";
import { useStore } from "../store/store";
import { brands } from "../data/vehicles";

export function TopBar() {
  return (
    <div className="bg-primary text-[12.5px] text-white/85">
      <div className="container-x flex items-center justify-between py-1.5">
        <p>شحن داخل السعودية · مقاس مطابق لسيارتك <span className="text-accent font-semibold">— بيانات تجريبية</span></p>
        <div className="hidden gap-4 sm:flex">
          <Link to="/shipping" className="hover:text-white">الشحن والاسترجاع</Link>
          <Link to="/faq" className="hover:text-white">الأسئلة الشائعة</Link>
          <span>العربية · ر.س</span>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { cart, wishlist, query, setQuery } = useStore();
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const count = cart.reduce((s, i) => s + i.qty, 0);

  const submit = (e: React.FormEvent) => { e.preventDefault(); nav(`/shop?q=${encodeURIComponent(query)}`); setOpen(false); };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card">
      <div className="container-x flex items-center gap-3 py-3">
        <Link to="/" className="flex items-center gap-2" aria-label="ظل سيارتي - الرئيسية">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary">
            <svg viewBox="0 0 100 100" className="h-6 w-6"><path d="M20 62 Q50 18 80 62" stroke="#C8A96A" strokeWidth="9" fill="none" strokeLinecap="round" /><rect x="22" y="68" width="56" height="9" rx="4.5" fill="#C8A96A" /></svg>
          </span>
          <span className="leading-tight">
            <span className="block text-[17px] font-bold text-foreground">ظل سيارتي</span>
            <span className="block text-[11.5px] text-muted-foreground">شمسيات بمقاس سيارتك</span>
          </span>
        </Link>

        <form onSubmit={submit} className="hidden flex-1 items-center md:flex" role="search">
          <div className="relative w-full">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ابحث عن سيارتك أو موديل الشمسية..." className="w-full rounded-lg border border-border bg-background py-2.5 pr-10 pl-24 text-sm outline-none focus:border-accent" />
            <button className="absolute left-1.5 top-1/2 -translate-y-1/2 rounded-md bg-primary px-4 py-1.5 text-sm text-white">بحث</button>
          </div>
        </form>

        <nav className="mr-auto hidden items-center gap-1 text-sm md:flex" aria-label="حساب">
          <Link to="/finder" className="flex items-center gap-1.5 rounded-lg px-3 py-2 hover:bg-muted"><Car className="h-4 w-4" /> اختر سيارتك</Link>
          <Link to="/wishlist" className="relative flex items-center gap-1.5 rounded-lg px-3 py-2 hover:bg-muted"><Heart className="h-4 w-4" /> المفضلة {wishlist.length > 0 && <b className="grid h-5 w-5 place-items-center rounded-full bg-accent text-[11px] text-primary">{wishlist.length}</b>}</Link>
          <Link to="/account" className="flex items-center gap-1.5 rounded-lg px-3 py-2 hover:bg-muted"><User className="h-4 w-4" /> حسابي</Link>
          <Link to="/cart" className="relative flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 font-semibold text-white"><ShoppingCart className="h-4 w-4" /> السلة {count > 0 && <b className="grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[11px] text-primary">{count}</b>}</Link>
        </nav>

        <div className="mr-auto flex items-center gap-1 md:hidden">
          <Link to="/cart" className="relative rounded-lg p-2.5 hover:bg-muted" aria-label="السلة"><ShoppingCart className="h-5 w-5" />{count > 0 && <b className="absolute -left-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] text-primary">{count}</b>}</Link>
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2.5 hover:bg-muted" aria-label="القائمة">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>

      <form onSubmit={submit} className="border-t border-border px-4 pb-3 pt-2 md:hidden" role="search">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ابحث عن سيارتك أو موديل الشمسية..." className="w-full rounded-lg border border-border bg-background py-2.5 pr-10 pl-4 text-sm outline-none focus:border-accent" />
        </div>
      </form>

      <nav className="hidden border-t border-border md:block" aria-label="التنقل الرئيسي">
        <div className="container-x flex items-center gap-1 py-1 text-[14px] font-medium">
          {[["/", "الرئيسية"], ["/finder", "اختر سيارتك"], ["/shop", "السيارات"], ["/shop?sort=best", "الأكثر مبيعًا"], ["/shop?filter=deals", "العروض"], ["/reviews", "التقييمات"], ["/cars", "قائمة السيارات"], ["/about", "من نحن"]].map(([to, l]) => (
            <Link key={l} to={to} className="rounded-md px-3 py-2 hover:bg-muted hover:text-primary">{l}</Link>
          ))}
        </div>
      </nav>

      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 text-[15px] md:hidden" aria-label="قائمة الجوال">
          <div className="grid gap-1">
            {[["/", "الرئيسية"], ["/finder", "اختر سيارتك"], ["/shop", "السيارات"], ["/shop?sort=best", "الأكثر مبيعًا"], ["/shop?filter=deals", "العروض"], ["/reviews", "التقييمات"], ["/cars", "قائمة السيارات"], ["/gallery", "صور العملاء"], ["/faq", "الأسئلة الشائعة"], ["/shipping", "الشحن والاسترجاع"], ["/wishlist", "المفضلة"], ["/account", "حسابي"], ["/about", "من نحن"]].map(([to, l]) => (
              <Link key={l} to={to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 hover:bg-muted">{l}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function TrustBar() {
  const items = [
    { icon: Ruler, t: "مقاس مطابق للسيارة", d: "حسب الموديل والجيل والسنة" },
    { icon: BadgeCheck, t: "خامات عالية الجودة", d: "طبقات عاكسة وخياطة محكمة" },
    { icon: Truck, t: "شحن داخل السعودية", d: "لجميع مناطق المملكة" },
    { icon: Star, t: "تقييمات العملاء", d: "4.8 من 5 (بيانات تجريبية)" },
  ];
  return (
    <section className="border-y border-border bg-card" aria-label="لماذا نحن">
      <div className="container-x grid grid-cols-2 gap-3 py-4 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.t} className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted text-primary"><it.icon className="h-5 w-5" /></span>
            <span><b className="block text-[13.5px]">{it.t}</b><small className="block text-[12px] text-muted-foreground">{it.d}</small></span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BottomNav() {
  const { cart, wishlist } = useStore();
  const items = [
    { to: "/", label: "الرئيسية", icon: "⌂" },
    { to: "/finder", label: "اختر سيارتك", icon: "▣" },
    { to: "/wishlist", label: "المفضلة", icon: "♡", n: wishlist.length },
    { to: "/cart", label: "السلة", icon: "◩", n: cart.reduce((s, i) => s + i.qty, 0) },
    { to: "/account", label: "حسابي", icon: "○" },
  ];
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-card pb-[env(safe-area-inset-bottom)] md:hidden" aria-label="التنقل السفلي">
      <div className="grid grid-cols-5">
        {items.map((it) => (
          <Link key={it.label} to={it.to} className="relative flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium text-foreground/80">
            <span className="text-[18px] leading-none">{it.icon}</span>{it.label}
            {!!it.n && <b className="absolute top-1 left-1/2 ml-3 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[10px] text-primary">{it.n}</b>}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function WhatsFloat() {
  return (
    <a href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9%20%D9%81%D9%8A%20%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1%20%D8%B4%D9%85%D8%B3%D9%8A%D8%A9%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%D8%A9%20%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%AA%D9%8A." target="_blank" rel="noreferrer"
      className="fixed bottom-20 left-4 z-40 flex items-center gap-2 rounded-full bg-[#1FA855] py-3 pl-5 pr-4 text-sm font-semibold text-white card-shadow md:bottom-6" aria-label="تواصل واتساب">
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">هل تحتاج مساعدة في اختيار المقاس؟</span>
      <span className="sm:hidden">واتساب</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="container-x grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <b className="text-lg text-white">ظل سيارتي</b>
          <p className="mt-2 text-[13.5px] leading-7">شمسيات Premium بمقاس الزجاج لكل موديل. المملكة العربية السعودية. جميع البيانات والأسعار والتقييمات تجريبية للعرض.</p>
        </div>
        <div><b className="text-white">روابط سريعة</b><ul className="mt-3 space-y-2 text-[13.5px]">{[["/", "الرئيسية"], ["/finder", "اختر سيارتك"], ["/shop?sort=best", "الأكثر مبيعًا"], ["/reviews", "التقييمات"], ["/gallery", "صور العملاء"], ["/cars", "قائمة السيارات"], ["/about", "من نحن"]].map(([t, l]) => <li key={l}><Link className="hover:text-white" to={t}>{l}</Link></li>)}</ul></div>
        <div><b className="text-white">السيارات</b><ul className="mt-3 space-y-2 text-[13.5px]">{brands.slice(0, 6).map((b) => <li key={b.slug}><Link className="hover:text-white" to={`/brand/${b.slug}`}>{b.nameAr} · {b.name}</Link></li>)}</ul></div>
        <div><b className="text-white">خدمة العملاء</b><ul className="mt-3 space-y-2 text-[13.5px]">{[["/faq", "الأسئلة الشائعة"], ["/shipping", "الشحن والاسترجاع"], ["/cart", "السلة"], ["/checkout", "إتمام الطلب"]].map(([t, l]) => <li key={l}><Link className="hover:text-white" to={t}>{l}</Link></li>)}</ul></div>
        <div><b className="text-white">تواصل معنا</b><ul className="mt-3 space-y-2 text-[13.5px]"><li>واتساب: ‎+966 50 000 0000</li><li>البريد: care@example.sa</li><li>الرياض، المملكة العربية السعودية</li><li className="flex gap-2 pt-1">{["X", "Instagram", "TikTok", "YouTube"].map((s) => <span key={s} className="rounded-md bg-white/10 px-2.5 py-1 text-[12px]">{s}</span>)}</li></ul></div>
      </div>
      <div className="border-t border-white/10"><div className="container-x flex flex-col gap-1 py-4 text-[12.5px] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 ظل سيارتي — نموذج تجريبي، جميع المحتويات قابلة للاستبدال.</span><span>/mercedes/e-class/w213/2023 — روابط SEO تجريبية</span></div></div>
    </footer>
  );
}
