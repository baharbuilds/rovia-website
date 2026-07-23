'use client'

import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BlogGrid } from '@/components/blog-grid'
import { CategoryFilter } from '@/components/category-filter'
import { SearchBar } from '@/components/search-bar'
import { posts, type BlogCategory } from '@/content/blog'
import { cn } from '@/lib/utils'

const PER_PAGE = 6

export function BlogListing() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<BlogCategory | 'All'>('All')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category
      const matchesQuery =
        q === '' ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const visible = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

  function handleQueryChange(value: string) {
    setQuery(value)
    setPage(1)
  }

  function handleCategoryChange(next: BlogCategory | 'All') {
    setCategory(next)
    setPage(1)
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-12 flex flex-col items-center gap-6">
        <SearchBar value={query} onChange={handleQueryChange} />
        <CategoryFilter active={category} onChange={handleCategoryChange} />
      </div>

      <BlogGrid posts={visible} />

      {totalPages > 1 && (
        <nav
          className="mt-14 flex items-center justify-center gap-2"
          aria-label="Pagination"
          dir="ltr"
        >
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              aria-current={n === currentPage ? 'page' : undefined}
              className={cn(
                'h-10 w-10 rounded-full border text-sm transition-colors',
                n === currentPage
                  ? 'border-primary bg-primary/25 text-foreground'
                  : 'border-border text-muted-foreground hover:border-primary hover:text-foreground',
              )}
            >
              {n}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </nav>
      )}
    </section>
  )
}
