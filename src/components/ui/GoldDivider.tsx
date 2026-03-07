'use client'

export function GoldDivider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/50" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="#C9A84C">
        <polygon points="8,0 10,6 16,6 11,10 13,16 8,12 3,16 5,10 0,6 6,6" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  )
}
