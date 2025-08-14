"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <motion.div
        className="relative flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center">
          <motion.div
            className="relative flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white"
            whileHover={{
              rotate: 360,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            }}
            transition={{ duration: 0.5 }}
          >
            <span className="absolute font-bold text-lg">TB</span>
            <motion.div
              className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-orange-500"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 rgba(249, 115, 22, 0.4)",
                  "0 0 0 6px rgba(249, 115, 22, 0)",
                  "0 0 0 0 rgba(249, 115, 22, 0)",
                ],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            />
          </motion.div>
          <div className="ml-2 flex flex-col">
            <motion.span className="font-bold text-lg leading-none text-gray-900" whileHover={{ color: "#2563eb" }}>
              TechBuilds
            </motion.span>
            <motion.span
              className="text-xs text-blue-600"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
            >
              by Caleb
            </motion.span>
          </div>
        </div>
        <motion.div
          className="ml-2 border-l border-gray-300 pl-2 text-xs text-gray-500"
          whileHover={{ color: "#2563eb", x: 2 }}
        >
          @CalebOfficial-D
        </motion.div>
      </motion.div>
    </Link>
  )
}
