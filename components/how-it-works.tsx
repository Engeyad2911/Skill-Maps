"use client"

import { Monitor, GraduationCap, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export function HowItWorks() {
  const steps = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "01. Learn",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "02. Graduate",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "03. Work",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
  ]

  return (
    <div className="py-16 gradient-bg relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center text-white"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Curved connecting lines */}
        <svg className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-20" height="100">
          <path d="M 100 50 C 200 50, 300 50, 400 50" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  )
}

