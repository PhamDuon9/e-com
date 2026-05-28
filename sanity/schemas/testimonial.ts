export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'customerName', type: 'string' },
    { name: 'city', type: 'string' },
    { name: 'avatar', type: 'image' },
    { name: 'rating', type: 'number' },
    { name: 'content', type: 'text' }
  ]
}
