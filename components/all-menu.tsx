"use client"

import { useState } from "react"
import MenuCard from "./menu-card"

const allMenuData = [
  {
    id: "all-1",
    name: "Ayam Saos Padang",
    desc: "Daging ayam dengan bumbu rempah pilihan, dimasak matang hingga sempurna",
    price: 25000,
    image: "/ayamSaosPadang.jpg",
  },
  {
    id: "all-2",
    name: "Ayam Cabe Merah",
    desc: "Ayam lezat dengan cabe merah pilihan",
    price: 25000,
    image: "/ayamCabeMerah.jpg",
  },
  {
    id: "all-3",
    name: "Ayam Cabe Hijau",
    desc: "Ayam lezat dengan cabe hijau pilihan",
    price: 25000,
    image: "/ayamSambalHijau.jpg",
  },
  {
    id: "all-4",
    name: "Ayam Suwir",
    desc: "Nasi dengan ayam suwir yang lembut, tepat dimakan hangat",
    price: 25000,
    image: "/ayamSuwir.jpg",
  },
  {
    id: "all-5",
    name: "Nasi Lele Spesial",
    desc: "Nasi dengan lele spesial dan crispy",
    price: 25000,
    image: "/nasiLeleSpesial.jpg",
  },
  {
    id: "all-6",
    name: "Ayam Rendang",
    desc: "Ayam dengan bumbu rendang khas indonesia",
    price: 25000,
    image: "/ayamRendang.jpg",
  },
  {
    id: "all-7",
    name: "Ayam Penyet Lezat",
    desc: "Ayam goreng yang dipenyet dengan sambal matah segar dan lezat",
    price: 25000,
    image: "/ayam-penyet-lezat.jpg",
  },
  {
    id: "all-8",
    name: "Ayam Crispy",
    desc: "Ayam goreng yang renyah dan lezat",
    price: 25000,
    image: "/ayamCrispy.jpg",
  },
  {
    id: "all-9",
    name: "Ayam Betutu Bali",
    desc: "Ayam tradisional yang dibumbui dengan rempah khas Bali, rasa autentik dan lezat",
    price: 50000,
    image: "/ayam-betutu-bali.jpg",
  },
  {
    id: "all-10",
    name: "Ayam Woku Singkong",
    desc: "Ayam dengan irisan singkong yang dimasak dalam woku dengan bumbu kental",
    price: 44000,
    image: "/ayam-woku-singkong.jpg",
  },
  {
    id: "all-11",
    name: "Ayam Bakar Bumbu Kecil",
    desc: "Ayam bakar dengan bumbu kecil yang meresap, nikmat dan tidak terlalu pedas",
    price: 45000,
    image: "/ayam-bakar-bumbu-kecil.jpg",
  },
  {
    id: "all-12",
    name: "Snack Susu Kacang Hijau",
    desc: "Snack dengan tambahan susu kacang hijau yang menggugah selera",
    price: 25000,
    image: "/snackKacangHijau.jpg",
  },
  {
    id: "all-13",
    name: "Ayam Rendang Padang",
    desc: "Ayam dalam rendang yang kental dan gurih dengan rempah tradisional Minangkabau",
    price: 49000,
    image: "/ayam-rendang-padang.jpg",
  },
  {
    id: "all-14",
    name: "Ayam Opor Lezat",
    desc: "Ayam dengan kuah santan yang gurih dan lembut, cocok untuk berbagai acara",
    price: 45000,
    image: "/ayam-opor-lezat.jpg",
  },
  {
    id: "all-15",
    name: "Ayam Taliwang Pedas",
    desc: "Ayam dengan taliwang yang pedas dan gurih, sensasi rasa yang menggugah",
    price: 47000,
    image: "/ayam-taliwang-pedas.jpg",
  },
  {
    id: "all-16",
    name: "Sambal Matah Fresh",
    desc: "Sambal matah segar dengan bawang merah, cabe, dan jeruk nipis",
    price: 12000,
    image: "/sambal-matah.jpg",
  },
  {
    id: "all-17",
    name: "Snack Susu",
    desc: "Snack dengan susu segar yang sangat nikmat",
    price: 25000,
    image: "/SnackSusu.jpg",
  },
  {
    id: "all-19",
    name: "Tahu Goreng Crispy",
    desc: "Tahu goreng dengan kulit yang renyah dan isi yang lembut, sempurna dengan sambal",
    price: 14000,
    image: "/tahu-goreng.jpg",
  },
  {
    id: "all-18",
    name: "Snack Regular",
    desc: "Snack dengan rasa yang nikmat cocok untuk acara",
    price: 25000,
    image: "/snackRegular.jpg",
  },
  {
    id: "all-20",
    name: "Lumpia Goreng Emas",
    desc: "Lumpia dengan isi daging dan sayuran, digoreng hingga berwarna emas keemasan",
    price: 18000,
    image: "/lumpia-goreng.jpg",
  },
]

export default function AllMenu() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newSelected = new Set(selectedItems)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedItems(newSelected)
  }

  const getWhatsAppMessage = () => {
    const items = allMenuData.filter((item) => selectedItems.has(item.id))
    const total = items.reduce((sum, item) => sum + item.price, 0)

    let message = `Halo Dapur Umi Kiyana! 👋\n\n`
    message += `Saya ingin memesan menu berikut:\n\n`

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Rp${item.price.toLocaleString("id-ID")}\n`
    })

    message += `\n*Total: Rp${total.toLocaleString("id-ID")}*\n\n`
    message += `Mohon informasi lebih lanjut dan konfirmasi ketersediaan. Terima kasih!`

    return encodeURIComponent(message)
  }

  const isAnyItemSelected = selectedItems.size > 0

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="all-menu-section">
      {/* Header dengan animasi */}
      <div className="mb-12 text-center animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Seluruh Menu Kami
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Jelajahi semua pilihan hidangan spesial dari Dapur Umi Kiyana. Setiap menu dibuat dengan cinta dan bahan-bahan
          pilihan terbaik.
        </p>
      </div>

      {/* Order Button */}
      {isAnyItemSelected && (
        <div className="mb-8 flex justify-center animate-bounce-soft">
          <a
            href={`https://wa.me/628983064613?text=${getWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-full hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 inline-flex items-center gap-3 text-lg"
          >
            <span>🛒</span>
            Pesan Sekarang via WhatsApp ({selectedItems.size})
          </a>
        </div>
      )}

      {/* Menu Grid dengan stagger animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allMenuData.map((item, index) => (
          <div
            key={item.id}
            className="animate-slide-up"
            style={{
              animationDelay: `${index * 30}ms`,
            }}
          >
            <MenuCard item={item} isSelected={selectedItems.has(item.id)} onToggle={() => toggleItem(item.id)} />
          </div>
        ))}
      </div>
    </section>
  )
}
