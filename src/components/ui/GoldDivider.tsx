'use client'

export function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 my-10 ${className}`}>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 100%)' }} />
      <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 0 L16.5 5 L14 4 L11.5 5 Z" fill="#C9A84C" opacity="0.8" />
        <circle cx="6" cy="6" r="1" fill="#C9A84C" opacity="0.4" />
        <circle cx="22" cy="6" r="1" fill="#C9A84C" opacity="0.4" />
        <line x1="0" y1="6" x2="4" y2="6" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
        <line x1="24" y1="6" x2="28" y2="6" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
        <path d="M14 12 L16.5 7 L14 8 L11.5 7 Z" fill="#C9A84C" opacity="0.5" />
      </svg>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.5) 0%, transparent 100%)' }} />
    </div>
  )
}
