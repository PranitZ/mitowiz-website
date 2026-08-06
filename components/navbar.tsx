'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BrandMark } from './brand-mark'
import { CloseIcon, MenuIcon } from './icons'
import { EASE } from './reveal'

const links = [
  { href: '#product', label: 'Product' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#security', label: 'Security' },
  { href: '#company', label: 'Company' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape for keyboard users.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? 'border-line bg-bg/90' : 'border-transparent bg-bg/70'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 md:px-8">
        <BrandMark />

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14.5px] text-secondary transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://cal.com/mitowiz/30min"
            className="inline-flex items-center justify-center rounded-[10px] bg-accent px-[22px] py-[11px] text-[14.5px] font-semibold text-white shadow-glow transition-[transform,box-shadow] duration-300 hover:-translate-y-px hover:shadow-[0_10px_28px_-8px_rgba(109,94,245,0.65)]"
          >
            Schedule a Call
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden border-t border-line bg-bg/95 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-6 pt-3" aria-label="Mobile">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-[15px] text-secondary transition-colors hover:bg-white/[0.03] hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://cal.com/mitowiz/30min"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-fit items-center justify-center rounded-[10px] bg-accent px-5 py-[11px] text-[14px] font-semibold text-white"
              >
                Schedule a Call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
