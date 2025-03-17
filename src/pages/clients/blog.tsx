import { useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

function BlogPage() {
  // State để quản lý trang hiện tại
  const [currentPage, setCurrentPage] = useState(1); // Mặc định là trang 1

  // Hàm xử lý khi nhấn vào nút trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Bạn có thể thêm logic để fetch dữ liệu cho trang mới ở đây nếu cần
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row p-4 bg-white flex-1">
          {/* Main Content - Articles */}
          <div className="w-full md:w-3/4 p-4">
            {/* Article 1 */}
            <div className="border-l-4 border-blue-500 p-4 mb-6 bg-gray-50">
              <img
                src="https://via.placeholder.com/600x300"
                alt="Article 2"
                className="w-full h-48 object-cover mb-4"
              />
              <div className="flex items-center text-sm text-gray-500 mb-2 gap-2">
                <span>Client</span> |
                <span>17/03/2025</span> | 
                <span>Nhóm 5</span> 
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Xưởng bán trà sữa
              </h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="text-blue-500 text-sm mt-2 inline-block">Xem thêm</a>
            </div>

            {/* Article 2 */}
            <div className="border-l-4 border-blue-500 p-4 mb-6 bg-gray-50">
              <img
                src="https://via.placeholder.com/600x300"
                alt="Article 2"
                className="w-full h-48 object-cover mb-4"
              />
              <div className="flex items-center text-sm text-gray-500 mb-2 gap-2">
                <span>Client</span> |
                <span>17/03/2025</span> | 
                <span>Nhóm 5</span> 
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Xưởng bán trà sữa
              </h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="text-blue-500 text-sm mt-2 inline-block">Xem thêm</a>
            </div>

            {/* Article 3 */}
            <div className="border-l-4 border-blue-500 p-4 mb-6 bg-gray-50">
              <img
                src="https://via.placeholder.com/600x300"
                alt="Article 2"
                className="w-full h-48 object-cover mb-4"
              />
              <div className="flex items-center text-sm text-gray-500 mb-2 gap-2">
                <span>Client</span> |
                <span>17/03/2025</span> | 
                <span>Nhóm 5</span> 
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Xưởng bán trà sữa
              </h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="text-blue-500 text-sm mt-2 inline-block">Xem thêm</a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/4 p-6 bg-gray-50">
            {/* Search */}
            <form className="mb-6 rounded-sm border border-gray-300 flex">
              <input
                type="text"
                className="w-full p-2 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-2 text-gray-800">
                <FaMagnifyingGlass className='text-lg' />
              </button>
            </form>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Categories</h3>
              <ul className="space-y-2">
                {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((category, index) => (
                  <li key={index} className="flex justify-between text-sm text-gray-600">
                    <span>{category}</span>
                    <span>{index + 3} posts</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pagination - Highlight current page */}
        <div className="flex justify-center items-center p-4 space-x-2 bg-white border-t">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-md font-bold ${
                currentPage === page
                  ? 'bg-yellow-300 text-white'
                  : 'bg-gray-200 text-gray-500 hover:text-gray-800'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 bg-yellow-300 text-white font-bold rounded-md hover:bg-yellow-600"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogPage