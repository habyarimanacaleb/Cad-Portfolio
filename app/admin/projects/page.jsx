"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, Eye, Edit, Trash2, Calendar, Upload } from "lucide-react"
import AdminLayout from "@/components/admin/admin-layout"
import ScrollReveal from "@/components/scroll-reveal"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [projects] = useState([
    {
      id: 1,
      title: "Automotive Lightweight Frame Design",
      client: "AutoTech Inc.",
      status: "In Progress",
      progress: 75,
      startDate: "2024-01-15",
      deadline: "2024-02-15",
      value: 5000,
      description: "Reducing the overall weight of a vehicle frame without compromising on strength.",
      category: "Automotive",
      files: 12,
      lastUpdate: "2024-01-28",
    },
    {
      id: 2,
      title: "Industrial Pump Assembly Redesign",
      client: "MechSolutions Ltd.",
      status: "Review",
      progress: 90,
      startDate: "2024-01-10",
      deadline: "2024-02-10",
      value: 3500,
      description: "Redesign of an industrial pump assembly to improve efficiency and reduce maintenance.",
      category: "Industrial",
      files: 8,
      lastUpdate: "2024-01-27",
    },
    {
      id: 3,
      title: "Consumer Electronics Housing",
      client: "TechCorp",
      status: "Completed",
      progress: 100,
      startDate: "2024-01-05",
      deadline: "2024-01-30",
      value: 2800,
      description: "Design a lightweight housing for a portable electronic device with efficient cooling.",
      category: "Electronics",
      files: 15,
      lastUpdate: "2024-01-30",
    },
    {
      id: 4,
      title: "Medical Device Component",
      client: "HealthTech Solutions",
      status: "Planning",
      progress: 25,
      startDate: "2024-02-01",
      deadline: "2024-03-15",
      value: 4200,
      description: "Precision component design for medical diagnostic equipment.",
      category: "Medical",
      files: 3,
      lastUpdate: "2024-02-01",
    },
    {
      id: 5,
      title: "Aerospace Bracket System",
      client: "AeroSpace Dynamics",
      status: "In Progress",
      progress: 60,
      startDate: "2024-01-20",
      deadline: "2024-03-01",
      value: 7500,
      description: "Lightweight bracket system for aircraft interior components.",
      category: "Aerospace",
      files: 10,
      lastUpdate: "2024-01-29",
    },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case "Planning":
        return "bg-gray-100 text-gray-800"
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

  const getCategoryColor = (category) => {
    switch (category) {
      case "Automotive":
        return "bg-red-100 text-red-800"
      case "Industrial":
        return "bg-blue-100 text-blue-800"
      case "Electronics":
        return "bg-purple-100 text-purple-800"
      case "Medical":
        return "bg-green-100 text-green-800"
      case "Aerospace":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || project.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <motion.h1 className="text-3xl font-bold text-gray-900" whileHover={{ scale: 1.02 }}>
                Projects Management
              </motion.h1>
              <p className="text-gray-500 mt-1">Manage and track all your SolidWorks projects</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    New Project
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-title">Project Title</Label>
                      <Input id="project-title" placeholder="Enter project title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="client-name">Client</Label>
                      <Input id="client-name" placeholder="Client name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project-description">Description</Label>
                    <Textarea id="project-description" placeholder="Project description" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="automotive">Automotive</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="medical">Medical</SelectItem>
                          <SelectItem value="aerospace">Aerospace</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project-value">Project Value ($)</Label>
                      <Input id="project-value" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project-deadline">Deadline</Label>
                      <Input id="project-deadline" type="date" />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Create Project</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal direction="up" delay={0.1}>
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Planning">Planning</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Review">Review</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Projects Grid */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                        <CardDescription className="mt-1">{project.client}</CardDescription>
                      </div>
                      <div className="flex gap-1 ml-2">
                        <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>

                    <div className="flex items-center justify-between">
                      <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                      <span className="text-sm font-medium text-green-600">${project.value.toLocaleString()}</span>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{project.deadline}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Upload className="h-3 w-3" />
                        <span>{project.files} files</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full gap-1 bg-transparent">
                          <Eye className="h-3 w-3" />
                          View
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full gap-1 bg-transparent">
                          <Edit className="h-3 w-3" />
                          Edit
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <ScrollReveal direction="up" delay={0.3}>
            <Card>
              <CardContent className="text-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                </motion.div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setFilterStatus("all")
                  }}
                >
                  Clear filters
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        )}
      </div>
    </AdminLayout>
  )
}
