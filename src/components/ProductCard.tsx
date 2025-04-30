"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"

interface SizeOption {
  value: string
  label: string
}

interface ProductCardProps {
  title: string
  description: string
  price: number
  image: string
  sizeOptions: SizeOption[]
  defaultSize?: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  image,
  sizeOptions,
  defaultSize = sizeOptions[0]?.value,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(defaultSize)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  return (
    <div className="max-w-xs rounded-3xl bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
      <div className="relative">
        <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-200">
          <Image
            src={image || "/images/HPAS2.jpg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
            priority
          />
        </div>
        <button
          className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-md"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-5 w-5 transition-colors duration-200 ${
              isFavorite ? "fill-rose-500 text-rose-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

        <div className="mt-2 flex flex-wrap gap-2">
          {sizeOptions.map((option) => (
            <button
              key={option.value}
              className={`rounded-full border px-3 py-1 text-sm transition-all duration-200 ${
                selectedSize === option.value
                  ? "bg-orange-100 text-orange-600 border-orange-400"
                  : "bg-gray-100 text-gray-600 border-gray-300"
              }`}
              onClick={() => setSelectedSize(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <p className="mt-3 text-sm text-gray-600">{description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          <button
            className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
