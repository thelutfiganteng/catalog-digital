"use client"

import { MessageCircle, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/50 to-muted border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-3">Siap Pesan?</h3>
          <p className="text-muted-foreground mb-6">Hubungi kami sekarang untuk pemesanan katering Anda</p>
          <a
            href="https://wa.me/628983064613"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Hubungi via WhatsApp
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                {/* <span className="text-white font-bold text-lg"></span> */}
              </div>
              <h3 className="font-bold text-lg text-foreground">Dapur Umi Kyana</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Kami menyediakan katering berkualitas dengan menu mingguan yang variatif. Setiap hidangan disiapkan dengan
              cinta dan bahan-bahan terbaik.
            </p>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Informasi</h4>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm">
                <MessageCircle className="text-primary flex-shrink-0" size={18} />
                <a
                  href="https://wa.me/628983064613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +62 898-306-4613
                </a>
              </div>
              <div className="flex gap-3 text-sm">
                <Clock className="text-primary flex-shrink-0" size={18} />
                <span className="text-muted-foreground">Buka Setiap Hari</span>
              </div>
              <div className="flex gap-3 text-sm">
                <MapPin className="text-primary flex-shrink-0" size={18} />
                <span className="text-muted-foreground">Palembang, Sumatera Selatan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Menu</h4>
            <div className="space-y-2 text-sm">
              <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors block">
                Menu Minggu 1
              </a>
              <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors block">
                Menu Minggu 2
              </a>
              <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors block">
                Menu Minggu 3
              </a>
              <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors block">
                Menu Minggu 4
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Dapur Umi Kyana. Dibuat dengan ❤️ untuk Anda.</p>
        </div>
      </div>
    </footer>
  )
}
