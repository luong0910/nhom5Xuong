function CartPage() {
    return (
        <section className="container mx-auto py-4">
                <div className="grid grid-cols-2 gap-4">
            {/* Cart Header Section */}
            <div className="py-4 w-[700px] ml-[20px]">
            <div className="grid grid-cols-4 text-center font-semibold p-4" style={{ backgroundColor: "#FAF3EA" }}>
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
            </div>

            {/* Product Row */}
            <div className="grid grid-cols-4 text-center py-4 items-center">
                <div className="flex items-center justify-center">
                <img src="/img/spct-5.png" alt="Product" className="w-16 h-16 object-cover" />
                <span className="ml-4">Asgaard sofa</span>
                </div>
                <div className="text-gray-600">25.000.000đ</div>
                <div className="flex justify-center items-center">
                <input type="number" value="1" className="w-12 text-center border" />
                </div>
                <div className="text-gray-600">25.000.000đ</div>
                <div className="flex justify-center">
                <button className="text-red-500">
                    <i className="fas fa-trash-alt"></i> {/* Icon for delete */}
                </button>
                </div>
            </div>
            </div>

            {/* Cart Totals Section */}
            <div className="bg-gray-100 p-6 rounded-md w-[400px] h-[400px] ml-[150px] mt-4" style={{ backgroundColor: "#FAF3EA" }}>
            <h3 className="text-4xl font-semibold mb-4 text-center">Cart Totals</h3>
            <div className="flex justify-between  p-4">
                <span className="font-semibold">Subtotal:</span>
                <span className="font-semibold text-gray-600 mr-[120px]">25.000.000đ</span>  
            </div>
            <div className="flex justify-between  p-4">
                <span className="font-semibold">Total:</span>
                <span className="text-xl font-semibold text-yellow-700 mr-[100px] mb-4">25.000.000đ</span>
            </div>
            <button className="w-1/2 text-xl py-2 border-2 rounded-md border-black mt-4 ml-[80px] ">Check Out</button>
            </div>
        </div>
        </section>
    )
}

export default CartPage