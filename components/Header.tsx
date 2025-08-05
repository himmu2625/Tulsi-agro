"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  currentPath: string
}

export function Header({ currentPath }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappNumber = "918810593717"
  const phoneNumber = "+91 8810593717"

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-green-100 dark:border-green-800"
            : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-0 hover:opacity-80 transition-opacity focus:outline-none"
            >
              <Image
                src="/Tulsi Agro logo.svg"
                alt="Tulsi Agro Logo"
                width={32}
                height={32}
                className="h-8 w-16 sm:h-12 sm:w-24 md:h-14 md:w-28 lg:h-16 lg:w-32 xl:h-16 xl:w-40 object-contain -my-2"
                quality={100}
                priority
              />
              <span className="text-xl lg:text-2xl px-0 font-bold text-green-800 dark:text-green-300">
                Tulsi Agro
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-base font-medium transition-colors hover:text-green-600 nav-hover-slide focus:outline-none ${
                  currentPath === "/"
                    ? "nav-active"
                    : "text-green-700 dark:text-green-300"
                }`}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`text-base font-medium transition-colors hover:text-green-600 nav-hover-slide focus:outline-none ${
                  currentPath === "/products"
                    ? "nav-active"
                    : "text-green-700 dark:text-green-300"
                }`}
              >
                Products
              </Link>
              <Link
                href="/about"
                className={`text-base font-medium transition-colors hover:text-green-600 nav-hover-slide focus:outline-none ${
                  currentPath === "/about"
                    ? "nav-active"
                    : "text-green-700 dark:text-green-300"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-base font-medium transition-colors hover:text-green-600 nav-hover-slide focus:outline-none ${
                  currentPath === "/contact"
                    ? "nav-active"
                    : "text-green-700 dark:text-green-300"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <ThemeToggle />
              <Button
                size="default"
                className="bg-green-600 hover:bg-green-700 text-white btn-hover-glow active-scale text-base font-medium focus:outline-none"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your agricultural services and grain products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  WhatsApp
                </a>
              </Button>
              <Button
                size="default"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 btn-hover-border active-scale text-base font-medium focus:outline-none"
                asChild
              >
                <a href={`tel:${phoneNumber}`} className="focus:outline-none">
                  <Phone className="h-5 w-5 mr-3" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="text-green-700 dark:text-green-300 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-800/20 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-6 border-b border-green-100 dark:border-green-800">
              <div className="flex items-center space-x-0">
                <Image
                  src="/Tulsi Agro logo.svg"
                  alt="Tulsi Agro Logo"
                  width={32}
                  height={32}
                  className="h-8 w-16 sm:h-10 sm:w-20 object-contain logo-hover-pulse"
                />
                <span className="text-xl font-bold text-green-800 dark:text-green-300 text-hover-glow">
                  Tulsi Agro
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-green-700 dark:text-green-300 hover:text-green-600"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="p-6 space-y-4">
              <Link
                href="/"
                className={`block text-xl font-medium transition-colors hover:text-green-600 focus:outline-none ${
                  currentPath === "/"
                    ? "nav-active-mobile"
                    : "text-green-700 dark:text-green-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`block text-xl font-medium transition-colors hover:text-green-600 focus:outline-none ${
                  currentPath === "/products"
                    ? "nav-active-mobile"
                    : "text-green-700 dark:text-green-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className={`block text-xl font-medium transition-colors hover:text-green-600 focus:outline-none ${
                  currentPath === "/about"
                    ? "nav-active-mobile"
                    : "text-green-700 dark:text-green-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block text-xl font-medium transition-colors hover:text-green-600 focus:outline-none ${
                  currentPath === "/contact"
                    ? "nav-active-mobile"
                    : "text-green-700 dark:text-green-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="p-6 border-t border-green-100 dark:border-green-800 space-y-3">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white btn-hover-glow active-scale text-base font-medium focus:outline-none"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your agricultural services and grain products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50 btn-hover-border active-scale text-base font-medium focus:outline-none"
                asChild
              >
                <a href={`tel:${phoneNumber}`} className="focus:outline-none">
                  <Phone className="h-5 w-5 mr-3" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="p-6 border-t border-green-100 dark:border-green-800">
              <div className="flex space-x-4 justify-center items-center">
                <a
                  href="https://www.facebook.com/profile.php?id=61576971985992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors social-hover-lift"
                >
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/tulsi.agro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors social-hover-lift"
                >
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@TULSIAGRO.96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors social-hover-lift"
                >
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
