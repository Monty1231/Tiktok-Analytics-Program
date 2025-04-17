'use client'

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardDescription,
  CardHeader, CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"

interface Video {
  id: string
  title: string
  views: number
  thumbnail: string
  // …other props
}

export default function DashboardPage() {
  const [user, setUser] = useState<{ name?: string; email: string; isAuthenticated: boolean } | null>(null)
  const [tikTokUrl, setTikTokUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [videos, setVideos] = useState<Video[]>([])
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    } else {
      router.push("/login")
    }
  }, [router])

  const handleAddTikTok = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch(
        `/api/tiktok?url=${encodeURIComponent(tikTokUrl)}`
      )
      if (!res.ok) throw new Error("Failed to fetch TikTok data")
      const data: Video[] = await res.json()
      setVideos(data)
      setTikTokUrl("")
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) {
    return <div className="flex min-h-screen items-center justify-center">Loading…</div>
  }

  const topVideos = [...videos].sort((a, b) => b.views - a.views).slice(0, 3)
  const bottomVideos = [...videos].sort((a, b) => a.views - b.views).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader user={user} onLogout={handleLogout} />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        {/* …Add TikTok form… */}
        {videos.length > 0 ? (
          <Tabs defaultValue="top" className="w-full">
            {/* … */}
            <TabsContent value="top" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                {topVideos.map(video => (
                  <Card key={video.id}>
                    <CardHeader>
                      <CardTitle>{video.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={320}
                        height={180}
                        priority
                      />
                      <p>{video.views.toLocaleString()} views</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            {/* …bottom tab… */}
          </Tabs>
        ) : (
          <Card className="bg-muted/50">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <h3 className="text-xl font-medium">No videos found</h3>
              <p className="text-muted-foreground">
                Add your TikTok account to see your performance analytics
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
