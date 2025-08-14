"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, FileDown } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import ModelViewer from "@/components/model-viewer"
import { projectFiles, projects } from "@/constants"
import Link from "next/link"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = ["all", ...new Set(projects.map((p) => p.category))]

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="container py-10">
      {/* Categories Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>

              {/* Process */}
              <ul className="mt-3 list-disc list-inside text-sm text-gray-500">
                {project.process.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>

              {/* Outcome */}
              <p className="mt-3 text-sm font-medium">{project.outcome}</p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                {/* View Case Study */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={projectFiles[project.id]?.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="gap-1 group">
                      View Case Study
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        <ArrowRight className="h-3 w-3" />
                      </motion.div>
                    </Button>
                  </Link>
                </motion.div>

                {/* View 3D Model */}
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                        View 3D Model <ExternalLink className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] h-[600px]">
                    <ModelViewer modelUrl={project.modelUrl} />
                  </DialogContent>
                </Dialog>

                {/* Download PDF */}
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link href={projectFiles[project.id]?.pdfUrl} download>
                    <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                      >
                        <FileDown className="h-3 w-3" />
                      </motion.div>
                      Download PDF
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
