import { Eye, Heart } from 'lucide-react';

import { FaEye, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { SlidersHorizontal, List, Grid } from "lucide-react";

function ShopPage() {
    const [view, setView] = useState("grid");
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <>
           
             <div className="flex items-center justify-between bg-[#f8f1e7] p-3 rounded-xl shadow-md">
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 border px-3 py-1 rounded-md">
          <SlidersHorizontal className="h-5 w-5" /> Filter
        </button>
        <button
          className={`p-2 rounded-md ${view === "grid" ? "bg-gray-300" : "border"}`}
          onClick={() => setView("grid")}
        >
          <Grid className="h-5 w-5" />
        </button>
        <button
          className={`p-2 rounded-md ${view === "list" ? "bg-gray-300" : "border"}`}
          onClick={() => setView("list")}
        >
          <List className="h-5 w-5" />
        </button>
        <span className="text-sm">| Showing 1–16 of 32 results</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm">Show</span>
        <input type="number" value={16} className="w-12 text-center border rounded-md p-1" readOnly />
        <span className="text-sm">Short by</span>
        <select className="border rounded-md p-1 w-32">
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
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
       
            {/* Row 3 */}
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

            {/* Row 4 */}
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
                          




            <div className="flex justify-center mt-4">
  <div className="flex gap-2">
    {[1, 2, 3].map((page) => (
      <button
        key={page}
        className={`px-4 py-2 rounded-md text-sm ${
          currentPage === page ? "bg-[#b48b3b] text-white" : "bg-[#f8f1e7]"
        }`}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </button>
    ))}
    <button
          className="px-4 py-2 rounded-md text-sm bg-[#f8f1e7]"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 3))}
        >
          Next
        </button>
  </div>
</div>

        </>
    )
}

export default ShopPage;