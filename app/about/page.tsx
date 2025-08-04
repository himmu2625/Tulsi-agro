import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageCircle,
  Truck,
  Shield,
  Award,
  Target,
  Heart,
  Users,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
  const whatsappNumber = "918810593717"
  const phoneNumber = "+91 8810593717"

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header currentPath="/about" />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/About background.webp"
            alt="Tulsi Agro About Background"
            fill
            className="object-cover"
            priority={true}
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg"
              style={{ textShadow: "2px 2px 4px rgba(22, 101, 52, 0.8)" }}
            >
              Tulsi Agro
            </h1>
            <p
              className="text-xl lg:text-2xl font-semibold text-white max-w-3xl mx-auto drop-shadow-md"
              style={{ textShadow: "1px 1px 3px rgba(22, 101, 52, 0.6)" }}
            >
              Trusted agricultural services provider in Chitrakoot, Uttar
              Pradesh. We specialize in quality grain trading, agricultural
              consulting, and farm-to-market solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-green-800">Our Story</h2>
              <div className="space-y-4 text-green-700 text-lg leading-relaxed">
                <p>
                  Established in the heart of Karwi Galla Mandi, Chitrakoot,
                  Tulsi Agro has been serving as a trusted agricultural services
                  provider and grain trading company. What started as a local
                  grain business has evolved into a comprehensive agricultural
                  services provider serving farmers, retailers, and wholesale
                  buyers.
                </p>
                <p>
                  Our journey has been built on the foundation of trust,
                  quality, and unwavering commitment to our customers. We work
                  directly with local farmers, ensuring fair prices for them
                  while maintaining the highest quality standards for our retail
                  and wholesale clients.
                </p>
                <p>
                  हम चित्रकूट के करवी गल्ला मंडी में स्थित एक विश्वसनीय कृषि
                  सेवा प्रदाता और अनाज व्यापारी कंपनी हैं। हमारी यात्रा एक
                  स्थानीय अनाज व्यापार से शुरू होकर एक व्यापक कृषि सेवा प्रदाता
                  के रूप में विकसित हुई है।
                </p>
                <p>
                  हमारी यात्रा विश्वास, गुणवत्ता और अपने ग्राहकों के प्रति अटूट
                  प्रतिबद्धता की नींव पर टिकी है। हम स्थानीय किसानों के साथ सीधे
                  काम करते हैं, उनके लिए उचित मूल्य सुनिश्चित करते हैं और साथ ही
                  अपने खुदरा और थोक ग्राहकों के लिए उच्चतम गुणवत्ता मानकों को
                  बनाए रखते हैं।
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about-tulsi-agro-chitrakoot.jpg"
                alt="Tulsi Agro agricultural services in Chitrakoot - grain trading and farming"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-green-800 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-green-200 shadow-lg">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Our Mission
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  To provide premium quality agricultural products and services
                  that empower farmers, businesses, and consumers across India
                  with sustainable, reliable, and innovative solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Our Vision
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  To become India&apos;s most trusted agricultural partner,
                  leading the transformation of agricultural commerce through
                  quality, innovation, and sustainable practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Tulsi Agro in
              serving the agricultural community of Chitrakoot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Quality First
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Every product meets the highest standards of quality and
                  safety, ensuring customer satisfaction and trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Customer Focus
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Building lasting relationships through exceptional service,
                  transparency, and understanding customer needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Excellence
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Striving for excellence in every aspect of our business, from
                  product quality to customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Reliability
                </h3>
                <p className="text-green-600 text-sm lg:text-base">
                  Consistent delivery, on-time service, and dependable support
                  that our customers can always count on.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Chitrakoot */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                Why Chitrakoot?
              </h2>
              <Card className="border-green-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">
                    Strategic Location
                  </h3>
                  <div className="space-y-4 text-green-700">
                    <p>
                      Chitrakoot is strategically located in the agricultural
                      belt of Uttar Pradesh, making it an ideal hub for grain
                      trading and agricultural services. Our location in Karwi
                      Galla Mandi provides us direct access to:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                        <span>Local farmers and agricultural producers</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                        <span>Major transportation networks</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                        <span>Regional wholesale markets</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                        <span>Agricultural research institutions</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center border-green-100">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-800 mb-2">
                      500+
                    </div>
                    <div className="text-green-600">Happy Farmers</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-green-100">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-800 mb-2">
                      18+
                    </div>
                    <div className="text-green-600">Grain Varieties</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-green-100">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-800 mb-2">
                      10+
                    </div>
                    <div className="text-green-600">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-green-100">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-800 mb-2">
                      100%
                    </div>
                    <div className="text-green-600">Quality Assured</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Ready to Partner with Chitrakoot&apos;s Leading Agricultural
            Services?
          </h2>
          <p className="text-xl text-green-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied farmers and customers who trust Tulsi
            Agro for their agricultural and grain trading needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg btn-hover-glow active-scale"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello! I&apos;m interested in partnering with Tulsi Agro for agricultural services.`}
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
