"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { User, Bell, Shield, Globe, Save, Upload, Eye, EyeOff } from "lucide-react"
import AdminLayout from "@/components/admin/admin-layout"
import ScrollReveal from "@/components/scroll-reveal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [settings, setSettings] = useState({
    // Profile settings
    firstName: "Caleb",
    lastName: "Official",
    email: "caleb@techbuilds.com",
    phone: "+1 (555) 123-4567",
    bio: "Certified SolidWorks Professional with 5+ years of experience in mechanical design and 3D modeling.",

    // Notification settings
    emailNotifications: true,
    projectUpdates: true,
    clientMessages: true,
    marketingEmails: false,

    // Security settings
    twoFactorAuth: false,
    loginAlerts: true,

    // Business settings
    companyName: "TechBuilds by Caleb",
    website: "https://techbuilds.com",
    timezone: "America/New_York",
    currency: "USD",
  })

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    console.log("Saving settings:", settings)
    // Here you would save to your backend
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex justify-between items-center">
            <div>
              <motion.h1 className="text-3xl font-bold text-gray-900" whileHover={{ scale: 1.02 }}>
                Settings
              </motion.h1>
              <p className="text-gray-500 mt-1">Manage your account and application preferences</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={handleSave} className="gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="gap-2">
                <Shield className="h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="business" className="gap-2">
                <Globe className="h-4 w-4" />
                Business
              </TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details and profile information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={settings.firstName}
                            onChange={(e) => handleSettingChange("firstName", e.target.value)}
                          />
                        </motion.div>
                        <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={settings.lastName}
                            onChange={(e) => handleSettingChange("lastName", e.target.value)}
                          />
                        </motion.div>
                      </div>
                      <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={settings.email}
                          onChange={(e) => handleSettingChange("email", e.target.value)}
                        />
                      </motion.div>
                      <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={settings.phone}
                          onChange={(e) => handleSettingChange("phone", e.target.value)}
                        />
                      </motion.div>
                      <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={settings.bio}
                          onChange={(e) => handleSettingChange("bio", e.target.value)}
                          rows={4}
                        />
                      </motion.div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Picture</CardTitle>
                      <CardDescription>Update your profile photo</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div
                        className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-blue-600 font-bold text-3xl">
                          {settings.firstName[0]}
                          {settings.lastName[0]}
                        </span>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button variant="outline" className="w-full gap-2 bg-transparent">
                          <Upload className="h-4 w-4" />
                          Upload Photo
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose what notifications you want to receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      key: "emailNotifications",
                      label: "Email Notifications",
                      description: "Receive notifications via email",
                    },
                    {
                      key: "projectUpdates",
                      label: "Project Updates",
                      description: "Get notified about project milestones and changes",
                    },
                    {
                      key: "clientMessages",
                      label: "Client Messages",
                      description: "Receive alerts for new client messages",
                    },
                    {
                      key: "marketingEmails",
                      label: "Marketing Emails",
                      description: "Receive promotional and marketing content",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.key}
                      className="flex items-center justify-between p-4 border rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, backgroundColor: "#f8fafc" }}
                    >
                      <div>
                        <h4 className="font-medium">{item.label}</h4>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                      <Switch
                        checked={settings[item.key]}
                        onCheckedChange={(checked) => handleSettingChange(item.key, checked)}
                      />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Update your password to keep your account secure</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <div className="relative">
                        <Input
                          id="currentPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter current password"
                        />
                        <motion.button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </motion.button>
                      </div>
                    </motion.div>
                    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" placeholder="Enter new password" />
                    </motion.div>
                    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button>Update Password</Button>
                    </motion.div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security Options</CardTitle>
                    <CardDescription>Additional security settings for your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        key: "twoFactorAuth",
                        label: "Two-Factor Authentication",
                        description: "Add an extra layer of security to your account",
                      },
                      { key: "loginAlerts", label: "Login Alerts", description: "Get notified of new login attempts" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.key}
                        className="flex items-center justify-between p-4 border rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5, backgroundColor: "#f8fafc" }}
                      >
                        <div>
                          <h4 className="font-medium">{item.label}</h4>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        <Switch
                          checked={settings[item.key]}
                          onCheckedChange={(checked) => handleSettingChange(item.key, checked)}
                        />
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Business Settings */}
            <TabsContent value="business">
              <Card>
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                  <CardDescription>Manage your business details and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={settings.companyName}
                      onChange={(e) => handleSettingChange("companyName", e.target.value)}
                    />
                  </motion.div>
                  <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={settings.website}
                      onChange={(e) => handleSettingChange("website", e.target.value)}
                    />
                  </motion.div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Input
                        id="timezone"
                        value={settings.timezone}
                        onChange={(e) => handleSettingChange("timezone", e.target.value)}
                      />
                    </motion.div>
                    <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
                      <Label htmlFor="currency">Currency</Label>
                      <Input
                        id="currency"
                        value={settings.currency}
                        onChange={(e) => handleSettingChange("currency", e.target.value)}
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </AdminLayout>
  )
}
