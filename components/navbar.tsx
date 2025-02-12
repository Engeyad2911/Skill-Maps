"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 space-x-reverse">
          <Link href="/" className="text-xl font-bold text-primary">
            SkillsMap
          </Link>
          <NavigationMenu dir="rtl">
            <NavigationMenuList className="space-x-1 space-x-reverse">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-primary">الرئيسية</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-primary">المسارات</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-primary">فرص</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-primary">استشارات</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-primary">من نحن</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-primary">
                  المزايا والخدمات
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4 space-x-reverse">
          <Button variant="ghost" className="text-gray-600 hover:text-primary">
            تسجيل الدخول
          </Button>
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            إنشاء حساب
          </Button>
        </div>
      </div>
    </nav>
  )
}

