'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'

export function AboutSnippet() {
  return (
    <section className="py-24 bg-dawat-section">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-gold text-dawat-bg rounded-xl px-6 py-4 shadow-2xl">
            <p className="font-cormorant text-3xl font-bold">25+</p>
            <p className="font-sans text-xs font-medium uppercase tracking-wider">Years of<br />Excellence</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream leading-tight mb-6">
            The Best Place To Eat Is Where The Heart Loves To Cook
          </h2>
          <p className="font-sans text-cream-muted font-light leading-relaxed mb-4">
            Founded in the heart of Lahore in 1998, Dawat Inn began as a family dream — to share the authentic
            Mughal-era recipes that had been passed down through generations. From our grandmother&apos;s kitchen
            to the finest dining tables, every dish carries the warmth of home and the grandeur of tradition.
          </p>
          <p className="font-sans text-cream-muted font-light leading-relaxed mb-6">
            We source only the freshest halal ingredients, grind our own spice blends daily, and slow-cook
            our signature dishes to perfection. At Dawat Inn, we don&apos;t just serve food — we serve memories.
          </p>

          <GoldDivider />

          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="font-sans uppercase tracking-[0.15em] text-xs font-medium bg-gold text-dawat-bg px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors"
            >
              Our Story
            </Link>
            <Link
              href="/menu"
              className="font-sans uppercase tracking-[0.15em] text-xs font-medium text-gold border border-gold/40 px-8 py-3.5 rounded-full hover:bg-gold hover:text-dawat-bg transition-all duration-300"
            >
              View Menu
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
