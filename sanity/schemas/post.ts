export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'thumbnail', type: 'image' },
    { name: 'content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'category', type: 'string' },
    { name: 'publishedDate', type: 'datetime' }
  ]
}
