import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Newsletter } from '@/components/newsletter'
import { RelatedPosts } from '@/components/related-posts'
import { ShareButtons } from '@/components/share-buttons'
import {
  getAdjacentPosts,
  getPost,
  getRelatedPosts,
  posts,
} from '@/content/blog'

function slugify(text: string) {
  if (!text) return ''
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s\u0600-\u06FF-]/g, '') // پشتیبانی از حروف فارسی و انگلیسی
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Article not found' }
  return {
    title: `${post.title} — Bahar Dastmalchi`,
    description: post.excerpt,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const { previous, next } = getAdjacentPosts(slug)
  const related = getRelatedPosts(slug)
  const toc = post.content.map((section, idx) => ({
    id: slugify(section.heading) || `section-${idx}`,
    label: section.heading,
  }))

  return (
    <main id="top" className="relative min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      <article className="pt-28 md:pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
            بازگشت به بلاگ
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-primary/25 px-3 py-1 text-secondary-foreground/90">
              {post.category}
            </span>
            <span>{post.dateLabel}</span>
            <span aria-hidden="true">•</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="mt-5 font-sans text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl [unicode-bidi:isolate]">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-foreground/70 text-pretty [unicode-bidi:isolate]">
            {post.excerpt}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-secondary/50">
            <Image
              src={post.cover || '/placeholder.svg'}
              alt={`${post.title} cover`}
              fill
              priority
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl gap-12 px-6 lg:grid lg:grid-cols-[1fr_16rem]">
          <div className="max-w-2xl">
            {post.content.map((section, index) => {
              const sectionId = slugify(section.heading) || `section-${index}`
              return (
                <section key={sectionId} className="mb-10">
                  <h2
                    id={sectionId}
                    className="scroll-mt-28 font-sans text-2xl font-bold tracking-tight text-foreground [unicode-bidi:isolate]"
                  >
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="mt-4 text-base leading-relaxed text-foreground/80 [unicode-bidi:isolate]">
                      {paragraph}
                    </p>
                  ))}
                </section>
              )
            })}

            <div className="mt-10 border-t border-border pt-8">
              <ShareButtons title={post.title} />
            </div>
          </div>

          {/* Sidebar - On this page */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                در این صفحه
              </p>
              <ul className="mt-4 space-y-3 border-r border-border">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block border-r-2 border-transparent pr-4 text-sm leading-snug text-muted-foreground transition-colors hover:border-primary hover:text-foreground [unicode-bidi:isolate]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      {/* Navigation: Previous / Next */}
      <div className="mx-auto mt-16 max-w-3xl px-6">
        <div className="grid grid-cols-1 gap-4 border-t border-border pt-10 sm:grid-cols-2">
          {previous ? (
            <Link
              href={`/blog/${previous.slug}`}
              className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <ArrowRight size={14} />
                مقاله قبلی
              </span>
              <span className="mt-2 block font-sans text-lg font-medium leading-snug text-foreground [unicode-bidi:isolate]">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group rounded-2xl border border-border bg-card p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary sm:col-start-2"
            >
              <span className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
                مقاله بعدی
                <ArrowLeft size={14} />
              </span>
              <span className="mt-2 block font-sans text-lg font-medium leading-snug text-foreground [unicode-bidi:isolate]">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>

      <RelatedPosts posts={related} />
      <Newsletter />
      <Footer />
    </main>
  )
}