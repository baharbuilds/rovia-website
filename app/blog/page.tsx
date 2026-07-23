import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BlogHero } from '@/components/blog-hero'
import { BlogListing } from '@/components/blog-listing'
import { Newsletter } from '@/components/newsletter'

export const metadata: Metadata = {
  title: 'Blog — Bahar Dastmalchi',
  description:
    'Articles about Digital Marketing, SEO, Web Development, AI, Automation, Career and building Rovia.',
}

export default function BlogPage() {
  return (
    <main id="top" className="relative min-h-screen bg-background">
      <Navbar />
      <BlogHero />
      <BlogListing />
      <Newsletter />
      <Footer />
    </main>
  )
}
