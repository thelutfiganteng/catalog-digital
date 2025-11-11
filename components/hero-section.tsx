"use client"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-32 px-4">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground leading-tight">
            Cita Rasa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Istimewa
            </span>{" "}
            untuk Acara{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Istimewa</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Katering berkualitas premium dengan menu mingguan yang bervariasi. Setiap hidangan adalah karya seni kuliner
            yang siap memanjakan lidah Anda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => document.getElementById("menu-carousel")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Lihat Menu
            </button>
            <a
              href="https://wa.me/628983064613"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white border-3 border-primary text-primary font-bold text-lg rounded-full hover:bg-primary/5 transition-all duration-300"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 pt-8 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Tahun Berpengalaman</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Acara Sukses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Kepuasan Pelanggan</div>
            </div>
          </div>
        </div>

        {/* Image Content - Animated */}
        <div className="relative animate-slide-up" style={{ animationDelay: "100ms" }}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <img
              src="/heroMenu2.jpeg"
              alt="Hidangan Spesial Dapur Umi Kiyana"
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay Animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 hover:opacity-100 transition-all duration-500" />

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-white/20 animate-bounce-soft">
              <div className="flex items-center gap-2">
                <div className="text-3xl">⭐</div>
                <div>
                  <div className="font-bold text-lg text-foreground">Rekomendasi Terbaik</div>
                  <div className="text-sm text-muted-foreground">Dipercaya ribuan pelanggan</div>
                </div>
              </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-white/40 rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-20 h-20 border-b-4 border-l-4 border-white/40 rounded-bl-2xl" />
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl animate-float"
            style={{ animationDuration: "6s" }}
          />
          <div
            className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "8s", animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  )
}
