'use client'

import { motion } from 'framer-motion'
import { Dot } from '@/components/dot'

const ease = [0.22, 1, 0.36, 1] as const

export function BlogHero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-6 pt-36 text-center md:pt-44" dir="ltr">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease }}
        className="mb-6 flex justify-center"
      >
        <Dot />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05, ease }}
        className="font-serif text-5xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl"
      >
        وبلاگ
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
        className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 text-pretty"
      >
       مجموعه‌ای از مقالات درباره دیجیتال مارکتینگ، سئو، طراحی و توسعه وب، هوش مصنوعی، اتوماسیون و مسیر ساخت برند شخصی
      </motion.p>
    </section>
  )
}
