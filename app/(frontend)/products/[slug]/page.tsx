import Image from "next/image";
import { notFound } from "next/navigation";
import ProductCard from "../../../../components/ProductCard";
import {
  getProductBySlug,
  getRelatedProducts,
  urlFor,
} from "../../../../lib/sanity";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductDetail({ params }: Props) {
  const product = await getProductBySlug(params.slug);
  const relatedProducts = product?.category
    ? await getRelatedProducts(product.category, params.slug)
    : [];

  if (!product) {
    notFound();
  }

  return (
    <div className="py-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Trang chủ / Sản phẩm / {product.title}
      </div>

      {/* Product */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="bg-white rounded-xl p-4 border">
          <div className="relative h-[500px] bg-gray-50 rounded-lg overflow-hidden">
            <Image
              src={urlFor(product.thumbnail)}
              alt={product.title}
              fill
              className="object-contain p-8"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>

          <div className="flex items-center gap-3 mb-4">
            <div className="text-yellow-500">
              {"★".repeat(Math.round(product.rating || 5))}
            </div>

            <span className="text-gray-500">({product.rating || 5}.0)</span>

            <span className="text-green-600 font-medium">● Còn hàng</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="text-red-600 text-4xl font-bold">
              {product.price?.toLocaleString("vi-VN")} ₫
            </div>

            {product.oldPrice && (
              <div className="text-gray-400 text-xl line-through">
                {product.oldPrice.toLocaleString("vi-VN")} ₫
              </div>
            )}
          </div>

          <ul className="space-y-2 text-gray-700 mb-8">
            {product.brand && (
              <li>
                <strong>Thương hiệu:</strong> {product.brand}
              </li>
            )}

            {product.category && (
              <li>
                <strong>Danh mục:</strong> {product.category}
              </li>
            )}

            {product.specs?.map((spec: any, index: number) => (
              <li key={index}>
                <strong>{spec.key}:</strong> {spec.value}
              </li>
            ))}
          </ul>

          <div className="flex gap-3 mb-6">
            <input
              type="number"
              min={1}
              defaultValue={1}
              className="w-24 border rounded-lg px-3 py-2"
            />

            <a
              href={product.shopeeLink || "#"}
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              MUA NGAY
            </a>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <div>🚚 Giao hàng toàn quốc</div>

            <div>🔍 Kiểm tra hàng trước khi thanh toán</div>

            <div>↩️ Đổi trả trong 7 ngày nếu lỗi</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 bg-white rounded-xl border">
        <div className="border-b px-6 py-4 font-semibold">Mô tả sản phẩm</div>

        <div className="p-6">
          {product.description || "Đang cập nhật mô tả sản phẩm"}
        </div>
      </div>

      {/* Related Products */}

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Sản phẩm liên quan</h2>

        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.map((p: any) => (
              <ProductCard
                key={p._id}
                slug={p.slug.current}
                title={p.title}
                image={p.thumbnail}
                price={p.price}
                oldPrice={p.oldPrice}
                rating={p.rating}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border p-6 text-gray-500">
            Chưa có sản phẩm liên quan
          </div>
        )}
      </div>
    </div>
  );
}
