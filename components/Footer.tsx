import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const phoneNumber = "+91 8810593717"

  return (
    <footer className="relative bg-green-800 text-white py-12 overflow-hidden transition-all duration-300 hover:bg-green-800/95">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/android-chrome-512x512.png"
          alt="Tulsi Agro Background"
          fill
          className="object-cover opacity-20 image-hover-brightness"
          priority={false}
        />
        <div className="absolute inset-0 bg-green-800/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-8 w-24 ml-0 flex items-center justify-center overflow-visible">
                <Image
                  src="/Tulsi Agro logo.png"
                  alt="Tulsi Agro Logo"
                  width={32}
                  height={32}
                  className="h-8 w-24 object-contain logo-hover-pulse"
                />
              </div>
              <span className="text-2xl font-bold text-hover-glow">
                Tulsi Agro
              </span>
            </div>
            <p className="text-green-200 mb-4">
              Leading wholesale grain supplier in India specializing in premium
              basmati rice, wheat, pulses, and agricultural services for
              restaurants, retailers, and food service buyers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576971985992"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 social-hover-lift"
              >
                <Facebook className="h-6 w-6 icon-hover-glow" />
              </a>
              <a
                href="https://www.instagram.com/tulsi.agro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 social-hover-lift"
              >
                <Instagram className="h-6 w-6 icon-hover-glow" />
              </a>
              <a
                href="https://www.youtube.com/@TULSIAGRO.96"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 social-hover-lift"
              >
                <Youtube className="h-6 w-6 icon-hover-glow" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-hover-glow">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-green-200 link-hover-underline"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block text-green-200 link-hover-underline"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="block text-green-200 link-hover-underline"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-green-200 link-hover-underline"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden sm:block">
            <h3 className="text-lg font-semibold mb-4 text-hover-glow">
              Our Products
            </h3>
            <div className="space-y-2 text-green-200">
              <div className="link-hover-scale cursor-pointer">
                Premium Basmati Rice
              </div>
              <div className="link-hover-scale cursor-pointer">
                Wheat & Flour
              </div>
              <div className="link-hover-scale cursor-pointer">
                Pulses & Lentils
              </div>
              <div className="link-hover-scale cursor-pointer">
                Oilseeds & Specialty Grains
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-hover-glow">
              Contact Info
            </h3>
            <div className="space-y-2 text-green-200">
              <div className="link-hover-scale cursor-pointer">
                📞 {phoneNumber}
              </div>
              <div className="link-hover-scale cursor-pointer">
                📧 assisttulsiagrp@gmail.com
              </div>
              <div className="link-hover-scale cursor-pointer">
                📍 Shop No: B. 13, Karwi Galla Mandi
              </div>
              <div className="link-hover-scale cursor-pointer pl-6.5">
                Chitrakoot, UP - 210205
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p className="text-hover-glow">
            &copy; 2025 Tulsi Agro - Premium Wholesale Grain Supplier India. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
