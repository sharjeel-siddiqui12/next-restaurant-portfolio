'use client'

import Link from 'next/link'
import { Utensils, Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { GoldDivider } from '@/components/ui/GoldDivider'

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
    <footer className="bg-[#080604] border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Utensils className="w-5 h-5 text-gold" />
              <span className="font-cormorant text-2xl font-bold text-gold">Dawat Inn</span>
            </Link>
            <p className="font-sans text-sm text-cream-muted leading-relaxed mb-6">
              Where Every Meal Is a Celebration. Authentic Pakistani Cuisine — Crafted with Tradition, Served with Elegance.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dawat-bg transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-cream-muted hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-cream mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm font-sans text-cream-muted">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                123 Food Street, Old City Lahore, Pakistan
              </li>
              <li className="flex gap-3 text-sm font-sans text-cream-muted">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                +92 300 0000000
              </li>
              <li className="flex gap-3 text-sm font-sans text-cream-muted">
                <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                info@dawatinn.com
              </li>
              <li className="flex gap-3 text-sm font-sans text-cream-muted">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                Mon–Fri: 12PM–11PM<br />Sat–Sun: 11AM–12AM
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-cream mb-6">Stay Updated</h4>
            <p className="font-sans text-sm text-cream-muted mb-4">
              Join 5,000+ food lovers for exclusive offers and events.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-dawat-card border border-dawat-border rounded-lg px-4 py-3 text-sm font-sans text-cream placeholder:text-dawat-text-muted focus:border-gold/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gold text-dawat-bg font-sans font-medium text-sm uppercase tracking-wider py-3 rounded-lg hover:bg-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <GoldDivider />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-dawat-text-muted">
          <p>© 2024 Dawat Inn. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
          <p>Made with ❤️ in Lahore</p>
        </div>
      </div>
    </footer>
  )
}
