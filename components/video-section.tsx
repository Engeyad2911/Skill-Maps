"use client"

import { Play } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden border-4 border-blue-200"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%84%D9%82%D8%B7%D8%A9%20%D8%B4%D8%A7%D8%B4%D8%A9%202025-02-07%20143237-aAiXRIdRKl051RXh9QDpAx4DqPm8D5.png"
            alt="Student learning"
            className="w-full object-cover rounded-[2rem]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="w-20 h-20 rounded-full flex items-center justify-center relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-purple-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
            </motion.button>
          </div>
        </motion.div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl h-[600px] p-0">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Course Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

