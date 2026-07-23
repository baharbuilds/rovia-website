'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Dot } from '@/components/dot'
import { site } from '@/content/site'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:py-32">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 md:order-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary/50">
            <Image
              src="/about-portrait.png"
              alt="Bahar Dastmalchi's workspace"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
            <Dot />
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground" dir="ltr">
              {site.buildingUnder}
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <div className="mb-4 flex items-center gap-2" dir="ltr">
            <Dot />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</span>
          </div>

          <h2
            dir="ltr"
            className="font-serif text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl"
          >
           About me
          </h2>

          <div dir="rtl" className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
            <p>
              من بهار دستمالچی هستم؛ فارغ‌التحصیل رشته کامپیوتر و علاقه‌مند به طراحی و توسعه وب، سئو، هوش مصنوعی و دیجیتال مارکتینگ هستم.
            </p>
            <p>
              تجربه کار با HTML، CSS و WordPress را دارم و در توسعه پروژه‌ها از ابزارهای هوش مصنوعی برای تولید محتوا، اتوماسیون و بهینه‌سازی فرایندها بهره می‌برم. همچنین با گذراندن دوره‌های آموزشی معتبری مانند CS50x و CS50 Python دانشگاه هاروارد و سایر دوره‌های تخصصی، همواره در مسیر یادگیری و توسعه مهارت‌های خود هستم.
            </p>
            <p> 
              در حال حاضر تمرکز من روی ساخت پروژه‌های واقعی، توسعه مهارت‌ها و ایجاد برند شخصی Rovia است؛ با هدف طراحی و توسعه راهکارهای دیجیتال مدرن و کاربردی.
            </p>
          </div>

          <div dir="ltr" className="mt-8 flex flex-wrap gap-2">
            {site.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-xs text-foreground/70"
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
