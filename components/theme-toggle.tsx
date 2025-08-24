"use client"

import { Contrast } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="outline" onClick={handleToggle}>
      <Contrast className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
