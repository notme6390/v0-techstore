import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const brandProducts = {
  1: {
    name: "Apple",
    products: [
      { id: 1, name: "iPhone 15 Pro", price: "$999", image: "/iphone-15-hands.png" },
      { id: 2, name: 'MacBook Pro 16"', price: "$2,499", image: "/silver-macbook-pro-desk.png" },
      { id: 3, name: "Apple Watch Ultra", price: "$799", image: "/smartwatch.png" },
      { id: 4, name: "iPad Pro", price: "$1,099", image: "/ipad-pro.png" },
    ],
  },
  2: {
    name: "Samsung",
    products: [
      { id: 1, name: "Galaxy S24 Ultra", price: "$1,299", image: "/samsung-galaxy-s24.jpg" },
      { id: 2, name: "Galaxy Tab S10", price: "$799", image: "/samsung-tab.jpg" },
      { id: 3, name: "Galaxy Watch 6", price: "$399", image: "/samsung-watch.jpg" },
      { id: 4, name: "Galaxy Buds Pro", price: "$249", image: "/galaxy-buds.jpg" },
    ],
  },
  3: {
    name: "Sony",
    products: [
      { id: 1, name: "WH-1000XM5 Headphones", price: "$399", image: "/sony-headphones.png" },
      { id: 2, name: "A7R V Camera", price: "$3,498", image: "/classic-sony-camera.png" },
      { id: 3, name: "Xperia 1 V", price: "$1,399", image: "/sony-xperia.jpg" },
      { id: 4, name: "LinkBuds S", price: "$199", image: "/sony-earbuds.jpg" },
    ],
  },
  4: {
    name: "Microsoft",
    products: [
      { id: 1, name: "Surface Laptop 6", price: "$1,299", image: "/placeholder.svg?height=300&width=300" },
      { id: 2, name: "Surface Pro 11", price: "$999", image: "/placeholder.svg?height=300&width=300" },
      { id: 3, name: "Xbox Series X", price: "$499", image: "/placeholder.svg?height=300&width=300" },
      { id: 4, name: "Surface Headphones 2", price: "$249", image: "/placeholder.svg?height=300&width=300" },
    ],
  },
  5: {
    name: "Google",
    products: [
      { id: 1, name: "Pixel 8 Pro", price: "$999", image: "/placeholder.svg?height=300&width=300" },
      { id: 2, name: "Pixel Tablet", price: "$599", image: "/placeholder.svg?height=300&width=300" },
      { id: 3, name: "Pixel Watch 2", price: "$349", image: "/placeholder.svg?height=300&width=300" },
      { id: 4, name: "Pixel Buds Pro", price: "$199", image: "/placeholder.svg?height=300&width=300" },
    ],
  },
  6: {
    name: "Dell",
    products: [
      { id: 1, name: "XPS 15", price: "$1,899", image: "/dell-xps-laptop.png" },
      { id: 2, name: "Inspiron 16", price: "$799", image: "/placeholder.svg?height=300&width=300" },
      { id: 3, name: "Alienware m16", price: "$2,499", image: "/placeholder.svg?height=300&width=300" },
      { id: 4, name: "UltraSharp Monitor", price: "$599", image: "/placeholder.svg?height=300&width=300" },
    ],
  },
  7: {
    name: "Lenovo",
    products: [
      { id: 1, name: "ThinkPad X1", price: "$1,299", image: "/placeholder.svg?height=300&width=300" },
      { id: 2, name: "Yoga 9i", price: "$1,499", image: "/placeholder.svg?height=300&width=300" },
      { id: 3, name: "Legion Pro", price: "$1,899", image: "/placeholder.svg?height=300&width=300" },
      { id: 4, name: "Tab P12 Pro", price: "$699", image: "/placeholder.svg?height=300&width=300" },
    ],
  },
  8: {
    name: "Canon",
    products: [
      { id: 1, name: "EOS R5", price: "$3,899", image: "/placeholder.svg?height=300&width=300" },
      { id: 2, name: "EOS R6 Mark II", price: "$2,499", image: "/placeholder.svg?height=300&width=300" },
      { id: 3, name: "PowerShot G7X", price: "$749", image: "/placeholder.svg?height=300&width=300" },
      { id: 4, name: "RF 24-70mm Lens", price: "$2,299", image: "/placeholder.svg?height=300&width=300" },
    ],
  },
}

export default function BrandDetailPage({ params }: { params: { id: string } }) {
  const brandId = Number.parseInt(params.id)
  const brand = brandProducts[brandId as keyof typeof brandProducts]

  if (!brand) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground">Brand not found</h1>
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
          <Link href="/brands" className="text-primary hover:text-primary/80 mb-4 inline-block">
            ← Back to Brands
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">{brand.name}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brand.products.map((product) => (
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
