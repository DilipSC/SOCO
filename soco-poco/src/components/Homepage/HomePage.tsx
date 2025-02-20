"use client"


import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, BarChart } from "@/components/ui/chart"
import {
  Bell,
  Home,
  LogOut,
  Settings,
  User,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
} from "lucide-react"

export default function HomePage() {
  // const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-0 bottom-0 w-64 bg-white/5 backdrop-blur-xl border-r border-white/10"
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            SOCO
          </h1>
        </div>
        <nav className="px-3 py-4">
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Home className="mr-2 h-4 w-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <User className="mr-2 h-4 w-4" /> Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Bell className="mr-2 h-4 w-4" /> Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-400/10">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="pl-64">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold">Dashboard</h2>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Social Media Credentials Form */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle>Connect Social Media Accounts</CardTitle>
              <CardDescription>Add your social media credentials to start tracking analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label>X (Twitter)</Label>
                    <div className="flex gap-4">
                      <Input placeholder="API Key" className="bg-white/5 border-white/10" />
                      <Input placeholder="API Secret" className="bg-white/5 border-white/10" />
                      <Button variant="outline" className="bg-white/5 border-white/10">
                        <Twitter className="mr-2 h-4 w-4" /> Connect
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Instagram</Label>
                    <div className="flex gap-4">
                      <Input placeholder="Access Token" className="bg-white/5 border-white/10" />
                      <Button variant="outline" className="bg-white/5 border-white/10">
                        <Instagram className="mr-2 h-4 w-4" /> Connect
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Facebook</Label>
                    <div className="flex gap-4">
                      <Input placeholder="Access Token" className="bg-white/5 border-white/10" />
                      <Button variant="outline" className="bg-white/5 border-white/10">
                        <Facebook className="mr-2 h-4 w-4" /> Connect
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>YouTube</Label>
                    <div className="flex gap-4">
                      <Input placeholder="API Key" className="bg-white/5 border-white/10" />
                      <Button variant="outline" className="bg-white/5 border-white/10">
                        <Youtube className="mr-2 h-4 w-4" /> Connect
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Analytics Dashboard */}
          <div className="grid gap-6">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <stat.icon className="h-4 w-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-gray-400">{stat.change}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle>Engagement Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={[
                      { name: "Jan", value: 100 },
                      { name: "Feb", value: 120 },
                      { name: "Mar", value: 170 },
                      { name: "Apr", value: 140 },
                      { name: "May", value: 200 },
                      { name: "Jun", value: 250 },
                    ]}
                  />
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle>Platform Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: "X", value: 400 },
                      { name: "Instagram", value: 300 },
                      { name: "Facebook", value: 200 },
                      { name: "YouTube", value: 100 },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const stats = [
  {
    title: "Total Followers",
    value: "85.5K",
    change: "+12% from last month",
    icon: Users,
  },
  {
    title: "Engagement Rate",
    value: "4.5%",
    change: "+2.1% from last month",
    icon: TrendingUp,
  },
  {
    title: "Total Likes",
    value: "12.3K",
    change: "+8% from last month",
    icon: Heart,
  },
  {
    title: "Comments",
    value: "3.2K",
    change: "+15% from last month",
    icon: MessageCircle,
  },
]

