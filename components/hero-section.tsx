"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap, Rocket } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const router = useRouter()
  return (
    <section className="relative py-20 sm:py-24 lg:pt-32 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/80 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
              <Sparkles className="h-4 w-4" />
              Level Up Your Life Through Gamified Habits
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Build Lasting Habits To Help You{" "}
              <span className="text-primary relative">
                Grow
                <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-lg -z-10"></div>
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Transform your daily routines into an epic adventure! Track habits with energy factors, earn points, level up your character, and join communities of like-minded achievers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => router.push("/signup")}
                size="lg"
                className="text-lg px-8 py-4 hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
              >
                <Play className="mr-2 h-5 w-5" />
                See the Adventure
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/hero.png"
                alt="Hero Image"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl border border-border/50"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary/10 z-10 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Level 25</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 z-10 -left-4 bg-secondary/30 backdrop-blur-sm rounded-xl p-4 border border-secondary/20">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">+150 Points</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
