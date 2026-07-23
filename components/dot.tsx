import { cn } from '@/lib/utils'

export function Dot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn('inline-block h-2 w-2 rounded-full bg-[var(--dot)]', className)}
    />
  )
}
