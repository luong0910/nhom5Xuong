import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderClient() {
    return (
        <>
            <nav className="flex justify-between items-center py-4 px-8 shadow-sm">
                <div className="flex items-center">
                    <Link to={'/'}>
                        <span className="text-yellow-500 text-2xl font-bold">&#9650;</span>
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
                    <Link to={'cart'}><FaShoppingCart className="cursor-p ointer hover:text-gray-600" /></Link>
                </div>
            </nav>
        </>
    )
}

export default HeaderClient
