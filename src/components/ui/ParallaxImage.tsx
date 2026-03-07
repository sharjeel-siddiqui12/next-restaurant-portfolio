'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
}

export function ParallaxImage({ src, alt, className = '', speed = 0.3 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed])

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div style={{ y }} className="relative w-full h-full">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </motion.div>
    </div>
  )
}
