"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCart()
  const [step, setStep] = useState<"shipping" | "payment" | "review">("shipping")
  const [isProcessing, setIsProcessing] = useState(false)

  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "cod">("card")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
  })

  const total = getTotalPrice()
  const tax = total * 0.1
  const finalTotal = total + tax

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-muted-foreground mb-8">Add items to your cart before checking out</p>
            <Link href="/categories">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.zipCode
    ) {
      setStep("payment")
    }
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (paymentMethod === "card") {
      if (formData.cardName && formData.cardNumber && formData.expiryDate && formData.cvv) {
        setStep("review")
      }
    } else if (paymentMethod === "upi") {
      if (formData.upiId) {
        setStep("review")
      }
    } else if (paymentMethod === "cod") {
      setStep("review")
    }
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    clearCart()
    router.push("/thank-you")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Checkout</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              {/* Progress Steps */}
              <div className="flex gap-4 mb-12">
                <div
                  className={`flex-1 pb-4 border-b-2 transition-colors ${
                    step === "shipping" || step === "payment" || step === "review" ? "border-primary" : "border-border"
                  }`}
                >
                  <p className="font-semibold text-foreground">1. Shipping</p>
                </div>
                <div
                  className={`flex-1 pb-4 border-b-2 transition-colors ${
                    step === "payment" || step === "review" ? "border-primary" : "border-border"
                  }`}
                >
                  <p className="font-semibold text-foreground">2. Payment</p>
                </div>
                <div
                  className={`flex-1 pb-4 border-b-2 transition-colors ${
                    step === "review" ? "border-primary" : "border-border"
                  }`}
                >
                  <p className="font-semibold text-foreground">3. Review</p>
                </div>
              </div>

              {/* Shipping Form */}
              {step === "shipping" && (
                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Shipping Address</h2>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">PIN Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                  >
                    Continue to Payment <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              )}

              {/* Payment Form */}
              {step === "payment" && (
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Payment Method</h2>

                    <div className="space-y-3 mb-6">
                      <label
                        className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"
                        style={{ borderColor: paymentMethod === "card" ? "var(--color-primary)" : "" }}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={paymentMethod === "card"}
                          onChange={(e) => setPaymentMethod(e.target.value as "card" | "upi" | "cod")}
                          className="w-4 h-4"
                        />
                        <span className="ml-3 font-semibold text-foreground">Credit/Debit Card</span>
                      </label>

                      <label
                        className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"
                        style={{ borderColor: paymentMethod === "upi" ? "var(--color-primary)" : "" }}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={paymentMethod === "upi"}
                          onChange={(e) => setPaymentMethod(e.target.value as "card" | "upi" | "cod")}
                          className="w-4 h-4"
                        />
                        <span className="ml-3 font-semibold text-foreground">UPI (Google Pay, PhonePe, Paytm)</span>
                      </label>

                      <label
                        className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"
                        style={{ borderColor: paymentMethod === "cod" ? "var(--color-primary)" : "" }}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={paymentMethod === "cod"}
                          onChange={(e) => setPaymentMethod(e.target.value as "card" | "upi" | "cod")}
                          className="w-4 h-4"
                        />
                        <span className="ml-3 font-semibold text-foreground">Cash on Delivery (COD)</span>
                      </label>
                    </div>

                    {/* Card Payment Form */}
                    {paymentMethod === "card" && (
                      <div className="space-y-4 bg-card rounded-lg border border-border p-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Cardholder Name</label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
                            <input
                              type="text"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* UPI Payment Form */}
                    {paymentMethod === "upi" && (
                      <div className="space-y-4 bg-card rounded-lg border border-border p-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">UPI ID</label>
                          <input
                            type="text"
                            name="upiId"
                            value={formData.upiId}
                            onChange={handleInputChange}
                            placeholder="yourname@upi"
                            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                            required
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          You will be redirected to your UPI app to complete the payment
                        </p>
                      </div>
                    )}

                    {/* Cash on Delivery */}
                    {paymentMethod === "cod" && (
                      <div className="bg-card rounded-lg border border-border p-6">
                        <p className="text-foreground font-semibold mb-2">Cash on Delivery</p>
                        <p className="text-muted-foreground">
                          Pay when your order arrives at your doorstep. A small COD charge of ₹50 will be applicable.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 bg-transparent py-6 text-lg"
                      onClick={() => setStep("shipping")}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                    >
                      Review Order <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </form>
              )}

              {/* Review Order */}
              {step === "review" && (
                <form onSubmit={handlePlaceOrder} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Order Review</h2>

                    <div className="bg-card rounded-lg border border-border p-6 mb-6 space-y-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Shipping Address</h3>
                        <p className="text-muted-foreground">
                          {formData.firstName} {formData.lastName}
                        </p>
                        <p className="text-muted-foreground">{formData.address}</p>
                        <p className="text-muted-foreground">
                          {formData.city}, {formData.state} {formData.zipCode}
                        </p>
                      </div>

                      <div className="border-t border-border pt-4">
                        <h3 className="font-semibold text-foreground mb-2">Payment Method</h3>
                        <p className="text-muted-foreground">
                          {paymentMethod === "card" && `Card ending in ${formData.cardNumber.slice(-4)}`}
                          {paymentMethod === "upi" && `UPI: ${formData.upiId}`}
                          {paymentMethod === "cod" && "Cash on Delivery"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 bg-transparent py-6 text-lg"
                      onClick={() => setStep("payment")}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={isProcessing}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg disabled:opacity-50"
                    >
                      {isProcessing ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Order Summary</h2>

                <div className="space-y-3 max-h-96 overflow-y-auto border-b border-border pb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm text-foreground">
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                      <span>₹{(Number.parseFloat(item.price.replace("₹", "")) * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 border-t border-border pt-4">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Tax (10%)</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 flex justify-between text-xl font-bold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
