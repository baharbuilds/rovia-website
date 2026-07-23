'use client'

import { cn } from '@/lib/utils'
import { categories, type BlogCategory } from '@/content/blog'

export function CategoryFilter({
  active,
  onChange,
}: {
  active: BlogCategory | 'All'
  onChange: (category: BlogCategory | 'All') => void
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2" dir="ltr">
      {categories.map((category) => {
        const isActive = category === active
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition-all duration-300',
              isActive
                ? 'border-primary bg-primary/25 text-foreground'
                : 'border-border text-muted-foreground hover:border-primary hover:text-foreground',
            )}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
