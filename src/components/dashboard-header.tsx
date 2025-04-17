"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

interface DashboardHeaderProps {
  user: {
    name?: string
    email: string
  }
  onLogout: () => void
}

export function DashboardHeader({ user, onLogout }: DashboardHeaderProps) {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="text-xl font-bold">
            TikTok Analytics
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <span className="text-sm text-muted-foreground">{user.name || user.email}</span>
          </div>
          <ModeToggle />
          <Button variant="outline" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
