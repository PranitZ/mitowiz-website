import { Reveal } from './reveal'

export function FinalCTA() {
  return (
    <section id="demo" className="border-t border-line py-28 text-center md:py-[150px]">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-[720px] text-balance text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] md:text-[3.5rem]">
            Ready to scale your revenue cycle team?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-[18px] max-w-[560px] text-pretty text-[16px] leading-relaxed text-secondary md:text-[17px]">
            Talk with MitoWiz about automating repetitive payer portal work across your revenue
            cycle. We’ll review your current workflow and identify where an AI worker can reduce
            manual follow-up.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://cal.com/mitowiz/30min"
              className="inline-flex items-center justify-center rounded-[10px] bg-accent px-8 py-[15px] text-[15.5px] font-semibold text-white shadow-glow transition-[transform,box-shadow] duration-300 hover:-translate-y-px hover:shadow-[0_10px_28px_-8px_rgba(109,94,245,0.65)]"
            >
              Schedule a Call
            </a>
            <a
              href="mailto:hello@mitowiz.com?subject=MitoWiz%20RCM%20Automation%20Inquiry"
              id="early-access"
              className="inline-flex items-center justify-center rounded-[10px] px-4 py-[15px] text-[15px] font-semibold text-secondary transition-colors duration-300 hover:text-foreground"
            >
              Email hello@mitowiz.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
