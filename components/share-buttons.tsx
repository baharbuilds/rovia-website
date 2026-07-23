'use client'

import { useState } from 'react'
import { Check, Link2 } from 'lucide-react'

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  function getUrl() {
    if (typeof window === 'undefined') return ''
    return window.location.href
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(getUrl())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  function openShare(base: string) {
    const url = encodeURIComponent(getUrl())
    const text = encodeURIComponent(title)
    window.open(`${base}${url}&text=${text}`, '_blank', 'noopener,noreferrer')
  }

  const btn =
    'flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary/20'

  return (
    <div className="flex items-center gap-3" dir="ltr">
      <span className="text-sm text-muted-foreground">Share</span>
      {/* <button 
        type="button"
        onClick={() => openShare('https://twitter.com/intent/tweet?url=')}
        aria-label="Share on Twitter"
        className={btn}
      >
        <Twitter size={16} />
      </button>  */}
      <button
        type="button"
        onClick={() => openShare('https://www.linkedin.com/sharing/share-offsite/?url=')}
        aria-label="Share on LinkedIn"
        className={btn}
      >
        <LinkedinIcon size={16} />
      </button>
      <button type="button" onClick={copyLink} aria-label="Copy link" className={btn}>
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </button>
    </div>
  )
}
