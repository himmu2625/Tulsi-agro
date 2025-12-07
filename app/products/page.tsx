import { Metadata } from "next"
import ProductsView from "./ProductsView"

export const metadata: Metadata = {
  title:
    "Wholesale Grains, Rice, Pulses & Oilseeds in India | Tulsi Agro Products",
  description:
    "Explore premium agricultural products from Tulsi Agro. We are a leading wholesale supplier of basmati rice (1121, 1718, 1509), wheat, pulses, oilseeds, and millets in Chitrakoot, India.",
  alternates: {
    canonical: "https://tulsigroup.org/products",
  },
  openGraph: {
    title:
      "Wholesale Grains, Rice, Pulses & Oilseeds in India | Tulsi Agro Products",
    description:
      "Explore premium agricultural products from Tulsi Agro. We are a leading wholesale supplier of basmati rice (1121, 1718, 1509), wheat, pulses, oilseeds, and millets in Chitrakoot, India.",
    url: "https://tulsigroup.org/products",
    images: [
      {
        url: "https://tulsigroup.org/images/Products%20background.webp",
        width: 1200,
        height: 630,
        alt: "Wholesale Grains and Agricultural Products from Tulsi Agro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Wholesale Grains, Rice, Pulses & Oilseeds in India | Tulsi Agro Products",
    description:
      "Explore premium agricultural products from Tulsi Agro. We are a leading wholesale supplier of basmati rice (1121, 1718, 1509), wheat, pulses, oilseeds, and millets in Chitrakoot, India.",
    creator: "@tulsi_agro",
    site: "@tulsi_agro",
  },
}

export default function ProductsPage() {
  return <ProductsView />
}
