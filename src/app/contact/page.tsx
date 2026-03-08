'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/shared/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'

const contactInfo = [
  { icon: MapPin, title: 'Address', lines: ['Karachi, Pakistan'] },
  { icon: Phone, title: 'Phone', lines: ['+92 300 0000000 (Reservations)', '+92 42 0000000 (Office)'] },
  { icon: Mail, title: 'Email', lines: ['info@dawatinn.com', 'reservations@dawatinn.com'] },
  { icon: Clock, title: 'Hours', lines: ['Mon\u2013Thu: 12PM\u201311PM', 'Fri: 2PM\u201312AM', 'Sat\u2013Sun: 11AM\u201312AM'] },
]

const faqs = [
  { q: 'Do I need a reservation?', a: 'While walk-ins are welcome, we highly recommend making a reservation \u2014 especially on weekends and for groups of 5 or more \u2014 to guarantee your preferred seating and timing.' },
  { q: 'Is parking available?', a: 'Yes, we offer complimentary valet parking for all guests. Street parking is also available along Food Street.' },
  { q: 'Is all food halal?', a: 'Absolutely. All our meats are 100% halal certified. We take pride in sourcing from trusted, verified halal suppliers.' },
  { q: 'Can I book for private events?', a: 'Yes! We have a dedicated private dining room and also offer full-restaurant buyouts for large events. Contact our events team for bespoke packages.' },
  { q: 'Is there a dress code?', a: 'We recommend smart casual attire. While there is no strict dress code, we appreciate when guests dress for the occasion \u2014 it adds to the experience.' },
  { q: 'Do you cater for dietary restrictions?', a: 'Yes. Please inform us of any allergies or dietary needs when booking, and our chefs will happily accommodate your requirements.' },
]

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Youtube, label: 'YouTube' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const newErrors: Record<string, boolean> = {}
    if (!data.get('name')) newErrors.name = true
    if (!data.get('email')) newErrors.email = true
    if (!data.get('message')) newErrors.message = true
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  return (
    <main>
      <PageHero
        label="Contact"
        heading="We\u2019d Love To Hear From You"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85"
      />

      {/* Contact Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream leading-tight mb-4">
              Visit Us or Drop a Message
            </h2>
            <div className="w-16 h-px mb-10" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.6), transparent)' }} />

            <div className="space-y-4 mb-10">
              {contactInfo.map((c) => (
                <div key={c.title} className="luxury-card rounded-xl p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0 bg-gold/[0.05]">
                    <c.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-cream mb-1">{c.title}</h3>
                    {c.lines.map((line, i) => (
                      <p key={i} className="font-sans text-sm text-cream-muted font-light">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-dawat-bg transition-all duration-300 bg-gold/[0.03]"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="luxury-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
              <div className="absolute top-0 left-0 h-full w-px" style={{ background: 'linear-gradient(180deg, rgba(201,168,76,0.4), transparent)' }} />
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: 'linear-gradient(270deg, rgba(201,168,76,0.4), transparent)' }} />
              <div className="absolute bottom-0 right-0 h-full w-px" style={{ background: 'linear-gradient(0deg, rgba(201,168,76,0.4), transparent)' }} />
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)' }}>
                    <svg className="w-9 h-9 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-cormorant text-3xl text-cream mb-3">Message Sent!</h3>
                  <p className="font-sans text-sm text-cream-muted font-light max-w-xs mx-auto leading-relaxed">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 font-sans text-xs text-gold/60 hover:text-gold transition-colors uppercase tracking-[0.15em]"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  {/* Form header */}
                  <div className="mb-2">
                    <h3 className="font-cormorant text-2xl md:text-3xl text-cream font-semibold mb-1">Send Us a Message</h3>
                    <p className="font-sans text-sm text-cream-muted/60 font-light">Fields marked with <span className="text-gold">*</span> are required</p>
                  </div>

                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em]">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className={`w-full bg-dawat-bg/60 border ${errors.name ? 'border-crimson-light' : 'border-gold/10 focus:border-gold/40'} rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-cream-muted/30 focus:outline-none focus:ring-1 ${errors.name ? 'focus:ring-crimson-light/30' : 'focus:ring-gold/20'} transition-all duration-300`}
                        onChange={() => setErrors((e) => ({ ...e, name: false }))}
                      />
                      {errors.name && <p className="text-crimson-light text-xs font-sans flex items-center gap-1"><span className="inline-block w-1 h-1 rounded-full bg-crimson-light" />Name is required</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em]">
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full bg-dawat-bg/60 border ${errors.email ? 'border-crimson-light' : 'border-gold/10 focus:border-gold/40'} rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-cream-muted/30 focus:outline-none focus:ring-1 ${errors.email ? 'focus:ring-crimson-light/30' : 'focus:ring-gold/20'} transition-all duration-300`}
                        onChange={() => setErrors((e) => ({ ...e, email: false }))}
                      />
                      {errors.email && <p className="text-crimson-light text-xs font-sans flex items-center gap-1"><span className="inline-block w-1 h-1 rounded-full bg-crimson-light" />Email is required</p>}
                    </div>
                  </div>

                  {/* Phone & Subject row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em]">Phone</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+92 300 0000000"
                        className="w-full bg-dawat-bg/60 border border-gold/10 focus:border-gold/40 rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-cream-muted/30 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em]">Subject</label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        placeholder="General Inquiry"
                        className="w-full bg-dawat-bg/60 border border-gold/10 focus:border-gold/40 rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-cream-muted/30 focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em]">
                      Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className={`w-full bg-dawat-bg/60 border ${errors.message ? 'border-crimson-light' : 'border-gold/10 focus:border-gold/40'} rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-cream-muted/30 focus:outline-none focus:ring-1 ${errors.message ? 'focus:ring-crimson-light/30' : 'focus:ring-gold/20'} transition-all duration-300 resize-none`}
                      onChange={() => setErrors((e) => ({ ...e, message: false }))}
                    />
                    {errors.message && <p className="text-crimson-light text-xs font-sans flex items-center gap-1"><span className="inline-block w-1 h-1 rounded-full bg-crimson-light" />Message is required</p>}
                  </div>

                  {/* Source dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-source" className="font-sans text-xs text-cream-muted uppercase tracking-[0.12em]">How Did You Hear About Us?</label>
                    <select
                      id="contact-source"
                      name="source"
                      className="w-full bg-dawat-bg/60 border border-gold/10 focus:border-gold/40 rounded-lg px-4 py-3 text-sm font-sans text-cream focus:outline-none focus:ring-1 focus:ring-gold/20 transition-all duration-300 appearance-none"
                      defaultValue=""
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23C9A84C' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 6.646a.5.5 0 0 1 .708 0L8 9.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                    >
                      <option value="" disabled className="bg-dawat-bg text-cream-muted">Select an option</option>
                      <option value="google" className="bg-dawat-bg">Google</option>
                      <option value="social" className="bg-dawat-bg">Social Media</option>
                      <option value="friend" className="bg-dawat-bg">Friend / Family</option>
                      <option value="other" className="bg-dawat-bg">Other</option>
                    </select>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent)' }} />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-luxury w-full font-sans font-semibold text-[11px] uppercase tracking-[0.2em] py-4 rounded-lg group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
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

      {/* Map */}
      <section className="relative w-full h-[400px]">
        <div className="absolute top-0 left-0 right-0 h-px z-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.855!2d74.3116!3d31.5788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM0JzQzLjciTiA3NMKwMTgnNDIuMCJF!5e0!3m2!1sen!2s!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location"
        />
        <div className="absolute bottom-0 left-0 right-0 h-px z-10" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
      </section>

      {/* FAQ */}
      <section className="relative py-28 bg-dawat-section overflow-hidden">
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <SectionLabel centered>FAQ</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream">
              Common Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="luxury-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-cormorant text-lg text-cream font-semibold">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gold" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="h-px mb-4" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.15), transparent)' }} />
                        <p className="font-sans text-sm text-cream-muted font-light leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
