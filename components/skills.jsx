"use client"

import { Zap, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    { name: "3D Modeling", level: 95, icon: "🎯" },
    { name: "Assembly Design", level: 90, icon: "⚙️" },
    { name: "Sheet Metal Design", level: 85, icon: "🔧" },
    { name: "Finite Element Analysis (FEA)", level: 80, icon: "📊" },
    { name: "Product Design", level: 90, icon: "💡" },
    { name: "CAD Drafting", level: 95, icon: "📐" },
    { name: "Rendering & Visualization", level: 85, icon: "🎨" },
    // { name: "React.js", level: 75, icon: "⚛️" },
    // { name: "Tailwind CSS", level: 80, icon: "🎨" },
    // { name: "JavaScript", level: 75, icon: "💻" },
  ]

  const certifications = [
    { text: "Certified SolidWorks Professional (CSWP)", icon: Award },
    { text: "Bachelor's in Mechanical Engineering", icon: TrendingUp },
    { text: "Advanced SolidWorks Training", icon: Zap },
    { text: "YouTube Content Creator Certification", icon: Award },
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
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-16 bg-gray-50 overflow-hidden" ref={ref}>
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
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              Expertise
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Skills & Certifications</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Specialized in creating functional and manufacturable designs that meet client specifications
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <motion.h3 className="text-xl font-bold mb-6" whileHover={{ color: "#2563eb" }}>
                    Technical Skills
                  </motion.h3>
                  <motion.div
                    className="space-y-4"
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                  >
                    {skills.map((skill, index) => (
                      <motion.div key={skill.name} className="space-y-2" variants={item}>
                        <div className="flex justify-between items-center">
                          <motion.div className="flex items-center gap-2" whileHover={{ x: 5 }}>
                            <motion.span
                              className="text-lg"
                              whileHover={{
                                scale: 1.3,
                                rotate: [0, -10, 10, 0],
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {skill.icon}
                            </motion.span>
                            <span className="text-sm font-medium">{skill.name}</span>
                          </motion.div>
                          <motion.span className="text-sm text-gray-500" whileHover={{ color: "#2563eb", scale: 1.1 }}>
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                            whileHover={{
                              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                              boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <motion.h3 className="text-xl font-bold mb-6" whileHover={{ color: "#2563eb" }}>
                    Certifications & Education
                  </motion.h3>
                  <motion.div
                    className="space-y-4"
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                  >
                    {certifications.map((certification, index) => (
                      <motion.div
                        key={certification.text}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        variants={item}
                        whileHover={{
                          x: 5,
                          backgroundColor: "#f8fafc",
                        }}
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.2,
                            rotate: 360,
                            color: "#2563eb",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <certification.icon className="h-5 w-5 text-green-600 mt-0.5" />
                        </motion.div>
                        <motion.span whileHover={{ color: "#2563eb" }}>{certification.text}</motion.span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="mt-8">
                    <motion.h3 className="text-xl font-bold mb-4" whileHover={{ color: "#2563eb" }}>
                      Services Offered
                    </motion.h3>
                    <motion.div
                      className="grid grid-cols-2 gap-3"
                      variants={container}
                      initial="hidden"
                      animate={isInView ? "show" : "hidden"}
                    >
                      {[
                        "3D Modeling & CAD Drafting",
                        "Prototyping & Product Design",
                        "FEA Simulation & Testing",
                        "Rendering & Visualization",
                        "Assembly Design",
                        "SolidWorks Tutorials",
                      ].map((service, index) => (
                        <motion.div
                          key={service}
                          className="rounded-lg bg-gray-100 p-3 text-center text-sm cursor-pointer"
                          variants={item}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#EBF5FF",
                            color: "#2563eb",
                            y: -2,
                            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.15)",
                          }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            y: {
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 2,
                              delay: index * 0.2,
                            },
                          }}
                        >
                          {service}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
