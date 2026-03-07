'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=1920&q=90',
    label: 'Est. 1998 · Lahore, Pakistan',
    heading: 'A Feast Fit\nFor Royalty',
    sub: 'Explore our signature royal dining experience — where centuries-old recipes meet contemporary luxury.',
  },
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=90',
    label: 'Premium Fine Dining',
    heading: 'Where Tradition\nMeets Elegance',
    sub: 'Step into a world of warm hospitality, handcrafted flavours, and unforgettable moments.',
  },
  {
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&q=90',
    label: 'From Our Tandoor',
    heading: 'The Art of\nAuthentic Flavours',
    sub: 'Live-fire grilling, smoky aromas, and spice blends passed down through generations.',
  },
]

const contentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            fill
            alt=""
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0705]/30 via-[#0A0705]/50 to-[#0A0705]" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="font-sans uppercase tracking-[0.3em] text-xs text-gold font-medium">
                {slides[current].label}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-cormorant text-5xl sm:text-7xl lg:text-[100px] font-light italic text-cream leading-[1.05] mb-6 whitespace-pre-line"
            >
              {slides[current].heading}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base md:text-lg text-cream-muted max-w-xl mb-8 font-light"
            >
              {slides[current].sub}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="font-sans uppercase tracking-[0.15em] text-xs font-medium bg-gold text-dawat-bg px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors duration-300"
              >
                View Menu
              </Link>
              <Link
                href="/contact"
                className="font-sans uppercase tracking-[0.15em] text-xs font-medium text-gold border border-gold/40 px-8 py-3.5 rounded-full hover:bg-gold hover:text-dawat-bg transition-all duration-300"
              >
                Reserve a Table
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current ? 'w-8 bg-gold' : 'w-2 bg-cream/30 hover:bg-cream/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-6 h-6 text-gold/50" />
      </motion.div>
    </section>
  )
}
