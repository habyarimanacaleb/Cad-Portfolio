"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  FolderOpen,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  TrendingUp,
  Calendar,
  FileText,
  Upload,
  Bell,
} from "lucide-react"
import Logo from "@/components/logo"
import { Badge } from "@/components/ui/badge"

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: FolderOpen, badge: "8" },
    { name: "Clients", href: "/admin/clients", icon: Users, badge: "24" },
    { name: "Messages", href: "/admin/messages", icon: MessageSquare, badge: "3" },
    { name: "Quotes", href: "/admin/quotes", icon: FileText, badge: "5" },
    { name: "Calendar", href: "/admin/calendar", icon: Calendar },
    { name: "Analytics", href: "/admin/analytics", icon: TrendingUp },
    { name: "File Manager", href: "/admin/files", icon: Upload },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  const isActive = (href) => pathname === href

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={{ x: -256 }}
        animate={{ x: sidebarOpen ? 0 : -256 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b">
            <Logo />
            <motion.button
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={item.href}>
                  <motion.div
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {item.name}
                    </div>
                    {item.badge && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                        <Badge variant="secondary" className="text-xs">
                          {item.badge}
                        </Badge>
                      </motion.div>
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* User section */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-blue-600 font-medium text-sm">CB</span>
              </motion.div>
              <div>
                <p className="text-sm font-medium text-gray-900">Caleb</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
            <div className="space-y-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2 bg-transparent" asChild>
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    View Website
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top bar */}
        <motion.header
          className="bg-white shadow-sm border-b px-4 py-3 lg:px-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <motion.button
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.div className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  <motion.span
                    className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
