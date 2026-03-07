'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { MenuItem } from '@/lib/data/menu'

interface MenuCardProps {
  item: MenuItem
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="group flex gap-5 p-5 rounded-xl border border-gold/[0.06] hover:border-gold/20 bg-gradient-to-br from-white/[0.02] to-transparent hover:from-white/[0.04] transition-all duration-500"
    >
      {/* Image with inner border */}
      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="80px" />
        <div className="absolute inset-0 border border-gold/10 rounded-lg pointer-events-none" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-cormorant text-xl text-cream font-semibold group-hover:text-gold transition-colors duration-300">{item.name}</h3>
          </div>
          {/* Dotted leader line + price */}
          <div className="flex items-baseline gap-2 flex-shrink-0">
            <div className="w-12 border-b border-dotted border-gold/20 mb-1 hidden sm:block" />
            <span
              className="font-cormorant text-xl font-bold whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #E4C46E, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              PKR {item.price}
            </span>
          </div>
        </div>
        <p className="font-sans text-sm text-cream-muted font-light mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
        <div className="flex gap-2 mt-2.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] uppercase tracking-wider font-sans font-medium px-2.5 py-0.5 rounded-full ${
                tag === 'bestseller'
                  ? 'bg-crimson/20 text-crimson-light'
                  : tag === 'spicy'
                  ? 'bg-orange-900/20 text-orange-400'
                  : tag === 'chefs-pick'
                  ? 'bg-gold/10 text-gold'
                  : 'bg-green-900/20 text-green-400'
              }`}
            >
              {tag === 'spicy' && '🌶️ '}{tag === 'vegetarian' && '🌿 '}{tag === 'chefs-pick' && '⭐ '}{tag.replace('-', ' ')}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
