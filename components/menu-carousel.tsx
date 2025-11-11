"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const weeks = [
  { week: 1, label: "Minggu 1", color: "from-blue-400 to-blue-600" },
  { week: 2, label: "Minggu 2", color: "from-purple-400 to-purple-600" },
  { week: 3, label: "Minggu 3", color: "from-pink-400 to-pink-600" },
  { week: 4, label: "Minggu 4", color: "from-green-400 to-green-600" },
]

interface MenuCarouselProps {
  activeWeek: number
  onWeekChange: (week: number) => void
}

export default function MenuCarousel({ activeWeek, onWeekChange }: MenuCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("week-carousel")
    if (container) {
      const scrollAmount = 300
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="menu-carousel" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Menu Mingguan</h3>
        <p className="text-muted-foreground">Pilih minggu yang Anda inginkan</p>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div
          id="week-carousel"
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {weeks.map((w) => (
            <button key={w.week} onClick={() => onWeekChange(w.week)} className="snap-center shrink-0">
              <div
                className={`p-6 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                  activeWeek === w.week
                    ? `bg-gradient-to-br ${w.color} text-white shadow-lg shadow-primary/50 scale-110`
                    : "bg-white border-2 border-border text-foreground hover:border-primary"
                }`}
              >
                <div className="text-center">
                  <p className="font-bold text-lg">{w.label}</p>
                  <p className="text-sm opacity-75 mt-1">Pekan {w.week}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all hover:bg-muted z-10"
        >
          <ChevronLeft className="text-primary" size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all hover:bg-muted z-10"
        >
          <ChevronRight className="text-primary" size={20} />
        </button>
      </div>
    </section>
  )
}
