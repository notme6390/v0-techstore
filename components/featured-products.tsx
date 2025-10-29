import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Wireless Headphones Pro",
    price: "$299.99",
    image: "/premium-wireless-headphones.png",
    category: "Audio",
  },
  {
    id: 2,
    name: "Smart Watch Ultra",
    price: "$399.99",
    image: "/advanced-smartwatch.jpg",
    category: "Wearables",
  },
  {
    id: 3,
    name: "4K Webcam",
    price: "$199.99",
    image: "/professional-4k-webcam.jpg",
    category: "Cameras",
  },
  {
    id: 4,
    name: "USB-C Hub Pro",
    price: "$79.99",
    image: "/multiport-usb-c-hub.jpg",
    category: "Accessories",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked selection of our best-selling tech products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <Link href="/categories">
            <Button variant="outline" className="px-8 py-6 text-lg bg-transparent">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
