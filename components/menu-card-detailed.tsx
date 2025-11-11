"use client"

import type React from "react"

import { Star } from "lucide-react"

interface MenuItem {
  id: string
  name: string
  desc: string
  price: number
  image: string
  rating?: number
}

interface MenuCardDetailedProps {
  item: MenuItem
  showBuyButton?: boolean
}

export default function MenuCardDetailed({ item, showBuyButton = true }: MenuCardDetailedProps) {
  const rating = item.rating || (Math.random() * 1 + 4).toFixed(1)

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const message = `Halo Dapur Umi Kyana! 👋\n\nSaya ingin memesan:\n${item.name} - Rp${item.price.toLocaleString("id-ID")}\n\nMohon informasi lebih lanjut. Terima kasih!`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/628983064613?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="group rounded-3xl overflow-hidden bg-white border-2 border-border hover:border-primary transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-primary/20">
      {/* Image Container */}
      <div className="relative overflow-hidden h-56 bg-gradient-to-br from-primary/5 to-accent/5">
        <img
          src={item.image || "/placeholder.svg?height=224&width=224&query=makanan katering"}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-bold text-sm text-foreground">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {item.name}
        </h3>

        {/* Deskripsi */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-foreground/80 transition-colors">
          {item.desc}
        </p>

        {/* Rating Stars Visual */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(Number(rating)) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Price Section */}
        <div className="flex items-end justify-between mb-4 pb-4 border-b border-border">
          <div>
            <span className="text-xs text-muted-foreground block mb-1">Harga per Porsi</span>
            <span className="text-2xl font-bold text-primary">Rp{(item.price / 1000).toFixed(0)}k</span>
          </div>
        </div>

        {showBuyButton && (
          <a
            href="#"
            onClick={handleWhatsAppClick}
            className="inline-block text-primary font-semibold hover:text-accent transition-colors duration-300 hover:underline"
          >
            Beli Sekarang →
          </a>
        )}
      </div>
    </div>
  )
}
