"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-24 h-24 text-primary" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Order Confirmed!</h1>

          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been successfully placed and is being processed.
          </p>

          <div className="bg-card rounded-lg border border-border p-8 mb-8 text-left space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="text-2xl font-bold text-foreground">
                #TS-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-sm text-muted-foreground">Estimated Delivery</p>
              <p className="text-lg font-semibold text-foreground">
                {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-sm text-muted-foreground">What's Next?</p>
              <ul className="text-foreground space-y-2 mt-2">
                <li>✓ You will receive a confirmation email shortly</li>
                <li>✓ Track your order in your account dashboard</li>
                <li>✓ We'll notify you when your order ships</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                Continue Shopping
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="bg-transparent px-8 py-6 text-lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
