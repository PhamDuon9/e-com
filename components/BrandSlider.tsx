"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

const brands = [
  { name: 'Yonex', file: 'yonex.png' },
  { name: 'Victor', file: 'victor.png' },
  { name: 'Lining', file: 'lining.jpg' },
  { name: 'Mizuno', file: 'mizuno.png' },
  { name: 'Kawasaki', file: 'kawasaki.jpg' },
]

export default function BrandSlider(){
  return (
    <div className="my-6">
      <Swiper
        spaceBetween={24}
        slidesPerView={5}
        loop
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {brands.map((b)=> (
          <SwiperSlide key={b.name}>
            <div className="bg-white rounded-xl h-24 flex items-center justify-center shadow-sm">
              <Image
                src={`/images/${b.file}`}
                alt={b.name}
                width={160}
                height={80}
                className="object-contain max-h-16"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
