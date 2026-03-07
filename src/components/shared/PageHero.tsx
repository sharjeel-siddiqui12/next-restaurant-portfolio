'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PageHeroProps {
  label: string
  heading: string
  breadcrumbs: { label: string; href?: string }[]
  image: string
}

export function PageHero({ label, heading, breadcrumbs, image }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <Image src={image} alt={heading} fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0705]/60 via-[#0A0705]/70 to-[#0A0705]" />
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-gold" />
          <span className="font-sans uppercase tracking-[0.3em] text-xs text-gold font-medium">{label}</span>
          <div className="w-8 h-px bg-gold" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-cormorant text-5xl md:text-7xl font-light italic text-cream mb-6"
        >
          {heading}
        </motion.h1>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-sm font-sans"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-dawat-text-muted">→</span>}
              {crumb.href ? (
                <a href={crumb.href} className="text-cream-muted hover:text-gold transition-colors">
                  {crumb.label}
                </a>
              ) : (
                <span className="text-gold">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
      </div>
    </section>
  )
}
