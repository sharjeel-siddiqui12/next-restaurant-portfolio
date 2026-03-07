'use client'

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-gold" />
      <span className="font-sans uppercase tracking-[0.3em] text-xs text-gold font-medium">{children}</span>
      <div className="w-8 h-px bg-gold" />
    </div>
  )
}
