import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categoryProducts = {
  1: {
    name: "Laptops & Computers",
    products: [
      { id: 101, name: 'MacBook Pro 16"', price: "$2,499", image: "/silver-macbook-pro-desk.png" },
      { id: 102, name: "Dell XPS 15", price: "$1,899", image: "/dell-xps-laptop.png" },
      { id: 103, name: "Lenovo ThinkPad", price: "$1,299", image: "/lenovo-thinkpad.jpg" },
      { id: 104, name: "ASUS ROG Gaming", price: "$1,799", image: "/asus-rog.jpg" },
    ],
  },
  2: {
    name: "Smartphones",
    products: [
      { id: 201, name: "iPhone 15 Pro", price: "$999", image: "/iphone-15-hands.png" },
      { id: 202, name: "Samsung Galaxy S24", price: "$899", image: "/samsung-galaxy-smartphone.png" },
      { id: 203, name: "Google Pixel 8", price: "$799", image: "/google-pixel-phone.png" },
      { id: 204, name: "OnePlus 12", price: "$699", image: "/oneplus-smartphone.png" },
    ],
  },
  3: {
    name: "Audio & Headphones",
    products: [
      { id: 301, name: "Sony WH-1000XM5", price: "$399", image: "/sony-headphones.png" },
      { id: 302, name: "Bose QuietComfort", price: "$379", image: "/bose-headphones.jpg" },
      { id: 303, name: "Apple AirPods Max", price: "$549", image: "/premium-over-ear-headphones.png" },
      { id: 304, name: "Sennheiser Momentum", price: "$299", image: "/sennheiser.jpg" },
    ],
  },
  4: {
    name: "Wearables",
    products: [
      { id: 401, name: "Apple Watch Ultra", price: "$799", image: "/smartwatch.png" },
      { id: 402, name: "Garmin Epix", price: "$699", image: "/garmin-watch.jpg" },
      { id: 403, name: "Fitbit Sense 2", price: "$299", image: "/fitbit.jpg" },
      { id: 404, name: "Samsung Galaxy Watch", price: "$399", image: "/samsung-smartwatch.png" },
    ],
  },
  5: {
    name: "Cameras & Photography",
    products: [
      { id: 501, name: "Canon EOS R5", price: "$3,899", image: "/canon-camera.jpg" },
      { id: 502, name: "Sony A7R V", price: "$3,498", image: "/classic-sony-camera.png" },
      { id: 503, name: "Nikon Z9", price: "$5,496", image: "/nikon-camera.jpg" },
      { id: 504, name: "DJI Air 3S", price: "$999", image: "/dji-drone.jpg" },
    ],
  },
  6: {
    name: "Accessories",
    products: [
      { id: 601, name: "USB-C Hub Pro", price: "$79.99", image: "/usb-hub.jpg" },
      { id: 602, name: "Wireless Charger", price: "$49.99", image: "/wireless-charger.png" },
      { id: 603, name: "Phone Stand", price: "$29.99", image: "/phone-stand.jpg" },
      { id: 604, name: "Cable Organizer", price: "$19.99", image: "/cable-organizer.png" },
    ],
  },
}

export default function CategoryDetailPage({ params }: { params: { id: string } }) {
  const categoryId = Number.parseInt(params.id)
  const category = categoryProducts[categoryId as keyof typeof categoryProducts]

  if (!category) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground">Category not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-8 md:py-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/categories" className="text-primary hover:text-primary/80 mb-4 inline-block">
            ← Back to Categories
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">{category.name}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
