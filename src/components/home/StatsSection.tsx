'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 150, suffix: '+', label: 'Signature Dishes' },
  { value: 50000, suffix: '+', label: 'Happy Guests' },
  { value: 12, suffix: '', label: 'Master Chefs' },
]

function formatNumber(n: number): string {
  if (n >= 1000) return n.toLocaleString()
  return n.toString()
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {formatNumber(count)}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=60)' }}
      />
      <div className="absolute inset-0 bg-[#0A0705]/92" />
      {/* Top and bottom gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center relative group">
              <p
                className="font-cormorant text-5xl md:text-7xl lg:text-[90px] font-semibold leading-none mb-3"
                style={{
                  background: 'linear-gradient(180deg, #E4C46E 0%, #C9A84C 60%, #9A7A2E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-sans text-xs text-cream-muted/60 uppercase tracking-[0.25em] font-medium">{stat.label}</p>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
