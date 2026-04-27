import ServicesCore from "@/components/services/ServicesCore";
import MainLayout from "../../components/layout/MainLayout";
import PageBanner from "../../components/layout/PageBanner";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesIndustries from "@/components/services/ServicesIndustries";
import ServicesTrust from "@/components/services/ServicesTrust"



export const metadata = {
  title: "Construction Material Supply Services in Lagos | SM Ridge Materials",
  description:
    "We provide reliable construction material supply services including sourcing, bulk orders, and delivery logistics across Southwest Nigeria for contractors and developers.",
  keywords: [
    "construction services Lagos",
    "building materials supply Nigeria",
    "cement delivery Lagos",
    "bulk construction materials Nigeria",
    "logistics construction materials Lagos",
  ],
  openGraph: {
    title: "Construction Services | SM Ridge Materials",
    description:
      "Reliable material sourcing, bulk supply, and delivery services for construction projects in Southwest Nigeria.",
    url: "https://smridgematerials.com/services",
    siteName: "SM Ridge Materials",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const Services = () => {
  return (
    <MainLayout>
      <PageBanner
        eyebrow="Our Services"
        title="Structured supply support for construction projects"
        text="From material sourcing and bulk order coordination to delivery logistics and project support, SM Ridge Materials provides reliable service solutions for contractors, developers, and project owners across Southwest Nigeria."
      />

      <ServicesCore />

      <ServicesProcess />

      <ServicesIndustries />

      <ServicesTrust />

      
    </MainLayout>
  );
};

export default Services;