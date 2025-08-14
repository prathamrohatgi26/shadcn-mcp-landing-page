"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export function SiteNavbar() {
  return (
    <header className="w-full sticky top-0 z-50">
      <div className="mx-auto w-[80vw] px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border border-border/40 shadow-lg shadow-black/5">
          <div className="flex h-16 items-center justify-between gap-4 px-6">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent tracking-tight">
                StatsAI
              </span>
            </Link>

          {/* Middle: Primary Nav */}
          <nav className="hidden md:flex flex-1 justify-center">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {[
                  ["Product", "/#product"],
                  ["Solutions", "/#solutions"],
                  ["Pricing", "/#pricing"],
                  ["Customers", "/#customers"],
                  ["Resources", "/#resources"],
                ].map(([label, href]) => (
                  <NavigationMenuItem key={label as string}>
                    <Link href={href as string} legacyBehavior passHref>
                      <NavigationMenuLink className="px-3 py-2 rounded-md text-sm font-medium">
                        {label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

            {/* Right: CTAs */}
            <div className="flex items-center gap-2">
              <Button variant="secondary" className="h-9 px-4">Login</Button>
              <Button className="h-9 px-4 shadow-sm transition-transform hover:-translate-y-0.5">Join up</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


