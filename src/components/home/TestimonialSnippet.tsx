'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { testimonials } from '@/lib/data/testimonials'

export function TestimonialSnippet() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-28 bg-dawat-section relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.015] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel centered>Reviews</SectionLabel>
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
                className="flex-shrink-0 w-[360px] luxury-card rounded-xl p-8 relative"
              >
                <Quote className="w-8 h-8 text-gold/10 absolute top-6 right-6" />
                <p className="font-cormorant text-lg italic text-cream/90 leading-relaxed mb-6 line-clamp-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-5 border-t border-gold/10">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden ring-1 ring-gold/20">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium" style={{
                      background: 'linear-gradient(135deg, #E4C46E, #C9A84C)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>{t.name}</p>
                    <p className="font-sans text-xs text-cream-muted/50">{t.designation}, {t.city}</p>
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
