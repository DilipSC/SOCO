"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Twitter } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative py-20">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 relative"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-400">Start tracking your social media analytics</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="John" className="bg-white/5 border-white/10 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Doe" className="bg-white/5 border-white/10 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Create account
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-black px-2 text-gray-400">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
            <Twitter className="mr-2 h-4 w-4" />X
          </Button>
          <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:text-purple-300">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

