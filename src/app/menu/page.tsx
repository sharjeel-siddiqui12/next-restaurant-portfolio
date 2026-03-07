'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { MenuCard } from '@/components/shared/MenuCard'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { menuItems, categories } from '@/lib/data/menu'
import Link from 'next/link'

export default function MenuPage() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? menuItems : menuItems.filter((item) => item.category === active)

  return (
    <main>
      <PageHero
        label="Our Menu"
        heading="A Symphony of Flavours"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Menu' }]}
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=85"
      />

      {/* Category Tabs */}
      <section className="sticky top-20 z-30 bg-[#0A0705]/95 backdrop-blur-md border-b border-dawat-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative whitespace-nowrap font-sans text-xs uppercase tracking-[0.15em] font-medium px-5 py-2 rounded-full transition-all duration-300 ${
                active === cat.id
                  ? 'bg-gold text-dawat-bg'
                  : 'text-cream-muted hover:text-cream border border-dawat-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
            >
              {filtered.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center font-sans text-cream-muted py-12">No items in this category yet.</p>
          )}
        </div>
      </section>

      {/* Private Dining CTA */}
      <section className="py-16 bg-dawat-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Exclusive</SectionLabel>
          <h2 className="font-cormorant text-3xl md:text-5xl font-semibold text-cream mb-4">
            Book a Private Dining Experience
          </h2>
          <p className="font-sans text-cream-muted font-light max-w-xl mx-auto mb-8">
            Enjoy a bespoke 7-course meal prepared tableside by our head chef in our elegant private dining room.
          </p>
          <Link
            href="/contact"
            className="inline-block font-sans uppercase tracking-[0.15em] text-xs font-medium bg-gold text-dawat-bg px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </main>
  )
}
