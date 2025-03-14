import { Outlet } from "react-router-dom"
import FooterClient from "../pages/client/footer"
import HeaderClient from "../pages/client/header"

function LayoutClient() {
    return (
        <>
            <main>
                <HeaderClient />
                <div>
                    <Outlet />
                </div>
                <FooterClient />
            </main>
        </>
    )
}

export default LayoutClient