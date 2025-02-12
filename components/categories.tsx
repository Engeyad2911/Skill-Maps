"use client"

import { motion } from "framer-motion"
import { Code2, Palette, LineChart, BookOpen, Users, Layout } from "lucide-react"

export function Categories() {
  const categories = [
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "Digital Marketing",
      color: "bg-red-500",
    },
    {
      icon: <Code2 className="w-8 h-8 text-white" />,
      title: "Web Development",
      color: "bg-emerald-500",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Art & Humanities",
      color: "bg-purple-500",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Personal Development",
      color: "bg-amber-500",
    },
    {
      icon: <Layout className="w-8 h-8 text-white" />,
      title: "IT and Software",
      color: "bg-teal-500",
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Graphic Design",
      color: "bg-green-500",
    },
  ]

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50/50 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Top <span className="text-teal-500">Categories</span>
          </h2>
          <p className="text-gray-600">12,000+ unique online course list designs</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-20 h-20 ${category.color} rounded-lg flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110`}
              >
                {category.icon}
              </div>
              <h3 className="font-medium text-gray-800 text-center">{category.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

