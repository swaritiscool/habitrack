import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Zap, Heart, TrendingUp, Puzzle, Rocket } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Sparkles,
    title: "Energy Factor System ✨",
    description: "Assign energy factors (1-10) to your habits. Only 3 habits can be above 7, and only one can be a perfect 10!",
    image: "/placeholder.jpg",
  },
  {
    icon: Zap,
    title: "Points & Leveling ⚡",
    description: "Earn 10 × energy factor points for each completed habit. Watch your character level up and unlock new abilities!",
    image: "/placeholder.jpg",
  },
  {
    icon: Heart,
    title: "Character Upgrades 💖",
    description: "Spend your hard-earned points on character upgrades and customizations. Build your perfect virtual avatar!",
    image: "/placeholder.jpg",
  },
  {
    icon: TrendingUp,
    title: "Progressive Unlocks 📈",
    description: "New upgrades unlock as you earn points in specific habits. Your journey determines your character's evolution.",
    image: "/placeholder.jpg",
  },
  {
    icon: Puzzle,
    title: "Strategic Habit Planning 🧩",
    description: "Plan your habits wisely - high energy factors mean more points but require careful management of your daily routine.",
    image: "/placeholder.jpg",
  },
  {
    icon: Rocket,
    title: "Community Adventures 🚀",
    description: "Join communities of fellow habit-builders once you reach certain levels. Share experiences and motivate each other!",
    image: "/placeholder.jpg",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Turn Habits Into an{" "}
            <span className="text-primary relative">
              Epic Adventure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our gamified system makes building habits fun, engaging, and rewarding. Level up your life one habit at a time! 🎮
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 hover:-translate-y-2 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
