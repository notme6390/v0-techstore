import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Cutting-Edge Tech for Modern Living
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Discover the latest gadgets, electronics, and tech accessories. Premium quality products at competitive
              prices.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/categories">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg">
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg bg-transparent transition-all duration-300 hover:shadow-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-full min-h-96 bg-muted rounded-2xl overflow-hidden flex items-center justify-center animate-slide-in-right">
            <img
              src="/modern-tech-gadgets-display.jpg"
              alt="Tech products showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
