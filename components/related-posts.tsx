import { BlogCard } from '@/components/blog-card'
import { Dot } from '@/components/dot'
import type { BlogPost } from '@/content/blog'

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24" dir="ltr">
      <div className="mb-10 flex items-center gap-2">
        <Dot />
        <h2 className="font-serif text-2xl font-light tracking-tight text-foreground sm:text-3xl">
          مقالات مرتبط
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  )
}
