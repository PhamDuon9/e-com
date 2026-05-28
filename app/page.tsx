import HeroSlider from '../components/HeroSlider'
import CategoryIcons from '../components/CategoryIcons'
import BrandSlider from '../components/BrandSlider'
import ProductCard from '../components/ProductCard'
import { getProducts, getPosts, urlFor } from '../lib/sanity'

export default async function Home(){
  const products = await getProducts()
  const posts = await getPosts()

  const featured = products.filter((p:any)=> p.featured).slice(0,4)
  const newArrivals = products.filter((p:any)=> p.newArrival).slice(0,4)
  console.log(featured)
  console.log(newArrivals)

  return (
    <div className="py-6">
      <HeroSlider />

      <div className="max-w-screen-xl mx-auto -mt-8 px-4">
        <CategoryIcons />
      </div>

      <section className="max-w-screen-xl mx-auto px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Sản phẩm nổi bật</h2>
          <a href="/products" className="text-sm text-gray-600">Xem tất cả →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p:any)=> (
            <ProductCard key={p._id} title={p.title} image={urlFor(p.thumbnail)} price={p.price} oldPrice={p.oldPrice} shopeeLink={p.shopeeLink} />
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 mt-8">
        <div className="bg-red-600 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Sale up to 30% — Freeship toàn quốc</h3>
            <p className="mt-2 text-sm">Ưu đãi hấp dẫn, quà tặng cao cấp kèm theo.</p>
          </div>
          <button className="mt-2 sm:mt-0 bg-black px-4 py-2 rounded-full">Xem chi tiết</button>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 mt-8">
        <h3 className="text-lg font-semibold mb-4">Thương hiệu nổi bật</h3>
        <BrandSlider />
      </section>

      <section className="max-w-screen-xl mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold mb-4">Hàng mới về</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((p:any)=> (
            <ProductCard key={p._id} title={p.title} image={urlFor(p.thumbnail)} price={p.price} oldPrice={p.oldPrice} shopeeLink={p.shopeeLink} />
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 mt-10">
        <h2 className="text-2xl font-bold mb-4">Tin tức & mẹo hay</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.slice(0,3).map((post:any)=> (
            <div key={post._id} className="bg-white rounded-xl p-4 shadow">
              <div className="h-36 bg-gray-100 rounded mb-3">
                {post.thumbnail && <img src={urlFor(post.thumbnail)} alt={post.title} className="w-full h-full object-cover rounded" />}
              </div>
              <div className="text-sm text-gray-500">{new Date(post.publishedDate).toLocaleDateString()}</div>
              <h3 className="font-semibold mt-2">{post.title}</h3>
              <a href={`/news/${post.slug?.current || ''}`} className="text-red-600 mt-3 inline-block">Đọc thêm →</a>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 mt-10 mb-16">
        <h2 className="text-2xl font-bold mb-6">Khách hàng nói về chúng tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700">"Shop tư vấn nhiệt tình, giao hàng nhanh, vợt chính hãng 100%"</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100"></div>
              <div>
                <div className="font-semibold">Minh Tuấn</div>
                <div className="text-sm text-gray-500">Hà Nội</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700">"Sản phẩm chất lượng, giá hợp lý. Đóng gói cẩn thận."</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100"></div>
              <div>
                <div className="font-semibold">Hoàng Nam</div>
                <div className="text-sm text-gray-500">TP. Hồ Chí Minh</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700">"Mua giày ở đây rất ưng, đi êm và bám sàn tốt."</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100"></div>
              <div>
                <div className="font-semibold">Quốc Bảo</div>
                <div className="text-sm text-gray-500">Đà Nẵng</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
