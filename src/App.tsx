import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import LayoutClient from "./components/layoutClient";
import CartPage from "./pages/clients/cart";
import HomeClient from "./pages/clients/homeClient";
import BlogPage from "./pages/clients/blog";
import CheckoutPage from "./pages/clients/checkout";
import ContactPage from "./pages/clients/contact";
import SingleProductPage from "./pages/clients/singleProduct";
import ShopPage from "./pages/clients/shop";
import LayoutAdmin from "./components/layoutAdmin";
import ProductListPage from "./pages/admin/listProductAdmin";
import ProductList from "./pages/admin/listProductAdmin";
import ProductForm from "./pages/admin/addProduct";
import ProductEdit from "./pages/admin/updateProduct";
import SigninPage from "./pages/auth/signin";
import SignupPage from "./pages/auth/signup";

function App() {
    return (
        <Routes>
            {/* Layout dành cho client */}
            <Route path="/" element={<LayoutClient />}>
                <Route index element={<HomeClient />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="shop" element={<ShopPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="detail" element={<SingleProductPage />} />
                <Route path="about" element={<h1>Giới thiệu</h1>} />
                

                <Route path="login" element={<h1>Login</h1>} />
                <Route path="signin" element={<SigninPage />} />
                <Route path="signup" element={<SignupPage />} />
                <Route path="*" element={<h1>404 not found</h1>} />
            </Route>
                            <Route
                    path="admin"
                    element={
                        
                        <LayoutAdmin>
                            <Outlet />
                        </LayoutAdmin>
                        
                    }
            >
                <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="products">
                        <Route index element={<ProductList />} />
                        <Route path="add" element={<ProductForm />} />
                        
                        <Route path="edit/:id" element={<ProductEdit />} />
                    </Route>
                </Route>
                <Route path="*" element={<h1>404 Not Found</h1>} />
                    <Route path="products">
                        <Route index element={<ProductListPage />} />
                       
                    </Route>
                
        </Routes>
        
        
    )
}


export default App
