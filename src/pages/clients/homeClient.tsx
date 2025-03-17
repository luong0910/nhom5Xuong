import { FaEye, FaHeart } from "react-icons/fa";

function HomeClient() {
  return (
    <div className="min-h-screen bg-neutral-50">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Row 1 */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="./src/assets/anh1.png"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                  <button className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors">
                    Add to cart
                  </button>
                  <div className="flex gap-4">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="View Details">
                      <FaEye className="w-5 h-5 text-neutral-800" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="Add to Wishlist">
                      <FaHeart className="w-5 h-5 text-neutral-800" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-red-400">
                  -30%
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-neutral-800">Syltherine</h3>
                <p className="text-neutral-500 text-sm mb-2">Stylish cafe chair</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Rp 2.500.000</span>
                  <span className="text-neutral-400 line-through text-sm">Rp 3.500.000</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="./src/assets/anh1.png"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                  <button className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors">
                    Add to cart
                  </button>
                  <div className="flex gap-4">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="View Details">
                      <FaEye className="w-5 h-5 text-neutral-800" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="Add to Wishlist">
                      <FaHeart className="w-5 h-5 text-neutral-800" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-neutral-800">Leviosa</h3>
                <p className="text-neutral-500 text-sm mb-2">Stylish cafe chair</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Rp 2.500.000</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="./src/assets/anh1.png"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                  <button className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors">
                    Add to cart
                  </button>
                  <div className="flex gap-4">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="View Details">
                      <FaEye className="w-5 h-5 text-neutral-800" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="Add to Wishlist">
                      <FaHeart className="w-5 h-5 text-neutral-800" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-red-400">
                  -50%
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-neutral-800">Lolito</h3>
                <p className="text-neutral-500 text-sm mb-2">Luxury big sofa</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Rp 7.000.000</span>
                  <span className="text-neutral-400 line-through text-sm">Rp 14.000.000</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="./src/assets/anh1.png"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                  <button className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors">
                    Add to cart
                  </button>
                  <div className="flex gap-4">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="View Details">
                      <FaEye className="w-5 h-5 text-neutral-800" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="Add to Wishlist">
                      <FaHeart className="w-5 h-5 text-neutral-800" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-emerald-400">
                  New
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-neutral-800">Respira</h3>
                <p className="text-neutral-500 text-sm mb-2">Outdoor bar table and stool</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Rp 500.000</span>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="./src/assets/anh1.png"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                  <button className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors">
                    Add to cart
                  </button>
                  <div className="flex gap-4">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="View Details">
                      <FaEye className="w-5 h-5 text-neutral-800" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="Add to Wishlist">
                      <FaHeart className="w-5 h-5 text-neutral-800" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-neutral-800">Grifo</h3>
                <p className="text-neutral-500 text-sm mb-2">Night lamp</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Rp 1.500.000</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="./src/assets/anh1.png"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                  <button className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors">
                    Add to cart
                  </button>
                  <div className="flex gap-4">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="View Details">
                      <FaEye className="w-5 h-5 text-neutral-800" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="Add to Wishlist">
                      <FaHeart className="w-5 h-5 text-neutral-800" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-emerald-400">
                  New
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-neutral-800">Muggo</h3>
                <p className="text-neutral-500 text-sm mb-2">Small mug</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Rp 150.000</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="./src/assets/anh1.png"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                  <button className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors">
                    Add to cart
                  </button>
                  <div className="flex gap-4">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="View Details">
                      <FaEye className="w-5 h-5 text-neutral-800" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="Add to Wishlist">
                      <FaHeart className="w-5 h-5 text-neutral-800" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-red-400">
                  -50%
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-neutral-800">Pingky</h3>
                <p className="text-neutral-500 text-sm mb-2">Cute bed set</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Rp 7.000.000</span>
                  <span className="text-neutral-400 line-through text-sm">Rp 14.000.000</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="./src/assets/anh1.png"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                  <button className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors">
                    Add to cart
                  </button>
                  <div className="flex gap-4">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="View Details">
                      <FaEye className="w-5 h-5 text-neutral-800" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors" title="Add to Wishlist">
                      <FaHeart className="w-5 h-5 text-neutral-800" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-emerald-400">
                  New
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-neutral-800">Potty</h3>
                <p className="text-neutral-500 text-sm mb-2">Minimalist flower pot</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Rp 500.000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button className="border-2 border-amber-600 text-amber-600 px-12 py-3 rounded hover:bg-amber-600 hover:text-white transition-colors">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeClient;