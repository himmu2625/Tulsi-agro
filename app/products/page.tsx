"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wheat, Phone, MessageCircle, Star } from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Premium Wheat",
    category: "Wheat",
    image: "/images/premium-wheat.jpg",
    description:
      "High-quality wheat varieties perfect for flour mills, bakeries, and household consumption.",
    features: [
      "High protein content",
      "Uniform grain size",
      "Low moisture",
      "Pest-free",
    ],
    rating: 4.8,
  },
  {
    id: 2,
    name: "Basmati Rice 1121",
    category: "Rice",
    image: "/images/basmati-1121.jpg",
    description:
      "Premium long-grain basmati rice 1121 variety, perfect for export and premium food service.",
    features: ["Extra long grain", "Aromatic", "Aged rice", "Export quality"],
    rating: 4.9,
  },
  {
    id: 3,
    name: "Basmati Rice 1718",
    category: "Rice",
    image: "/images/basmati-1718.jpg",
    description:
      "High-quality basmati rice 1718 variety with excellent cooking quality and aroma.",
    features: ["Long grain", "Aromatic", "Premium quality", "Good yield"],
    rating: 4.8,
  },
  {
    id: 4,
    name: "Basmati Rice 1509",
    category: "Rice",
    image: "/images/basmati-1509.jpg",
    description:
      "Popular basmati rice 1509 variety known for its taste and cooking properties.",
    features: [
      "Medium-long grain",
      "Good aroma",
      "Affordable",
      "Popular variety",
    ],
    rating: 4.7,
  },
  {
    id: 5,
    name: "Punjabi Seeds Rice",
    category: "Rice",
    image: "/images/punjabi-seeds-rice.jpg",
    description:
      "Traditional Punjabi seeds rice variety with excellent taste and nutritional value.",
    features: [
      "Traditional variety",
      "Good taste",
      "Nutritious",
      "Local favorite",
    ],
    rating: 4.6,
  },
  {
    id: 6,
    name: "Sarbati Rice",
    category: "Rice",
    image: "/images/sarbati-rice.jpg",
    description:
      "Premium sarbati rice variety known for its excellent cooking quality and taste.",
    features: ["Premium quality", "Good cooking", "Aromatic", "Healthy choice"],
    rating: 4.7,
  },
  {
    id: 7,
    name: "Chickpeas (Chana)",
    category: "Pulses",
    image: "/images/chickpeas-chana.jpg",
    description:
      "High-quality chickpeas perfect for various culinary applications and nutritional benefits.",
    features: ["High protein", "Nutritious", "Versatile", "Good quality"],
    rating: 4.8,
  },
  {
    id: 8,
    name: "Mustard Seeds",
    category: "Oilseeds",
    image: "/images/mustard-seeds.jpg",
    description:
      "Premium quality mustard seeds perfect for oil extraction and culinary use.",
    features: [
      "High oil content",
      "Pure quality",
      "Traditional use",
      "Versatile",
    ],
    rating: 4.7,
  },
  {
    id: 9,
    name: "Masoor Dal",
    category: "Pulses",
    image: "/images/masoor-dal.jpg",
    description:
      "High-quality masoor dal (red lentils) perfect for various Indian dishes.",
    features: ["High protein", "Quick cooking", "Nutritious", "Popular choice"],
    rating: 4.6,
  },
  {
    id: 10,
    name: "Bajra (Pearl Millet)",
    category: "Millets",
    image: "/images/bajra-pearl-millet.jpg",
    description:
      "Traditional bajra millet known for its nutritional value and health benefits.",
    features: ["Gluten-free", "High fiber", "Nutritious", "Traditional"],
    rating: 4.5,
  },
  {
    id: 11,
    name: "Jowar (Sorghum)",
    category: "Millets",
    image: "/images/jowar-sorghum.jpg",
    description:
      "Premium jowar (sorghum) perfect for traditional and modern culinary uses.",
    features: ["Gluten-free", "High protein", "Versatile", "Healthy"],
    rating: 4.6,
  },
  {
    id: 12,
    name: "Peanuts (Groundnuts)",
    category: "Oilseeds",
    image: "/images/peanuts-groundnuts.jpg",
    description:
      "High-quality peanuts perfect for oil extraction and direct consumption.",
    features: ["High oil content", "Rich taste", "Versatile", "Popular"],
    rating: 4.8,
  },
  {
    id: 13,
    name: "Sesame Seeds (Til)",
    category: "Oilseeds",
    image: "/images/sesame-seeds-til.jpg",
    description:
      "Premium sesame seeds perfect for oil extraction and culinary applications.",
    features: [
      "High oil content",
      "Nutritious",
      "Traditional use",
      "Versatile",
    ],
    rating: 4.7,
  },
  {
    id: 14,
    name: "Arhar Yellow Dal",
    category: "Pulses",
    image: "/images/arhar-toor-dal.jpg",
    description:
      "High-quality arhar (toor) dal perfect for traditional Indian cooking.",
    features: ["High protein", "Traditional", "Nutritious", "Popular"],
    rating: 4.8,
  },
  {
    id: 15,
    name: "Moong Dal",
    category: "Pulses",
    image: "/images/moong-dal.jpg",
    description:
      "Premium moong dal perfect for various Indian dishes and sprouting.",
    features: ["High protein", "Easy digestible", "Versatile", "Healthy"],
    rating: 4.7,
  },
  {
    id: 16,
    name: "Urad Dal (Black Lentils)",
    category: "Pulses",
    image: "/images/urad-dal-black.jpg",
    description:
      "High-quality urad dal perfect for traditional Indian dishes and fermentation.",
    features: ["High protein", "Traditional use", "Versatile", "Nutritious"],
    rating: 4.6,
  },
  {
    id: 17,
    name: "Mahua Flower",
    category: "Specialty",
    image: "/images/mahua-flower.jpg",
    description:
      "Traditional mahua flowers used for various purposes including food and medicinal applications.",
    features: [
      "Traditional use",
      "Natural product",
      "Good quality",
      "Authentic",
    ],
    rating: 4.6,
  },
]

