'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/content/blog'

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_20px_50px_-24px_rgba(45,45,45,0.35)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary/50">
          <Image
            src={post.cover || '/placeholder.svg'}
            alt={`${post.title} cover`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6" dir="ltr">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-primary/25 px-3 py-1 text-secondary-foreground/90">
              {post.category}
            </span>
            <span>{post.dateLabel}</span>
            <span aria-hidden="true">•</span>
            <span>{post.readingTime}</span>
          </div>

          <h3 className="mt-4 font-serif text-xl font-light leading-snug tracking-tight text-foreground text-balance">
            {post.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">{post.excerpt}</p>

          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
            خواندن مقاله
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
