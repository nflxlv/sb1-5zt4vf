import { ProductOverview } from '@/app/components/ProductOverview'
import { Benefits } from '@/app/components/Benefits'
import FAQ from '@/app/components/FAQ'
import { Reviews } from '@/app/components/Reviews'
import { CTASection } from '@/app/components/CTASection'
import { JsonLd } from '@/app/components/JsonLd'
import { TableOfContents } from '@/app/components/TableOfContents'
import { QuickAnswerBox } from '@/app/components/QuickAnswerBox'
import { KeyFeatures } from '@/app/components/KeyFeatures'
import { StatisticalData } from '@/app/components/StatisticalData'
import { TrustBadges } from '@/app/components/TrustBadges'
import { LocalInfo } from '@/app/components/LocalInfo'
import { AuthorCredentials } from '@/app/components/AuthorCredentials'
import { BeforeAfterResults } from '@/app/components/BeforeAfterResults'
import { ReadingProgress } from '@/app/components/ReadingProgress'
import { StickyCTA } from '@/app/components/StickyCTA'
import { ResearchPapers } from '@/app/components/ResearchPapers'
import { MedicalInfo } from '@/app/components/MedicalInfo'
import { ComparisonTable } from '@/app/components/ComparisonTable'
import { HowToUse } from '@/app/components/HowToUse'
import { IngredientBreakdown } from '@/app/components/IngredientBreakdown'
import { ProgressTracker } from '@/app/components/ProgressTracker'
import { DrugInteractionChecker } from '@/app/components/DrugInteractionChecker'
import { VideoTestimonials } from '@/app/components/VideoTestimonials'
import { ExitIntentPopup } from '@/app/components/ExitIntentPopup'
import { StockScarcity } from '@/app/components/StockScarcity'
import { LimitedTimeOffer } from '@/app/components/LimitedTimeOffer'
import { FreeConsultation } from '@/app/components/FreeConsultation'
import { StructuredData } from '@/app/components/StructuredData'

export default function Home() {
  return (
    <>
      <ReadingProgress />
      <StructuredData />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <TableOfContents className="hidden lg:block lg:col-span-3 lg:sticky lg:top-4 lg:self-start" />
            <main className="lg:col-span-9">
              <section id="overview">
                <ProductOverview />
              </section>
              <section id="quick-answer">
                <QuickAnswerBox />
              </section>
              <section id="key-features">
                <KeyFeatures />
              </section>
              <section id="benefits">
                <Benefits />
              </section>
              <section id="stats">
                <StatisticalData />
              </section>
              <section id="results">
                <BeforeAfterResults />
              </section>
              <section id="ingredients">
                <IngredientBreakdown />
              </section>
              <section id="comparison">
                <ComparisonTable />
              </section>
              <section id="howto">
                <HowToUse />
              </section>
              <section id="progress-tracking">
                <ProgressTracker />
              </section>
              <section id="drug-interactions">
                <DrugInteractionChecker />
              </section>
              <section id="video-testimonials">
                <VideoTestimonials />
              </section>
              <section id="research-papers">
                <ResearchPapers />
              </section>
              <section id="medical">
                <MedicalInfo />
              </section>
              <section id="consultation">
                <FreeConsultation />
              </section>
              <section id="local">
                <LocalInfo />
              </section>
              <section id="faq">
                <FAQ />
              </section>
              <CTASection />
              <StockScarcity />
              <LimitedTimeOffer />
              <StickyCTA />
              <ExitIntentPopup />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}