import { Route, Routes } from "react-router-dom";
import LayoutClient from "./components/layoutClient";
import CartPage from "./pages/clients/cart";
import HomeClient from "./pages/clients/homeClient";
import BlogPage from "./pages/clients/blog";
import CheckoutPage from "./pages/clients/checkout";
import ContactPage from "./pages/clients/contact";
import SingleProductPage from "./pages/clients/singleProduct";

function App() {
    return (
        <Routes>
            {/* Layout dành cho client */}
            <Route path="/" element={<LayoutClient />}>
                <Route index element={<HomeClient />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="detail" element={<SingleProductPage />} />
                <Route path="about" element={<h1>Giới thiệu</h1>} />
            </Route>
        </Routes>
    )
}

export default App
