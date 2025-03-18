import { FaEye, FaHeart } from "react-icons/fa"

function SingleProductPage() {
    return (
        <>
            <div>
                {/* header  */}
  <header>
    {/* Nav bar  */}
    <section className="container max-w-screen-xl m-auto flex items-center justify-between py-4">
      <img src="./assets/images/LOGO.png" alt="" />
      <ul className="flex gap-8 font-medium text-xl">
        <li className="hover:text-[#fc9403]">
          <a href="">Home</a>
        </li>
        <li className="hover:text-[#fc9403]">
          <a href="./shop.html">Shop</a>
        </li>
        <li className="hover:text-[#fc9403]">
          <a href="">About</a>
        </li>
        <li className="hover:text-[#fc9403]">
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="flex gap-4">
        <span className="material-symbols-outlined">person</span>
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined">favorite</span>
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
    </section>
  </header>
  {/* Main Banner */}
  <section className="text-gray-600 py-8 pl-[100px] bg-[#F9F1E7]">
    <div className="flex container mx-auto">
      <p className="ml-8">Home &gt;</p>
      <p className="ml-4">Shop &gt;</p>
      <p className="ml-4"> |</p>
      <p className="ml-4">Asgaard sofa</p>
    </div>
  </section>
  {/* main  */}
  <main className="container m-auto max-w-screen-xl my-16">
    <section>
      {/* toàn bộ thông tin  */}
      <div className="grid grid-cols-2 gap-8 mb-16">
        {/* slide  */}
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1 *:mb-4">
            <img
              className="rounded-sm"
              src="./assets/images/product-detail.jpg"
              alt=""
            />
            <img
              className="rounded-sm"
              src="./assets/images/product-detail.jpg"
              alt=""
            />
            <img
              className="rounded-sm"
              src="./assets/images/product-detail.jpg"
              alt=""
            />
            <img
              className="rounded-sm"
              src="./assets/images/product-detail.jpg"
              alt=""
            />
          </div>
          <div className="col-span-5">
            <img
              className="rounded-sm"
              src="./assets/images/product-detail.jpg"
              alt=""
            />
          </div>
        </div>
        {/* infor  */}
        <div>
          <p className="font-medium text-[42px]">Asgaard sofa</p>
          <p className="font-medium text-[24px] text-[#9F9F9F] my-2">
            25.000.000đ
          </p>
          <div className="flex items-center">
            <div className="*:text-[#FFC700] border-r border-solid border-[#A3A3A3] pr-4 mr-4">
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
            </div>
            <span className="font-medium text-sm text-[#9F9F9F]">
              5 Customer Review
            </span>
          </div>
          <p className="font-medium my-4">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          {/* Size  */}
          <div>
            <p className="text-[#A3A3A3] mb-1">Size</p>
            <div className="flex gap-4">
              <div className="text-white bg-[#CA8A04] w-[30px] h-[30px] flex items-center justify-center rounded">
                L
              </div>
              <div className="text-white bg-[#A3A3A3] w-[30px] h-[30px] flex items-center justify-center rounded">
                XL
              </div>
              <div className="text-white bg-[#A3A3A3] w-[30px] h-[30px] flex items-center justify-center rounded">
                XS
              </div>
            </div>
          </div>
          {/* color  */}
          <div className="mt-4 mb-8">
            <p className="text-[#A3A3A3] mb-1">Color</p>
            <div className="flex gap-4">
              <div className="bg-[#816DFA] w-[30px] h-[30px] rounded-full" />
              <div className="bg-[#000000] w-[30px] h-[30px] rounded-full" />
              <div className="bg-[#B88E2F] w-[30px] h-[30px] rounded-full" />
            </div>
          </div>
          {/* form  */}
          <div>
            <form action="">
              <div className="border border-solid border-[#A3A3A3] w-fit rounded inline-block">
                <button className="py-2 pl-4 pr-[35px]">-</button>
                <input
                  className="w-[10px] text-center"
                  type="text"
                  defaultValue={1}
                />
                <button className="py-2 pl-[35px] pr-4">+</button>
              </div>
              <button
                className="border border-solid border-[#CA8A04] text-[#CA8A04] rounded py-2 px-[60px] ml-3 hover:bg-yellow-600 hover:text-white"
                type="submit"
              >
                Add To Cart
              </button>
              <button
                className="border border-solid border-[#262626] text-[#262626] rounded py-2 px-[60px] ml-3 hover:bg-[#262626] hover:text-white"
                type="submit"
              >
                + Compare
              </button>
            </form>
          </div>
          <hr className="text-[#A3A3A3] mt-8 mb-3" />
          <div className="*:mb-3 *:text-[#A3A3A3]">
            <p>SKU : SS001</p>
            <p>Category: Sofa</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
            <div className="flex gap-2 mt-4">
              <p className="mt-1">Share:</p>
              <i>
                <img className="w-5 h-5" src="./assets/images/icon-fb.png" />
              </i>
              <i>
                <img className="w-5 h-5" src="./assets/images/icon-in.png" />
              </i>
              <i>
                <img
                  className="w-5 h-5"
                  src="./assets/images/icon-twitter.png"
                />
              </i>
            </div>
          </div>
        </div>
      </div>
      {/* chi tiết sản phẩm bên dưới  */}
      <div>
        <div className="flex justify-center space-x-12 py-8 border-t border-[#D9D9D9]">
          <p className="font-semibold text-2xl">Description</p>
          <p className="opacity-50 text-2xl">Additional Information</p>
          <p className="opacity-50 text-2xl">Reviews [5]</p>
        </div>
        <div className="*:text-[#A3A3A3] *:font-medium">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="mt-2 mb-8">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className="flex gap-8 pb-[65px]">
            <img
              className="rounded-sm"
              src="./assets/images/detail-1.jpg"
              alt=""
            />
            <img
              className="rounded-sm"
              src="./assets/images/detail-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    {/* Related Products  */}
      <div className="py-16 bg-white border-[#D9D9D9] border-t  ">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
                  <h2 className="font-semibold text-[40px]">Related Products</h2>
          </div>

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
          </div>

          <div className="flex justify-center mt-12">
            <button className="border-2 border-amber-600 text-amber-600 px-12 py-3 rounded hover:bg-amber-600 hover:text-white transition-colors">
              Show More
            </button>

          </div>
        </div>
      </div>
  </main>
  {/* Footer  */}
  <footer className="bg-[#262626] text-white pt-16">
    <div className="container max-w-screen-xl m-auto grid grid-cols-4 gap-8 mb-16">
      <div>
        <img className="mb-4" src="./assets/images/LOGO-FOOTER.png" alt="" />
        <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-4">Sitemap</h3>
        <ul>
          <li className="mb-4">
            <a href="">Home</a>
          </li>
          <li className="mb-4">
            <a href="">Shop</a>
          </li>
          <li className="mb-4">
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-4">Help</h3>
        <ul>
          <li className="mb-4">
            <a href="">Payment Options</a>
          </li>
          <li className="mb-4">
            <a href="">Returns</a>
          </li>
          <li>
            <a href="">Privacy Policies</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-4">Location</h3>
        <ul>
          <li className="mb-4">
            <a href="">support@euphoria.in</a>
          </li>
          <li className="mb-4">
            <a href="">Ahmedabad Main Road</a>
          </li>
          <li>
            <a href="">Udaipur, India- 313002</a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="container max-w-screen-xl m-auto" />
    <p className="text-center py-8">
      Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
    </p>
  </footer>
            </div>
        </>
    )
}

export default SingleProductPage