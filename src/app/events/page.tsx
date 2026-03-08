'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageHero } from '@/components/shared/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { events } from '@/lib/data/events'
import { Calendar, Clock } from 'lucide-react'

const badgeColors: Record<string, string> = {
  'SOLD OUT': 'bg-crimson text-cream',
  'LIMITED SEATS': 'bg-orange-800 text-cream',
  'BOOK NOW': 'text-dawat-bg',
  'FREE ENTRY': 'bg-green-800 text-cream',
  'SEASONAL': 'bg-dawat-card text-gold border border-gold/30',
}

const services = ['Weddings', 'Corporate Events', 'Birthday Celebrations', 'Mehendi & Dholki', 'Aqiqa & Walima']

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function EventsPage() {
  return (
    <main>
      <PageHero
        label="Events"
        heading="Celebrations & Gatherings"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Events' }]}
        image="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=85"
      />

      {/* Events Grid */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <SectionLabel centered>What&apos;s Coming</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream">
              Upcoming Events
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group luxury-card rounded-xl overflow-hidden"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Inner border on image */}
                  <div className="absolute inset-0 border border-gold/10 pointer-events-none" />
                  {/* Category badge */}
                  <span
                    className="absolute top-4 left-4 font-sans text-[10px] uppercase tracking-[0.15em] font-semibold text-dawat-bg px-3.5 py-1.5 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #E4C46E)' }}
                  >
                    {event.category}
                  </span>
                  {/* Status badge */}
                  <span
                    className={`absolute top-4 right-4 font-sans text-[10px] uppercase tracking-wider font-semibold px-3.5 py-1.5 rounded-full ${badgeColors[event.badge] || 'bg-dawat-card text-cream'}`}
                    style={event.badge === 'BOOK NOW' ? { background: 'linear-gradient(135deg, #C9A84C, #E4C46E)' } : undefined}
                  >
                    {event.badge}
                  </span>
                </div>

                {/* Date bar */}
                <div className="bg-gold/[0.06] px-5 py-3 flex items-center gap-4 border-t border-gold/[0.08]">
                  <span className="flex items-center gap-1.5 font-sans text-xs text-gold">
                    <Calendar className="w-3.5 h-3.5" /> {event.date}
                  </span>
                  <span className="flex items-center gap-1.5 font-sans text-xs text-gold">
                    <Clock className="w-3.5 h-3.5" /> {event.time}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-cormorant text-2xl font-semibold text-cream mb-2">{event.title}</h3>
                  <p className="font-sans text-sm text-cream-muted font-light leading-relaxed mb-5">{event.description}</p>
                  <button className="btn-luxury-outline px-6 py-3 rounded-full">
                    <span className="relative z-10">Register Interest</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Private Events */}
      <section className="relative py-28 bg-dawat-section overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
        <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Private & Corporate</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream leading-tight mb-6">
              Host Your Special Occasion With Us
            </h2>
            <div className="w-16 h-px mb-6" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.6), transparent)' }} />
            <p className="font-sans text-cream-muted font-light leading-relaxed mb-8">
              From intimate family gatherings to grand wedding celebrations, Restaurant offers tailored
              packages with bespoke menus, elegant décor, and impeccable service.
            </p>
            <ul className="space-y-3.5 mb-10">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
                  <span className="font-sans text-cream-muted font-light">{s}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="btn-luxury px-10 py-4 rounded-full inline-block"
            >
              <span className="relative z-10">Plan Your Event</span>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=85"
              alt="Private events"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border border-gold/10 rounded-xl pointer-events-none" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
      </section>
    </main>
  )
}
