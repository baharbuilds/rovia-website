'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/content/projects'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.href}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_20px_50px_-24px_rgba(45,45,45,0.35)]"
    >
      {/* Preview image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary/50">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between" dir="ltr">
          <span className="font-serif text-sm text-muted-foreground">{project.number}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary/20">
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>

        <h3 dir="ltr" className="mt-4 font-serif text-2xl font-light tracking-tight text-foreground">
          {project.title}
        </h3>

        <p dir="rtl" className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">
          {project.description}
        </p>

        <div dir="ltr" className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
