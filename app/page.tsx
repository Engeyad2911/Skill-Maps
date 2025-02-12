import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhySkillsmap } from "@/components/why-skillsmap"
import { HowItWorks } from "@/components/how-it-works"
import { Categories } from "@/components/categories"
import { VideoSection } from "@/components/video-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhySkillsmap />
      <HowItWorks />
      <Categories />
      <VideoSection />
      <Testimonials />
      <Footer />
    </main>
  )
}

