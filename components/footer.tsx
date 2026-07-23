import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-10">
        <p className="text-center text-sm text-foreground">
            .  می‌باشد Rovia تمامی حقوق این وب‌سایت متعلق به  
        </p>

        <p
          dir="ltr"
          className="absolute left-6 text-xs text-muted-foreground"
        >
          © {new Date().getFullYear()} Rovia by {site.name}
        </p>
      </div>
    </footer>
  )
}