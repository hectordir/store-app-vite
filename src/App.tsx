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

export function App() {
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
