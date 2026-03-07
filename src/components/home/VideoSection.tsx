'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function VideoSection() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=60)' }}
        />
        <div className="absolute inset-0 bg-[#0A0705]/80" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Master Class From Our Chefs</SectionLabel>
          <h2 className="font-cormorant text-4xl md:text-6xl font-semibold text-cream mb-6">
            Learn the Secrets of Mughal Cuisine
          </h2>
          <p className="font-sans text-cream-muted font-light mb-10 max-w-xl mx-auto">
            Join our head chef in an exclusive virtual kitchen tour and discover the art of authentic spice blending.
          </p>
          <motion.button
            onClick={() => setOpen(true)}
            className="mx-auto w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-dawat-bg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ['0 0 0 0 rgba(201,168,76,0.3)', '0 0 0 20px rgba(201,168,76,0)', '0 0 0 0 rgba(201,168,76,0.3)'] }}
            transition={{ boxShadow: { repeat: Infinity, duration: 2 } }}
          >
            <Play className="w-8 h-8 ml-1" />
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
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
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
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Cooking masterclass"
                className="w-full h-full rounded-lg"
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
