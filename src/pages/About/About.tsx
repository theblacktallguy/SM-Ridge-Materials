import PageBanner from "@/components/layout/PageBanner";
import MainLayout from "@/components/layout/MainLayout";
import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import WhatWeSupply from "@/components/about/WhatWeSupply";
import ServicesSummary from "@/components/about/ServicesSummary";
import ClientTypes from "@/components/about/ClientTypes";
import BusinessAdvantage from "@/components/about/BusinessAdvantage";

// ✅ SEO METADATA
export const metadata = {
  title: "About SM Ridge Materials | Construction Materials Supplier in Lagos",
  description:
    "Learn about SM Ridge Materials, a trusted construction materials supplier in Lagos. We provide reliable supply of cement, granite, blocks, and building materials across Southwest Nigeria.",
  keywords: [
    "SM Ridge Materials",
    "construction materials Lagos",
    "building materials supplier Nigeria",
    "cement supplier Lagos",
    "granite supply Lagos",
  ],
  openGraph: {
    title: "About SM Ridge Materials",
    description:
      "Trusted supplier of construction materials in Southwest Nigeria.",
    url: "https://smridgematerials.com/about",
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

const About = () => {
  return (
    <MainLayout>

      <PageBanner
        eyebrow="About Us"
        title="A dependable materials supply partner"
        text="Learn more about SM Ridge Materials, our values, and our commitment to serving construction needs across Southwest Nigeria."
      />

      <AboutHero />

      <CompanyOverview />

      <MissionVision />

      <CoreValues />

      <WhatWeSupply />

      <ClientTypes />

      <BusinessAdvantage />

      <ServicesSummary />

    </MainLayout>
  );
};

export default About;