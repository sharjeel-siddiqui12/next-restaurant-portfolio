'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { PageHero } from '@/components/shared/PageHero'
import { Star, Shield, Gem, Landmark } from 'lucide-react'

const timeline = [
  { year: '1998', title: 'Founded in Karachi', description: 'Dawat Inn opened its doors on Food Street, Karachi, with a dream to revive Mughal-era recipes.' },
  { year: '2005', title: 'Expanded to Second Location', description: 'Growing demand led to our second outlet in DHA, bringing fine dining to a new audience.' },
  { year: '2010', title: 'Best Restaurant Award', description: 'Recognized as the Best Pakistani Restaurant by the Karachi Food Authority and Zagat.' },
  { year: '2018', title: 'Launched Catering Services', description: 'Introduced premium wedding and event catering, bringing the Dawat experience to celebrations citywide.' },
  { year: '2024', title: 'International Recognition', description: 'Featured in global food guides and visited by culinary enthusiasts from over 30 countries.' },
]

const values = [
  { icon: Shield, title: 'Authenticity', description: 'Every recipe is rooted in tradition — passed down through generations and preserved with love.' },
  { icon: Gem, title: 'Quality', description: 'We source only the freshest halal ingredients and grind our own spice blends daily.' },
  { icon: Landmark, title: 'Heritage', description: 'Our décor, music, and presentation pay homage to the rich cultural grandeur of the Mughal era.' },
]

const chefs = [
  { name: 'Ustad Zafar Ahmed', title: 'Head Chef', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80' },
  { name: 'Chef Bilal Hussain', title: 'Tandoor Specialist', image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80' },
  { name: 'Chef Aisha Nawaz', title: 'Desserts Expert', image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&q=80' },
  { name: 'Chef Imran Shah', title: 'Biryani Master', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About Us"
        heading="Our Heritage, Your Experience"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85"
      />

      {/* Story Section */}
      <section className="relative py-28 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', alt: 'Interior', mt: '' },
              { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', alt: 'Cuisine', mt: 'mt-8' },
              { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80', alt: 'Grill', mt: '-mt-8' },
              { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', alt: 'Dishes', mt: '' },
            ].map((img, i) => (
              <div key={i} className={`relative aspect-[3/4] rounded-xl overflow-hidden group ${img.mt}`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
                <div className="absolute inset-0 border border-gold/10 rounded-xl pointer-events-none" />
              </div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream leading-tight mb-6">
              A Legacy of Flavour Since 1998
            </h2>
            <div className="w-16 h-px mb-6" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.6), transparent)' }} />
            <p className="font-sans text-cream-muted font-light leading-relaxed mb-4">
              Dawat Inn was born from a simple family belief: that the most magical moments in life happen
              around a shared table. In 1998, on the storied Food Street of Karachi, our founders opened
              a small eatery with recipes inherited from their grandmother — a woman who had learned to cook
              in the kitchens of Mughal-era households.
            </p>
            <p className="font-sans text-cream-muted font-light leading-relaxed mb-4">
              Today, Dawat Inn stands as one of Pakistan&apos;s most celebrated culinary destinations. Our
              commitment to authentic flavours, premium halal ingredients, and an unforgettable dining
              atmosphere has earned us the loyalty of food connoisseurs across the globe.
            </p>
            <p className="font-sans text-cream-muted font-light leading-relaxed">
              Every dish we serve carries the weight of history and the warmth of home — because at
              Dawat Inn, every meal truly is a celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-28 bg-dawat-section overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel centered>Our Journey</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream">
              Milestones That Define Us
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.2), rgba(201,168,76,0.2), transparent)' }} />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-14"
            >
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span
                      className="font-cormorant text-3xl font-bold"
                      style={{ background: 'linear-gradient(135deg, #E4C46E, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                      {item.year}
                    </span>
                    <h3 className="font-cormorant text-xl font-semibold text-cream mt-1">{item.title}</h3>
                    <p className="font-sans text-sm text-cream-muted font-light mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  {/* Glowing dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-gold border-4 border-dawat-section" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-gold/30 animate-ping" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
      </section>

      {/* Values */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <SectionLabel centered>Our Values</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream">
              What We Stand For
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={itemVariants} className="luxury-card rounded-xl p-10 text-center">
                <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center mx-auto mb-6 bg-gold/[0.05]">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-cream mb-3">{value.title}</h3>
                <div className="w-8 h-px mx-auto mb-4" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }} />
                <p className="font-sans text-sm text-cream-muted font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-28 bg-dawat-section overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel centered>Our Team</SectionLabel>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-cream">
              The Faces Behind the Flavour
            </h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {chefs.map((chef) => (
              <motion.div key={chef.name} variants={itemVariants} className="text-center group">
                <div className="relative w-44 h-44 mx-auto mb-6">
                  {/* Triple rings */}
                  <div className="absolute inset-0 rounded-full border border-gold/10" />
                  <div className="absolute inset-1 rounded-full border border-gold/15" />
                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <Image src={chef.image} alt={chef.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="160px" />
                  </div>
                </div>
                <h3 className="font-cormorant text-xl font-semibold text-cream">{chef.name}</h3>
                <p
                  className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold mt-1"
                  style={{ background: 'linear-gradient(135deg, #E4C46E, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {chef.title}
                </p>
                <div className="flex justify-center gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 text-gold fill-gold" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }} />
      </section>

      {/* Mission */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <GoldDivider />
          <blockquote className="font-cormorant text-3xl md:text-5xl font-light italic text-cream leading-snug my-16" style={{ textShadow: '0 2px 20px rgba(201,168,76,0.1)' }}>
            &ldquo;We don&apos;t just serve food, we serve memories&rdquo;
          </blockquote>
          <GoldDivider />
        </div>
      </section>
    </main>
  )
}
