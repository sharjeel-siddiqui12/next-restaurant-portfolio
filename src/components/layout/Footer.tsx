'use client'

import Link from 'next/link'
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { Logo } from '@/components/ui/Logo'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Menu', href: '/menu' },
  { label: 'Events', href: '/events' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="relative bg-[#060503] overflow-hidden">
      {/* Top gold accent */}
      <div className="h-px gold-line" />

      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.02] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
        {/* Top section - Logo centered */}
        <div className="flex justify-center mb-16">
          <Logo variant="footer" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <p className="font-sans text-sm text-cream-muted/80 leading-relaxed mb-8">
              Where Every Meal Is a Celebration. Authentic Pakistani Cuisine — Crafted with Tradition, Served with Elegance.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center text-gold/70 hover:border-gold/60 hover:text-gold hover:bg-gold/5 transition-all duration-400"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-cream mb-8 flex items-center gap-3">
              <span className="w-6 h-px bg-gold/40" />
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-cream-muted/70 hover:text-gold hover:pl-2 transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-cream mb-8 flex items-center gap-3">
              <span className="w-6 h-px bg-gold/40" />
              Contact Info
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-3 text-sm font-sans text-cream-muted/70">
                <MapPin className="w-4 h-4 text-gold/60 flex-shrink-0 mt-0.5" />
                Karachi, Pakistan
              </li>
              <li className="flex gap-3 text-sm font-sans text-cream-muted/70">
                <Phone className="w-4 h-4 text-gold/60 flex-shrink-0 mt-0.5" />
                +92 300 0000000
              </li>
              <li className="flex gap-3 text-sm font-sans text-cream-muted/70">
                <Mail className="w-4 h-4 text-gold/60 flex-shrink-0 mt-0.5" />
                info@dawatinn.com
              </li>
              <li className="flex gap-3 text-sm font-sans text-cream-muted/70">
                <Clock className="w-4 h-4 text-gold/60 flex-shrink-0 mt-0.5" />
                Mon–Fri: 12PM–11PM<br />Sat–Sun: 11AM–12AM
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-cream mb-8 flex items-center gap-3">
              <span className="w-6 h-px bg-gold/40" />
              Stay Updated
            </h4>
            <p className="font-sans text-sm text-cream-muted/70 mb-5">
              Join 5,000+ food lovers for exclusive offers and events.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-dawat-card/60 border border-gold/10 rounded-lg px-4 py-3.5 text-sm font-sans text-cream placeholder:text-dawat-text-muted/60 focus:border-gold/30 focus:bg-dawat-card focus:outline-none transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full btn-luxury py-3.5 rounded-lg"
              >
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        <GoldDivider />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-dawat-text-muted/60">
          <p>© {new Date().getFullYear()} Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <span className="text-gold/20">|</span>
            <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
          </div>
          {/* <p className="flex items-center gap-1.5">Crafted with <span className="text-crimson-light">♥</span> in Lahore</p> */}
        </div>
      </div>
    </footer>
  )
}
