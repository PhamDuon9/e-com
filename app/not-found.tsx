import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">
        404
      </h1>

      <p className="text-gray-600 mb-6">
        Không tìm thấy sản phẩm.
      </p>

      <Link
        href="/products"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Quay lại danh sách sản phẩm
      </Link>
    </div>
  )
}