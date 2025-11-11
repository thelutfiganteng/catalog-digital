"use client"

import { useEffect, useRef, useState } from "react"

interface BestSellerItem {
  id: string
  name: string
  price: number
  image: string
  rating: number
}

const bestSellerData: BestSellerItem[] = [
  {
    id: "bs-1",
    name: "Ayam Cabe Hijau",
    price: 25000,
    image: "/AyamSambalHijau.jpeg",
    rating: 4.9,
  },
  {
    id: "bs-2",
    name: "Ayam Crispy",
    price: 25000,
    image: "/ayamCrispy.jpeg",
    rating: 4.8,
  },
  {
    id: "bs-3",
    name: "Snack dengan Susu",
    price: 25000,
    image: "/SnackSusu.jpeg",
    rating: 4.9,
  },
  {
    id: "bs-6",
    name: "Snack dengan Susu Kacang Hijau",
    price: 25000,
    image: "/snackKacangHijau.jpeg",
    rating: 4.9,
  },
  {
    id: "bs-4",
    name: "Ayam Rendang",
    price: 25000,
    image: "/ayamRendang.jpeg",
    rating: 4.7,
  },
  {
    id: "bs-5",
    name: "Nasi Lele Spesial",
    price: 25000,
    image: "/NasiLeleSpesial.jpeg",
    rating: 4.8,
  },
]

export default function BestSellerCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout>()

  const pauseAutoScroll = () => {
    setIsAutoScroll(false)
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current)
    }
  }

  const resumeAutoScroll = () => {
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsAutoScroll(true)
    }, 8000)
  }

  useEffect(() => {
    if (!isAutoScroll || !scrollRef.current) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          scrollRef.current.scrollLeft += 400
        }
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoScroll])

  const handleManualScroll = (direction: "left" | "right") => {
    pauseAutoScroll()
    resumeAutoScroll()

    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header dengan animasi */}
        <div className="mb-12 text-center animate-slide-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
              Pilihan Favorit Pelanggan
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Best Seller Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nikmati menu pilihan yang paling dicintai oleh pelanggan kami dengan kualitas terbaik dan cita rasa lezat.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Button */}
          <button
            onClick={() => handleManualScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-6 hover:shadow-primary/30"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            onMouseEnter={pauseAutoScroll}
            onMouseLeave={resumeAutoScroll}
            onTouchStart={pauseAutoScroll}
            onTouchEnd={resumeAutoScroll}
          >
            {bestSellerData.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-72 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group/card snap-center h-full flex flex-col hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-b from-primary/10 to-accent/10">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    {/* Best Seller Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce-soft">
                      Best Seller
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <span className="text-yellow-400">★</span>
                      <span className="font-bold text-sm text-foreground">{item.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">{item.name}</h3>

                    <div className="flex-1" />

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Harga</p>
                        <p className="text-2xl font-bold text-primary">Rp{(item.price / 1000).toFixed(0)}K</p>
                      </div>

                      <a
                        href={`https://wa.me/628983064613?text=Halo%20Dapur%20Umi%20Kyana!%20Saya%20ingin%20memesan%20${item.name}%20-%20Rp${item.price.toLocaleString("id-ID")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-primary to-accent text-white p-3 rounded-full hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-110"
                        aria-label={`Order ${item.name}`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.527-3.055 6.694 0 9.221 1.5 1.243 3.645 1.97 5.032 1.97h.004c3.044 0 5.612-1.294 7.021-3.755.711-1.310 1.175-3.054 1.175-4.796 0-.001 0-.001 0-.001 0-5.742-4.671-10.4-10.404-10.4z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => handleManualScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-6 hover:shadow-primary/30"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Auto-scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-8">
          {bestSellerData.map((_, index) => (
            <div key={index} className="h-2 bg-primary/20 rounded-full animate-pulse-soft" style={{ width: "8px" }} />
          ))}
        </div>
      </div>
    </section>
  )
}
