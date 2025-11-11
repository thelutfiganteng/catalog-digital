"use client"

import { useEffect } from "react"
import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MenuCarousel from "@/components/menu-carousel"
import MenuGrid from "@/components/menu-grid"
import BestSellerCarousel from "@/components/best-seller-carousel"
import AllMenu from "@/components/all-menu"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  const [activeWeek, setActiveWeek] = useState(1)
  const [activeTab, setActiveTab] = useState<"weekly" | "all">("weekly")

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default

      gsap.registerPlugin(ScrollTrigger)

      // Animate sections on scroll
      const sections = document.querySelectorAll("section")
      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          {
            opacity: 0.8,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              scrub: false,
              markers: false,
            },
          },
        )
      })
    }

    loadGSAP()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Header />
      <HeroSection />

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-white/70 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-4">
            <button
              onClick={() => setActiveTab("weekly")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "weekly"
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              Menu Mingguan
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              Seluruh Menu
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {activeTab === "weekly" ? (
        <>
          <MenuCarousel activeWeek={activeWeek} onWeekChange={setActiveWeek} />
          <MenuGrid week={activeWeek} />
          <BestSellerCarousel />
        </>
      ) : (
        <AllMenu />
      )}

      <AboutSection />

      <Footer />
    </div>
  )
}
