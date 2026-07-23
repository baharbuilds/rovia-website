import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ProjectsSection } from '@/components/projects-section'
import { BlogSection } from '@/components/blog-section'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Timeline } from '@/components/timeline'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <BlogSection />
      <About />
      <Skills />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
