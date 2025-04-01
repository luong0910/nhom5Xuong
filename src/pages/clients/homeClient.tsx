import { useNavigate } from 'react-router-dom';
import { FaEye, FaHeart } from "react-icons/fa";
import { useList } from "../../hooks";

function HomeClient() {
  const navigate = useNavigate();

  // Fetch dữ liệu sản phẩm bằng useList, giống ProductList
  const { data, isLoading, isError, error } = useList({ resource: "products" });

  // Debug dữ liệu thô từ useList
  console.log("Dữ liệu thô từ useList:", data);

  // Chuẩn bị products giống cách ProductList làm với dataSource
  const products = data?.data ? (Array.isArray(data.data) ? data.data : []) : [];
  console.log("Products sau khi xử lý:", products);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] bg-neutral-200 overflow-hidden">
        <img
          src="./src/assets/bannerhome.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Your Perfect Home Style
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-xl">
            Explore our exclusive collection of furniture and decor.
          </p>
          <button
            className="bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition-colors"
            onClick={() => navigate('/shop')}
          >
            Shop Now
          </button>
        </div>
      </div>

       {/* Hero Section */}
       <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-light text-center text-neutral-800 mb-3">
          Browse The Range
        </h1>
        <p className="text-center text-neutral-600 text-base md:text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto px-4 pb-12 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
              <img
                src="./src/assets/anh2.png"
                alt="Dining Room"
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium text-neutral-800 text-center mb-2">
              Dining
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
              <img
                src="./src/assets/anh3.png"
                alt="Living Room"
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium text-neutral-800 text-center mb-2">
              Living
            </h3>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl shadow-lg mb-4">
              <img
                src="./src/assets/anh1.png"
                alt="Bedroom"
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium text-neutral-800 text-center mb-2">
              Bedroom
            </h3>
          </div>
        </div>
      </div>


      {/* Our Products Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-medium text-center text-neutral-800 mb-12">
            Our Products
          </h2>

          {isLoading ? (
            <div className="text-center text-neutral-600">Loading products...</div>
          ) : isError ? (
            <div className="text-center text-red-600">Error: {error?.message || "Unknown error"}</div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={product.id || index} // Dùng index làm fallback nếu không có id
                  className="group relative bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image || "./src/assets/anh1.png"} // Ảnh mặc định nếu không có image
                      alt={product.name || "Product"}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                      <button className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors">
                        Add to cart
                      </button>
                      <div className="flex gap-4">
                        <button
                          className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                          title="View Details"
                          onClick={() => {
                            console.log("Navigating to:", `/detail/${product.id}`);
                            navigate(`/detail/${product.id}`);
                          }}
                        >
                          <FaEye className="w-5 h-5 text-neutral-800" />
                        </button>
                        <button
                          className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                          title="Add to Wishlist"
                        >
                          <FaHeart className="w-5 h-5 text-neutral-800" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg text-neutral-800">
                      {product.name || "Unnamed Product"}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-2">
                      {product.description?.substring(0, 50) || "No description"}...
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        ${product.price?.toFixed(2) || "0.00"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-neutral-600 py-12">
              No products available
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
}

export default HomeClient;
