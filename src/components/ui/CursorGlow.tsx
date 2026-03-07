'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  if (typeof window === 'undefined') return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[9998] w-[300px] h-[300px] rounded-full hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
      }}
      animate={{
        x: pos.x - 150,
        y: pos.y - 150,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    />
  )
}
