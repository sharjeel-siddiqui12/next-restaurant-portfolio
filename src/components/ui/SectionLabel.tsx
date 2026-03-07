'use client'

export function SectionLabel({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}>
      <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
      <span
        className="font-sans uppercase tracking-[0.35em] text-[10px] font-semibold"
        style={{
          background: 'linear-gradient(135deg, #E4C46E 0%, #C9A84C 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {children}
      </span>
      <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
    </div>
  )
}
