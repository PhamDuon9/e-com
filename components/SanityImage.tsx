"use client"
import Image from 'next/image'
import { sanityImageUrl, urlFor } from '../lib/image'

type Props = {
  image: any
  alt?: string
  className?: string
  width?: number
  height?: number
  sizes?: string
}

export default function SanityImage({ image, alt, className, width=600, height=600, sizes }:Props){
  if(!image) return null

  const src = typeof image === 'string' && image.startsWith('http') ? image : sanityImageUrl(image, width)
  const lqip = image?.asset?.metadata?.lqip

  return (
    <Image
      src={src}
      alt={alt || image?.alt || 'Image'}
      width={width}
      height={height}
      sizes={sizes}
      placeholder={lqip? 'blur' : 'empty'}
      blurDataURL={lqip}
      className={className}
    />
  )
}
