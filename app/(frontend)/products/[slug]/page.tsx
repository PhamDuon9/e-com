import Image from 'next/image'

type Props = { params: { slug: string } }

export default function ProductDetail({ params }:Props){
  const product = {
    title: 'Vợt Yonex Astrox 99',
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659',
    price: 3490000,
    oldPrice: 3990000,
    rating: 4.8,
    shopeeLink: '#'
  }

  return (
    <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="rounded-2xl bg-white p-4">
        <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
          <Image src={product.image} alt={product.title} fill className="object-contain p-6" />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="mt-2 text-yellow-500">{'★'.repeat(5)}</div>
        <div className="mt-4 text-red-600 text-2xl font-bold">{product.price.toLocaleString('vi-VN')} ₫</div>
        <div className="mt-4 text-gray-700">Tình trạng: Còn hàng</div>
        <p className="mt-4 text-gray-600">Mô tả ngắn về sản phẩm. Thiết kế tối ưu cho người chơi chuyên nghiệp.</p>

        <div className="mt-6 flex items-center gap-3">
          <input type="number" defaultValue={1} min={1} className="w-20 px-3 py-2 rounded border" />
          <a href={product.shopeeLink} className="bg-black text-white px-4 py-2 rounded">Mua trên Shopee</a>
        </div>

      </div>

      <div className="lg:col-span-2 bg-white rounded-2xl p-6">
        <div className="prose">
          <h3>Mô tả</h3>
          <p>Chi tiết sản phẩm đầy đủ, thông số kỹ thuật và hướng dẫn sử dụng.</p>
        </div>
      </div>
    </div>
  )
}
