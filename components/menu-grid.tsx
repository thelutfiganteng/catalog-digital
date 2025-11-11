"use client"

import { useState } from "react"
import MenuCard from "./menu-card"

const menuData = {
  1: [
    {
      id: "w1-1",
      name: "Ayam Saos Padang",
      desc: "Daging ayam dengan bumbu rempah pilihan, dimasak matang hingga sempurna",
      price: 25000,
      image: "/ayamSaosPadang.jpg",
    },
    {
      id: "w1-2",
      name: "Ayam Cabe Merah",
      desc: "Ayam lezat dengan cabe merah pilihan",
      price: 25000,
      image: "/ayamCabeMerah.jpeg",
    },
    {
      id: "w1-3",
      name: "Ayam Cabe Hijau",
      desc: "Ayam lezar dengan cabe hijau pilihan",
      price: 25000,
      image: "/ayamSambalHijau.jpg",
    },
    {
      id: "w1-4",
      name: "Ayam Suwir",
      desc: "Nasi dengan ayam suwir yang lembut, tepat dimakan hangat",
      price: 25000,
      image: "/ayamSuwir.jpg",
    },
  ],
  2: [
    {
      id: "w2-1",
      name: "Nasi Lele Spesial",
      desc: "Nasi dengan lele spesial dan crispy",
      price: 25000,
      image: "/nasiLeleSpesial.jpg",
    },
    {
      id: "w2-2",
      name: "Ayam Rendang",
      desc: "Ayam dengan bumbu rendang khas indonesia",
      price: 25000,
      image: "/ayamRendang.jpeg",
    },
    {
      id: "w2-3",
      name: "Ayam Penyet Lezat",
      desc: "Ayam goreng yang dipenyet dengan sambal matah segar dan lezat",
      price: 46000,
      image: "/ayam-penyet-lezat.jpg",
    },
    {
      id: "w2-4",
      name: "Ayam Crispy",
      desc: "Ayam goreng yang renyah dan lezat",
      price: 25000,
      image: "/ayamCrispy.jpeg",
    },
  ],
  3: [
    {
      id: "w3-1",
      name: "Ayam Betutu Bali",
      desc: "Ayam tradisional yang dibumbui dengan rempah khas Bali, rasa autentik dan lezat",
      price: 50000,
      image: "/ayam-betutu-bali.jpg",
    },
    {
      id: "w3-2",
      name: "Ayam Woku Singkong",
      desc: "Ayam dengan irisan singkong yang dimasak dalam woku dengan bumbu kental",
      price: 44000,
      image: "/ayam-woku-singkong.jpg",
    },
    {
      id: "w3-3",
      name: "Ayam Bakar Bumbu Kecil",
      desc: "Ayam bakar dengan bumbu kecil yang meresap, nikmat dan tidak terlalu pedas",
      price: 45000,
      image: "/ayam-bakar-bumbu-kecil.jpg",
    },
    {
      id: "w3-4",
      name: "Snack Susu Kacang Hijau",
      desc: "Snack dengan tambahan susu kacang hijau yang menggugah selera",
      price: 25000,
      image: "/snackKacangHijau.jpg",
    },
  ],
  4: [
    {
      id: "w4-1",
      name: "Ayam Rendang Padang",
      desc: "Ayam dalam rendang yang kental dan gurih dengan rempah tradisional Minangkabau",
      price: 49000,
      image: "/ayam-rendang-padang.jpg",
    },
    {
      id: "w4-2",
      name: "Ayam Opor Lezat",
      desc: "Ayam dengan kuah santan yang gurih dan lembut, cocok untuk berbagai acara",
      price: 45000,
      image: "/ayam-opor-lezat.jpg",
    },
    {
      id: "w4-3",
      name: "Ayam Taliwang Pedas",
      desc: "Ayam dengan taliwang yang pedas dan gurih, sensasi rasa yang menggugah",
      price: 47000,
      image: "/ayam-taliwang-pedas.jpg",
    },
    {
      id: "w4-4",
      name: "Snack Susu",
      desc: "Snack dengan susu segar yang sangat nikmat",
      price: 25000,
      image: "/SnackSusu.jpg",
    },
  ],
}

interface MenuGridProps {
  week: number
}

export default function MenuGrid({ week }: MenuGridProps) {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())

  const currentMenu = menuData[week as keyof typeof menuData] || menuData[1]

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
    const items = currentMenu.filter((item) => selectedItems.has(item.id))
    const total = items.reduce((sum, item) => sum + item.price, 0)

    let message = `Halo Dapur Umi Kiyana! 👋\n\n`
    message += `Saya ingin memesan menu dari *Minggu ${week}*:\n\n`

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Rp${item.price.toLocaleString("id-ID")}\n`
    })

    message += `\n*Total: Rp${total.toLocaleString("id-ID")}*\n\n`
    message += `Mohon informasi lebih lanjut dan konfirmasi ketersediaan. Terima kasih!`

    return encodeURIComponent(message)
  }

  const isAnyItemSelected = selectedItems.size > 0

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Menu Minggu {week}</h3>
          <p className="text-muted-foreground">Pilih hidangan favorit Anda</p>
        </div>
        {isAnyItemSelected && (
          <div className="animate-slide-up">
            <a
              href={`https://wa.me/628983064613?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 inline-block"
            >
              Pesan via WhatsApp ({selectedItems.size})
            </a>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentMenu.map((item) => (
          <div key={item.id} className="animate-slide-up">
            <MenuCard item={item} isSelected={selectedItems.has(item.id)} onToggle={() => toggleItem(item.id)} />
          </div>
        ))}
      </div>
    </section>
  )
}
