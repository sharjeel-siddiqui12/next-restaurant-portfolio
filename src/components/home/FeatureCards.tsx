'use client'

import { motion } from 'framer-motion'
import { Clock, Phone, Award } from 'lucide-react'

const cards = [
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: ['Mon\u2013Fri: 12PM \u2013 11PM', 'Sat\u2013Sun: 11AM \u2013 12AM'],
  },
  {
    icon: Phone,
    title: 'Reservations',
    lines: ['+92 300 0000000', 'Book a Table Online'],
  },
  {
    icon: Award,
    title: 'Awards',
    lines: ['Best Pakistani Restaurant 2023', 'Zagat Rated'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export function FeatureCards() {
  return (
    <section className="relative -mt-20 z-20 max-w-7xl mx-auto px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={itemVariants}
            className="luxury-card rounded-xl p-10 text-center group transition-all duration-500 relative overflow-hidden"
          >
            {/* Top gold line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
            <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center mx-auto mb-5 group-hover:border-gold/40 transition-colors duration-500">
              <card.icon className="w-6 h-6 text-gold/80 group-hover:text-gold transition-colors duration-500" />
            </div>
            <h3 className="font-cormorant text-2xl font-semibold text-cream mb-3">{card.title}</h3>
            {card.lines.map((line, i) => (
              <p key={i} className="font-sans text-sm text-cream-muted/70">{line}</p>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
