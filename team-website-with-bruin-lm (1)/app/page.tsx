import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Sparkles, Code2, Brain, GitBranch, Users, Mail, Radio, Cpu } from "lucide-react"

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
              We've built numerous projects together, from AI-powered applications to embedded systems, constantly pushing the boundaries of what's possible.
            </p>
            <p className="mb-8 text-lg text-muted-foreground text-pretty leading-relaxed">
              From BruinLM, an AI course assistant for UCLA students, to wireless morse code communication systems with Arduino, we love tackling diverse technical challenges.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://github.com/JasonFast23/BruinLM" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  View BruinLM
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://github.com/abhiramvoleti/morse-code-transmitter-and-receiver-system" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  View Morse Code System
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Projects</h2>
            <p className="text-lg text-muted-foreground">
              A showcase of what we've built together across different domains
            </p>
          </div>
          {/* BruinLM Project */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 mb-16">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                AI & Software
              </Badge>
              <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">BruinLM</h3>
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
                <h4 className="mb-6 text-xl font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  How We Built It
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Code2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Pair Programming</h5>
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
                      <h5 className="font-semibold mb-1">AI-Powered Development</h5>
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
                      <h5 className="font-semibold mb-1">Clean Git Workflow</h5>
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

          {/* Morse Code Project */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h4 className="mb-6 text-xl font-semibold flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    Technical Details
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Radio className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Wireless RF Communication</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Implemented radio frequency modules to enable wireless transmission of morse code signals between Arduino boards.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <Code2 className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">C++ & Arduino Programming</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Developed separate transmitter and receiver modules using Arduino sketches to encode, transmit, and decode morse code.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Brain className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Embedded Systems Design</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Applied embedded systems concepts learned in coursework to create a practical communication system.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Hardware & Embedded
              </Badge>
              <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Morse Code Transmitter & Receiver</h3>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                A wireless communication system built with Arduino that transmits and receives morse code using RF modules.
                This embedded systems project demonstrates practical implementation of digital communication protocols.
              </p>
              <Button className="gap-2" asChild>
                <a href="https://github.com/abhiramvoleti/morse-code-transmitter-and-receiver-system" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Explore Repository
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Synergy Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Why We Work Well Together</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
            From building AI applications to tinkering with embedded systems, we constantly challenge each other's ideas,
            iterate quickly, and stay excited about what we're creating. We complement each other's strengths and
            push each other to think bigger.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Whether it's integrating the latest AI models, designing wireless communication systems, debugging Arduino code,
            or solving complex technical challenges, we bring energy and curiosity to everything we build.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Get in Touch</h2>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-12">
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-muted-foreground">Ishaan Saraswat</p>
                <a 
                  href="mailto:isaraswa28@ucla.edu" 
                  className="flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  isaraswa28@ucla.edu
                </a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-muted-foreground">Abhiram Voleti</p>
                <a 
                  href="mailto:abhiramvoleti@gmail.com" 
                  className="flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  abhiramvoleti@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">Built with passion by Ishaan Saraswat & Abhiram Voleti</p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="gap-2" asChild>
                <a href="https://github.com/JasonFast23/BruinLM" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  BruinLM
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2" asChild>
                <a href="https://github.com/abhiramvoleti/morse-code-transmitter-and-receiver-system" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Morse Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
