import { AiFillDelete } from "react-icons/ai";

function CartPage() {
    return (
        <>
            <section className="container mx-auto py-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="py-4 w-[700px] ml-[20px]">
                        <table className="w-full border-collapse border border-[#FAF3EA] rounded-md text-center">
                            <thead>
                                <tr className="bg-[#FAF3EA]">
                                    <th className="font-semibold py-4 px-4">Image</th>
                                    <th className="font-semibold py-4 px-4">Product</th>
                                    <th className="font-semibold py-2 px-4">Price</th>
                                    <th className="font-semibold py-2 px-4">Quantity</th>
                                    <th className="font-semibold py-2 px-4">Subtotal</th>
                                    <th className="font-semibold py-2 px-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-4 px-4 border border-gray-200">
                                      <img src="src/assets/spct-5.png" alt="Product" className="py-2 w-20 h-20 object-cover rounded-xl" />
                                    </td>
                                    <td className="py-4 px-4 border border-gray-200">
                                        <span>Asgaard sofa</span>
                                    </td>
                                    <td className="py-4 px-4 border border-gray-200">
                                        Rs. 250,000.00
                                    </td>
                                    <td className="py-4 px-4 border border-gray-200">
                                        <input type="number" value="1" className="w-10 text-center border rounded" />
                                    </td>
                                    <td className="py-4 px-4 border border-gray-200">
                                        <span className="font-medium">Rs. 250,000.00</span>                  
                                    </td>
                                    <td className="py-4 px-4 border border-gray-200 justify-center">
                                        <button className="text-yellow-600">
                                            <span className="text-center">
                                                <AiFillDelete />
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 border border-gray-200">
                                      <img src="src/assets/spct-5.png" alt="Product" className="py-2 w-20 h-20 object-cover rounded-xl" />
                                    </td>
                                    <td className="py-4 px-4 border border-gray-200">
                                        <span>Asgaard sofa</span>
                                    </td>
                                    <td className="py-4 px-4 border border-gray-200">
                                        Rs. 250,000.00
                                    </td>
                                    <td className="py-4 px-4 border border-gray-200">
                                        <input type="number" value="1" className="w-10 text-center border rounded" />
                                    </td>
                                    <td className="py-4 px-4 border border-gray-200">
                                        <span className="font-medium">Rs. 250,000.00</span>                  
                                    </td>
                                    <td className="py-4 px-4 border border-gray-200 justify-center">
                                        <button className="text-yellow-600">
                                            <span className="text-center">
                                                <AiFillDelete />
                                            </span>
                                        </button>
                                    </td>
                                </tr>   
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-md w-[400px] h-[400px] ml-[150px] mt-4" style={{ backgroundColor: "#FAF3EA" }}>
                        <div>
                            <h3 className="text-4xl font-semibold mb-4 text-center">Tổng tiền</h3>
                        </div>

                        <div className="flex justify-between p-4">
                            <span className="font-semibold">Tổng hóa đơn:</span>
                            <span className="font-semibold text-gray-600">Rs. 250,000.00</span>
                        </div>

                        <div className="flex justify-between p-4">
                            <span className="font-semibold">Tổng tiền:</span>
                            <span className="text-xl font-semibold text-yellow-500">Rs. 250,000.00</span>
                        </div>

                        <div className="flex justify-between py-4 space-x-4">
                            <button className="w-1/2 text-xl py-2 border-2 rounded-md border-black mt-4 hover:bg-red-500 hover:text-white">
                                Thanh toán
                            </button>
                            <button className="w-1/2 text-xl py-2 border-2 rounded-md border-black mt-4 hover:bg-red-500 hover:text-white">
                                Tiếp tục mua hàng
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CartPage