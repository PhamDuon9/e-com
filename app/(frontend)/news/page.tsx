export default function NewsPage(){
  const posts = new Array(6).fill(0).map((_,i)=>({title:`Bài viết ${i+1}`, excerpt:'Tóm tắt ngắn gọn...', date:'2026-05-01'}))
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4">Tin tức</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(p=> (
          <article key={p.title} className="bg-white rounded-xl p-4 shadow">
            <div className="h-40 bg-gray-100 rounded mb-3"></div>
            <div className="text-sm text-gray-500">{p.date}</div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.excerpt}</p>
            <a href="#" className="mt-3 inline-block text-red-600">Đọc thêm →</a>
          </article>
        ))}
      </div>
    </div>
  )
}
