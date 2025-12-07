"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Agricultural carousel data with high-quality images
const carouselData = [
  {
    id: 1,
    image: "/images/hero-section/wheat.webp",
    title: "Premium Quality Grains",
    subtitle: "Carefully selected and tested for excellence",
    description:
      "Our grains meet the highest quality standards with rigorous testing and quality assurance protocols.",
  },
  {
    id: 2,
    image: "/images/hero-section/fresh.webp",
    title: "Fresh from the Fields",
    subtitle: "Directly sourced from trusted farmers",
    description:
      "We work directly with local farmers to ensure the freshest and highest quality agricultural products.",
  },
  {
    id: 3,
    image: "/images/hero-section/farmers.webp",
    title: "Supporting Local Farmers",
    subtitle: "Building lasting partnerships",
    description:
      "Our commitment to fair trade practices ensures better livelihoods for farming communities.",
  },
  {
    id: 4,
    image: "/images/hero-section/packaging.webp",
    title: "Premium Packaging",
    subtitle: "Quality preservation and presentation",
    description:
      "Advanced packaging solutions that maintain freshness and quality throughout the supply chain.",
  },
  {
    id: 5,
    image: "/images/hero-section/harvesting.webp",
    title: "Sustainable Harvesting",
    subtitle: "Environmentally conscious practices",
    description:
      "We promote sustainable agricultural practices that protect our environment for future generations.",
  },
]

interface ImageCarouselProps {
  autoPlay?: boolean
  autoPlayInterval?: number
  showArrows?: boolean
  showDots?: boolean
  className?: string
}

export function ImageCarousel({
  autoPlay = true,
  autoPlayInterval = 5000,
  showArrows = false,
  showDots = true,
  className = "",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-play functionality with loop
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselData.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval])

  // Navigation functions
  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % carouselData.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    )
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 500)
    },
    [isTransitioning, currentIndex]
  )

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [prevSlide, nextSlide])

  return (
    <div
      className={`relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl ${className}`}
    >
      {/* Main Carousel Container */}
      <div className="relative w-full h-full">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.image}
              alt={`${slide.title} - ${slide.subtitle}`}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 lg:px-12 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    index === currentIndex
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-4"
                >
                  {/* Main Title */}
                  <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-lg lg:text-xl xl:text-2xl font-medium text-white/90">
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold btn-hover-glow active-scale"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden by default */}
      {showArrows && (
        <>
          <Button
            variant="ghost"
            size="lg"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110"
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110"
            onClick={nextSlide}
            disabled={isTransitioning}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75 hover:scale-110"
              }`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentIndex + 1) / carouselData.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

// Enhanced version with additional features
export function AdvancedImageCarousel({
  autoPlay = true,
  autoPlayInterval = 5000,
  showArrows = false,
  showDots = true,
  showProgress = true,
  showCounter = false,
  className = "",
}: ImageCarouselProps & {
  showProgress?: boolean
  showCounter?: boolean
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-play functionality with pause on hover and loop
  useEffect(() => {
    if (!autoPlay || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselData.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isPaused])

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % carouselData.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    )
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 500)
    },
    [isTransitioning, currentIndex]
  )

  return (
    <div
      className={`relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl group ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Carousel Container */}
      <div className="relative w-full h-full">
        {carouselData.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 1.05,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={`${slide.title} - ${slide.subtitle}`}
                fill
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  index === currentIndex
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center text-white px-6 lg:px-12 max-w-4xl mx-auto"
              >
                <div className="space-y-6">
                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  >
                    {slide.title}
                  </motion.h2>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl lg:text-2xl xl:text-3xl font-medium text-white/90"
                  >
                    {slide.subtitle}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                  >
                    {slide.description}
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      index === currentIndex
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="pt-8"
                  >
                    <Button
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-xl font-semibold btn-hover-glow active-scale shadow-lg"
                    >
                      Explore Products
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden by default */}
      {showArrows && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              variant="ghost"
              size="lg"
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 rounded-full w-14 h-14 p-0 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
              onClick={prevSlide}
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-7 w-7" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              variant="ghost"
              size="lg"
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 rounded-full w-14 h-14 p-0 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
              onClick={nextSlide}
              disabled={isTransitioning}
            >
              <ChevronRight className="h-7 w-7" />
            </Button>
          </motion.div>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4"
        >
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/75 hover:scale-110"
              }`}
            />
          ))}
        </motion.div>
      )}

      {/* Progress Bar */}
      {showProgress && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentIndex + 1) / carouselData.length) * 100}%`,
            }}
            transition={{ duration: 0.3, ease: "linear" }}
          />
        </div>
      )}

      {/* Slide Counter - Hidden by default */}
      {showCounter && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="absolute top-8 right-8 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20"
        >
          {currentIndex + 1} / {carouselData.length}
        </motion.div>
      )}
    </div>
  )
}
