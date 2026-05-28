import ProductCard from '../../../components/ProductCard'

const products = new Array(12).fill(0).map((_,i)=>({
  title:`Sản phẩm ${i+1}`,
  image:'https://images.unsplash.com/photo-1511988617509-a57c8a288659',
  price:1000000 + i*100000,
  oldPrice:1200000 + i*100000,
  shopeeLink:'#'
}))

export default function ProductsPage(){
  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Sản phẩm</h1>
        <div className="text-sm text-gray-600">{products.length} sản phẩm</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(p=> <ProductCard key={p.title} {...(p as any)} />)}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 bg-white rounded-lg shadow">Xem thêm</button>
      </div>
    </div>
  )
}
