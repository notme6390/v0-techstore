import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const brands = [
  {
    id: 1,
    name: "Apple",
    logo: "/apple-logo.png",
    description: "Premium consumer electronics and software",
    productCount: 156,
  },
  {
    id: 2,
    name: "Samsung",
    logo: "/samsung-logo.png",
    description: "Electronics and home appliances",
    productCount: 203,
  },
  {
    id: 3,
    name: "Sony",
    logo: "/sony-logo.png",
    description: "Audio, cameras, and entertainment",
    productCount: 134,
  },
  {
    id: 4,
    name: "Microsoft",
    logo: "/microsoft-logo.png",
    description: "Software and computing devices",
    productCount: 89,
  },
  {
    id: 5,
    name: "Google",
    logo: "/google-logo.png",
    description: "Smartphones, tablets, and smart devices",
    productCount: 76,
  },
  {
    id: 6,
    name: "Dell",
    logo: "/dell-logo.jpg",
    description: "Computers and peripherals",
    productCount: 98,
  },
  {
    id: 7,
    name: "Lenovo",
    logo: "/lenovo-logo.png",
    description: "Laptops and computing solutions",
    productCount: 112,
  },
  {
    id: 8,
    name: "Canon",
    logo: "/canon-logo.jpg",
    description: "Cameras and imaging equipment",
    productCount: 67,
  },
]

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Shop by Brand</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore products from the world's leading tech brands
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link key={brand.id} href={`/brands/${brand.id}`}>
                <div className="group h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="w-20 h-20 object-contain" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{brand.description}</p>
                    <p className="text-xs font-semibold text-accent">{brand.productCount} products</p>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 w-full mt-2">
                    Browse
                  </Button>
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
