"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoCard } from "@/components/video-card"
import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardPage() {
  const [user, setUser] = useState<{ name?: string; email: string; isAuthenticated: boolean } | null>(null)
  const [tikTokUrl, setTikTokUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [videos, setVideos] = useState<any[]>([])
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
      const data = await res.json()
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
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    )
  }

  const topVideos = [...videos].sort((a, b) => b.views - a.views).slice(0, 3)
  const bottomVideos = [...videos].sort((a, b) => a.views - b.views).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader user={user} onLogout={handleLogout} />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Add TikTok Account</CardTitle>
              <CardDescription>
                Enter your TikTok profile URL to analyze your videos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddTikTok} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="tiktok-url" className="sr-only">
                    TikTok URL
                  </Label>
                  <Input
                    id="tiktok-url"
                    placeholder="https://www.tiktok.com/@username"
                    value={tikTokUrl}
                    onChange={(e) => setTikTokUrl(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Adding..." : "Add Account"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {videos.length > 0 && (
            <Tabs defaultValue="top" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="top">Top Performing</TabsTrigger>
                <TabsTrigger value="bottom">Bottom Performing</TabsTrigger>
              </TabsList>
              <TabsContent value="top" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {topVideos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="bottom" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {bottomVideos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          )}

          {videos.length === 0 && (
            <Card className="bg-muted/50">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-medium">No videos found</h3>
                  <p className="text-muted-foreground">
                    Add your TikTok account to see your performance analytics
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
