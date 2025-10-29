import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Truck, Shield, Headphones } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">About TechStore India</h1>
          <p className="text-lg text-muted-foreground mt-4">Your trusted destination for premium tech products</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                TechStore India is India's leading online retailer for premium technology products. Founded with a
                mission to make cutting-edge technology accessible to every Indian, we have grown to become a trusted
                name in the tech retail space.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                With over a decade of experience, we pride ourselves on offering authentic products, competitive
                pricing, and exceptional customer service. Our extensive catalog includes laptops, smartphones, tablets,
                accessories, and more from the world's leading brands.
              </p>
              <p className="text-lg text-muted-foreground">
                We are committed to delivering excellence in every aspect of our business, from product selection to
                after-sales support.
              </p>
            </div>
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To empower Indians with access to the latest technology at affordable prices, backed by reliable service
                and genuine products.
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-muted-foreground">
                To be India's most trusted and customer-centric technology retailer, known for quality, reliability, and
                innovation.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-lg border border-border p-6 text-center hover:border-primary transition-colors">
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Free shipping across India with delivery in 3-5 business days
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 text-center hover:border-primary transition-colors">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">100% Authentic</h3>
                <p className="text-muted-foreground text-sm">
                  All products are genuine with official manufacturer warranty
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 text-center hover:border-primary transition-colors">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Easy Returns</h3>
                <p className="text-muted-foreground text-sm">30-day hassle-free return policy on all products</p>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 text-center hover:border-primary transition-colors">
                <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">
                  Dedicated customer support team available round the clock
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-card rounded-lg border border-border p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose TechStore India?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    We offer the best prices in the market with regular discounts and offers
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Wide Selection</h3>
                  <p className="text-muted-foreground">Thousands of products from all major brands in one place</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Secure Payments</h3>
                  <p className="text-muted-foreground">
                    Multiple payment options including Card, UPI, and Cash on Delivery
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Expert Advice</h3>
                  <p className="text-muted-foreground">
                    Our tech experts are always ready to help you choose the right product
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Shop?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our wide range of premium tech products and find exactly what you need
            </p>
            <Link href="/categories">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
