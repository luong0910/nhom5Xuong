import { Link } from "react-router-dom"

function FooterClient() {
    return (
        <>
            <footer className="bg-white py-12 px-24">
                <div className="container mx-auto grid grid-cols-4 gap-8 text-gray-600">
                    <div>
                        <h3 className="font-bold text-black text-lg mb-8">Funiro.</h3>
                        <p className="text-sm">
                            NHÓM 5 XƯỞNG BÁN TRÀ SỮA
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Links</h4>
                        <ul className="space-y-6 font-bold">
                            <li><Link to={'/'} className="hover:text-black">Home</Link></li>
                            <li><Link to={'#'} className="hover:text-black">Shop</Link></li>
                            <li><Link to={'#'} className="hover:text-black">About</Link></li>
                            <li><Link to={'#'} className="hover:text-black">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Help</h4>
                        <ul className="space-y-6 font-bold">
                            <li><a href="#" className="hover:text-black">Payment Options</a></li>
                            <li><a href="#" className="hover:text-black">Returns</a></li>
                            <li><a href="#" className="hover:text-black">Privacy Policies</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Newsletter</h4>
                        <form className="flex items-center">
                            <input type="email" placeholder="Enter Your Email Address" className="text-sm w-full placeholder-gray-500 border-b border-black" />
                            <button type="submit" className="text-black font-bold border-b border-black mb-1 ml-4">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>

                <div className="container text-center mx-auto mt-8 border-t border-gray-300 pt-8 ">
                    <p>Xưởng-Nhóm5</p>
                </div>
            </footer>
        </>
    )
}

export default FooterClient
