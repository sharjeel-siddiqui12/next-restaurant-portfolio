'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Utensils, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
        animate={{
          backgroundColor: scrolled ? 'rgba(10, 7, 5, 0.95)' : 'rgba(10, 7, 5, 0)',
          borderBottomColor: scrolled ? 'rgba(201, 168, 76, 0.2)' : 'rgba(201, 168, 76, 0)',
        }}
        style={{ borderBottomWidth: '1px', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Utensils className="w-5 h-5 text-gold group-hover:rotate-12 transition-transform" />
            <span className="font-cormorant text-2xl font-bold text-gold">Dawat Inn</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans uppercase tracking-[0.2em] text-xs font-medium transition-colors duration-300 ${
                  pathname === link.href ? 'text-gold' : 'text-cream hover:text-gold'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Reserve Button + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:block font-sans uppercase tracking-[0.15em] text-xs font-medium text-gold border border-gold/40 px-5 py-2.5 rounded-full hover:bg-gold hover:text-dawat-bg transition-all duration-300"
            >
              Reserve
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-cream hover:text-gold transition-colors"
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
            className="fixed inset-0 z-40 bg-[#0A0705]/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`block font-cormorant text-3xl font-light py-3 transition-colors ${
                      pathname === link.href ? 'text-gold' : 'text-cream hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {i < navLinks.length - 1 && (
                    <div className="w-16 h-px bg-gold/20 mx-auto" />
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  className="font-sans uppercase tracking-[0.15em] text-sm font-medium text-dawat-bg bg-gold px-8 py-3 rounded-full"
                >
                  Reserve a Table
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
