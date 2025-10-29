"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

interface ProductCardProps {
  id: number
  name: string
  price: string
  image: string
  category?: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart({ id, name, price, image })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 bg-muted overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-3">
        {category && <p className="text-sm text-accent font-semibold">{category}</p>}
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-primary">{price}</span>
          <Button
            size="sm"
            className={`${
              isAdded ? "bg-green-600 hover:bg-green-600" : "bg-primary hover:bg-primary/90"
            } transition-colors`}
            onClick={handleAddToCart}
          >
            {isAdded ? "Added!" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  )
}
