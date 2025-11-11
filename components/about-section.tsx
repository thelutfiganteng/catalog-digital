"use client"

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Video Side - Animasi */}
          <div className="relative animate-slide-up">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/10">
            <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group">
              <img
                src="/FotoProfilee.jpg"
                alt="Company Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </div>


            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border-2 border-primary/20 animate-float">
              <div className="text-sm font-bold text-muted-foreground">Pengalaman</div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-xs text-muted-foreground">Tahun Melayani</div>
            </div>
          </div>

          {/* Text Side */}
          <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tentang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Dapur Umi Kiyana
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dapur Umi Kiyana adalah layanan katering terpercaya yang telah melayani berbagai acara spesial selama
                lebih dari 10 tahun. Kami berkomitmen untuk memberikan kualitas terbaik dengan cita rasa autentik yang
                tak terlupakan.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Setiap hidangan kami persiapkan dengan penuh dedikasi, menggunakan bahan-bahan pilihan terbaik dan resep
                tradisional yang telah teruji. Tim chef profesional kami siap memastikan setiap acara Anda berkualitas
                tinggi dan memuaskan.
              </p>

              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm font-semibold text-muted-foreground">Acara Berhasil</div>
                </div>
                <div className="bg-accent/5 rounded-2xl p-4 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm font-semibold text-muted-foreground">Kepuasan Pelanggan</div>
                </div>
              </div>

              <p className="text-base text-muted-foreground italic">
                "Kualitas, Cita Rasa, dan Kepercayaan adalah fondasi kami dalam setiap hidangan yang kami sajikan."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
