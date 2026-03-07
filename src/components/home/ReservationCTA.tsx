'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function ReservationCTA() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="py-28 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gold/5">
        {/* Image */}
        <div className="relative h-64 lg:h-auto min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85"
            alt="Restaurant ambiance"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0705] hidden lg:block" />
          {/* Inner border */}
          <div className="absolute inset-4 border border-gold/10 rounded-lg pointer-events-none hidden lg:block" />
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-dawat-card p-8 md:p-12 lg:p-14"
        >
          <SectionLabel>Book a Table</SectionLabel>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-[44px] font-semibold text-cream mb-3 leading-tight">
            Reserve Your Table
          </h2>
          <p className="font-sans text-sm text-cream-muted/60 mb-10">An unforgettable dining experience awaits.</p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.05))' }}>
                <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-cream mb-2">Reservation Confirmed!</h3>
              <p className="font-sans text-sm text-cream-muted/60">We&apos;ll see you at Dawat Inn.</p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                { type: 'text', placeholder: 'Full Name', required: true },
                { type: 'tel', placeholder: 'Phone Number', required: true },
                { type: 'date', placeholder: '', required: true },
                { type: 'time', placeholder: '', required: true },
              ].map((field, i) => (
                <input
                  key={i}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="bg-dawat-bg/60 border border-gold/10 rounded-lg px-4 py-3.5 text-sm font-sans text-cream placeholder:text-dawat-text-muted/50 focus:border-gold/30 focus:bg-dawat-bg focus:outline-none transition-all duration-300"
                />
              ))}
              <select
                required
                className="bg-dawat-bg/60 border border-gold/10 rounded-lg px-4 py-3.5 text-sm font-sans text-cream focus:border-gold/30 focus:bg-dawat-bg focus:outline-none transition-all duration-300"
                defaultValue=""
              >
                <option value="" disabled>Number of Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3-4">3\u20134 Guests</option>
                <option value="5-8">5\u20138 Guests</option>
                <option value="9+">9+ Guests</option>
              </select>
              <input
                type="text"
                placeholder="Special Requests"
                className="bg-dawat-bg/60 border border-gold/10 rounded-lg px-4 py-3.5 text-sm font-sans text-cream placeholder:text-dawat-text-muted/50 focus:border-gold/30 focus:bg-dawat-bg focus:outline-none transition-all duration-300"
              />
              <button
                type="submit"
                className="md:col-span-2 btn-luxury font-sans font-semibold text-xs uppercase tracking-[0.2em] py-4 rounded-lg"
              >
                <span>Reserve Your Table</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
