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
    <section className="relative h-[65vh] min-h-[440px] flex items-center justify-center overflow-hidden">
      <Image src={image} alt={heading} fill className="object-cover" priority sizes="100vw" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0705]/50 via-[#0A0705]/70 to-[#0A0705]" />
      {/* Vignette */}
      <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(10,7,5,0.6)' }} />
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Decorative side lines (large screens) */}
      <div className="hidden xl:block absolute left-12 top-1/2 -translate-y-1/2 w-px h-24" style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)' }} />
      <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 w-px h-24" style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)' }} />

      <div className="relative z-10 text-center px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.6))' }} />
          <span
            className="font-sans uppercase tracking-[0.35em] text-[10px] font-semibold"
            style={{ background: 'linear-gradient(135deg, #E4C46E, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            {label}
          </span>
          <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.6), transparent)' }} />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-cormorant text-5xl md:text-7xl font-light italic text-cream mb-8"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
        >
          {heading}
        </motion.h1>

        {/* Decorative diamond */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }} />
          <div className="w-2 h-2 rotate-45 border border-gold/50" />
          <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
        </motion.div>

        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center gap-2 text-sm font-sans"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span className="text-gold/40 text-xs">&#9670;</span>
              )}
              {crumb.href ? (
                <a href={crumb.href} className="text-cream-muted hover:text-gold transition-colors duration-300 tracking-wide">
                  {crumb.label}
                </a>
              ) : (
                <span
                  className="tracking-wide font-medium"
                  style={{ background: 'linear-gradient(135deg, #E4C46E, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </motion.nav>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
    </section>
  )
}
