import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full border-t py-10">
      <div className="mx-auto w-[80vw] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} StatsAI. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="#customers" className="hover:text-foreground transition-colors">Customers</Link>
          <Link href="#resources" className="hover:text-foreground transition-colors">Privacy</Link>
        </nav>
        </div>
      </div>
    </footer>
  )
}


