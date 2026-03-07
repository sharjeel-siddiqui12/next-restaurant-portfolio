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
      className="group flex gap-4 p-4 rounded-lg border border-transparent hover:border-l-2 hover:border-l-gold hover:bg-dawat-card/50 transition-all duration-300"
    >
      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="80px" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-cormorant text-xl text-cream font-semibold">{item.name}</h3>
          <span className="font-cormorant text-xl text-gold font-semibold whitespace-nowrap">PKR {item.price}</span>
        </div>
        <p className="font-sans text-sm text-cream-muted mt-1 line-clamp-2">{item.description}</p>
        <div className="flex gap-2 mt-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] uppercase tracking-wider font-sans font-medium px-2 py-0.5 rounded-full ${
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
