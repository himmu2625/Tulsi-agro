"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Menu,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"

interface MobileNavProps {
  currentPath?: string
}

export function MobileNav({ currentPath = "/" }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const whatsappNumber = "918810593717"
  const phoneNumber = "+91 8810593717"

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden btn-hover-bounce"
        >
          <Menu className="h-6 w-6 icon-hover-rotate" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2 text-left">
            <div className="relative h-8 w-24 flex items-center justify-center overflow-visible">
              <Image
                src="/Tulsi Agro logo.png"
                alt="Tulsi Agro Logo"
                width={32}
                height={32}
                className="h-8 w-24 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-green-800 text-hover-glow">
              Tulsi Agro
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-lg font-medium link-hover-underline transition-all duration-300 ${
                currentPath === item.href
                  ? "nav-active-mobile"
                  : "text-green-700"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="border-t border-green-100 pt-6 mt-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4 text-hover-glow">
              Contact Us
            </h3>
            <div className="space-y-3">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 justify-start btn-hover-glow active-scale"
                asChild
                onClick={() => setOpen(false)}
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your agricultural services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2 icon-hover-bounce" />
                  WhatsApp: {phoneNumber}
                </a>
              </Button>

              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white justify-start btn-hover-glow active-scale"
                asChild
                onClick={() => setOpen(false)}
              >
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="h-5 w-5 mr-2 icon-hover-bounce" />
                  Call: {phoneNumber}
                </a>
              </Button>
            </div>
          </div>

          <div className="border-t border-green-100 pt-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4 text-hover-glow">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576971985992"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 social-hover-lift"
                onClick={() => setOpen(false)}
              >
                <Facebook className="h-6 w-6 icon-hover-glow" />
              </a>
              <a
                href="https://www.instagram.com/tulsi.agro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full text-pink-600 social-hover-lift"
                onClick={() => setOpen(false)}
              >
                <Instagram className="h-6 w-6 icon-hover-glow" />
              </a>
              <a
                href="https://www.youtube.com/@TULSIAGRO.96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full text-red-600 social-hover-lift"
                onClick={() => setOpen(false)}
              >
                <Youtube className="h-6 w-6 icon-hover-glow" />
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
