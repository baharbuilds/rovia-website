'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Dot } from '@/components/dot'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16" dir="ltr">
      <div className="rounded-3xl border border-border bg-secondary/40 px-6 py-12 text-center md:px-16 md:py-16">
        <div className="mb-5 flex justify-center">
          <Dot />
        </div>
        <h2 className="font-serif text-3xl font-light tracking-tight text-foreground text-balance sm:text-4xl">
          همراه من باشید        
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/70 text-pretty">
          جدیدترین مقالات درباره بازاریابی، سئو، برنامه‌نویسی و هوش مصنوعی را دریافت کنید
        </p>

        {submitted ? (
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/25 px-5 py-3 text-sm text-foreground">
            <Check size={16} />
           از عضویت شما سپاسگزارم  
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="dastmlchibahar@gmail.com"
              aria-label="Email address"
              className="w-full rounded-full border border-border bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              عضویت
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
