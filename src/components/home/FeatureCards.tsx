'use client'

import { motion } from 'framer-motion'
import { Clock, Phone, Award } from 'lucide-react'

const cards = [
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: ['Mon–Fri: 12PM – 11PM', 'Sat–Sun: 11AM – 12AM'],
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
            className="bg-dawat-card border-t-2 border-t-gold rounded-lg p-8 text-center"
          >
            <card.icon className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="font-cormorant text-2xl font-semibold text-cream mb-3">{card.title}</h3>
            {card.lines.map((line, i) => (
              <p key={i} className="font-sans text-sm text-cream-muted">{line}</p>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
