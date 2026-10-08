import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { StoreProvider } from "./store/store";
import { BottomNav, Footer, Header, TopBar, TrustBar, WhatsFloat } from "./components/chrome";
import { BrandPage, CartPage, CheckoutPage, FinderPage, GalleryPage, Home, InfoPages, ProductPage, ReviewsPage, Shop, VehiclePage } from "./pages/pages";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <ScrollTop />
        <a href="#main" className="sr-only">╪ز╪«╪╖┘┘ّ ╪ح┘┘ë ╪د┘┘à╪ص╪ز┘ê┘ë</a>
        <TopBar />
        <Header />
        <main id="main" className="min-h-[60vh] pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<><Home /><TrustBar /></>} />
            <Route path="/finder" element={<FinderPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/brand/:slug" element={<BrandPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<InfoPages page="faq" />} />
            <Route path="/shipping" element={<InfoPages page="shipping" />} />
            <Route path="/about" element={<InfoPages page="about" />} />
            <Route path="/wishlist" element={<InfoPages page="wishlist" />} />
            <Route path="/account" element={<InfoPages page="account" />} />
            <Route path="/:brandSlug/:modelSlug/:genSlug/:year" element={<VehiclePage />} />
            <Route path="*" element={<FinderPage />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
        <WhatsFloat />
      </HashRouter>
    </StoreProvider>
  );
}
