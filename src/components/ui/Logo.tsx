'use client'

import Link from 'next/link'

interface LogoProps {
  variant?: 'default' | 'large' | 'footer'
  className?: string
}

export function Logo({ variant = 'default', className = '' }: LogoProps) {
  const sizes = {
    default: { icon: 36, text: 'text-2xl', sub: 'text-[8px]' },
    large: { icon: 52, text: 'text-4xl', sub: 'text-[10px]' },
    footer: { icon: 44, text: 'text-3xl', sub: 'text-[9px]' },
  }
  const s = sizes[variant]

  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      {/* Custom Crest / Monogram Icon */}
      <div className="relative flex items-center justify-center">
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 group-hover:scale-105"
        >
          {/* Outer ornate border */}
          <circle cx="40" cy="40" r="38" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.6" />
          <circle cx="40" cy="40" r="34" stroke="url(#goldGrad)" strokeWidth="0.5" opacity="0.3" />

          {/* Corner ornaments */}
          <path d="M40 4 L42 8 L40 7 L38 8 Z" fill="#C9A84C" opacity="0.8" />
          <path d="M40 76 L42 72 L40 73 L38 72 Z" fill="#C9A84C" opacity="0.8" />
          <path d="M4 40 L8 42 L7 40 L8 38 Z" fill="#C9A84C" opacity="0.8" />
          <path d="M76 40 L72 42 L73 40 L72 38 Z" fill="#C9A84C" opacity="0.8" />

          {/* Inner decorative arch (Mughal-inspired) */}
          <path
            d="M28 52 Q28 28 40 20 Q52 28 52 52"
            stroke="url(#goldGrad)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M32 52 Q32 32 40 25 Q48 32 48 52"
            stroke="url(#goldGrad)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.25"
          />

          {/* Central "D" monogram */}
          <text
            x="40"
            y="46"
            textAnchor="middle"
            dominantBaseline="central"
            className="font-cormorant"
            fill="url(#goldGrad)"
            fontSize="26"
            fontWeight="300"
            fontStyle="italic"
          >
            D
          </text>

          {/* Small star at top of arch */}
          <circle cx="40" cy="18" r="1.5" fill="#C9A84C" opacity="0.7" />

          {/* Bottom decorative line */}
          <line x1="28" y1="54" x2="52" y2="54" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
          <circle cx="40" cy="54" r="1" fill="#C9A84C" opacity="0.5" />

          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="80" y2="80">
              <stop offset="0%" stopColor="#E4C46E" />
              <stop offset="50%" stopColor="#C9A84C" />
              <stop offset="100%" stopColor="#9A7A2E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span
          className={`font-cormorant ${s.text} font-light italic leading-none tracking-wide`}
          style={{
            background: 'linear-gradient(135deg, #E4C46E 0%, #C9A84C 40%, #9A7A2E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Restaurant
        </span>
        <span
          className={`font-sans ${s.sub} uppercase tracking-[0.4em] text-gold/60 mt-0.5 font-medium`}
        >
          Fine Dining
        </span>
      </div>
    </Link>
  )
}
