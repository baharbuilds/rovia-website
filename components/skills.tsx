'use client'

import { motion } from 'framer-motion'
import { Dot } from '@/components/dot'
import { SectionHeading } from '@/components/section-heading'
import { skills } from '@/content/skills'

export function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills & Focus"
        description=""
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary"
          >
            <div className="mb-5 flex items-center gap-2" dir="ltr">
              <Dot />
              <h3 className="font-serif text-xl font-light tracking-tight text-foreground">
                {category.title}
              </h3>
            </div>
            <ul dir="rtl" className="space-y-2.5">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/70">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
