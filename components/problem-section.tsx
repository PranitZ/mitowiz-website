import { Reveal } from './reveal'
import { SectionHeader } from './section-header'

const painPoints = [
  'Staff toggling between a dozen payer portals, each with its own login, layout, and quirks',
  'Hours on hold with payers just to confirm what a portal already knows',
  'The same patient demographics re-keyed into portal after portal',
  'Auth windows and filing deadlines missed because follow-up lives in someone\u2019s memory',
]

export function ProblemSection() {
  return (
    <section id="product" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <SectionHeader
          eyebrow="The problem"
          title="Stop hiring for repetitive work."
          description="Every prior auth, eligibility check, and claim status inquiry means another portal login, another form filled by hand, and custom scripts that break every time a payer updates their UI. MitoWiz gives that time back with AI workers that navigate payer portals end-to-end and adapt automatically — while your team handles only the exceptions."
        />
        <Reveal delay={0.1} className="lg:pt-[52px]">
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {painPoints.map((point) => (
              <li key={point} className="flex items-start gap-4 py-5">
                <span
                  aria-hidden
                  className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <p className="text-pretty text-[15px] leading-relaxed text-secondary">{point}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
