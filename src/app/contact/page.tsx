'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, ChevronDown } from 'lucide-react'
import { PageHero } from '@/components/shared/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'

const contactInfo = [
  { icon: MapPin, title: 'Address', lines: ['123 Food Street, Old City', 'Lahore, Pakistan'] },
  { icon: Phone, title: 'Phone', lines: ['+92 300 0000000 (Reservations)', '+92 42 0000000 (Office)'] },
  { icon: Mail, title: 'Email', lines: ['info@dawatinn.com', 'reservations@dawatinn.com'] },
  { icon: Clock, title: 'Hours', lines: ['Mon–Thu: 12PM–11PM', 'Fri: 2PM–12AM', 'Sat–Sun: 11AM–12AM'] },
]

const faqs = [
  { q: 'Do I need a reservation?', a: 'While walk-ins are welcome, we highly recommend making a reservation — especially on weekends and for groups of 5 or more — to guarantee your preferred seating and timing.' },
  { q: 'Is parking available?', a: 'Yes, we offer complimentary valet parking for all guests. Street parking is also available along Food Street.' },
  { q: 'Is all food halal?', a: 'Absolutely. All our meats are 100% halal certified. We take pride in sourcing from trusted, verified halal suppliers.' },
  { q: 'Can I book for private events?', a: 'Yes! We have a dedicated private dining room and also offer full-restaurant buyouts for large events. Contact our events team for bespoke packages.' },
  { q: 'Is there a dress code?', a: 'We recommend smart casual attire. While there is no strict dress code, we appreciate when guests dress for the occasion — it adds to the experience.' },
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
        heading="We&rsquo;d Love To Hear From You"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85"
      />

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream leading-tight mb-10">
              Visit Us or Drop a Message
            </h2>

            <div className="space-y-6 mb-10">
              {contactInfo.map((c) => (
                <div key={c.title} className="flex gap-4 bg-dawat-card rounded-xl p-5">
                  <c.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-sans text-sm font-medium text-cream mb-1">{c.title}</h3>
                    {c.lines.map((line, i) => (
                      <p key={i} className="font-sans text-sm text-cream-muted">{line}</p>
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
                  className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dawat-bg transition-all duration-300"
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
            className="bg-dawat-card rounded-2xl p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-green-800/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-2xl text-cream mb-2">Message Sent!</h3>
                <p className="font-sans text-sm text-cream-muted">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className={`w-full bg-transparent border-b ${errors.name ? 'border-crimson-light' : 'border-dawat-border'} px-0 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold focus:outline-none transition-colors`}
                    onChange={() => setErrors((e) => ({ ...e, name: false }))}
                  />
                  {errors.name && <p className="text-crimson-light text-xs mt-1 font-sans">Name is required</p>}
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className={`w-full bg-transparent border-b ${errors.email ? 'border-crimson-light' : 'border-dawat-border'} px-0 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold focus:outline-none transition-colors`}
                    onChange={() => setErrors((e) => ({ ...e, email: false }))}
                  />
                  {errors.email && <p className="text-crimson-light text-xs mt-1 font-sans">Email is required</p>}
                </div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-dawat-border px-0 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold focus:outline-none transition-colors"
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-dawat-border px-0 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold focus:outline-none transition-colors"
                />
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    className={`w-full bg-transparent border-b ${errors.message ? 'border-crimson-light' : 'border-dawat-border'} px-0 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold focus:outline-none transition-colors resize-none`}
                    onChange={() => setErrors((e) => ({ ...e, message: false }))}
                  />
                  {errors.message && <p className="text-crimson-light text-xs mt-1 font-sans">Message is required</p>}
                </div>
                <select
                  name="source"
                  className="w-full bg-transparent border-b border-dawat-border px-0 py-3 text-sm font-sans text-cream focus:border-gold focus:outline-none transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>How Did You Hear About Us?</option>
                  <option value="google">Google</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend / Family</option>
                  <option value="other">Other</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-gold text-dawat-bg font-sans font-medium text-sm uppercase tracking-wider py-3.5 rounded-lg hover:bg-gold-light transition-colors mt-4"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.855!2d74.3116!3d31.5788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM0JzQzLjciTiA3NMKwMTgnNDIuMCJF!5e0!3m2!1sen!2s!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dawat Inn Location"
        />
      </section>

      {/* FAQ */}
      <section className="py-24 bg-dawat-section">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream">
              Common Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-dawat-card rounded-xl border border-dawat-border overflow-hidden">
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
