"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

export default function HeroSlider(){
  const slides = [
    {title:'Set Vợt cầu lông', src:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80'},
    {title:'Vợt Yonex Astrox', src:'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1600&q=80'},
  ]

  return (
    <div className="my-6">
      <Swiper spaceBetween={20} slidesPerView={1} autoplay={{delay:4500}} loop>
        {slides.map((s, i)=> (
          <SwiperSlide key={i}>
            <div className="relative overflow-hidden h-64 sm:h-96 rounded-xl">
              <Image src={s.src} alt={s.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white max-w-lg">
                <h2 className="text-lg sm:text-3xl font-extrabold tracking-tight">{s.title}</h2>
                <p className="mt-2 text-sm text-white/90">Sản phẩm chính hãng, giá tốt - giao nhanh toàn quốc</p>
                <div className="mt-4">
                  <a href="/products" className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow">Xem sản phẩm</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
