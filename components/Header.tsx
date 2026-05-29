import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
  return (
    <header className="sticky top-0 z-40 bg-white backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-8 py-4 grid grid-cols-3 items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Site logo" width={100} height={100} className="object-contain" />
            <div className="hidden sm:block">
              <div className="text-lg font-bold">Thế giới SportLux</div>
              <div className="text-xs text-gray-500">Premium Badminton Gear</div>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 font-medium justify-center items-center">
          <Link href="/" className="hover:text-gray-800 whitespace-nowrap">Trang chủ</Link>

          <div className="relative group inline-block">
            <Link href="/products" className="hover:text-gray-800 whitespace-nowrap py-2 inline-block">Sản phẩm</Link>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50">
              <Link href="/products/category/vot-cau-long" className="block px-4 py-2 text-sm hover:bg-gray-100">Vợt cầu lông</Link>
              <Link href="/products/category/vot-pickleball" className="block px-4 py-2 text-sm hover:bg-gray-100">Vợt pickle ball</Link>
              <Link href="/products/category/phu-kien" className="block px-4 py-2 text-sm hover:bg-gray-100">Phụ kiện</Link>
            </div>
          </div>

          <Link href="/news" className="hover:text-gray-800 whitespace-nowrap">Tin tức</Link>
          <Link href="/about" className="hover:text-gray-800 whitespace-nowrap">Giới thiệu</Link>
          <Link href="/contact" className="hover:text-gray-800 whitespace-nowrap">Liên hệ</Link>
        </nav>

        <div />
      </div>
    </header>
  )
}
