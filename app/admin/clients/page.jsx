"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Mail, Phone, Building, MessageSquare } from "lucide-react"
import AdminLayout from "@/components/admin/admin-layout"
import ScrollReveal from "@/components/scroll-reveal"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [clients] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@autotech.com",
      phone: "+1 (555) 123-4567",
      company: "AutoTech Inc.",
      position: "Engineering Manager",
      totalProjects: 5,
      activeProjects: 2,
      totalValue: 18500,
      lastContact: "2024-01-28",
      status: "Active",
      joinDate: "2023-06-15",
      notes: "Prefers detailed technical documentation. Usually responds within 24 hours.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@mechsolutions.com",
      phone: "+1 (555) 234-5678",
      company: "MechSolutions Ltd.",
      position: "Lead Designer",
      totalProjects: 3,
      activeProjects: 1,
      totalValue: 12300,
      lastContact: "2024-01-25",
      status: "Active",
      joinDate: "2023-08-22",
      notes: "Focuses on cost-effective solutions. Prefers video calls for project discussions.",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "m.chen@techcorp.com",
      phone: "+1 (555) 345-6789",
      company: "TechCorp",
      position: "Product Manager",
      totalProjects: 2,
      activeProjects: 0,
      totalValue: 8900,
      lastContact: "2024-01-15",
      status: "Inactive",
      joinDate: "2023-11-10",
      notes: "Quick decision maker. Prefers concise project updates.",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      email: "emily.r@healthtech.com",
      phone: "+1 (555) 456-7890",
      company: "HealthTech Solutions",
      position: "R&D Director",
      totalProjects: 1,
      activeProjects: 1,
      totalValue: 4200,
      lastContact: "2024-02-01",
      status: "Active",
      joinDate: "2024-01-30",
      notes: "New client. Requires FDA compliance documentation for medical devices.",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "d.wilson@aerospace.com",
      phone: "+1 (555) 567-8901",
      company: "AeroSpace Dynamics",
      position: "Chief Engineer",
      totalProjects: 2,
      activeProjects: 1,
      totalValue: 15600,
      lastContact: "2024-01-29",
      status: "Active",
      joinDate: "2023-09-05",
      notes: "Requires aerospace-grade certifications. Very detail-oriented.",
    },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-gray-100 text-gray-800"
      case "Prospect":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <motion.h1 className="text-3xl font-bold text-gray-900" whileHover={{ scale: 1.02 }}>
                Client Management
              </motion.h1>
              <p className="text-gray-500 mt-1">Manage your client relationships and communications</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add Client
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Add New Client</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="client-name">Full Name</Label>
                      <Input id="client-name" placeholder="Enter client name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="client-email">Email</Label>
                      <Input id="client-email" type="email" placeholder="client@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="client-phone">Phone</Label>
                      <Input id="client-phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="client-position">Position</Label>
                      <Input id="client-position" placeholder="Job title" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-company">Company</Label>
                    <Input id="client-company" placeholder="Company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="client-notes">Notes</Label>
                    <Textarea id="client-notes" placeholder="Additional notes about the client" />
                  </div>
                  <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Add Client</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </ScrollReveal>

        {/* Search */}
        <ScrollReveal direction="up" delay={0.1}>
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search clients by name, company, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Clients Grid */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-blue-600 font-medium text-lg">
                            {client.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </motion.div>
                        <div>
                          <CardTitle className="text-lg">{client.name}</CardTitle>
                          <CardDescription>{client.position}</CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(client.status)}>{client.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Building className="h-4 w-4" />
                        <span>{client.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{client.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>{client.phone}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-3 border-t border-b">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{client.totalProjects}</p>
                        <p className="text-xs text-gray-500">Total Projects</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">${client.totalValue.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">Total Value</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Active Projects:</span>
                        <span className="font-medium">{client.activeProjects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Last Contact:</span>
                        <span className="font-medium">{client.lastContact}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Client Since:</span>
                        <span className="font-medium">{client.joinDate}</span>
                      </div>
                    </div>

                    {client.notes && (
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 line-clamp-2">{client.notes}</p>
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full gap-1 bg-transparent">
                          <MessageSquare className="h-3 w-3" />
                          Message
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
        {filteredClients.length === 0 && (
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
                <h3 className="text-lg font-medium text-gray-900 mb-2">No clients found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search criteria</p>
                <Button variant="outline" onClick={() => setSearchTerm("")}>
                  Clear search
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        )}
      </div>
    </AdminLayout>
  )
}
