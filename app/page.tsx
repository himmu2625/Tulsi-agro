import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageCircle,
  Wheat,
  Truck,
  Shield,
  Award,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { AdvancedImageCarousel } from "@/components/ImageCarousel"

export default function HomePage() {
  const whatsappNumber = "918810593717"
  const phoneNumber = "+91 8810593717"

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header currentPath="/" />

      {/* Hero Section with Carousel */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-yellow-500/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            <div className="space-y-6 lg:space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-800 leading-tight">
                  Premium Agricultural
                  <span className="block text-yellow-600">
                    Services & Grains
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-green-700 leading-relaxed">
                  Trusted retail & wholesale agricultural services provider in
                  India. We specialize in quality grains trading, agricultural
                  consulting, and farm-to-market solutions with competitive
                  prices and timely delivery nationwide.
                </p>
                <p className="text-base sm:text-lg text-green-600 leading-relaxed">
                  हम भारत में एक विश्वसनीय रिटेल और होलसेल कृषि सेवा प्रदाता
                  हैं। हम गुणवत्तापूर्ण अनाज व्यापार, कृषि परामर्श और किसान से
                  बाजार तक के समाधान में विशेषज्ञ हैं।
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold btn-hover-glow active-scale"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hello! I&apos;m interested in your agricultural services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-6 w-6 mr-3 icon-hover-bounce" />
                    Get WhatsApp Quote
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-white text-green-700 hover:bg-white/90 hover:text-green-800 px-8 py-4 text-lg font-semibold btn-hover-border active-scale"
                  asChild
                >
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="h-6 w-6 mr-3 icon-hover-bounce" />
                    Call Now
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 lg:gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-green-800">
                    500+
                  </div>
                  <div className="text-sm lg:text-base text-green-600">
                    Happy Farmers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-green-800">
                    18+
                  </div>
                  <div className="text-sm lg:text-base text-green-600">
                    Grain Varieties
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-green-800">
                    10+
                  </div>
                  <div className="text-sm lg:text-base text-green-600">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="relative order-first lg:order-last">
              <AdvancedImageCarousel
                autoPlay={true}
                autoPlayInterval={6000}
                showArrows={true}
                showDots={true}
                showProgress={true}
                showCounter={false}
                className="shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
              Our Agricultural Services
            </h2>
            <p className="text-lg lg:text-xl text-green-600 max-w-2xl mx-auto">
              Comprehensive agricultural solutions from farm consulting to
              wholesale grain trading with quality assurance and competitive
              pricing across India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="border-green-100 service-card-hover">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-green-600 icon-hover-glow" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-green-800 mb-3">
                  Quality Assurance
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Every grain is carefully selected, tested, and certified to
                  meet the highest agricultural standards for both retail and
                  wholesale across India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 service-card-hover">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-10 w-10 text-yellow-600 icon-hover-glow" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-green-800 mb-3">
                  Nationwide Delivery
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Reliable agricultural logistics and timely delivery across
                  India with proper packaging and handling for wholesale and
                  retail orders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 service-card-hover">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wheat className="h-10 w-10 text-green-600 icon-hover-glow" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-green-800 mb-3">
                  Wide Variety
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Extensive range of agricultural products including premium
                  basmati rice, wheat varieties, pulses, oilseeds, and specialty
                  grains.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 service-card-hover">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-yellow-600 icon-hover-glow" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-green-800 mb-3">
                  Best Prices
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Competitive wholesale pricing for restaurants, retailers, and
                  food service buyers with flexible payment terms and bulk
                  discounts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
              Our Premium Agricultural Products
            </h2>
            <p className="text-lg lg:text-xl text-green-600 max-w-2xl mx-auto">
              Discover our extensive range of wholesale grains and agricultural
              commodities. Premium basmati rice, wheat, pulses sourced directly
              from trusted farmers across India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <Card className="overflow-hidden product-card-hover pt-0">
              <div className="relative h-48">
                <Image
                  src="/images/Main-page/Wheat.webp"
                  alt="Premium Wheat - Wholesale grain supplier India"
                  fill
                  className="object-cover image-hover-zoom"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Tulsi Agro Logo Badge */}
                <div className="absolute top-3 right-3">
                  <Image
                    src="/favicon-32x32.png"
                    alt="Tulsi Agro"
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain logo-hover-pulse"
                  />
                </div>
              </div>
              <CardContent className="px-6 pb-6 pt-0">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Premium Wheat
                </h3>
                <p className="text-green-600 mb-4 text-sm">
                  High-quality wheat varieties perfect for flour mills,
                  bakeries, restaurants, and bulk buyers across India.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl lg:text-2xl font-bold text-yellow-600">
                    Best Price
                  </span>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 btn-hover-glow active-scale"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=I&apos;m interested in Premium Wheat for wholesale. Please share current rates.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden product-card-hover pt-0">
              <div className="relative h-48">
                <Image
                  src="/images/Main-page/Basmati-Rice.webp"
                  alt="Premium Basmati Rice 1121, 1718, 1509 - Wholesale rice supplier India"
                  fill
                  className="object-cover image-hover-zoom"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Tulsi Agro Logo Badge */}
                <div className="absolute top-3 right-3">
                  <Image
                    src="/favicon-32x32.png"
                    alt="Tulsi Agro"
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain logo-hover-pulse"
                  />
                </div>
              </div>
              <CardContent className="px-6 pb-6 pt-0">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Premium Basmati Rice
                </h3>
                <p className="text-green-600 mb-4 text-sm">
                  Premium basmati rice varieties including 1121, 1718, 1509,
                  Punjabi seeds, Sarbati for restaurants and food service.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl lg:text-2xl font-bold text-yellow-600">
                    Best Price
                  </span>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 btn-hover-glow active-scale"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=I&apos;m interested in Premium Basmati Rice varieties for wholesale. Please share current rates.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 pt-0">
              <div className="relative h-48">
                <Image
                  src="/images/Main-page/Pulses and dal.webp"
                  alt="Wholesale Pulses and Dal varieties - Bulk grain supplier India"
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Tulsi Agro Logo Badge */}
                <div className="absolute top-3 right-3">
                  <Image
                    src="/favicon-32x32.png"
                    alt="Tulsi Agro"
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>
              </div>
              <CardContent className="px-6 pb-6 pt-0">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Pulses & Dal
                </h3>
                <p className="text-green-600 mb-4 text-sm">
                  Quality pulses including Arhar, Moong Dal, Urad Dal, Masoor,
                  and Lentils for wholesale and retail buyers.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl lg:text-2xl font-bold text-yellow-600">
                    Best Price
                  </span>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=I&apos;m interested in Pulses and Dal for wholesale. Please share current rates.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg"
              >
                View All Products
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-green-800 mb-3">
                  Nationwide Expertise
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Deep understanding of Indian agricultural markets with direct
                  relationships with farmers and suppliers across multiple
                  states.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-green-800 mb-3">
                  Retail & Wholesale
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Flexible service model catering to restaurants, retailers,
                  food service buyers, and individual customers with competitive
                  wholesale pricing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-green-800 mb-3">
                  Agricultural Consulting
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Expert guidance on crop selection, market trends, and
                  agricultural best practices for farmers and businesses across
                  India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
            Ready to Partner with India&apos;s Leading Agricultural Services?
          </h2>
          <p className="text-lg lg:text-xl text-green-600 mb-8 max-w-2xl mx-auto">
            Contact us today for competitive wholesale quotes, agricultural
            consulting, and reliable grain supply solutions across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg btn-hover-glow active-scale"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello! I&apos;m interested in wholesale agricultural services and products.`}
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

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61576971985992"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 social-hover-lift"
            >
              <Facebook className="h-8 w-8 icon-hover-glow" />
            </a>
            <a
              href="https://www.instagram.com/tulsi.agro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 social-hover-lift"
            >
              <Instagram className="h-8 w-8 icon-hover-glow" />
            </a>
            <a
              href="https://www.youtube.com/@TULSIAGRO.96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 social-hover-lift"
            >
              <Youtube className="h-8 w-8 icon-hover-glow" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
