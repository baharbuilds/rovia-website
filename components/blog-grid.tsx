import { BlogCard } from '@/components/blog-card'
import type { BlogPost } from '@/content/blog'

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <p className="mt-14 text-center text-sm text-muted-foreground" dir="ltr">
        مقاله‌ای مطابق جستجوی شما یافت نشد.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} index={index} />
      ))}
    </div>
  )
}
