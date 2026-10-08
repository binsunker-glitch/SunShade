import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "../data/vehicles";
import { products } from "../data/vehicles";

export interface VehicleSelection { brandSlug: string; model: string; generation: string; year: number | null; }
export interface CartItem { productId: string; qty: number; }

interface StoreCtx {
  vehicle: VehicleSelection;
  setVehicle: (v: Partial<VehicleSelection>) => void;
  resetVehicle: () => void;
  cart: CartItem[];
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  query: string;
  setQuery: (q: string) => void;
  cartDetailed: { product: Product; qty: number }[];
  subtotal: number;
}

const Ctx = createContext<StoreCtx | null>(null);

const emptyVehicle: VehicleSelection = { brandSlug: "", model: "", generation: "", year: null };

export function StoreProvider({ children }: { children: ReactNode }) {
  const [vehicle, setVehicleState] = useState<VehicleSelection>(() => {
    try { return { ...emptyVehicle, ...JSON.parse(localStorage.getItem("vehicle") || "{}") }; } catch { return emptyVehicle; }
  });
  const [cart, setCart] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("cart") || "[]"); } catch { return []; }
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("wishlist") || "[]"); } catch { return []; }
  });
  const [query, setQuery] = useState("");

  useEffect(() => { localStorage.setItem("vehicle", JSON.stringify(vehicle)); }, [vehicle]);
  useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("wishlist", JSON.stringify(wishlist)); }, [wishlist]);

  const setVehicle = (v: Partial<VehicleSelection>) => setVehicleState((s) => ({ ...s, ...v }));
  const resetVehicle = () => setVehicleState(emptyVehicle);
  const addToCart = (id: string, qty = 1) => setCart((c) => {
    const f = c.find((i) => i.productId === id);
    if (f) return c.map((i) => (i.productId === id ? { ...i, qty: Math.min(9, i.qty + qty) } : i));
    return [...c, { productId: id, qty }];
  });
  const removeFromCart = (id: string) => setCart((c) => c.filter((i) => i.productId !== id));
  const setQty = (id: string, qty: number) => setCart((c) => qty <= 0 ? c.filter((i) => i.productId !== id) : c.map((i) => (i.productId === id ? { ...i, qty } : i)));
  const clearCart = () => setCart([]);
  const toggleWishlist = (id: string) => setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]));

  const cartDetailed = useMemo(() => cart.map((i) => ({ product: products.find((p) => p.id === i.productId)!, qty: i.qty })).filter((x) => x.product), [cart]);
  const subtotal = cartDetailed.reduce((s, x) => s + x.product.price * x.qty, 0);

  return <Ctx.Provider value={{ vehicle, setVehicle, resetVehicle, cart, addToCart, removeFromCart, setQty, clearCart, wishlist, toggleWishlist, query, setQuery, cartDetailed, subtotal }}>{children}</Ctx.Provider>;
}

export function useStore() {
  const v = useContext(Ctx);
  if (!v) throw new Error("StoreProvider missing");
  return v;
}

/** SVG sunshade visual — premium product render placeholder (demo image) */
export function ProductVisual({ seed, className = "" }: { seed: string; className?: string }) {
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) % 997;
  const tilt = (h % 12) - 6;
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`} style={{ background: "linear-gradient(160deg,#EDEAE2 0%,#DAD5C9 55%,#C9C2B2 100%)" }} role="img" aria-label="صورة توضيحية للشمسية (تجريبية)">
      <svg viewBox="0 0 400 260" className="h-full w-full p-6" style={{ transform: `rotate(${tilt * 0.3}deg)` }}>
        <ellipse cx="200" cy="220" rx="130" ry="14" fill="rgba(15,31,46,.18)" />
        {/* windshield frame */}
        <path d="M60 210 L110 60 Q200 30 290 60 L340 210 Q200 236 60 210Z" fill="#0F1F2E" />
        <path d="M74 202 L118 70 Q200 44 282 70 L326 202 Q200 224 74 202Z" fill="#8FA3B8" />
        {/* sunshade fabric */}
        <path d="M80 198 L122 76 Q200 52 278 76 L320 198 Q200 218 80 198Z" fill="#F4F1EA" stroke="#B9B2A2" strokeWidth="2" />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1={105 + i * 32} y1={190 - i * 2} x2={132 + i * 26} y2={80} stroke="#D8D2C2" strokeWidth="5" />
        ))}
        <rect x="150" y="96" width="100" height="40" rx="6" fill="#0F1F2E" />
        <text x="200" y="122" textAnchor="middle" fill="#C8A96A" fontSize="17" fontWeight="700" fontFamily="IBM Plex Sans Arabic">Premium</text>
        <circle cx="200" cy="76" r="10" fill="#0F1F2E" />
        {/* side window hint */}
        <path d="M20 150 L48 140 L44 200 L18 196Z" fill="#22384F" opacity=".9" />
        <path d="M380 150 L352 140 L356 200 L382 196Z" fill="#22384F" opacity=".9" />
      </svg>
      <span className="absolute bottom-2 left-2 rounded bg-primary/80 px-2 py-0.5 text-[11px] text-white">صورة تجريبية</span>
    </div>
  );
}

export function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`التقييم ${value} من 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={i < Math.round(value) ? "#E8A33D" : "none"} stroke="#E8A33D" strokeWidth="1.5">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}
