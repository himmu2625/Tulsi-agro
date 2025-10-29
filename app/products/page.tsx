import { Metadata } from "next"
import ProductsView from "./ProductsView"

export const metadata: Metadata = {
  title:
    "Wholesale Grains, Rice, Pulses & Oilseeds in India | Tulsi Agro Products",
  description:
    "Explore premium agricultural products from Tulsi Agro. We are a leading wholesale supplier of basmati rice (1121, 1718, 1509), wheat, pulses, oilseeds, and millets in Chitrakoot, India.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title:
      "Wholesale Grains, Rice, Pulses & Oilseeds in India | Tulsi Agro Products",
    description:
      "Explore premium agricultural products from Tulsi Agro. We are a leading wholesale supplier of basmati rice (1121, 1718, 1509), wheat, pulses, oilseeds, and millets in Chitrakoot, India.",
    url: "/products",
  },
  twitter: {
    title:
      "Wholesale Grains, Rice, Pulses & Oilseeds in India | Tulsi Agro Products",
    description:
      "Explore premium agricultural products from Tulsi Agro. We are a leading wholesale supplier of basmati rice (1121, 1718, 1509), wheat, pulses, oilseeds, and millets in Chitrakoot, India.",
  },
}

export default function ProductsPage() {
  return <ProductsView />
}
