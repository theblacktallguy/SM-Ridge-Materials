import PageBanner from "@/components/layout/PageBanner";
import MainLayout from "@/components/layout/MainLayout";
import CompanyIntro from "@/components/company-profile/CompanyIntro";
import CompanyJourney from "@/components/company-profile/CompanyJourney";
import CompanyValues from "@/components/company-profile/CompanyValues";
import SupplyCapabilities from "@/components/company-profile/SupplyCapabilities";
import CompanyGallery from "@/components/company-profile/CompanyGallery";

// ✅ SEO METADATA
export const metadata = {
  title: "Company Profile | SM Ridge Materials - Construction Supply in Lagos",
  description:
    "Explore SM Ridge Materials' company profile, including our supply capabilities, project experience, and gallery of construction material delivery across Lagos and Southwest Nigeria.",
  keywords: [
    "SM Ridge Materials company profile",
    "construction materials company Lagos",
    "building materials supplier Nigeria",
    "material supply company Lagos",
    "construction logistics Lagos",
  ],
  openGraph: {
    title: "SM Ridge Materials Company Profile",
    description:
      "Discover our supply operations, project experience, and material delivery across Lagos and Southwest Nigeria.",
    url: "https://smridgematerials.com/company-profile",
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

const CompanyProfile = () => {
  return (
    <MainLayout>
      <PageBanner
        eyebrow="Company Profile"
        title="A trusted partner in construction materials supply"
        text="Explore the profile of SM Ridge Materials, our operational strengths, project support capabilities, and selected visuals that reflect our commitment to reliable supply across Lagos and Southwest Nigeria."
      />

      <CompanyIntro />

      <CompanyJourney />

      <CompanyValues />

      <CompanyGallery />

      <SupplyCapabilities />

    </MainLayout>
  );
};

export default CompanyProfile;