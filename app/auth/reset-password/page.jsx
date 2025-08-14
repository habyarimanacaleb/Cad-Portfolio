"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "@/components/logo"
import ScrollReveal from "@/components/scroll-reveal"

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate password reset process
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
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
            repeat: Number.POSITIVE_INFINITY,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        className="container flex justify-between items-center py-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/auth/signin" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Sign In
          </Link>
        </motion.div>
        <Logo />
      </motion.div>

      <div className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <ScrollReveal direction="up" delay={0.2}>
          <motion.div className="w-full max-w-md" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="space-y-1 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </motion.div>
                    ) : (
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      >
                        <Mail className="h-6 w-6 text-blue-600" />
                      </motion.div>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {isSubmitted ? "Check Your Email" : "Reset Password"}
                  </CardTitle>
                </motion.div>
                <CardDescription>
                  {isSubmitted
                    ? "We've sent you an email with a link to reset your password"
                    : "Enter your email address and we'll send you a link to reset your password"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isSubmitted ? (
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="rounded-lg bg-green-50 p-4 text-sm text-green-600 border border-green-200">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        Password reset link sent to <strong>{email}</strong>. Please check your inbox and spam folder.
                      </motion.div>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button asChild className="w-full">
                        <Link href="/auth/signin">Return to sign in</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleResetPassword} className="space-y-4">
                    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/50 focus:bg-white/80 transition-all duration-200"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="w-full relative overflow-hidden group" disabled={isLoading}>
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">
                          {isLoading ? (
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                            >
                              ⏳
                            </motion.span>
                          ) : (
                            "Send reset link"
                          )}
                        </span>
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-center text-sm">
                  Remember your password?{" "}
                  <motion.span whileHover={{ scale: 1.05 }}>
                    <Link href="/auth/signin" className="text-blue-600 hover:underline">
                      Sign in
                    </Link>
                  </motion.span>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  )
}
