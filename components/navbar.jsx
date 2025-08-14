"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import AuthButtons from "@/components/auth-buttons"
import Logo from "./logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm mx-auto px-2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Logo />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["about", "skills", "projects", "testimonials", "contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 },
              }}
            >
              <Link
                href={`#${item}`}
                className="text-sm font-medium hover:text-blue-600 transition-colors duration-200 relative group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <AuthButtons />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="hover:shadow-md transition-shadow duration-200 bg-transparent"
            >
              View Resume
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" className="hover:shadow-md transition-shadow duration-200">
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 top-16 z-50 bg-white p-4 "
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <nav className="flex flex-col gap-4">
            {["about", "skills", "projects", "testimonials", "contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{
                  x: 10,
                  backgroundColor: "#f3f4f6",
                  transition: { duration: 0.2 },
                }}
              >
                <Link
                  href={`#${item}`}
                  className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md block transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.div>
            ))}
            <motion.div
              className="flex flex-col gap-2 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <AuthButtons />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" className="w-full bg-transparent">
                  View Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full">Contact Me</Button>
              </motion.div>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
