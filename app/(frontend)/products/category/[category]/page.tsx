import ProductCard from '../../../../../components/ProductCard'
import { getProducts, urlFor } from '../../../../../lib/sanity'

type Props = {
  params: { category: string }
}

const slugToCategoryName: Record<string, string> = {
  'vot-cau-long': 'Vợt cầu lông',
  'vot-pickleball': 'Vợt pickle ball',
  'phu-kien': 'Phụ kiện',
}

export default async function CategoryPage({ params }: Props){
  const { category } = params
  const catName = slugToCategoryName[category] || category

  const products = await getProducts()
  const filtered = products.filter((p:any)=> (p.category || '').toLowerCase() === (catName || '').toLowerCase())

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">{catName}</h1>
        <div className="text-sm text-gray-600">{filtered.length} sản phẩm</div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow">Chưa có sản phẩm trong danh mục này.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p:any)=> (
            <ProductCard key={p._id} slug={p.slug.current} title={p.title} image={urlFor(p.thumbnail)} price={p.price} oldPrice={p.oldPrice} shopeeLink={p.shopeeLink} />
          ))}
        </div>
      )}
    </div>
  )
}
