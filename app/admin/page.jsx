"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FolderOpen, MessageSquare, TrendingUp, Calendar, DollarSign, Star, Plus, Eye, Edit } from "lucide-react"
import AdminLayout from "@/components/admin/admin-layout"
import ScrollReveal from "@/components/scroll-reveal"

export default function AdminDashboard() {
  const [stats] = useState({
    totalClients: 24,
    activeProjects: 8,
    completedProjects: 16,
    totalRevenue: 45000,
    pendingQuotes: 5,
    avgRating: 4.8,
  })

  const [recentProjects] = useState([
    {
      id: 1,
      title: "Automotive Frame Design",
      client: "AutoTech Inc.",
      status: "In Progress",
      progress: 75,
      deadline: "2024-02-15",
      value: 5000,
    },
    {
      id: 2,
      title: "Industrial Pump Assembly",
      client: "MechSolutions",
      status: "Review",
      progress: 90,
      deadline: "2024-02-10",
      value: 3500,
    },
    {
      id: 3,
      title: "Electronics Housing",
      client: "TechCorp",
      status: "Completed",
      progress: 100,
      deadline: "2024-01-30",
      value: 2800,
    },
  ])

  const [recentClients] = useState([
    {
      id: 1,
      name: "John Smith",
      company: "AutoTech Inc.",
      email: "john@autotech.com",
      projects: 3,
      totalValue: 12000,
      lastContact: "2024-01-28",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "MechSolutions",
      email: "sarah@mechsolutions.com",
      projects: 2,
      totalValue: 8500,
      lastContact: "2024-01-25",
    },
  ])

  const statsCards = [
    {
      title: "Total Clients",
      value: stats.totalClients,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      change: "+12%",
    },
    {
      title: "Active Projects",
      value: stats.activeProjects,
      icon: FolderOpen,
      color: "text-green-600",
      bgColor: "bg-green-100",
      change: "+8%",
    },
    {
      title: "Total Revenue",
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      change: "+23%",
    },
    {
      title: "Avg Rating",
      value: stats.avgRating,
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      change: "+0.2",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Review":
        return "bg-yellow-100 text-yellow-800"
      case "Completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex justify-between items-center">
            <div>
              <motion.h1 className="text-3xl font-bold text-gray-900" whileHover={{ scale: 1.02 }}>
                Dashboard Overview
              </motion.h1>
              <p className="text-gray-500 mt-1">Welcome back, Caleb! Here's what's happening with your business.</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Project
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Stats Cards */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                        <motion.p
                          className="text-2xl font-bold text-gray-900"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          {stat.value}
                        </motion.p>
                        <p className="text-xs text-green-600 font-medium">{stat.change} from last month</p>
                      </div>
                      <motion.div
                        className={`${stat.bgColor} p-3 rounded-full`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <ScrollReveal direction="left" delay={0.2}>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <FolderOpen className="h-5 w-5 text-blue-600" />
                      Recent Projects
                    </CardTitle>
                    <CardDescription>Your latest project updates</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{project.title}</h4>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                          >
                            {project.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{project.client}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {project.deadline}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />${project.value.toLocaleString()}
                          </span>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className="bg-blue-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${project.progress}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Recent Clients */}
          <ScrollReveal direction="right" delay={0.3}>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-green-600" />
                      Recent Clients
                    </CardTitle>
                    <CardDescription>Your latest client interactions</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentClients.map((client, index) => (
                    <motion.div
                      key={client.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: -5 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-blue-600 font-medium text-sm">
                            {client.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </motion.div>
                        <div>
                          <h4 className="font-medium text-gray-900">{client.name}</h4>
                          <p className="text-sm text-gray-500">{client.company}</p>
                          <p className="text-xs text-gray-400">{client.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">${client.totalValue.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">{client.projects} projects</p>
                        <p className="text-xs text-gray-400">Last: {client.lastContact}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Quick Actions */}
        <ScrollReveal direction="up" delay={0.4}>
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used actions for managing your business</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Plus, label: "New Project", color: "text-blue-600", bgColor: "bg-blue-100" },
                  { icon: Users, label: "Add Client", color: "text-green-600", bgColor: "bg-green-100" },
                  { icon: MessageSquare, label: "Send Quote", color: "text-purple-600", bgColor: "bg-purple-100" },
                  { icon: TrendingUp, label: "View Reports", color: "text-orange-600", bgColor: "bg-orange-100" },
                ].map((action, index) => (
                  <motion.div
                    key={action.label}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className="h-20 w-full flex flex-col gap-2 hover:shadow-md transition-all duration-200 bg-transparent"
                    >
                      <motion.div
                        className={`${action.bgColor} p-2 rounded-full`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <action.icon className={`h-5 w-5 ${action.color}`} />
                      </motion.div>
                      <span className="text-sm font-medium">{action.label}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </AdminLayout>
  )
}
