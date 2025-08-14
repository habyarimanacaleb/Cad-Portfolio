"use client"

import Link from "next/link"
import { Github, Instagram, Linkedin, Mail, Youtube, ArrowUp, Heart } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "./logo"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "#", color: "hover:text-red-600" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-600" },
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-gray-900" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-600" },
    { icon: Mail, label: "Email", href: "#", color: "hover:text-blue-600" },
  ]

  const services = ["3D Modeling", "Assembly Design", "FEA Simulation", "Product Design", "CAD Drafting"]
  const resources = ["Tutorials", "Blog", "Downloads", "Portfolio", "Contact"]

  return (
    <footer className="border-t bg-white relative overflow-hidden mx-auto px-2">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-24 h-24 bg-orange-100 rounded-full opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6 }}
      />

      <div className="container py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Logo />
            </motion.div>
            <motion.p className="text-sm text-gray-500 max-w-xs" initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }}>
              Sharing my passion for SolidWorks design, 3D modeling, and engineering solutions through tutorials and
              professional services.
            </motion.p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                >
                  <Link
                    href={item.href}
                    className={`rounded-full bg-gray-100 p-2 text-gray-500 transition-all duration-200 ${item.color}`}
                    aria-label={item.label}
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.5 },
                      }}
                    >
                      <item.icon className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              whileHover={{ color: "#2563eb", scale: 1.05 }}
            >
              Services
            </motion.h3>
            <ul className="space-y-2">
              {services.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div whileHover={{ x: 5, color: "#2563eb" }} transition={{ duration: 0.2 }}>
                    <Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      {item}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              whileHover={{ color: "#2563eb", scale: 1.05 }}
            >
              Resources
            </motion.h3>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div whileHover={{ x: 5, color: "#2563eb" }} transition={{ duration: 0.2 }}>
                    <Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      {item}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              whileHover={{ color: "#2563eb", scale: 1.05 }}
            >
              Subscribe
            </motion.h3>
            <motion.p className="text-sm text-gray-500 mb-4" initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }}>
              Get the latest updates on new tutorials, projects, and design tips.
            </motion.p>
            <form className="space-y-3">
              <motion.input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                placeholder="Enter your email"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="w-full rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.p
            className="text-center text-sm text-gray-500 md:text-left flex items-center justify-center md:justify-start gap-1"
            whileHover={{ color: "#374151" }}
          >
            &copy; {new Date().getFullYear()} TechBuilds by Caleb. Made with
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                color: ["#ef4444", "#f97316", "#ef4444"],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <Heart className="h-3 w-3 fill-current" />
            </motion.span>
            All rights reserved.
          </motion.p>
          <motion.p
            className="mt-4 text-center text-sm text-gray-500 md:mt-0 md:text-right"
            whileHover={{ color: "#374151" }}
          >
            @CalebOfficial-D | SolidWorks Certified Professional
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full bg-blue-600 p-3 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ArrowUp className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </footer>
  )
}
