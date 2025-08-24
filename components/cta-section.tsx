"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { ArrowRight, Sparkles, Users, Trophy } from "lucide-react"
import Image from "next/image"

export function CTASection() {
  const router = useRouter()
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/placeholder.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary/90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Join the Adventure Today!
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Epic Adventure?</h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Join thousands of players who have turned their daily habits into an exciting game. Level up your character, earn points, and connect with fellow adventurers on similar journeys.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <Button
              variant="secondary"
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => router.push("/signup")}
            >
              Begin Your Quest
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
