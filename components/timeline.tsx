'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { journey } from '@/content/journey'

export function Timeline() {
  return (
    <section id="journey" className="scroll-mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Journey"
          title="Everything starts from a point."
          description="مسیری که از کنجکاوی یک دانش آموز آغاز شد و به‌سوی ساختن Rovia پیش می‌رود."
        />

        <div className="relative mt-16 pl-8 md:pl-0">
          {/* vertical line */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[3px] top-2 w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-12 md:space-y-0">
            {journey.map((milestone, index) => {
              const isRight = index % 2 === 1
              return (
                <motion.li
                  key={milestone.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative md:grid md:grid-cols-2 md:gap-12 md:py-8"
                >
                  {/* dot marker */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--dot)] ring-4 ring-background md:left-1/2 md:top-10 md:-translate-x-1/2"
                  />

                  <div className={isRight ? 'md:col-start-2' : 'md:col-start-1 md:text-right'}>
                    <span
                      dir="rtl"
                      className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      {milestone.period}
                    </span>
                    <h3
                      dir="rtl"
                      className="mt-2 text-2xl font-medium tracking-tight text-foreground"
                    >
                      {milestone.title}
                    </h3>
                    <p dir="rtl" className="mt-3 text-sm leading-relaxed text-foreground/70">
                      {milestone.description}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
