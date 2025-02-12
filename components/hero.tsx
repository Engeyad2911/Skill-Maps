"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="min-h-screen gradient-bg hero-pattern pt-20 flex items-center">
      <div className="container mx-auto px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-right"
        >
          !تعلم، طوّر، انطلق نحو مستقبلك - SkillsMap
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mb-8 text-right"
        >
          🚀 طوّر مهاراتك، احصل على فرصتك في سوق العمل!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto flex gap-4 mb-8"
        >
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            <Search className="ml-2" />
            بحث
          </Button>
          <Input type="search" placeholder="ماذا تريد أن تتعلم اليوم؟" className="bg-white text-primary text-right" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="border-2">
              احصل على استشارة مجانية
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              عرض الدورات
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

