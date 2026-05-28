import HeroSlider from '../../components/HeroSlider'
import CategoryIcons from '../../components/CategoryIcons'
import BrandSlider from '../../components/BrandSlider'
import ProductCard from '../../components/ProductCard'

const sampleProducts = [
  {title:'Vợt Yonex Astrox 99', image:'https://images.unsplash.com/photo-1511988617509-a57c8a288659', price:3490000, oldPrice:3990000, shopeeLink:'#'},
  {title:'Giày Yonex Power Cushion', image:'https://images.unsplash.com/photo-1528701800489-4766f6a6d28f', price:2490000, oldPrice:2990000, shopeeLink:'#'},
  {title:'Túi cầu lông cao cấp', image:'https://images.unsplash.com/photo-1523381211956-81b2b46a9f9d', price:890000, shopeeLink:'#'},
  {title:'Quần áo thi đấu', image:'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f', price:390000, shopeeLink:'#'}
]

export default function Home(){
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
          {sampleProducts.map((p)=> (
            <ProductCard key={p.title} title={p.title} image={p.image} price={p.price} oldPrice={p.oldPrice} shopeeLink={p.shopeeLink} />
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
          {sampleProducts.map((p,i)=> (
            <ProductCard key={p.title + i} {...(p as any)} />
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 mt-10">
        <h2 className="text-2xl font-bold mb-4">Tin tức & mẹo hay</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-4 shadow"> 
            <div className="h-36 bg-gray-100 rounded mb-3"></div>
            <div className="text-sm text-gray-500">20/05/2024</div>
            <h3 className="font-semibold mt-2">Top 5 cây vợt công mạnh đáng mua nhất 2024</h3>
            <a href="#" className="text-red-600 mt-3 inline-block">Đọc thêm →</a>
          </div>
          <div className="bg-white rounded-xl p-4 shadow"> 
            <div className="h-36 bg-gray-100 rounded mb-3"></div>
            <div className="text-sm text-gray-500">10/05/2024</div>
            <h3 className="font-semibold mt-2">Cách chọn giày cầu lông phù hợp với túi tiền</h3>
            <a href="#" className="text-red-600 mt-3 inline-block">Đọc thêm →</a>
          </div>
          <div className="bg-white rounded-xl p-4 shadow"> 
            <div className="h-36 bg-gray-100 rounded mb-3"></div>
            <div className="text-sm text-gray-500">16/03/2024</div>
            <h3 className="font-semibold mt-2">Kỹ thuật đập cầu mạnh và chính xác</h3>
            <a href="#" className="text-red-600 mt-3 inline-block">Đọc thêm →</a>
          </div>
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
