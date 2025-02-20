"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Globe2, LineChart, Share2, TrendingUp, Users2 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            SOCO
          </motion.div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="hover:text-purple-400 transition-colors">
              Features
            </Link>
            <Link href="#statistics" className="hover:text-purple-400 transition-colors">
              Statistics
            </Link>
            <Link href="#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-purple-400">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Your Social Media Analytics Hub
            </h1>
            <p className="text-xl text-gray-300">
              Track, analyze, and optimize your social media presence across all platforms in one powerful dashboard
            </p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Powerful Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Preview */}
      <section id="statistics" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-time Analytics</h2>
            <p className="text-gray-400">
              Get comprehensive insights into your social media performance with our advanced analytics dashboard
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video rounded-xl overflow-hidden border border-white/10"
          >
            <img
              src="/placeholder.svg?height=720&width=1280"
              alt="Dashboard Preview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Boost Your Social Media Presence?</h2>
            <p className="text-gray-300">
              Join thousands of social media managers who trust SOCO for their analytics needs
            </p>
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              SOCO
            </div>
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} SOCO. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Cross-Platform Analytics",
    description: "Track metrics across X, Instagram, and other social platforms in one unified dashboard",
    icon: Globe2,
  },
  {
    title: "Real-time Monitoring",
    description: "Get instant updates on your social media performance and engagement metrics",
    icon: BarChart3,
  },
  {
    title: "Audience Insights",
    description: "Understand your audience better with detailed demographic and behavioral analysis",
    icon: Users2,
  },
  {
    title: "Performance Tracking",
    description: "Monitor growth, engagement rates, and content performance over time",
    icon: LineChart,
  },
  {
    title: "Smart Recommendations",
    description: "Get AI-powered suggestions to improve your social media strategy",
    icon: TrendingUp,
  },
  {
    title: "Easy Integration",
    description: "Connect all your social media accounts with just a few clicks",
    icon: Share2,
  },
]

