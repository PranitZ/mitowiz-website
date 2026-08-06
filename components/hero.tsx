'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { DashboardMockup } from './dashboard-mockup'
import { EASE } from './reveal'

export function Hero() {
  const reduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    reduceMotion
      ? { initial: undefined, animate: undefined }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section className="relative overflow-hidden pb-24 pt-[148px] md:pb-36 md:pt-[200px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[700px] w-[900px] -translate-x-[38%] rounded-full bg-[radial-gradient(closest-side,rgba(109,94,245,0.2),rgba(109,94,245,0)_70%)] blur-[10px]"
      />
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="mb-7 inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-wider text-secondary"
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(109,94,245,0.14)]"
            />
            AI Workforce for Healthcare RCM
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="max-w-[640px] text-balance text-[2.5rem] font-bold leading-[1.06] tracking-[-0.03em] md:text-[3.75rem] lg:text-[4.75rem]"
          >
            Your AI Workforce for Revenue Cycle Management.
          </motion.h1>

          <motion.p
            {...fadeUp(0.18)}
            className="mt-7 max-w-[560px] text-pretty text-[1.05rem] leading-relaxed text-secondary md:text-[1.2rem]"
          >
            MitoWiz deploys AI workers that log into payer portals and complete repetitive RCM
            workflows end to end — so your team clears more volume, faster, without adding
            headcount.
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://cal.com/mitowiz/30min"
              className="inline-flex items-center justify-center rounded-[10px] bg-accent px-[26px] py-[14px] text-[15px] font-semibold text-white shadow-glow transition-[transform,box-shadow] duration-300 hover:-translate-y-px hover:shadow-[0_10px_28px_-8px_rgba(109,94,245,0.65)]"
            >
              Schedule a Call
            </a>
            <a
              href="mailto:hello@mitowiz.com?subject=MitoWiz%20RCM%20Automation%20Inquiry"
              className="inline-flex items-center justify-center rounded-[10px] px-4 py-[14px] text-[15px] font-semibold text-secondary transition-colors duration-300 hover:text-foreground"
            >
              Email Us
              <span aria-hidden className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  )
}
