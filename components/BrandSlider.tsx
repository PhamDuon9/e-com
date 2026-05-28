"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const brands = ['Yonex','Victor','Lining','Mizuno','Kawasaki']

export default function BrandSlider(){
  return (
    <div className="my-6">
      <Swiper spaceBetween={20} slidesPerView={3} loop>
        {brands.map((b)=> (
          <SwiperSlide key={b}>
            <div className="bg-white rounded-xl h-24 flex items-center justify-center shadow-sm">{b}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
