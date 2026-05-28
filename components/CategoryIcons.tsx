import Image from 'next/image'

const items = [
  {name:'Vợt cầu lông', icon:'https://images.unsplash.com/photo-1588167107730-0b52b6a2c9b3'},
  {name:'Giày cầu lông', icon:'https://images.unsplash.com/photo-1528701800489-4766f6a6d28f'},
  {name:'Áo cầu lông', icon:'https://images.unsplash.com/photo-1520975910094-3c8f8f3d6f5f'},
  {name:'Phụ kiện', icon:'https://images.unsplash.com/photo-1526178617113-6f0e3b7d2f7f'},
  {name:'Túi & balo', icon:'https://images.unsplash.com/photo-1523381211956-81b2b46a9f9d'},
  {name:'Quần áo', icon:'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f'}
]

export default function CategoryIcons(){
  return (
    <div className="my-6">
      <div className="bg-white rounded-2xl shadow px-4 py-3">
        <div className="max-w-screen-xl mx-auto flex justify-between gap-3 overflow-x-auto">
          {items.map((it)=> (
            <button key={it.name} className="flex-shrink-0 w-36 bg-white rounded-xl border border-gray-100 p-3 flex flex-col items-center gap-2 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
                <img src={it.icon} alt={it.name} className="object-cover w-full h-full" />
              </div>
              <div className="text-sm font-medium">{it.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
