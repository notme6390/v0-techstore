import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Laptops & Computers",
    image: "/modern-laptop.png",
    count: "245 products",
  },
  {
    id: 2,
    name: "Smartphones",
    image: "/smartphone-mobile-phone.jpg",
    count: "189 products",
  },
  {
    id: 3,
    name: "Audio & Headphones",
    image: "/headphones-audio-equipment.jpg",
    count: "156 products",
  },
  {
    id: 4,
    name: "Wearables",
    image: "/smartwatch-wearable-device.jpg",
    count: "98 products",
  },
  {
    id: 5,
    name: "Cameras & Photography",
    image: "/camera-photography-equipment.png",
    count: "127 products",
  },
  {
    id: 6,
    name: "Accessories",
    image: "/tech-accessories-cables.jpg",
    count: "312 products",
  },
]

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our extensive collection of tech products organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <div className="group relative h-64 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">{category.name}</h3>
                  <p className="text-white/80 text-sm mt-2">{category.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