const categories = [
  "All",
  "Wheat",
  "Rice",
  "Pulses",
  "Oilseeds",
  "Millets",
  "Specialty",
]

export default function ProductsPage() {
  const whatsappNumber = "918810593717"
  const phoneNumber = "+91 8810593717"
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header currentPath="/products" />

      {/* Header */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Products background.webp"
            alt="Tulsi Agro Products Background"
            fill
            className="object-cover"
            priority={true}
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg"
              style={{ textShadow: "2px 2px 4px rgba(22, 101, 52, 0.8)" }}
            >
              Our Premium Agricultural Products
            </h1>
            <p
              className="text-lg sm:text-xl font-semibold text-white max-w-2xl mx-auto drop-shadow-md"
              style={{ textShadow: "1px 1px 3px rgba(22, 101, 52, 0.6)" }}
            >
              Discover our extensive range of wholesale grains and agricultural
              commodities. Premium basmati rice, wheat, pulses for restaurants,
              retailers & food service buyers across India.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 lg:py-8 bg-white border-b border-green-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-green-600 hover:bg-green-700 text-xs sm:text-sm btn-hover-glow active-scale"
                    : "border-green-600 text-green-600 hover:bg-green-50 text-xs sm:text-sm btn-hover-border active-scale"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden product-card-hover"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={`${product.name} - Tulsi Agro Chitrakoot`}
                    fill
                    className="object-cover image-hover-zoom"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <Badge className="absolute top-3 left-3 bg-green-600 text-white">
                    {product.category}
                  </Badge>
                  {/* Tulsi Agro Logo Badge */}
                  <div className="absolute top-3 right-3">
                    <Image
                      src="/Tulsi Agro logo.png"
                      alt="Tulsi Agro"
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain logo-hover-pulse"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-green-800">
                      {product.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="text-sm text-green-600 ml-1">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-green-600 mb-4 text-sm">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs bg-green-100 text-green-700"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="w-full bg-green-600 hover:bg-green-700 btn-hover-glow active-scale"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=I'm interested in ${product.name} for wholesale. Please share current rates and availability.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Get Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
              Why Choose Tulsi Agro?
            </h2>
            <p className="text-lg lg:text-xl text-green-600 max-w-3xl mx-auto">
              Leading wholesale grain supplier in India serving restaurants,
              retailers, and food service buyers with premium quality products
              and exceptional service nationwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wheat className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-green-800 mb-3">
                  Premium Quality
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Every grain is carefully selected, tested, and certified to
                  meet the highest agricultural standards for both retail and
                  wholesale across India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-green-800 mb-3">
                  Customer Satisfaction
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Trusted by restaurants, retailers, and food service buyers
                  nationwide for consistent quality and reliable delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-green-800 mb-3">
                  Expert Support
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Dedicated support team providing guidance on product
                  selection, pricing, and agricultural consulting services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Need Custom Quantities or Special Varieties?
          </h2>
          <p className="text-xl text-green-600 mb-8 max-w-2xl mx-auto">
            Contact us for bulk orders, custom packaging, or specific
            agricultural products not listed above. We provide both retail and
            wholesale solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg btn-hover-glow active-scale"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello! I need custom quantities and special varieties. Please help.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2 icon-hover-bounce" />
                WhatsApp: {phoneNumber}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg bg-transparent btn-hover-border active-scale"
              asChild
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="h-5 w-5 mr-2 icon-hover-bounce" />
                Call: {phoneNumber}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
