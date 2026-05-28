export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'thumbnail', type: 'image' },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'description', type: 'text' },
    { name: 'price', type: 'number' },
    { name: 'oldPrice', type: 'number' },
    { name: 'category', type: 'reference', to: [{ type: 'category' }] },
    { name: 'brand', type: 'reference', to: [{ type: 'brand' }] },
    { name: 'specs', type: 'array', of: [{ type: 'object', fields: [{ name: 'key', type: 'string' }, { name: 'value', type: 'string' }] }] },
    { name: 'rating', type: 'number' },
    { name: 'shopeeLink', type: 'url' },
    { name: 'featured', type: 'boolean' },
    { name: 'newArrival', type: 'boolean' }
  ]
}
