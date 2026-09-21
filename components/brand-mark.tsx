import Link from 'next/link'

/** Shared logo lockup used by the navbar and footer. */
export function BrandMark() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 text-[17px] font-bold tracking-tight"
      aria-label="MitoWiz home"
    >
      <picture>
        <source srcSet="/mitowiz-logo.svg" media="(min-width: 768px)" />
        <img src="/mitowiz-mark.svg" alt="MitoWiz" className="h-[30px] w-auto md:h-[48px]" />
      </picture>
      <span className="sr-only">MitoWiz</span>
    </Link>
  )
}
