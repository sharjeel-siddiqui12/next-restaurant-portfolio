'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Star, Instagram, Facebook } from 'lucide-react'

const chefs = [
  {
    name: 'Ustad Zafar Ahmed',
    title: 'Head Chef · 30 Years Experience',
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
    bio: 'Aisha crafts royal desserts that honour centuries-old traditions — each one a sweet masterpiece.',
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
    <section className="py-24 bg-dawat-section relative overflow-hidden">
      {/* Geometric pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Our Kitchen</SectionLabel>
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
              className="bg-dawat-card rounded-xl p-8 text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-gold/40 ring-offset-4 ring-offset-dawat-card">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-cream mb-1">{chef.name}</h3>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-medium mb-3">{chef.title}</p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="font-sans text-sm text-cream-muted font-light leading-relaxed mb-4">{chef.bio}</p>
              <div className="flex justify-center gap-3">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dawat-bg transition-all duration-300"
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
