/* eslint-disable react-hooks/exhaustive-deps */
import ProductsList from "./components/ProductsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductPage";
import BrandPage from "./pages/BrandPage";
import CategoryPage from "./pages/CategoryPage";
import { useEffect } from "react";
import { useCart } from "./state/useCart";
import { useEmail } from "./state/useEmail";

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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
