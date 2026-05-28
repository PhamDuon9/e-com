export default function ContactPage(){
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold">Liên hệ</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="bg-white rounded-2xl p-6 shadow space-y-4">
          <input placeholder="Tên" className="w-full px-3 py-2 border rounded" />
          <input placeholder="Email" className="w-full px-3 py-2 border rounded" />
          <textarea placeholder="Tin nhắn" className="w-full px-3 py-2 border rounded h-32" />
          <button className="bg-red-600 text-white px-4 py-2 rounded">Gửi liên hệ</button>
        </form>
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="font-semibold">Thông tin cửa hàng</h3>
          <p className="mt-2">Địa chỉ: 123 Đường Thể Thao, Hà Nội</p>
          <p>Hotline: 0909 000 000</p>
          <div className="mt-4 bg-gray-100 h-48 rounded">Google Map placeholder</div>
        </div>
      </div>
    </div>
  )
}
