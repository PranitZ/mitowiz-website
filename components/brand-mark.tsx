import Link from 'next/link'

/** Shared logo lockup used by the navbar and footer. */
export function BrandMark() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-[17px] font-bold tracking-tight"
      aria-label="MitoWiz home"
    >
      <span
        aria-hidden
        className="relative block h-[26px] w-[26px] shrink-0 rounded-[7px] bg-gradient-to-br from-accent to-[#4C3FD9] after:absolute after:inset-[6px] after:rounded-[3px] after:bg-white/90"
      />
      MitoWiz
    </Link>
  )
}
