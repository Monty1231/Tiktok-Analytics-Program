import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatNumber } from "@/lib/utils"

interface VideoCardProps {
  video: {
    id: string
    title: string
    thumbnail: string
    views: number
    likes: number
    comments: number
    shares: number
    date: string
  }
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />
        </div>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-base">{video.title}</CardTitle>
        <CardDescription>{new Date(video.date).toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Views</span>
            <span className="font-medium">{formatNumber(video.views)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Likes</span>
            <span className="font-medium">{formatNumber(video.likes)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Comments</span>
            <span className="font-medium">{formatNumber(video.comments)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Shares</span>
            <span className="font-medium">{formatNumber(video.shares)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
