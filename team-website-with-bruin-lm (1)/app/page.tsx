import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Sparkles, Code2, Brain, GitBranch, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              <Sparkles className="mr-1 h-3 w-3" />
              Builders & Collaborators
            </Badge>
            <h1 className="mb-8 text-5xl font-bold tracking-tight text-balance md:text-7xl lg:text-8xl">
              Ishaan Saraswat <span className="text-primary">&</span> Abhiram Voleti
            </h1>
            <p className="mb-6 text-xl text-foreground/90 text-pretty leading-relaxed md:text-2xl">
              We've built numerous projects together, constantly pushing the boundaries of what's possible with AI.
            </p>
            <p className="mb-8 text-lg text-muted-foreground text-pretty leading-relaxed">
              Our most recent creation is BruinLM, an AI-powered course assistant for UCLA students that combines our
              passion for education technology with cutting-edge generative AI.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="https://github.com/JasonFast23/BruinLM" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                View BruinLM on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* BruinLM Project Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                Featured Project
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">BruinLM</h2>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                An AI-powered course assistant designed specifically for UCLA students. BruinLM helps students navigate
                coursework, understand complex concepts, and get instant answers to their academic questions.
              </p>
              <Button className="gap-2" asChild>
                <a href="https://github.com/JasonFast23/BruinLM" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Explore Repository
                </a>
              </Button>
            </div>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  How We Built It
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Code2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Pair Programming</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We worked side-by-side throughout the project, combining our perspectives to write better code
                        and solve problems faster.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Brain className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">AI-Powered Development</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Used Claude Code and Cursor to accelerate development and explore new approaches to building our
                        AI assistant.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <GitBranch className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Clean Git Workflow</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Maintained organized branches, meaningful commits, and thorough documentation to keep our work
                        structured and collaborative.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Synergy Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Why We Work Well Together</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
            Building BruinLM wasn't just about writing code—it was about constantly challenging each other's ideas,
            iterating quickly, and staying excited about what we were creating. We complement each other's strengths and
            push each other to think bigger.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Whether it's integrating the latest AI models, designing intuitive interfaces, or solving complex technical
            challenges, we bring energy and curiosity to everything we build.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">Built with passion by Ishaan Saraswat & Abhiram Voleti</p>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="https://github.com/JasonFast23/BruinLM" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                BruinLM
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
