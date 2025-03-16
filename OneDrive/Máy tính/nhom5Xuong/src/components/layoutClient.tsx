import { Outlet } from "react-router-dom"
import FooterClient from "../pages/clients/footer"
import HeaderClient from "../pages/clients/header"
import BannerPage from "../pages/clients/banner"
import ContactMehod from "../pages/clients/contactmethod"

function LayoutClient() {
    return (
        <>
            <HeaderClient />
            <BannerPage />
            <main>
                <Outlet />
            </main>
            <ContactMehod />
            <FooterClient />
        </>
    )
}

export default LayoutClient
