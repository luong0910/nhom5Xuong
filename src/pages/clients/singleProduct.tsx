import { useParams } from 'react-router-dom';
import { useList } from "../../hooks";

function SingleProductPage() {
  const { id } = useParams(); // Lấy id từ URL

  // Fetch dữ liệu sản phẩm chi tiết dựa trên id
  const { data, isLoading, isError, error } = useList({
    resource: `products/${id}`,
  });

  const product = data?.data; // Dữ liệu sản phẩm chi tiết

  if (isLoading) return <div className="text-center py-16">Loading product details...</div>;
  if (isError) return <div className="text-center py-16 text-red-600">Error: {error?.message || "Failed to load product"}</div>;
  if (!product) return <div className="text-center py-16">Product not found</div>;

  return (
    <>
      <div>
        {/* Header */}
        <section className="text-gray-600 py-8 pl-[100px] bg-[#F9F1E7]">
          <div className="flex container mx-auto">
            <p className="ml-8">Home &gt;</p>
            <p className="ml-4">Shop &gt;</p>
            <p className="ml-4"> |</p>
            <p className="ml-4">{product.name || "Product"}</p>
          </div>
        </section>

        {/* Product Detail */}
        <main className="container m-auto max-w-screen-xl my-16">
          <div className="grid grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <img
                className="rounded-sm w-full h-[500px] object-cover"
                src={product.image || "./src/assets/4.png"}
                alt={product.name}
              />
            </div>
            {/* Product Info */}
            <div>
              <p className="font-medium text-[42px]">{product.name || "Unnamed Product"}</p>
              <p className="font-medium text-[24px] text-[#9F9F9F] my-2">
                {product.price?.toLocaleString()}đ
              </p>
              <p className="font-medium my-4">{product.description || "No description available"}</p>
            </div>
          </div>
        </main>

        
      </div>
    </>
  );
}

export default SingleProductPage;