export default function Footer(){
  return (
    <footer className="bg-black text-white mt-12">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="text-2xl font-bold">Thế Giới SportLux</div>
          <p className="mt-2 text-gray-300">Cửa hàng cầu lông cao cấp. Sản phẩm chính hãng, dịch vụ tận tâm.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">f</a>
            <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">i</a>
            <a href="#" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">y</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Về chúng tôi</h4>
          <ul className="mt-3 text-gray-300 space-y-2">
            <li>Giới thiệu</li>
            <li>Chính sách</li>
            <li>Hệ thống cửa hàng</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Liên hệ</h4>
          <p className="mt-3 text-gray-300">Hotline: 0909 000 000</p>
          <p className="text-gray-300">Email: info@sportlux.vn</p>
        </div>

        <div>
          <h4 className="font-semibold">Đăng ký</h4>
          <p className="mt-3 text-gray-300">Nhận ưu đãi và tin mới nhất.</p>
          <form className="mt-3 flex gap-2">
            <input placeholder="Email của bạn" className="px-3 py-2 rounded bg-gray-800 text-white flex-1" />
            <button className="bg-red-600 px-4 py-2 rounded">Đăng ký</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-sm">© 2026 Thế Giới SportLux. All rights reserved.</div>
    </footer>
  )
}
