"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface LoadingSpinnerProps {
  isLoading: boolean
  onLoadingComplete?: () => void
}

export function LoadingSpinner({
  isLoading,
  onLoadingComplete,
}: LoadingSpinnerProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      // Add a small delay for smooth transition
      const timer = setTimeout(() => {
        setIsVisible(false)
        onLoadingComplete?.()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isLoading, onLoadingComplete])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Spinning ring */}
        <div className="relative w-32 h-32">
          <div className="w-32 h-32 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>

          {/* Logo in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/Tulsi Agro logo.png"
              alt="Tulsi Agro Logo"
              width={64}
              height={64}
              className="w-32 h-32 object-contain"
              priority
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          <p className="text-green-700 font-semibold text-xl mb-2">
            Loading...
          </p>
          <p className="text-green-600 text-base">Tulsi Agro</p>
        </div>
      </div>
    </div>
  )
}
