import imageUrlBuilder from '@sanity/image-url'
import sanityClient from './sanity'

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

export function sanityImageUrl(source: any, width = 800) {
  return source ? builder.image(source).width(width).auto('format').url() : ''
}