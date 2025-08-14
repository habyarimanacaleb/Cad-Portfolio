"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Link, Play } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParallaxSection from "./parallax-section";
import ScrollReveal from "./scroll-reveal";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"
        style={{ y, opacity }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05, backgroundColor: "#DBEAFE" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    TechBuilds by Caleb
                  </motion.div>
                </div>

                <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <motion.span
                    animate={{ backgroundImage: ["linear-gradient(45deg, #000, #000)", "linear-gradient(45deg, #2563eb, #7c3aed)", "linear-gradient(45deg, #000, #000)"] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    style={{ backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
                  >
                    Certified SolidWorks Professional
                  </motion.span>
                </motion.h1>

                <motion.p className="mt-4 text-gray-500 md:text-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  Mechanical design expert with a passion for solving complex engineering problems through innovative 3D modeling and product development.
                </motion.p>
              </motion.div>

              {/* Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <Button className="gap-2 relative overflow-hidden group" asChild>
                  <a href="#projects">
                    <span className="relative z-10">View My Projects</span>
                    <ArrowRight className="h-4 w-4 ml-1 relative z-10" />
                  </a>
                </Button>
                <Button variant="outline" className="gap-2 group bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50" onClick={() => window.open("https://grafter-portfolio-app.netlify.app/", "_blank")}>
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>              git branch              git branch -m main

              {/* Badges */}
              <motion.div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {["CSWP", "FEA", "CAD"].map((label, index) => (
                    <motion.div
                      key={label}
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-${index*200+100} text-white`}
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <span className="text-xs font-medium">{label}</span>
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">Certified Professional with 1+ years of experience</span>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Image / 3D Model */}
          <ScrollReveal direction="right" delay={0.4}>
            <ParallaxSection speed={-0.2}>
              <motion.div className="relative aspect-video lg:aspect-square overflow-hidden rounded-xl bg-gray-100 group">
                <Image
                  src="/Automotive-Lightweight-Frame-Design.png"
                  alt="3D Model Showcase"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
            </ParallaxSection>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
