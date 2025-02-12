"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mountain } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-6 h-6" />
              <span className="text-2xl font-bold">SkillsMap</span>
            </div>
            <p className="text-white/80">
              نحن نساعدك على تطوير مهاراتك وتحقيق أهدافك المهنية من خلال دورات تدريبية عالية الجودة.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white/80">
                  عن الشركة
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/80">
                  المسارات التعليمية
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/80">
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white/80">
                  الدورات
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-2">
              <p>📞 (209) 555-0104</p>
              <p>📧 michelle.rivera@example.com</p>
              <p>📍 2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="hover:text-white/80">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border-t border-white/20 mt-12 pt-8 text-center"
        >
          <p>Copyright 2023 | All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  )
}

