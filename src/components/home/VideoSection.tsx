'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function VideoSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="relative py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=60)' }}
        />
        <div className="absolute inset-0 bg-[#0A0705]/85" />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 150px rgba(10,7,5,0.5)' }} />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <SectionLabel centered>Master Class From Our Chefs</SectionLabel>
          <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-cream mb-6">
            Learn the Secrets of Mughal Cuisine
          </h2>
          <p className="font-sans text-cream-muted/70 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Join our head chef in an exclusive virtual kitchen tour and discover the art of authentic spice blending.
          </p>

          {/* Play button with triple ring */}
          <motion.button
            onClick={() => setOpen(true)}
            className="relative mx-auto w-24 h-24 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Outer pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-gold/20"
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeOut' }}
            />
            {/* Middle ring */}
            <div className="absolute inset-1 rounded-full border border-gold/15" />
            {/* Inner button */}
            <div className="relative w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300">
              <Play className="w-7 h-7 ml-1" />
            </div>
          </motion.button>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-12 right-0 text-white/60 hover:text-gold transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Cooking masterclass"
                className="w-full h-full rounded-xl border border-gold/10"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
