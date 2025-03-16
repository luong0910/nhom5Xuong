import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderClient() {
    return (
        <>
            <nav className="flex justify-between items-center py-4 px-8 shadow-sm">
                <div className="flex items-center">
                    <Link to={'/'} className="flex items-center">
                        <img src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YnLpv-owU2TvQvRRvGTEYd4v--WctP0yP15VuEjXTry25KW5Y6O4o~AcGk48gS6G03GUy~HbLjyqpcKyiTrC~wdVbf83hw8-I9bWZ2hAr~L50gRCj7wttOt-tuq62tk-qApQsUR3wM~pSd9dq8snoU8ywY00wLdAPFkUHbdV6Qbx79GBOyncu8sfwIm14~pGyj1S0tOqHRBlh1LvbZGIW-POC75Osl64-zpYmxVuuVAI3xviX-YID~6suMidfavh3rMIWSoEkOE6n9nSJWYwyUFc~nvByfbjDBt5XniRIznmNYSRJii21iYP2f-zXO6gftIHF2s3CQLeaI8s6~2GKQ__" width={60} alt="Logo" />
                        <span className="text-xl font-bold ml-2">Furniro</span>
                    </Link>
                </div>
        
                <ul className="flex space-x-6 text-lg">
                    <Link to={'/'}><li className="hover:text-gray-600 cursor-pointer">Home</li></Link>
                    <Link to={'#'}><li className="hover:text-gray-600 cursor-pointer">Shop</li></Link>
                    <Link to={'#'}><li className="hover:text-gray-600 cursor-pointer">About</li></Link>
                    <Link to={'#'}><li className="hover:text-gray-600 cursor-pointer">Contact</li></Link>
                </ul>
        
                <div className="flex space-x-6 text-xl">
                    <Link to={'#'}><FaUser className="cursor-pointer hover:text-gray-600" /></Link>
                    <Link to={'#'}><FaSearch className="cursor-pointer hover:text-gray-600" /></Link>
                    <Link to={'#'}><FaHeart className="cursor-pointer hover:text-gray-600" /></Link>
                    <Link to={'cart'}><FaShoppingCart className="cursor-pointer hover:text-gray-600" /></Link>
                </div>
            </nav>
        </>
    )
}

export default HeaderClient;
