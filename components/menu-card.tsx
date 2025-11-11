"use client"

import { Check } from "lucide-react"

interface MenuItem {
  id: string
  name: string
  desc: string
  price: number
  image: string
}

interface MenuCardProps {
  item: MenuItem
  isSelected: boolean
  onToggle: () => void
}

export default function MenuCard({ item, isSelected, onToggle }: MenuCardProps) {
  return (
    <div
      onClick={onToggle}
      className={`group rounded-2xl overflow-hidden bg-white border-2 transition-all duration-500 cursor-pointer ${
        isSelected
          ? "border-primary shadow-lg shadow-primary/30 scale-105"
          : "border-border hover:border-primary hover:shadow-lg"
      }`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 bg-muted">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

        {/* Selection Badge */}
        <div
          className={`absolute top-3 right-3 w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center ${
            isSelected
              ? "bg-gradient-to-br from-primary to-accent shadow-lg"
              : "bg-white/80 border-2 border-border group-hover:border-primary"
          }`}
        >
          {isSelected && <Check className="text-primary-foreground" size={18} />}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="font-bold text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {item.name}
        </h4>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.desc}</p>

        {/* Price */}
        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold text-primary">Rp{(item.price / 1000).toFixed(0)}k</span>
          <span className="text-xs text-muted-foreground">per porsi</span>
        </div>
      </div>

      {/* Hover Effect */}
      <div
        className={`h-1 transition-all duration-500 ${
          isSelected
            ? "bg-gradient-to-r from-primary to-accent"
            : "bg-border group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent"
        }`}
      />
    </div>
  )
}
