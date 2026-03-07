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
      <section className="sticky top-20 z-30 backdrop-blur-xl border-b border-gold/[0.08]" style={{ background: 'rgba(10,7,5,0.92)', backdropFilter: 'blur(20px) saturate(180%)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative whitespace-nowrap font-sans text-[10px] uppercase tracking-[0.2em] font-semibold px-6 py-2.5 rounded-full transition-all duration-300 ${
                active === cat.id
                  ? 'text-dawat-bg'
                  : 'text-cream-muted hover:text-cream border border-gold/[0.12] hover:border-gold/30'
              }`}
              style={active === cat.id ? { background: 'linear-gradient(135deg, #C9A84C, #E4C46E)' } : undefined}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Grid */}
      <section className="relative py-20 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-gold/[0.015] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative">
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
      <section className="relative py-20 bg-dawat-section overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <SectionLabel centered>Exclusive</SectionLabel>
          <h2 className="font-cormorant text-3xl md:text-5xl font-semibold text-cream mb-4">
            Book a Private Dining Experience
          </h2>
          <div className="w-16 h-px mx-auto mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />
          <p className="font-sans text-cream-muted font-light max-w-xl mx-auto mb-10">
            Enjoy a bespoke 7-course meal prepared tableside by our head chef in our elegant private dining room.
          </p>
          <Link
            href="/contact"
            className="btn-luxury font-sans uppercase tracking-[0.2em] text-[10px] font-semibold px-10 py-4 rounded-full inline-block"
          >
            <span className="relative z-10">Enquire Now</span>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
      </section>
    </main>
  )
}
