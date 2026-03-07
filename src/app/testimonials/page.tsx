'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Play } from 'lucide-react'
import { PageHero } from '@/components/shared/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { testimonials } from '@/lib/data/testimonials'

const sourceColors: Record<string, string> = {
  Google: 'bg-blue-900/20 text-blue-400',
  TripAdvisor: 'bg-green-900/20 text-green-400',
  Facebook: 'bg-indigo-900/20 text-indigo-400',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const ratingBreakdown = [
  { stars: 5, percent: 82 },
  { stars: 4, percent: 12 },
  { stars: 3, percent: 4 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 1 },
]

const videoTestimonials = [
  { name: 'Ahmed & Family', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80' },
  { name: 'Corporate Dinner', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80' },
  { name: 'Wedding Celebration', image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=80' },
]

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero
        label="Testimonials"
        heading="Words That Warm Our Hearts"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]}
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
      />

      {/* Masonry Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={itemVariants}
                className="break-inside-avoid bg-dawat-card rounded-xl p-6 border border-dawat-border"
              >
                <span className="font-cormorant text-[60px] leading-none text-gold/20 block -mb-6">&ldquo;</span>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                  {Array.from({ length: 5 - t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-dawat-border" />
                  ))}
                </div>
                <p className="font-cormorant text-lg italic text-cream leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-gold/30">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-sm font-medium text-gold">{t.name}</p>
                    <p className="font-sans text-xs text-cream-muted">{t.designation} · {t.city} · {t.date}</p>
                  </div>
                  <span className={`font-sans text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded-full ${sourceColors[t.source] || 'bg-dawat-border text-cream-muted'}`}>
                    {t.source}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-24 bg-dawat-section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Overall Rating</SectionLabel>
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="font-cormorant text-7xl font-bold text-gold">4.9</span>
            <span className="font-cormorant text-2xl text-cream-muted">/5</span>
          </div>
          <div className="flex justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-gold fill-gold" />
            ))}
          </div>
          <p className="font-sans text-cream-muted mb-10">Based on 2,400+ reviews</p>

          <div className="space-y-3 max-w-md mx-auto">
            {ratingBreakdown.map((r) => (
              <div key={r.stars} className="flex items-center gap-3">
                <span className="font-sans text-sm text-cream-muted w-8">{r.stars}★</span>
                <div className="flex-1 bg-dawat-card rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gold rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${r.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
                <span className="font-sans text-sm text-cream-muted w-10 text-right">{r.percent}%</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-10">
            {['Google', 'TripAdvisor', 'Facebook'].map((source) => (
              <span key={source} className="font-sans text-xs uppercase tracking-wider text-cream-muted">{source}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Video Reviews</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream">
              Hear From Our Guests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((v) => (
              <div key={v.name} className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
                <Image src={v.image} alt={v.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="33vw" />
                <div className="absolute inset-0 bg-[#0A0705]/50 group-hover:bg-[#0A0705]/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center bg-[#0A0705]/40 group-hover:bg-gold group-hover:text-dawat-bg text-gold transition-all duration-300">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
                <p className="absolute bottom-4 left-4 font-sans text-sm text-cream font-medium">{v.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />
    </main>
  )
}
