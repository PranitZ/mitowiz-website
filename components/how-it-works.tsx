import { Reveal } from './reveal'
import { SectionHeader } from './section-header'
import { ArrowRightIcon } from './icons'

const steps = [
  {
    num: '01',
    title: 'Connect your workflow',
    text: 'Integrate with your existing systems and payer portal workflows in days, not months.',
  },
  {
    num: '02',
    title: 'AI workers take over the repetitive tasks',
    text: 'Prior auth, eligibility, claim status, and appeals run continuously in the background.',
  },
  {
    num: '03',
    title: 'Your team reviews only exceptions',
    text: 'People step in only when a workflow needs judgment. Everything else completes on its own.',
  },
]

export function HowItWorks() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="From connection to completion."
          align="center"
          className="mb-14 md:mb-16"
        />

        <ol className="grid list-none grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-2">
          {steps.map((step, i) => (
            <li key={step.num} className="contents">
              <Reveal delay={i * 0.08} className="p-1">
                <span className="mb-[18px] block font-mono text-[13px] tracking-wider text-accent-soft">
                  {step.num}
                </span>
                <h3 className="mb-3 text-balance text-xl font-semibold leading-[1.35] tracking-[-0.015em]">
                  {step.title}
                </h3>
                <p className="text-pretty text-[14.5px] leading-relaxed text-secondary">
                  {step.text}
                </p>
              </Reveal>
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden items-center justify-center pt-2 text-tertiary lg:flex"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </div>
              )}
            </li>
          ))}
        </ol>
         <Reveal delay={0.32} className="mt-10 text-center">
           <p className="text-pretty text-[14.5px] leading-relaxed text-secondary max-w-[600px] mx-auto">
             <span className="font-semibold text-foreground">Built for portal changes.</span> When payers update their
             UI, MitoWiz workers adapt automatically — no broken scripts, no maintenance burden.
           </p>
         </Reveal>
        </div>
        </section>
        )
        }
