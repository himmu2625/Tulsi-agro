"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface PageLoadingSpinnerProps {
  isLoading: boolean
  message?: string
}

export function PageLoadingSpinner({
  isLoading,
  message = "Loading...",
}: PageLoadingSpinnerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9998] flex items-center justify-center transition-all duration-300 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Smaller spinning ring for page transitions */}
        <div className="relative w-20 h-20">
          <div className="w-20 h-20 border-3 border-green-200 border-t-green-600 rounded-full animate-spin"></div>

          {/* Logo in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/Tulsi Agro logo.png"
              alt="Tulsi Agro Logo"
              width={40}
              height={40}
              className="w-20 h-20 object-contain"
              priority
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-6 text-center">
          <p className="text-green-700 font-medium text-base">{message}</p>
        </div>
      </div>
    </div>
  )
}
