import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { WorkflowCards } from '@/components/workflow-cards'
import { HowItWorks } from '@/components/how-it-works'
import { SecuritySection } from '@/components/security-section'
import { OutcomesSection } from '@/components/outcomes-section'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ProblemSection />
        <WorkflowCards />
        <HowItWorks />
        <SecuritySection />
        <OutcomesSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
