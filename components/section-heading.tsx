'use client'

import { motion } from 'framer-motion'
import { Dot } from '@/components/dot'

export function SectionHeading({
  eyebrow,
  title,
  description,
  descriptionDir = 'rtl',
}: {
  eyebrow: string
  title: string
  description?: string
  descriptionDir?: 'rtl' | 'ltr'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl"
    >
      <div className="mb-4 flex items-center gap-2" dir="ltr">
        <Dot />
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</span>
      </div>
      <h2
        dir="ltr"
        className="font-serif text-3xl font-light leading-tight tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p dir={descriptionDir} className="mt-5 text-base leading-relaxed text-foreground/70">
          {description}
        </p>
      )}
    </motion.div>
  )
}
