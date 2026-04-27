import MainLayout from "@/components/layout/MainLayout";
import PageBanner from "@/components/layout/PageBanner";
import HeroSection from "@/components/home/HeroSection"; 
import AboutUs from "@/components/home/AboutUs"; 
import KeyProductCategories from "@/components/home/KeyProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs"; 
import ServicesOverview from "@/components/home/ServicesOverview"
import CoverageAreas from "@/components/home/CoverageAreas";
import TestimonialSlider from "@/components/home/TestimonialSlider";


export const metadata = {
  title: "SM Ridge Materials | Construction Materials Supplier in Lagos",
  description:
    "SM Ridge Materials supplies cement, granite, sand, blocks, steel, and building materials across Southwest Nigeria. Reliable delivery, competitive pricing, and fast response.",
  keywords: [
    "construction materials Lagos",
    "cement supplier Lagos",
    "granite supply Lagos",
    "building materials Nigeria",
    "construction supply company Lagos",
    "sand and blocks supplier Lagos",
  ],
  openGraph: {
    title: "SM Ridge Materials",
    description:
      "Reliable construction materials supply across Southwest Nigeria. Fast delivery and trusted service.",
    url: "https://smridgematerials.com",
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

const Home = () => {
  return (
    <MainLayout>      
      <PageBanner
        eyebrow="SM Ridge Materials"
        title="Reliable Construction Materials Supply in Nigeria"
        text="We supply quality building materials for contractors, developers, businesses, and individual project owners with dependable service and responsive support."
      />

      <HeroSection /> 


      <AboutUs />

      <KeyProductCategories />

      <WhyChooseUs />

      <ServicesOverview />

      <CoverageAreas />

      <TestimonialSlider />
    </MainLayout>
  );
};

export default Home;