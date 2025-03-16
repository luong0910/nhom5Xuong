import { Route, Routes } from "react-router-dom";
import LayoutClient from "./components/layoutClient";
import CartPage from "./pages/clients/cart";
import HomeClient from "./pages/clients/homeClient";
import BlogPage from "./pages/clients/blog";

function App() {
    return (
        <Routes>
            {/* Layout dành cho client */}
            <Route path="/" element={<LayoutClient />}>
                <Route index element={<HomeClient />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="about" element={<h1>Giới thiệu</h1>} />
            </Route>
        </Routes>
    )
}

export default App
