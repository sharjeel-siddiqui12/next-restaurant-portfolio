'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'

const dishes = [
  { name: 'Dum Pukht Biryani', category: "CHEF'S PICK", price: 'PKR 850', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Nihari Gosht', category: 'SIGNATURE', price: 'PKR 650', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=85' },
  { name: 'Seekh Kebab Platter', category: 'BBQ', price: 'PKR 1,200', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=85' },
  { name: 'Karahi Gosht', category: 'SIGNATURE', price: 'PKR 950', image: 'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Haleem Special', category: 'SEASONAL', price: 'PKR 450', image: 'https://images.unsplash.com/photo-1512010151537-2cf5c638ad51?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
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
    <section className="py-28 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel centered>Today&apos;s Special</SectionLabel>
          <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-cream mb-4">
            Signature Masterpieces
          </h2>
          <p className="font-sans text-cream-muted/70 font-light max-w-xl mx-auto">
            Hand-picked by our chefs \u2014 these are the crown jewels of our kitchen, served with pride and tradition.
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {dishes.slice(3).map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </motion.div>

        {/* Extra menu items - premium dotted list */}
        <div className="luxury-card rounded-xl p-10 lg:p-12">
          <p className="font-sans uppercase tracking-[0.3em] text-[10px] text-gold/60 font-semibold text-center mb-8">
            More From Our Kitchen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {extraItems.map((item) => (
              <div key={item.name} className="flex items-end gap-2 group">
                <span className="font-cormorant text-lg text-cream group-hover:text-gold transition-colors duration-300">{item.name}</span>
                <span className="flex-1 border-b border-dotted border-gold/15 mb-1" />
                <span className="font-cormorant text-lg font-semibold" style={{
                  background: 'linear-gradient(135deg, #E4C46E, #C9A84C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DishCard({ dish }: { dish: typeof dishes[0] }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-xl overflow-hidden cursor-pointer luxury-card"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0705]/95 via-[#0A0705]/30 to-transparent" />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="btn-luxury px-6 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <span>Order Now</span>
          </span>
        </div>
        {/* Inner border on hover */}
        <div className="absolute inset-3 border border-gold/0 group-hover:border-gold/20 rounded-lg transition-all duration-500 pointer-events-none" />
      </div>
      {/* Badge */}
      <span className="absolute top-4 right-4 font-sans text-[9px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #C9A84C, #9A7A2E)', color: '#0A0705' }}>
        {dish.category}
      </span>
      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-cormorant text-2xl font-semibold text-cream mb-1">{dish.name}</h3>
        <span className="font-cormorant text-xl font-semibold" style={{
          background: 'linear-gradient(135deg, #E4C46E, #C9A84C)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>{dish.price}</span>
      </div>
    </motion.div>
  )
}
