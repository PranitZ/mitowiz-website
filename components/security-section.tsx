import { Reveal } from './reveal'
import { SectionHeader } from './section-header'
import { LockIcon, LogIcon, ShieldIcon, UsersIcon } from './icons'

const items = [
  {
    icon: ShieldIcon,
    title: 'HIPAA-ready architecture',
    text: 'Designed with HIPAA-ready architecture — infrastructure and data handling built around healthcare requirements from day one.',
  },
  {
    icon: LockIcon,
    title: 'End-to-end encryption',
    text: 'Data is encrypted in transit and at rest across every workflow.',
  },
  {
    icon: LogIcon,
    title: 'Complete audit trail',
    text: 'Every action an AI worker takes is logged, timestamped, and reviewable.',
  },
  {
    icon: UsersIcon,
    title: 'Role-based access',
    text: 'Granular permissions control exactly who can view and act on what.',
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <SectionHeader
          eyebrow="Enterprise security"
          title="Built for enterprise healthcare."
          description="Security isn't a feature layer — it's how the platform is architected. Every AI worker operates inside controls your compliance team can inspect."
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="h-full rounded-xl2 border border-line bg-surface p-6 transition-colors duration-300 hover:border-line-strong">
                <div className="mb-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-line bg-white/[0.03] text-secondary">
                  <item.icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mb-2 text-[15.5px] font-semibold tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="text-pretty text-[13.5px] leading-relaxed text-secondary">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
