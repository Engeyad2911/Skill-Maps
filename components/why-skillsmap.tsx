"use client"

import { Book, GraduationCap, Users } from "lucide-react"
import { motion } from "framer-motion"

export function WhySkillsmap() {
  const stats = [
    {
      percentage: "30%",
      icon: <Book className="w-12 h-12" />,
      text: "من الأشخاص يمتلكون مهارات، ولكنهم غير قادرين على العثور على وظائف مناسبة.",
    },
    {
      percentage: "70%",
      icon: <GraduationCap className="w-12 h-12" />,
      text: "من الشباب في مصر لديهم وقت لتعلم مهارات جديدة، لكن لا يعرفون من أين يبدأون.",
    },
    {
      percentage: "40%",
      icon: <Users className="w-12 h-12" />,
      text: "من الناس يريدون التعلم، لكنهم يواجهون صعوبة في العثور على الموارد المناسبة.",
    },
  ]

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-right mb-12"
        >
          لماذا نحتاج إلى SkillsMap؟ 📊
        </motion.h2>
        <div className="grid gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-primary rounded-lg p-6 text-white flex items-center gap-6"
            >
              <div className="bg-white/10 rounded-full p-3">{stat.icon}</div>
              <span className="text-3xl font-bold">{stat.percentage}</span>
              <p className="flex-1 text-right">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

