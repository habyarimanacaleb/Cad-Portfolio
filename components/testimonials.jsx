"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Product Manager, Automotive Inc.",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Working with this designer was a game-changer for our automotive project. The attention to detail in the SolidWorks models and the innovative approach to weight reduction exceeded our expectations.",
      rating: 5,
      company: "Automotive Inc.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Lead Engineer, Tech Solutions",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The electronics housing design was exactly what we needed. The thermal simulations were spot on, and the final product has performed exceptionally well in real-world testing.",
      rating: 5,
      company: "Tech Solutions",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Director of R&D, Industrial Systems",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The redesign of our industrial pump assembly has significantly improved our production efficiency. The SolidWorks models were precise, and the FEA testing provided valuable insights.",
      rating: 5,
      company: "Industrial Systems",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 bg-gray-50 overflow-hidden" ref={ref}>
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
              Testimonials
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
              What Clients Say
            </motion.h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feedback from clients and collaborators on my design work
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 15 }}
              transition={{ duration: 0.6 }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-8 md:p-10 relative overflow-hidden">
                    {/* Animated background elements */}
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8 }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 w-24 h-24 bg-orange-100 rounded-full opacity-20"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [360, 180, 0],
                      }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6 }}
                    />

                    <motion.div className="relative z-10" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          color: "#2563eb",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Quote className="h-12 w-12 text-blue-200 mb-6" />
                      </motion.div>

                      <motion.p
                        className="text-lg md:text-xl italic mb-8 relative"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {testimonials[currentIndex].content}
                        <motion.span
                          className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="relative h-12 w-12 overflow-hidden rounded-full"
                            whileHover={{
                              scale: 1.1,
                              rotate: 360,
                              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <Image
                              src={testimonials[currentIndex].image || "/placeholder.svg"}
                              alt={testimonials[currentIndex].name}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <motion.h4 className="font-semibold" whileHover={{ color: "#2563eb", scale: 1.05 }}>
                              {testimonials[currentIndex].name}
                            </motion.h4>
                            <motion.p className="text-sm text-gray-500" whileHover={{ color: "#6b7280" }}>
                              {testimonials[currentIndex].role}
                            </motion.p>
                          </motion.div>
                        </div>

                        <motion.div
                          className="flex items-center gap-1"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                        >
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              whileHover={{
                                scale: 1.3,
                                rotate: 360,
                                color: "#fbbf24",
                              }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="absolute -bottom-5 left-0 right-0 flex justify-center gap-4">
              <motion.button
                onClick={prevTestimonial}
                className="rounded-full bg-white p-3 shadow-lg hover:bg-gray-50 group"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <motion.div animate={{ x: [-2, 0, -2] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                  <ChevronLeft className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
                </motion.div>
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="rounded-full bg-white p-3 shadow-lg hover:bg-gray-50 group"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <motion.div animate={{ x: [0, 2, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                  <ChevronRight className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
                whileHover={{
                  scale: 1.3,
                  backgroundColor: index === currentIndex ? "#2563eb" : "#6b7280",
                }}
                whileTap={{ scale: 0.9 }}
                animate={
                  index === currentIndex
                    ? {
                        boxShadow: [
                          "0 0 0 0 rgba(59, 130, 246, 0.4)",
                          "0 0 0 8px rgba(59, 130, 246, 0)",
                          "0 0 0 0 rgba(59, 130, 246, 0)",
                        ],
                      }
                    : {}
                }
                transition={
                  index === currentIndex ? { repeat: Number.POSITIVE_INFINITY, duration: 2 } : { duration: 0.2 }
                }
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
