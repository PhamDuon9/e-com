import Image from 'next/image'
import SanityImage from './SanityImage'

type Props = {
  title:string
  image:any
  price:number
  oldPrice?:number
  rating?:number
  shopeeLink?:string
}

export default function ProductCard({title,image,price,oldPrice,rating=5,shopeeLink='#'}:Props){
  const isObject = typeof image === 'object' && image !== null

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition ease-out">
      <div className="relative h-44 rounded-lg overflow-hidden mb-4 bg-gray-50 flex items-center justify-center">
        {isObject ? (
          <SanityImage image={image} alt={title} width={300} height={200} className="object-contain p-6" />
        ) : (
          <Image src={String(image)} alt={title} fill className="object-contain p-6" />
        )}
      </div>
      <h3 className="text-sm font-semibold mb-1 text-gray-800">{title}</h3>
      <div className="flex items-center gap-2 text-yellow-500 text-sm mb-3">{'★'.repeat(Math.round(rating))}</div>
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-red-600 font-extrabold text-lg">{price.toLocaleString('vi-VN')} ₫</div>
          {oldPrice && <div className="text-gray-400 text-sm line-through mt-1">{oldPrice.toLocaleString('vi-VN')} ₫</div>}
        </div>
        <a href={shopeeLink} target="_blank" rel="noreferrer" className="bg-black text-white px-4 py-2 rounded-full text-sm shadow">Mua trên Shopee</a>
      </div>
    </div>
  )
}
