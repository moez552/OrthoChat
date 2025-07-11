"use client"

import { useState } from "react"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  BarChart3,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  TrendingUp,
  Lock,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { requestDemo, type DemoBookingData } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<DemoBookingData>({
    firstName: "",
    lastName: "",
    email: "",
    practiceName: "",
    message: "",
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id.replace("-", "")]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await requestDemo(formData)
      
      if (result.success) {
        toast({
          title: "Demo Booked Successfully! 🎉",
          description: "We'll contact you within 24 hours.",
          variant: "default",
        })
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          practiceName: "",
          message: "",
        })
      } else {
        toast({
          title: "Booking Failed",
          description: result.error || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-primary-foreground">
              
              <Image src="/logo.png" alt="Logo" width={44} height={44} className="ml-2" />
            </div>
            <span className="text-xl font-bold">OrthoChat</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#how-it-works" className="transition-colors hover:text-primary">
              How It Works
            </Link>
            <Link href="#services" className="transition-colors hover:text-primary">
              Use Cases
            </Link>
            <Link href="#about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="gap-2" asChild>
            <a href="#contact">
              
              <Calendar className="h-4 w-4" />
              Book Demo
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="w-fit">
                    Trusted by 500+ Orthodontists
                  </Badge>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary">
                    <Lock className="h-4 w-4" />
                    <span>Bank-Level Security</span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <span className="leading-11">Your AI-Powered Orthodontic Assistant – Right on{" "}</span>
                  <span className="text-primary leading-11">WhatsApp & Voice</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Manage scheduling, patient insights, and your entire practice through simple WhatsApp messages or
                  voice commands. No apps. No learning curves. Just smart, seamless tools that work how you work.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-2" asChild>
                  <a href="#contact">
                  Try AI Scheduling <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#services">
                  Explore Use Cases
                  </a>
                </Button>
             
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free Setup</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Custom Plans</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <Image
                  src="/banner.png?height=400&width=600"
                  alt="WhatsApp AI Bot in Action"
                  width={400}
                  height={200}
                  className="relative rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Before vs After Section */}
            <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              From Administrative Chaos to Automated Calm
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              See the dramatic impact our AI-powered assistant has on real orthodontic practices, every single day.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Before Card */}
            <Card className="relative overflow-hidden border-2 border-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-red-200/20 to-transparent" />
              <CardHeader className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <span className="text-lg">😩</span>
                  </div>
                  <CardTitle className="text-xl">
                    Life Before OrthoChat
                  </CardTitle>
                </div>
                <CardDescription>
                  The daily struggles of manual practice management.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-lg border bg-background p-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                      <span className="text-sm text-muted-foreground">×</span>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Constant No-Shows</div>
                      <div className="text-sm text-muted-foreground">
                        Empty chairs and revenue lost to missed appointments.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border bg-background p-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                      <span className="text-sm text-muted-foreground">×</span>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Manual Rescheduling Nightmare</div>
                      <div className="text-sm text-muted-foreground">
                        Endless phone tag and calendar Tetris.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border bg-background p-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                      <span className="text-sm text-muted-foreground">×</span>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Patient & Staff Burnout</div>
                      <div className="text-sm text-muted-foreground">
                        Frustration from poor communication and repetitive tasks.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border bg-background p-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                      <span className="text-sm text-muted-foreground">×</span>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">Wasted Admin Hours</div>
                      <div className="text-sm text-muted-foreground">
                        Staff bogged down by manual reminders and follow-ups.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After Card */}
            <Card className="relative overflow-hidden border-2 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
              <CardHeader className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg">✨</span>
                  </div>
                  <CardTitle className="text-xl">
                    Life After OrthoChat
                  </CardTitle>
                </div>
                <CardDescription>
                  The power of an AI-driven, automated practice.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-lg border bg-background p-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">60% Fewer No-Shows</div>
                      <div className="text-sm text-muted-foreground">
                        With smart reminders and effortless rescheduling.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border bg-background p-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">One-Message Rescheduling</div>
                      <div className="text-sm text-muted-foreground">
                        Patients confirm or change bookings instantly on WhatsApp.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border bg-background p-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">Happier Patients & Staff</div>
                      <div className="text-sm text-muted-foreground">
                        Seamless 24/7 communication and zero phone tag.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border bg-background p-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">40% More Productive Staff</div>
                      <div className="text-sm text-muted-foreground">
                        By automating the busywork and focusing on patient care.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Bottom CTA */}
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Ready to See These Results in Your Practice?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Join hundreds of orthodontists who have automated their practice.
                </p>
                <Button className="mt-4 gap-2" size="lg" asChild>
                  <a href="#contact">
                    Claim Your Free Demo
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* How It Works Section
      <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works in 3 Simple Steps</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                See how our AI transforms complex practice management into simple conversations
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">1. Patient Sends Message</h3>
                <p className="text-muted-foreground">
                  Your patients text WhatsApp to book, reschedule, or ask questions. No app downloads required.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">2. AI Bot Responds Instantly</h3>
                <p className="text-muted-foreground">
                  Our AI understands context, checks availability, books appointments, and handles complex requests
                  automatically.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">3. You Get Instant Insights</h3>
                <p className="text-muted-foreground">
                  Real-time updates, patient insights, and schedule changes delivered straight to your phone via voice
                  or text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* <section className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Built for Modern Orthodontic Practices
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Perfect for solo orthodontists, group clinics, and modern practices who want to save time and improve
                patient satisfaction without learning new software.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Solo Practitioners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manage your entire practice from your phone while focusing on patient care
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Group Clinics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Coordinate multiple doctors, locations, and staff with intelligent scheduling
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Growing Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scale efficiently without adding administrative overhead or complexity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      
      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                AI-Powered Solutions That Work How You Work
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From WhatsApp scheduling to voice-activated patient insights, our AI-first platform transforms how
                orthodontists run their practice. Simple, smart, and seamlessly integrated into your daily workflow.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Patient Management</CardTitle>
                <CardDescription>
                  Your patients book and manage appointments through AI-powered bots. No apps required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    WhatsApp appointment booking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    AI-powered patient communication
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Automated rescheduling & reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Voice-activated patient lookup
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Calendar & Scheduling</CardTitle>
                <CardDescription>
                  Your team gets a smart calendar that knows your priorities and optimizes your schedule automatically.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    AI-optimized scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Priority-based calendar management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Real-time schedule updates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Voice command scheduling
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Real-Time Insights & Analytics</CardTitle>
                <CardDescription>
                  Get real-time updates, patient insights, and scheduling flexibility — all from one message.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Instant patient insights via WhatsApp
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Voice-activated practice analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Real-time performance metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    AI-powered cost optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Built for Doctors. Powered by AI. Designed for Simplicity.
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We're not just IT for doctors. We're the AI partner helping modern orthodontists save time, cut costs,
                  and deliver a better experience — for everyone. Our solutions work through the tools you already use,
                  making advanced practice management as simple as sending a message.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">500+ Practices</div>
                    <div className="text-sm text-muted-foreground">Trusted worldwide</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">4.9/5 Rating</div>
                    <div className="text-sm text-muted-foreground">Customer satisfaction</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">HIPAA Compliant</div>
                    <div className="text-sm text-muted-foreground">Secure & compliant</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Support</div>
                    <div className="text-sm text-muted-foreground">Always here to help</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/image.png?height=500&width=700"
                alt="Our Team"
                width={700}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section 
      <section id="testimonials" className="py-20 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Success Stories from Real Orthodontists
              </h2>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg font-semibold">
                  "Managing my entire practice through WhatsApp seemed impossible until OrthoChat. Now I can check
                  schedules, get patient insights, and handle rescheduling all from my phone. It's revolutionary."
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold">Dr. Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Johnson Orthodontics</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg font-semibold">
                  "The AI scheduling is incredible. My patients love booking through WhatsApp, and our no-show rate
                  dropped by 60%. The voice commands make everything so much faster."
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold">Dr. Michael Chen</div>
                  <div className="text-sm text-muted-foreground">Smile Orthodontics</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg font-semibold">
                  "No apps to learn, no complex software. Just simple messages that handle everything. Our practice
                  efficiency increased 40% in the first month. This is the future of orthodontic practice management."
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold">Dr. Emily Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Perfect Smiles Orthodontics</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Practice?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Ready to run your orthodontic practice from your phone? Schedule a personalized demo to see how our
                  AI-first solutions can transform your practice through simple WhatsApp messages and voice commands.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                  <p className="text-primary font-semibold">
                    💰 Custom plans – Schedule a quick consult to get your personalized quote.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-muted-foreground">+216 26850493</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-muted-foreground">moez.zhioua@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Book Your Demo Now</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="practiceName" className="text-sm font-medium">
                      Practice Name
                    </label>
                    <Input 
                      id="practiceName" 
                      placeholder="Enter your practice name" 
                      value={formData.practiceName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your practice and what solutions you're interested in"
                      className="min-h-[100px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Booking Your Demo...
                      </>
                    ) : (
                      "Book Your Demo Now"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg text-primary-foreground">
            <Image src="/logo.png" alt="Logo" width={44} height={44} className="ml-2" />
            </div>
            <span className="font-bold">OrthoChat</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 OrthoChat. All rights reserved. Built for orthodontists, by healthcare technology experts.
          </p>
        </div>
      </footer>
    </div>
  )
}
