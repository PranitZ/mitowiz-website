import type { ReactNode } from 'react'
import { Reveal } from './reveal'

/**
 * Shared eyebrow + heading + optional description used by every section.
 * Keeps typographic rhythm identical across the page.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <Reveal
      className={`max-w-[640px] ${align === 'center' ? 'mx-auto text-center' : ''} ${className ?? ''}`}
    >
      <p className="font-mono text-[12.5px] uppercase tracking-wider text-secondary">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-[2rem] font-bold leading-[1.12] tracking-[-0.025em] md:text-[2.75rem] lg:text-[3.1rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-[18px] text-pretty text-[16px] leading-relaxed text-secondary md:text-[17px]">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
