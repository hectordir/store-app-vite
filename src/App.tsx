import ProductsList from "./pages/productList/Page";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/cartPage/Page";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/productPage/Page";
import BrandPage from "./pages/BrandPage";
import CategoryPage from "./pages/CategoryPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "./states/useCart";
import { useEmail } from "./states/useEmail";
import CheckoutPage from "./pages/checkoutPage/Page";

export function App() {
  const { syncCart } = useCart();
  const { setEmail } = useEmail();
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      syncCart(JSON.parse(cart));
    }
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductsPage />} />
        <Route path="/products/brand/:brand" element={<BrandPage />} />
        <Route path="/products/category/:category" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
