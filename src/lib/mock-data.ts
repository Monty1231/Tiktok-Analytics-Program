// Generate random numbers within a range
const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

// Generate random dates within the last month
const randomDate = () => {
  const date = new Date()
  date.setDate(date.getDate() - randomNumber(1, 30))
  return date.toISOString()
}

// Mock TikTok video data
export const mockTikTokData = [
  {
    id: "1",
    title: "Morning routine #fyp #morningroutine",
    thumbnail: "/placeholder.svg?height=400&width=300",
    views: randomNumber(50000, 500000),
    likes: randomNumber(5000, 50000),
    comments: randomNumber(100, 1000),
    shares: randomNumber(50, 500),
    date: randomDate(),
  },
  {
    id: "2",
    title: "Dance challenge with friends #dance #viral",
    thumbnail: "/placeholder.svg?height=400&width=300",
    views: randomNumber(100000, 1000000),
    likes: randomNumber(10000, 100000),
    comments: randomNumber(500, 5000),
    shares: randomNumber(100, 1000),
    date: randomDate(),
  },
  {
    id: "3",
    title: "Cooking my favorite pasta recipe #food #cooking",
    thumbnail: "/placeholder.svg?height=400&width=300",
    views: randomNumber(20000, 200000),
    likes: randomNumber(2000, 20000),
    comments: randomNumber(50, 500),
    shares: randomNumber(20, 200),
    date: randomDate(),
  },
  {
    id: "4",
    title: "My workout routine #fitness #gym",
    thumbnail: "/placeholder.svg?height=400&width=300",
    views: randomNumber(30000, 300000),
    likes: randomNumber(3000, 30000),
    comments: randomNumber(100, 1000),
    shares: randomNumber(50, 500),
    date: randomDate(),
  },
  {
    id: "5",
    title: "Travel vlog: Paris #travel #paris",
    thumbnail: "/placeholder.svg?height=400&width=300",
    views: randomNumber(80000, 800000),
    likes: randomNumber(8000, 80000),
    comments: randomNumber(200, 2000),
    shares: randomNumber(100, 1000),
    date: randomDate(),
  },
  {
    id: "6",
    title: "Product review: New headphones #tech #review",
    thumbnail: "/placeholder.svg?height=400&width=300",
    views: randomNumber(15000, 150000),
    likes: randomNumber(1500, 15000),
    comments: randomNumber(50, 500),
    shares: randomNumber(20, 200),
    date: randomDate(),
  },
  {
    id: "7",
    title: "Day in my life as a developer #coding #developer",
    thumbnail: "/placeholder.svg?height=400&width=300",
    views: randomNumber(40000, 400000),
    likes: randomNumber(4000, 40000),
    comments: randomNumber(100, 1000),
    shares: randomNumber(50, 500),
    date: randomDate(),
  },
  {
    id: "8",
    title: "My skincare routine #beauty #skincare",
    thumbnail: "/placeholder.svg?height=400&width=300",
    views: randomNumber(60000, 600000),
    likes: randomNumber(6000, 60000),
    comments: randomNumber(150, 1500),
    shares: randomNumber(75, 750),
    date: randomDate(),
  },
  {
    id: "9",
    title: "Book recommendations #books #reading",
    thumbnail: "/placeholder.svg?height=400&width=300",
    views: randomNumber(25000, 250000),
    likes: randomNumber(2500, 25000),
    comments: randomNumber(75, 750),
    shares: randomNumber(30, 300),
    date: randomDate(),
  },
]
