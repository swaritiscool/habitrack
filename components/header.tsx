"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full py-2 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              Habitrack
            </Link>
          </div>

          {/* Navigation and Buttons - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <div className="flex items-center space-x-8">
                <a href="#features" className="text-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </a>
                <Link href="/signin">
                  <Button variant="ghost" className="text-base">Sign In</Button>
                </Link>
              </div>
            </nav>
            
            <div className="flex items-center space-x-8">
              <ThemeToggle />
              <Link href="/signup">
                <Button className="text-sm">Get Started</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-primary">
                Features
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </a>
              <div className="pt-4 pb-3 border-t border-border">
                <div className="flex items-center justify-between space-x-3">
                  <Link href="/signin">
                    <Button variant="ghost">
                      Sign In
                    </Button>
                  </Link>
                  <ThemeToggle />
                  <Link href="/signup">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
