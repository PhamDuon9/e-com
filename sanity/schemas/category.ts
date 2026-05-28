export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name', maxLength: 96 } },
    { name: 'icon', type: 'image' }
  ]
}
