import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Truck,
  Wheat,
} from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function ContactPage() {
  const whatsappNumber = "918810593717"
  const phoneNumber = "+91 8810593717"

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header currentPath="/contact" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden hero-3d-glow">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg"
              style={{ textShadow: "2px 2px 4px rgba(22, 101, 52, 0.8)" }}
            >
              Contact Us
            </h1>
            <p
              className="text-xl lg:text-2xl font-semibold text-green-100 max-w-3xl mx-auto drop-shadow-md"
              style={{ textShadow: "1px 1px 3px rgba(22, 101, 52, 0.6)" }}
            >
              Get in touch with Tulsi Agro for wholesale grain inquiries,
              agricultural consulting, and quality agricultural products.
              We&apos;re here to serve your agricultural needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-green-600 mb-8">
                  Ready to partner with India&apos;s leading agricultural
                  services provider? Contact us today for competitive wholesale
                  quotes, agricultural consulting, and reliable grain supply
                  solutions.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-green-100 contact-card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-8 w-8 text-green-600 icon-hover-glow" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-green-800 mb-2">
                          Phone
                        </h3>
                        <p className="text-green-600 mb-2">{phoneNumber}</p>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 btn-hover-glow active-scale"
                          asChild
                        >
                          <a href={`tel:${phoneNumber}`}>
                            <Phone className="h-5 w-5 mr-2 icon-hover-bounce" />
                            Call Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-100 contact-card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-8 w-8 text-yellow-600 icon-hover-glow" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-green-800 mb-2">
                          WhatsApp
                        </h3>
                        <p className="text-green-600 mb-2">
                          Quick chat for instant support
                        </p>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 btn-hover-glow active-scale"
                          asChild
                        >
                          <a
                            href={`https://wa.me/${whatsappNumber}?text=Hello! I&apos;m interested in your agricultural services.`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="h-5 w-5 mr-2 icon-hover-bounce" />
                            WhatsApp Chat
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-100 contact-card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-8 w-8 text-green-600 icon-hover-glow" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-green-800 mb-2">
                          Email
                        </h3>
                        <p className="text-green-600 mb-2">
                          assisttulsiagro@gmail.com
                        </p>
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 btn-hover-glow active-scale"
                          asChild
                        >
                          <a href="mailto:assisttulsiagro@gmail.com">
                            <Mail className="h-5 w-5 mr-2 icon-hover-bounce" />
                            Send Email
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-100 contact-card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-8 w-8 text-yellow-600 icon-hover-glow" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-green-800 mb-2">
                          Address
                        </h3>
                        <div className="text-green-600 space-y-1">
                          <p>Shop No: B. 13, Karwi Galla Mandi</p>
                          <p>Chitrakoot, Uttar Pradesh - 210205</p>
                          <p>India</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-6">
                  Business Hours
                </h2>
                <Card className="border-green-100">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-green-600" />
                        <div>
                          <h3 className="font-semibold text-green-800">
                            Monday - Saturday
                          </h3>
                          <p className="text-green-600">8:00 AM - 8:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-green-600" />
                        <div>
                          <h3 className="font-semibold text-green-800">
                            Sunday
                          </h3>
                          <p className="text-green-600">9:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-6">
                  Our Services
                </h2>
                <div className="grid gap-4">
                  <Card className="border-green-100">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Wheat className="h-5 w-5 text-green-600" />
                        <div>
                          <h3 className="font-semibold text-green-800">
                            Wholesale Grain Trading
                          </h3>
                          <p className="text-green-600 text-sm">
                            Premium quality grains at competitive prices
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-100">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Truck className="h-5 w-5 text-green-600" />
                        <div>
                          <h3 className="font-semibold text-green-800">
                            Agricultural Consulting
                          </h3>
                          <p className="text-green-600 text-sm">
                            Expert guidance on crop selection and market trends
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-100">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="h-5 w-5 text-green-600" />
                        <div>
                          <h3 className="font-semibold text-green-800">
                            Customer Support
                          </h3>
                          <p className="text-green-600 text-sm">
                            Dedicated support for all your agricultural needs
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA Section */}
      <section className="py-16 lg:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg lg:text-xl text-green-600 max-w-3xl mx-auto">
              Contact us today for competitive wholesale quotes, agricultural
              consulting, and reliable grain supply solutions. We&apos;re here
              to serve your agricultural needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow contact-card-hover">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-10 w-10 text-green-600 icon-hover-glow" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Call Us
                </h3>
                <p className="text-green-600 mb-4">
                  Speak directly with our agricultural experts
                </p>
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white btn-hover-glow active-scale"
                  asChild
                >
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="h-5 w-5 mr-2 icon-hover-bounce" />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow contact-card-hover">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-10 w-10 text-yellow-600 icon-hover-glow" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  WhatsApp
                </h3>
                <p className="text-green-600 mb-4">
                  Quick chat for instant support and quotes
                </p>
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white btn-hover-glow active-scale"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hello! I&apos;m interested in your agricultural services and products.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2 icon-hover-bounce" />
                    WhatsApp Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow contact-card-hover md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-green-600 icon-hover-glow" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Email Us
                </h3>
                <p className="text-green-600 mb-4">
                  Send us detailed inquiries and requirements
                </p>
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white btn-hover-glow active-scale"
                  asChild
                >
                  <a href="mailto:assisttulsiagro@gmail.com">
                    <Mail className="h-5 w-5 mr-2 icon-hover-bounce" />
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
