'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CalendarDays, Clock, Users, Utensils } from 'lucide-react'

const inputClass =
  'w-full bg-dawat-bg/60 border border-gold/10 focus:border-gold/40 rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-cream-muted/30 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300'

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
          className="bg-dawat-card p-8 md:p-12 lg:p-14 relative overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-px" style={{ background: 'linear-gradient(270deg, rgba(201,168,76,0.3), transparent)' }} />
            <div className="absolute top-0 right-0 h-full w-px" style={{ background: 'linear-gradient(180deg, rgba(201,168,76,0.3), transparent)' }} />
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)' }} />
            <div className="absolute bottom-0 left-0 h-full w-px" style={{ background: 'linear-gradient(0deg, rgba(201,168,76,0.3), transparent)' }} />
          </div>

          <SectionLabel>Book a Table</SectionLabel>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-[44px] font-semibold text-cream mb-3 leading-tight">
            Reserve Your Table
          </h2>
          <p className="font-sans text-sm text-cream-muted/60 mb-10">An unforgettable dining experience awaits.</p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-14"
              >
                <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)' }}>
                  <svg className="w-9 h-9 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-3xl text-cream mb-3">Reservation Confirmed!</h3>
                <p className="font-sans text-sm text-cream-muted/60 max-w-xs mx-auto leading-relaxed">We&apos;ll see you at Restaurant. A confirmation will be sent shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-sans text-xs text-gold/60 hover:text-gold transition-colors uppercase tracking-[0.15em]"
                >
                  Make Another Reservation
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                className="space-y-5"
              >
                {/* Name & Phone row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="res-name" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em] flex items-center gap-1.5">
                      <Utensils className="w-3 h-3 text-gold/50" />
                      Full Name
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="res-phone" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em]">
                      Phone Number
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      placeholder="+92 300 0000000"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Date & Time row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="res-date" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em] flex items-center gap-1.5">
                      <CalendarDays className="w-3 h-3 text-gold/50" />
                      Date
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="res-time" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em] flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-gold/50" />
                      Time
                    </label>
                    <input
                      id="res-time"
                      type="time"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Guests & Special Requests row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="res-guests" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em] flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-gold/50" />
                      Guests
                    </label>
                    <select
                      id="res-guests"
                      required
                      className={`${inputClass} appearance-none`}
                      defaultValue=""
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23C9A84C' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 6.646a.5.5 0 0 1 .708 0L8 9.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                      <option value="" disabled className="bg-dawat-bg text-cream-muted">Select</option>
                      <option value="1" className="bg-dawat-bg">1 Guest</option>
                      <option value="2" className="bg-dawat-bg">2 Guests</option>
                      <option value="3-4" className="bg-dawat-bg">3–4 Guests</option>
                      <option value="5-8" className="bg-dawat-bg">5–8 Guests</option>
                      <option value="9+" className="bg-dawat-bg">9+ Guests</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="res-requests" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em]">
                      Special Requests
                    </label>
                    <input
                      id="res-requests"
                      type="text"
                      placeholder="Allergies, occasion, etc."
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent)' }} />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-luxury font-sans font-semibold text-[11px] uppercase tracking-[0.2em] py-4 rounded-lg group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Reserve Your Table
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
