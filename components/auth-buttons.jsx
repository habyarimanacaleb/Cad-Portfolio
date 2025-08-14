"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AuthButtons() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button variant="outline" size="sm" asChild className="bg-transparent">
        <Link href="/auth/signin">Sign In</Link>
      </Button>
    </motion.div>
  )
}
