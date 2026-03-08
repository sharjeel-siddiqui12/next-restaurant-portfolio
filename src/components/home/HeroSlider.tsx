'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Est. 1998 \u00b7 Karachi, Pakistan',
    heading: 'A Feast Fit\nFor Royalty',
    sub: 'Explore our signature royal dining experience \u2014 where centuries-old recipes meet contemporary luxury.',
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0705]/40 via-[#0A0705]/50 to-[#0A0705]" />
          {/* Vignette effect */}
          <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(10,7,5,0.6)' }} />
        </motion.div>
      </AnimatePresence>

      {/* Side decorative lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-gold/30" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-gold/30" />
      </div>

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
              <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
              <span
                className="font-sans uppercase tracking-[0.35em] text-[10px] font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #E4C46E, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {slides[current].label}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-cormorant text-5xl sm:text-7xl lg:text-[100px] font-light italic text-cream leading-[1.05] mb-6 whitespace-pre-line"
              style={{ textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}
            >
              {slides[current].heading}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base md:text-lg text-cream-muted/80 max-w-xl mb-10 font-light leading-relaxed"
            >
              {slides[current].sub}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="btn-luxury font-sans uppercase tracking-[0.2em] text-[10px] font-semibold px-10 py-4 rounded-full inline-block"
              >
                <span>View Menu</span>
              </Link>
              <Link
                href="/contact"
                className="btn-luxury-outline font-sans uppercase tracking-[0.2em] text-[10px] font-semibold px-10 py-4 rounded-full inline-block"
              >
                <span>Reserve a Table</span>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current ? 'w-10 h-2 bg-gradient-to-r from-gold to-gold-light' : 'w-2 h-2 bg-cream/20 hover:bg-cream/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold/40">Scroll</span>
        <ChevronDown className="w-4 h-4 text-gold/40" />
      </motion.div>
    </section>
  )
}
