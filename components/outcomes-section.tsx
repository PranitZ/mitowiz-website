import { Reveal } from './reveal'
import { SectionHeader } from './section-header'
import { ArrowUpRightIcon } from './icons'

const outcomes = [
  {
    title: 'Increase operational capacity',
    text: 'Process more prior auths, eligibility checks, and claims without proportionally more staff.',
  },
  {
    title: 'Reduce repetitive manual work',
    text: 'Free your team from payer portal navigation, hold queues, and manual status checks.',
  },
  {
    title: 'Improve turnaround times',
    text: 'AI workers run continuously — nights, weekends, and holidays included.',
  },
  {
    title: 'Scale without expanding headcount',
    text: 'Absorb volume growth and seasonal spikes without a hiring cycle.',
  },
]

export function OutcomesSection() {
  return (
    <section id="company" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <SectionHeader
          eyebrow="Outcomes"
          title="Scale operations, not headcount."
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl2 border border-line bg-line md:grid-cols-2">
          {outcomes.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className="bg-bg transition-colors duration-300 hover:bg-surface"
            >
              <div className="flex h-full flex-col gap-3 p-8 md:p-10">
                <div className="mb-1.5 flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-accent-line bg-accent-dim">
                  <ArrowUpRightIcon className="h-3.5 w-3.5 text-accent-soft" />
                </div>
                <h3 className="text-[18px] font-semibold tracking-[-0.015em]">{item.title}</h3>
                <p className="text-pretty text-[14px] leading-relaxed text-secondary">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
