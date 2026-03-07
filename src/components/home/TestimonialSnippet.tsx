'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { testimonials } from '@/lib/data/testimonials'

export function TestimonialSnippet() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 bg-dawat-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Reviews</SectionLabel>
          <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-cream">
            What Our Guests Say
          </h2>
        </div>

        <div ref={ref} className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={isInView ? { x: [0, -600] } : {}}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {[...testimonials.slice(0, 6), ...testimonials.slice(0, 6)].map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="flex-shrink-0 w-[350px] bg-dawat-card rounded-xl p-8 border border-dawat-border"
              >
                <span className="font-cormorant text-[80px] leading-none text-gold/20 block -mb-8">&ldquo;</span>
                <p className="font-cormorant text-lg italic text-cream leading-relaxed mb-6 line-clamp-4">
                  {t.quote}
                </p>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-gold/30">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-gold">{t.name}</p>
                    <p className="font-sans text-xs text-cream-muted">{t.designation}, {t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
