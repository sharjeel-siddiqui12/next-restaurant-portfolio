'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Star, Instagram, Facebook } from 'lucide-react'

const chefs = [
  {
    name: 'Ustad Zafar Ahmed',
    title: 'Head Chef \u00b7 30 Years Experience',
    bio: 'A culinary legend from Lahore, Ustad Zafar brings the soul of Mughal cuisine to every dish he touches.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
  },
  {
    name: 'Chef Bilal Hussain',
    title: 'Tandoor Specialist',
    bio: 'Master of live-fire cooking, Bilal transforms the simplest ingredients into smoky, aromatic perfection.',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80',
  },
  {
    name: 'Chef Aisha Nawaz',
    title: 'Desserts & Traditional Sweets',
    bio: 'Aisha crafts royal desserts that honour centuries-old traditions \u2014 each one a sweet masterpiece.',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&q=80',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export function ChefSection() {
  return (
    <section className="py-28 bg-dawat-section relative overflow-hidden">
      {/* Geometric pattern bg */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel centered>Our Kitchen</SectionLabel>
          <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-cream">
            Meet Our Master Chefs
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {chefs.map((chef) => (
            <motion.div
              key={chef.name}
              variants={itemVariants}
              className="luxury-card rounded-xl p-10 text-center group transition-all duration-500"
            >
              <div className="relative w-36 h-36 mx-auto mb-8">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border border-gold/20 group-hover:border-gold/40 transition-colors duration-700" style={{ transform: 'scale(1.15)' }} />
                <div className="absolute inset-0 rounded-full border border-gold/10" style={{ transform: 'scale(1.25)' }} />
                <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-gold/30 ring-offset-4 ring-offset-dawat-card">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-cream mb-1">{chef.name}</h3>
              <p
                className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #E4C46E, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {chef.title}
              </p>
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>
              <p className="font-sans text-sm text-cream-muted/70 font-light leading-relaxed mb-6">{chef.bio}</p>
              <div className="flex justify-center gap-3">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-gold/15 flex items-center justify-center text-gold/50 hover:border-gold/40 hover:text-gold hover:bg-gold/5 transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
