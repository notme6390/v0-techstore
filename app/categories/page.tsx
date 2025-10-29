import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Laptops & Computers",
    image: "/modern-laptop.png",
    description: "High-performance laptops and desktop computers for work and gaming",
    productCount: 245,
  },
  {
    id: 2,
    name: "Smartphones",
    image: "/smartphone-mobile-phone.jpg",
    description: "Latest smartphones with cutting-edge technology",
    productCount: 189,
  },
  {
    id: 3,
    name: "Audio & Headphones",
    image: "/headphones-audio-equipment.jpg",
    description: "Premium audio equipment and wireless headphones",
    productCount: 156,
  },
  {
    id: 4,
    name: "Wearables",
    image: "/smartwatch-wearable-device.jpg",
    description: "Smartwatches, fitness trackers, and wearable tech",
    productCount: 98,
  },
  {
    id: 5,
    name: "Cameras & Photography",
    image: "/camera-photography-equipment.png",
    description: "Professional cameras and photography equipment",
    productCount: 127,
  },
  {
    id: 6,
    name: "Accessories",
    image: "/tech-accessories-cables.jpg",
    description: "Essential tech accessories and peripherals",
    productCount: 312,
  },
]

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Shop by Category</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse our extensive collection of tech products organized by category
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.id}`}>
                <div className="group h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <div className="relative h-64 bg-muted overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm font-semibold text-accent">{category.productCount} products</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Browse
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
