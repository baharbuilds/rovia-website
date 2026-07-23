'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail , Phone } from 'lucide-react'
import { Dot } from '@/components/dot'
import { site } from '@/content/site'

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
        {/* Left: intro + links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 flex items-center gap-2" dir="ltr">
            <Dot />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </span>
          </div>
          <h2
            dir="ltr"
            className="font-serif text-3xl font-light leading-tight tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl"
          >
            Let&apos;s build something.
          </h2>
          <p dir="rtl" className="mt-5 max-w-md text-base leading-relaxed text-foreground/70">
            برای همکاری، پروژه یا صرفاً یک گفت‌وگوی خوب درباره‌ی دیجیتال، خوشحال می‌شوم که پیام‌تان را
            بشنوم.
          </p>

          <div className="mt-8 space-y-3" dir="ltr">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary/20">
                <Mail size={16} />
              </span>
              {site.email}
            </a>
            <a
               href={`tel:${site.phone}`}
               className="group flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary/20">
                <Phone size={16} />
              </span>
             {site.phone}
            </a> 
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary/20">
                <LinkedinIcon size={16} />
              </span>
              LinkedIn
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary/20">
                <GithubIcon size={16} />
              </span>
              GitHub
            </a>
          </div>

          <a
            href={site.resumeUrl}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Right: form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          dir="rtl"
          className="rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-foreground/70">
                نام
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                placeholder="نام شما"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-foreground/70">
                ایمیل
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                dir="ltr"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-foreground/70">
                پیام
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                placeholder="درباره‌ی پروژه‌تان بنویسید…"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--dot)]" />
              {sent ? 'پیام ارسال شد' : 'ارسال پیام'}
            </button>
            {sent && (
              <p className="text-center text-xs text-muted-foreground">
                ممنون! به‌زودی پاسخ‌تان را می‌دهم.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
