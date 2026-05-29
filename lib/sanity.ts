import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  apiVersion: '2024-01-01',

  useCdn: false,
})

const builder = (imageUrlBuilder as any).default
  ? (imageUrlBuilder as any).default(sanityClient)
  : imageUrlBuilder(sanityClient)

export const urlFor = (source: any) =>
  source ? builder.image(source).url() : ''

export async function getProducts() {
  const query = `*[_type == "product"] | order(featured desc, publishedAt desc){
    _id,
    title,
    slug,
    price,
    oldPrice,
    rating,
    featured,
    newArrival,
    shopeeLink,
    thumbnail,
    gallery,
    "category": category->name,
    "brand": brand->name
  }`

  try {
    return await sanityClient.fetch(query)
  } catch (err) {
    console.warn('Sanity getProducts failed:', err)
    return []
  }
}

export async function getProductBySlug(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    price,
    oldPrice,
    rating,
    featured,
    newArrival,
    shopeeLink,
    thumbnail,
    gallery,
    description,
    specs,
    "category": category->name,
    "categorySlug": category->slug.current,
    "brand": brand->name,
    "brandSlug": brand->slug.current
  }`

  try {
    return await sanityClient.fetch(query, { slug })
  } catch (err) {
    console.warn('Sanity getProductBySlug failed:', err)
    return null
  }
}

export async function getPosts() {
  const query = `*[_type == "post"] | order(publishedDate desc){
    _id,
    title,
    slug,
    thumbnail,
    publishedDate
  }`

  try {
    return await sanityClient.fetch(query)
  } catch (err) {
    console.warn('Sanity getPosts failed:', err)
    return []
  }
}

export async function getRelatedProducts(
  category: string,
  currentSlug: string
) {
  const query = `
    *[
      _type == "product" &&
      category->name == $category &&
      slug.current != $currentSlug
    ][0...4]{
      _id,
      title,
      slug,
      price,
      oldPrice,
      rating,
      thumbnail
    }
  `

  try {
    return await sanityClient.fetch(query, {
      category,
      currentSlug,
    })
  } catch (err) {
    console.warn('Sanity getRelatedProducts failed:', err)
    return []
  }
}

export default sanityClient