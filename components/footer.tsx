import { BrandMark } from './brand-mark'

const links = [
  { href: '#product', label: 'Product' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#security', label: 'Security' },
  { href: '#company', label: 'Company' },
]

export function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-10">
          <BrandMark />
          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-secondary transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-7">
          <p className="text-[13px] text-tertiary">&copy; 2026 MitoWiz. All rights reserved.</p>
          <a
            href="mailto:hello@mitowiz.com"
            className="text-[13px] text-secondary transition-colors hover:text-foreground"
          >
            hello@mitowiz.com
          </a>
        </div>
      </div>
    </footer>
  )
}
