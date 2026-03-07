'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function ReservationCTA() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
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
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-dawat-card p-8 md:p-12"
        >
          <SectionLabel>Book a Table</SectionLabel>
          <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-cream mb-8">
            Reserve Your Table
          </h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-green-800/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-cream mb-2">Reservation Confirmed!</h3>
              <p className="font-sans text-sm text-cream-muted">We&apos;ll see you at Dawat Inn.</p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                className="bg-dawat-bg border border-dawat-border rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold/50 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="bg-dawat-bg border border-dawat-border rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold/50 focus:outline-none transition-colors"
              />
              <input
                type="date"
                required
                className="bg-dawat-bg border border-dawat-border rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold/50 focus:outline-none transition-colors"
              />
              <input
                type="time"
                required
                className="bg-dawat-bg border border-dawat-border rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold/50 focus:outline-none transition-colors"
              />
              <select
                required
                className="bg-dawat-bg border border-dawat-border rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold/50 focus:outline-none transition-colors"
                defaultValue=""
              >
                <option value="" disabled>Number of Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3-4">3–4 Guests</option>
                <option value="5-8">5–8 Guests</option>
                <option value="9+">9+ Guests</option>
              </select>
              <input
                type="text"
                placeholder="Special Requests"
                className="bg-dawat-bg border border-dawat-border rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="md:col-span-2 bg-gold text-dawat-bg font-sans font-medium text-sm uppercase tracking-wider py-3.5 rounded-lg hover:bg-gold-light transition-colors"
              >
                Reserve Your Table
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
