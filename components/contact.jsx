"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Mail, MessageSquare, Phone, Send, MapPin, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleQuoteChange = (e) => {
    const { name, value } = e.target
    setQuoteData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
      alert("Thank you for your message! I'll get back to you soon.")
    }, 2000)
  }

  const handleQuoteSubmit = (e) => {
    e.preventDefault()
    console.log("Quote requested:", quoteData)
    setQuoteData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
    })
    alert("Thank you for your quote request! I'll get back to you with a detailed proposal soon.")
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@techbuilds.com",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "New York, NY",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-16 overflow-hidden" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600"
              whileHover={{ scale: 1.05, backgroundColor: "#DBEAFE" }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 0 0 10px rgba(59, 130, 246, 0)",
                  "0 0 0 0 rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
            >
              Get in Touch
            </motion.div>
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              animate={{
                backgroundImage: [
                  "linear-gradient(45deg, #000, #000)",
                  "linear-gradient(45deg, #2563eb, #7c3aed)",
                  "linear-gradient(45deg, #000, #000)",
                ],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
              style={{ backgroundClip: "text", WebkitBackgroundClip: "text" }}
            >
              Contact Me
            </motion.h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's discuss your project requirements and how I can help bring your ideas to life
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1" variants={item}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{
                    scale: 1.02,
                    x: 5,
                    backgroundColor: "#f8fafc",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className={`rounded-full ${info.bgColor} p-3 ${info.color}`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <motion.h3 className="font-semibold" whileHover={{ color: "#2563eb" }}>
                      {info.title}
                    </motion.h3>
                    <motion.p className="text-sm text-gray-500" whileHover={{ color: "#374151" }}>
                      {info.content}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={item}>
              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.div
                  className="rounded-full bg-blue-100 p-3 text-blue-600"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <MessageSquare className="h-5 w-5" />
                </motion.div>
                <div>
                  <motion.h3 className="font-semibold" whileHover={{ color: "#2563eb" }}>
                    Social Media
                  </motion.h3>
                  <div className="mt-1 flex gap-3">
                    {["LinkedIn", "GitHub", "Instagram"].map((platform, index) => (
                      <motion.a
                        key={platform}
                        href="#"
                        className="text-gray-500 hover:text-blue-600 text-sm"
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          color: "#2563eb",
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {platform}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={item}>
              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.div
                  className="rounded-full bg-blue-100 p-3 text-blue-600"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Calendar className="h-5 w-5" />
                </motion.div>
                <div>
                  <motion.h3 className="font-semibold" whileHover={{ color: "#2563eb" }}>
                    Schedule a Meeting
                  </motion.h3>
                  <p className="text-sm text-gray-500 mb-2">Book a time slot that works for you</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      View Calendar
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={item}>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full mt-4 group relative overflow-hidden">
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">Request a Quote</span>
                      <motion.div
                        className="relative z-10 ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        <Send className="h-4 w-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Request a Quote</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleQuoteSubmit} className="space-y-4 mt-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                        <label htmlFor="quote-name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="quote-name"
                          name="name"
                          value={quoteData.name}
                          onChange={handleQuoteChange}
                          required
                        />
                      </motion.div>
                      <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                        <label htmlFor="quote-email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="quote-email"
                          name="email"
                          type="email"
                          value={quoteData.email}
                          onChange={handleQuoteChange}
                          required
                        />
                      </motion.div>
                    </div>
                    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                      <label htmlFor="quote-company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input id="quote-company" name="company" value={quoteData.company} onChange={handleQuoteChange} />
                    </motion.div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                        <label htmlFor="quote-project-type" className="text-sm font-medium">
                          Project Type
                        </label>
                        <select
                          id="quote-project-type"
                          name="projectType"
                          value={quoteData.projectType}
                          onChange={handleQuoteChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                          required
                        >
                          <option value="">Select a project type</option>
                          <option value="3D Modeling">3D Modeling</option>
                          <option value="Assembly Design">Assembly Design</option>
                          <option value="FEA Simulation">FEA Simulation</option>
                          <option value="Product Design">Product Design</option>
                          <option value="Other">Other</option>
                        </select>
                      </motion.div>
                      <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                        <label htmlFor="quote-budget" className="text-sm font-medium">
                          Budget Range
                        </label>
                        <select
                          id="quote-budget"
                          name="budget"
                          value={quoteData.budget}
                          onChange={handleQuoteChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        >
                          <option value="">Select a budget range</option>
                          <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                          <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                          <option value="$20,000+">$20,000+</option>
                        </select>
                      </motion.div>
                    </div>
                    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                      <label htmlFor="quote-description" className="text-sm font-medium">
                        Project Description
                      </label>
                      <Textarea
                        id="quote-description"
                        name="description"
                        value={quoteData.description}
                        onChange={handleQuoteChange}
                        required
                        className="min-h-32"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="w-full">
                        Submit Quote Request
                      </Button>
                    </motion.div>
                  </form>
                </DialogContent>
              </Dialog>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                y: -5,
              }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </motion.div>
                  <motion.div className="space-y-2" whileHover={{ scale: 1.02 }}>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </motion.div>
                </div>
                <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="transition-all duration-200 focus:scale-105"
                  />
                </motion.div>
                <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-32 transition-all duration-200 focus:scale-105"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full group relative overflow-hidden" disabled={isSubmitting}>
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && (
                      <motion.div
                        className="relative z-10 ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        <Send className="h-4 w-4" />
                      </motion.div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
