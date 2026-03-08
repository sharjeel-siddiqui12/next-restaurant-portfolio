'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/ui/Logo'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Events', href: '/events' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        animate={{
          backgroundColor: scrolled ? 'rgba(10, 7, 5, 0.97)' : 'rgba(10, 7, 5, 0)',
          borderBottomColor: scrolled ? 'rgba(201, 168, 76, 0.12)' : 'rgba(201, 168, 76, 0)',
        }}
        style={{
          borderBottomWidth: '1px',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        }}
      >
        {/* Top gold accent line */}
        <div className="h-px gold-line" />

        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-22 flex items-center justify-between py-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans uppercase tracking-[0.25em] text-[11px] font-medium transition-colors duration-300 py-2 ${
                  pathname === link.href ? 'text-gold' : 'text-cream/80 hover:text-gold'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Reserve Button + Mobile Toggle */}
          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="hidden md:block btn-luxury-outline px-7 py-3 rounded-full"
            >
              <span>Reserve a Table</span>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-cream/80 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 backdrop-blur-2xl flex flex-col items-center justify-center"
            style={{ background: 'linear-gradient(180deg, rgba(10,7,5,0.99) 0%, rgba(15,13,9,0.99) 100%)' }}
          >
            {/* Decorative corner ornaments */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-gold/20" />
            <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-gold/20" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-gold/20" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-gold/20" />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              <Logo variant="large" />
            </motion.div>

            <nav className="flex flex-col items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`block font-cormorant text-3xl font-light italic py-3 transition-colors ${
                      pathname === link.href ? 'text-gold-gradient' : 'text-cream/70 hover:text-gold'
                    }`}
                    style={pathname === link.href ? {
                      background: 'linear-gradient(135deg, #E4C46E, #C9A84C)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    } : undefined}
                  >
                    {link.label}
                  </Link>
                  {i < navLinks.length - 1 && (
                    <div className="w-16 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }} />
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + navLinks.length * 0.06 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="btn-luxury px-10 py-4 rounded-full inline-block"
                >
                  <span>Reserve a Table</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
