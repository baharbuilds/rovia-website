import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BlogGrid } from '@/components/blog-grid'
import { SectionHeading } from '@/components/section-heading'
import { posts } from '@/content/blog'

export function BlogSection() {
  return (
    <section id="blog" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Blog"
        title="Blog"
        description="یادداشت‌ها، آموزش‌ها و تجربیات من در مسیر یادگیری و ساختن."
        descriptionDir="ltr"
      />

      <div className="mt-14">
        <BlogGrid posts={posts.slice(0, 3)} />
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-primary hover:bg-primary/20"
        >
          مشاهده همه مقالات
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
