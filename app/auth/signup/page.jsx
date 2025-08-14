"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, ArrowLeft, Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "@/components/logo"
import ScrollReveal from "@/components/scroll-reveal"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const handleSignUp = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      // In a real app, you would redirect to the dashboard or verification page
      window.location.href = "/"
    }, 1500)
  }

  const handleSocialSignUp = (provider) => {
    console.log(`Signing up with ${provider}`)
    // Here you would implement the actual social authentication logic
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
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
          <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
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
                  <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
                </motion.div>
                <CardDescription>Sign up to access exclusive content and features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="w-full bg-white/50 hover:bg-white/80"
                        onClick={() => handleSocialSignUp("google")}
                      >
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                        Google
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="w-full bg-white/50 hover:bg-white/80"
                        onClick={() => handleSocialSignUp("github")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full bg-white/50 hover:bg-white/80"
                      onClick={() => handleSocialSignUp("linkedin")}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </motion.div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        id="first-name"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-white/50 focus:bg-white/80 transition-all duration-200"
                      />
                    </motion.div>
                    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        id="last-name"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-white/50 focus:bg-white/80 transition-all duration-200"
                      />
                    </motion.div>
                  </div>
                  <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/50 focus:bg-white/80 transition-all duration-200"
                    />
                  </motion.div>
                  <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="bg-white/50 focus:bg-white/80 transition-all duration-200 pr-10"
                      />
                      <motion.button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </motion.button>
                    </div>
                  </motion.div>
                  <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                    <Label htmlFor="confirm-password">Confirm password</Label>
                    <div className="relative">
                      <Input
                        id="confirm-password"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="bg-white/50 focus:bg-white/80 transition-all duration-200 pr-10"
                      />
                      <motion.button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </motion.button>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.01 }}>
                    <Checkbox
                      id="terms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked })}
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Link href="/terms" className="text-blue-600 hover:underline">
                        terms of service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        privacy policy
                      </Link>
                    </label>
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
                          "Create account"
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-center text-sm">
                  Already have an account?{" "}
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
