import { Route, Routes } from "react-router-dom";
import LayoutClient from "./components/LayoutClient";
import CartPage from "./pages/client/client/cart";

function App() {
    return (
        <Routes>
            {/* Layout dành cho client */}
            <Route path="/" element={<LayoutClient />}>
                <Route index element={<h1>Trang Chủ</h1>} />
                <Route path="shop" element={<CartPage />} />
                <Route path="about" element={<h1>Giới thiệu</h1>} />
            </Route>
        </Routes>
    )
}

export default App
