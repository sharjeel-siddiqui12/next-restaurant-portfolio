'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
