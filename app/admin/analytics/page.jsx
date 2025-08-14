"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, DollarSign, Users, FolderOpen, Download, Filter } from "lucide-react"
import AdminLayout from "@/components/admin/admin-layout"
import ScrollReveal from "@/components/scroll-reveal"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")

  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,230",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "New Clients",
      value: "8",
      change: "+25%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Projects Completed",
      value: "16",
      change: "+8.3%",
      trend: "up",
      icon: FolderOpen,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Avg Project Value",
      value: "$3,250",
      change: "-2.1%",
      trend: "down",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const projectsByCategory = [
    { category: "Automotive", count: 8, value: 28500, color: "bg-red-500" },
    { category: "Industrial", count: 6, value: 21000, color: "bg-blue-500" },
    { category: "Electronics", count: 4, value: 14200, color: "bg-purple-500" },
    { category: "Medical", count: 3, value: 12600, color: "bg-green-500" },
    { category: "Aerospace", count: 3, value: 18900, color: "bg-orange-500" },
  ]

  const recentActivity = [
    { date: "2024-02-01", action: "Project completed", details: "Automotive Frame Design for AutoTech Inc." },
    { date: "2024-01-30", action: "New client added", details: "HealthTech Solutions joined" },
    { date: "2024-01-28", action: "Quote sent", details: "Industrial Pump redesign quote sent to MechSolutions" },
    { date: "2024-01-25", action: "Project milestone", details: "Electronics Housing 75% complete" },
    { date: "2024-01-22", action: "Payment received", details: "$5,000 from AutoTech Inc." },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <motion.h1 className="text-3xl font-bold text-gray-900" whileHover={{ scale: 1.02 }}>
                Analytics & Reports
              </motion.h1>
              <p className="text-gray-500 mt-1">Track your business performance and growth</p>
            </div>
            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Export Report
                </Button>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Time Range Selector */}
        <ScrollReveal direction="up" delay={0.1}>
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-2">
                {["7d", "30d", "90d", "1y"].map((range) => (
                  <motion.div key={range} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant={timeRange === range ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTimeRange(range)}
                    >
                      {range === "7d" && "Last 7 days"}
                      {range === "30d" && "Last 30 days"}
                      {range === "90d" && "Last 3 months"}
                      {range === "1y" && "Last year"}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Key Metrics */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
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
                        <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                        <motion.p
                          className="text-2xl font-bold text-gray-900"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          {metric.value}
                        </motion.p>
                        <div className="flex items-center gap-1 mt-1">
                          {metric.trend === "up" ? (
                            <TrendingUp className="h-3 w-3 text-green-600" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-red-600" />
                          )}
                          <span
                            className={`text-xs font-medium ${
                              metric.trend === "up" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {metric.change}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        className={`${metric.bgColor} p-3 rounded-full`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <metric.icon className={`h-6 w-6 ${metric.color}`} />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Projects by Category */}
          <ScrollReveal direction="left" delay={0.3}>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Projects by Category</CardTitle>
                <CardDescription>Distribution of projects across different industries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectsByCategory.map((item, index) => (
                    <motion.div
                      key={item.category}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div className={`w-4 h-4 rounded-full ${item.color}`} whileHover={{ scale: 1.2 }} />
                        <span className="font-medium">{item.category}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{item.count} projects</p>
                        <p className="text-sm text-gray-500">${item.value.toLocaleString()}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Recent Activity */}
          <ScrollReveal direction="right" delay={0.4}>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest business activities and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-blue-600 rounded-full mt-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: index * 0.2 }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm">{activity.action}</p>
                          <span className="text-xs text-gray-500">{activity.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{activity.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Revenue Chart Placeholder */}
        <ScrollReveal direction="up" delay={0.5}>
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>Monthly revenue growth over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Revenue chart visualization</p>
                  <p className="text-sm text-gray-400">Chart component would be integrated here</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </AdminLayout>
  )
}
