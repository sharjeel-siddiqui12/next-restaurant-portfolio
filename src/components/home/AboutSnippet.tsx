'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'

export function AboutSnippet() {
  return (
    <section className="py-28 bg-dawat-section relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.015] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=85"
              alt="Dawat Inn Interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Inner border overlay */}
            <div className="absolute inset-3 border border-gold/10 rounded-lg pointer-events-none" />
          </div>
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 rounded-xl px-7 py-5 shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #9A7A2E 100%)' }}
          >
            <p className="font-cormorant text-3xl font-bold text-[#0A0705]">25+</p>
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#0A0705]/80">Years of<br />Excellence</p>
          </motion.div>
          {/* Decorative corner */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-gold/20 rounded-tl-sm" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-[56px] font-semibold text-cream leading-tight mb-8">
            The Best Place To Eat Is Where The Heart Loves To Cook
          </h2>
          <p className="font-sans text-cream-muted/80 font-light leading-[1.8] mb-5">
            Founded in the heart of Karachi in 1998, Dawat Inn began as a family dream \u2014 to share the authentic
            Mughal-era recipes that had been passed down through generations. From our grandmother&apos;s kitchen
            to the finest dining tables, every dish carries the warmth of home and the grandeur of tradition.
          </p>
          <p className="font-sans text-cream-muted/80 font-light leading-[1.8] mb-8">
            We source only the freshest halal ingredients, grind our own spice blends daily, and slow-cook
            our signature dishes to perfection. At Dawat Inn, we don&apos;t just serve food \u2014 we serve memories.
          </p>

          <GoldDivider />

          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="btn-luxury font-sans uppercase tracking-[0.2em] text-[10px] font-semibold px-10 py-4 rounded-full inline-block"
            >
              <span>Our Story</span>
            </Link>
            <Link
              href="/menu"
              className="btn-luxury-outline font-sans uppercase tracking-[0.2em] text-[10px] font-semibold px-10 py-4 rounded-full inline-block"
            >
              <span>View Menu</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
