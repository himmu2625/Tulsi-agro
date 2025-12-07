"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Amit Patel",
    location: "Restaurant Owner, Delhi",
    avatar: "/images/avatars/amit.webp",
    testimonial:
      "Tulsi Agro has been our go-to supplier for premium basmati rice and wheat for over three years. Their quality is consistently excellent, and the delivery is always on time. Highly recommended for any food business!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Singh",
    location: "Retail Store Manager, Mumbai",
    avatar: "/images/avatars/priya.webp",
    testimonial:
      "We've been sourcing a variety of pulses and grains from Tulsi Agro for our retail chain. Our customers appreciate the quality, and we appreciate the competitive wholesale pricing and reliable service.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    location: "Farmer, Uttar Pradesh",
    avatar: "/images/avatars/rajesh.webp",
    testimonial:
      "Working with Tulsi Agro has been a game-changer for our farm. Their agricultural consulting has helped us improve our yield, and we always get a fair price for our produce. They are a true partner to farmers.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sunita Gupta",
    location: "Food Service Buyer, Bangalore",
    avatar: "/images/avatars/sunita.webp",
    testimonial:
      "As a large-scale food service provider, we need a reliable grain supplier. Tulsi Agro has consistently met our demands with high-quality products and professional service. Their team is always a pleasure to work with.",
    rating: 5,
  },
]

interface TestimonialCarouselProps {
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
}

export function TestimonialCarousel({
  autoPlay = true,
  autoPlayInterval = 6000,
  className = "",
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval, nextSlide])

  return (
    <section className={`py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800 dark:text-green-300">
            What Our Partners Say
          </h2>
          <p className="text-lg text-green-600 dark:text-green-400 max-w-2xl mx-auto">
            Real stories from the businesses and farmers who trust Tulsi Agro.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden relative h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-full h-full"
              >
                <Card className="h-full bg-white dark:bg-gray-900 shadow-lg">
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
                    <div className="mb-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="lg"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/50 backdrop-blur-md hover:bg-white/80 dark:bg-gray-700/50 dark:hover:bg-gray-700/80 rounded-full w-12 h-12 p-0"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-white" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/50 backdrop-blur-md hover:bg-white/80 dark:bg-gray-700/50 dark:hover:bg-gray-700/80 rounded-full w-12 h-12 p-0"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-gray-800 dark:text-white" />
          </Button>
        </div>
      </div>
    </section>
  )
}
