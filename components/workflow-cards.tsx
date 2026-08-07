import { Reveal } from './reveal'
import { SectionHeader } from './section-header'
import { DocumentCheckIcon, RefreshIcon, SearchIcon, ShieldCheckIcon, WalletIcon, ExclamationTriangleIcon, UserGroupIcon, FolderOpenIcon } from './icons'

const cards = [
  {
    icon: ShieldCheckIcon,
    tag: 'EV',
    title: 'Eligibility Verification',
    text: 'Verifies benefits, coverage, and authorization requirements before every visit. Flags if insurance is not active on the date of service.',
  },
  {
    icon: DocumentCheckIcon,
    tag: 'PA',
    title: 'Prior Authorization',
    text: 'Submits, tracks, and completes authorization requests across payer portals.',
  },
  {
    icon: SearchIcon,
    tag: 'CS',
    title: 'Claim Status',
    text: 'Follows up on submitted claims and surfaces status changes in real time.',
  },
  {
    icon: RefreshIcon,
    tag: 'AP',
    title: 'Appeals',
    text: 'Prepares appeal packages and submits them with supporting documentation.',
  },
  {
    icon: WalletIcon,
    tag: 'PP',
    title: 'Payment Posting',
    text: 'Posts ERA/EOB data and updates your practice management system.',
  },
  {
    icon: ExclamationTriangleIcon,
    tag: 'DM',
    title: 'Denial Management',
    text: 'Identifies denial patterns and routes cases for resolution.',
  },
  {
    icon: UserGroupIcon,
    tag: 'RM',
    title: 'Referral Management',
    text: 'Manages referral authorization workflows with payers from request to approval.',
  },
  {
    icon: FolderOpenIcon,
    tag: 'MR',
    title: 'Medical Records',
    text: 'Collects, uploads, and tracks required documentation across portals and fax/email workflows.',
  },
]

export function WorkflowCards() {
  return (
    <section id="solutions" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <SectionHeader
          eyebrow="Workflows"
          title="Built for the work that fills your team's day."
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <article className="group h-full rounded-xl2 border border-line bg-card p-7 transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent-line hover:bg-card-hover hover:shadow-card">
                <div className="mb-[22px] flex items-center justify-between">
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-line bg-white/[0.04] text-secondary transition-colors duration-300 group-hover:border-accent-line group-hover:bg-accent-dim group-hover:text-accent-soft">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <span
                    aria-hidden
                    className="font-mono text-[11px] tracking-wider text-tertiary transition-colors duration-300 group-hover:text-accent-soft"
                  >
                    {card.tag}
                  </span>
                </div>
                <h3 className="mb-2.5 text-[17px] font-semibold tracking-[-0.01em]">
                  {card.title}
                </h3>
                <p className="text-pretty text-[14.5px] leading-relaxed text-secondary">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
