export default function AboutPage(){
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-bold">Giới thiệu</h1>
      <p className="bg-white rounded-2xl p-6 shadow">Thế Giới SportLux chuyên cung cấp trang thiết bị cầu lông chính hãng. Sứ mệnh: mang đến trải nghiệm cao cấp cho người chơi.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow">Trải nghiệm mua sắm</div>
        <div className="bg-white rounded-xl p-4 shadow">Hệ thống cửa hàng</div>
        <div className="bg-white rounded-xl p-4 shadow">Dịch vụ hậu mãi</div>
      </div>
    </div>
  )
}
