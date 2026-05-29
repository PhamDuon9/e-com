import Image from 'next/image'

const items = [
  { name: 'Vợt cầu lông', icon: '/images/cau_long.png' },
  { name: 'Vợt pickle ball', icon: '/images/pickle_ball.png' },
  { name: 'Phụ kiện', icon: '/images/phu_kien.png' },
]

export default function CategoryIcons() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 -mt-14 relative z-20">

      <div className="
        bg-white
        rounded-2xl
        shadow-md
        px-6
        py-5
      ">

        <div className="
          flex
          items-center
          justify-around
          mb-3
        ">

          {items.map((it) => (
            <button
              key={it.name}
              className="
                group
                flex
                flex-col
                items-center
                transition-all
                duration-300
              "
            >

              {/* icon */}
              <div className="
                w-16
                h-16
                rounded-full
                bg-white
                flex
                items-center
                justify-center
                transition-all
                duration-300
                group-hover:scale-150
              ">
                <Image
                  src={it.icon}
                  alt={it.name}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* text */}
              <span className="
                mt-3
                text-sm
                font-semibold
                text-gray-800
                transition-colors
              ">
                {it.name}
              </span>

            </button>
          ))}

        </div>

      </div>

    </section>
  )
}