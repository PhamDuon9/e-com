import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
  return (
    <header className="sticky top-0 z-40 bg-white backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-red-600 flex items-center justify-center text-white font-bold">SL</div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold">Thế Giới SportLux</div>
              <div className="text-xs text-gray-500">Premium Badminton Gear</div>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/">Trang chủ</Link>
          <Link href="/products">Sản phẩm</Link>
          <Link href="/news">Tin tức</Link>
          <Link href="/about">Giới thiệu</Link>
          <Link href="/contact">Liên hệ</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="search" className="p-2 rounded-lg hover:bg-gray-100">🔍</button>
          <button aria-label="account" className="p-2 rounded-lg hover:bg-gray-100">👤</button>
          <button aria-label="cart" className="relative p-2 rounded-lg hover:bg-gray-100">
            🛒
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">2</span>
          </button>
        </div>
      </div>
    </header>
  )
}
