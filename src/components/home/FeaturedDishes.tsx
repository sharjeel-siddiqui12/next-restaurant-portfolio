'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'

const dishes = [
  { name: 'Dum Pukht Biryani', category: "CHEF'S PICK", price: 'PKR 850', image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800&q=85' },
  { name: 'Nihari Gosht', category: 'SIGNATURE', price: 'PKR 650', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=85' },
  { name: 'Seekh Kebab Platter', category: 'BBQ', price: 'PKR 1,200', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=85' },
  { name: 'Karahi Gosht', category: 'SIGNATURE', price: 'PKR 950', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=85' },
  { name: 'Haleem Special', category: 'SEASONAL', price: 'PKR 450', image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=85' },
]

const extraItems = [
  { name: 'Chicken Biryani', price: 'PKR 650' },
  { name: 'Prawn Biryani', price: 'PKR 950' },
  { name: 'Malai Boti', price: 'PKR 900' },
  { name: 'Mutton Karahi', price: 'PKR 1,200' },
  { name: 'Gulab Jamun', price: 'PKR 200' },
  { name: 'Kashmiri Chai', price: 'PKR 180' },
  { name: 'Mango Lassi', price: 'PKR 180' },
  { name: 'Chapli Kebab', price: 'PKR 600' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export function FeaturedDishes() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Today&apos;s Special</SectionLabel>
          <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-cream mb-4">
            Signature Masterpieces
          </h2>
          <p className="font-sans text-cream-muted font-light max-w-xl mx-auto">
            Hand-picked by our chefs — these are the crown jewels of our kitchen, served with pride and tradition.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
        >
          {dishes.slice(0, 3).map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {dishes.slice(3).map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </motion.div>

        {/* Extra menu items dotted list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
          {extraItems.map((item) => (
            <div key={item.name} className="flex items-end gap-2">
              <span className="font-cormorant text-lg text-cream">{item.name}</span>
              <span className="flex-1 border-b border-dotted border-dawat-border mb-1" />
              <span className="font-cormorant text-lg text-gold font-semibold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DishCard({ dish }: { dish: typeof dishes[0] }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-xl overflow-hidden cursor-pointer"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0705]/90 via-[#0A0705]/30 to-transparent" />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="font-sans uppercase tracking-[0.15em] text-xs font-medium text-dawat-bg bg-gold px-6 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            Order Now
          </span>
        </div>
      </div>
      {/* Badge */}
      <span className="absolute top-4 right-4 font-sans text-[10px] uppercase tracking-wider font-medium bg-gold text-dawat-bg px-3 py-1 rounded-full">
        {dish.category}
      </span>
      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-cormorant text-2xl font-semibold text-cream mb-1">{dish.name}</h3>
        <span className="font-cormorant text-xl text-gold font-semibold">{dish.price}</span>
      </div>
    </motion.div>
  )
}
