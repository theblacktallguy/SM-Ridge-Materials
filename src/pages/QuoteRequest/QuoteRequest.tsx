import PageBanner from "@/components/layout/PageBanner";
import MainLayout from "@/components/layout/MainLayout";
import QuotePage from "@/components/quote/QuotePage";
import MaterialGuidance from "@/components/quote/MaterialGuidance";
import SupplyCapability from "@/components/quote/SupplyCapability";




export const metadata = {
  title: "Request Construction Material Quote | SM Ridge Materials Lagos",
  description:
    "Get a fast, customized quote for construction materials including cement, steel, sand, and blocks in Lagos and Southwest Nigeria. Reliable pricing and quick response.",
  keywords: [
    "construction quote Lagos",
    "cement price quote Nigeria",
    "building materials quotation Lagos",
    "request construction materials Nigeria",
    "steel and sand quote Lagos",
  ],
  openGraph: {
    title: "Request a Construction Quote | SM Ridge Materials",
    description:
      "Get a fast and reliable quote for construction materials across Lagos and Southwest Nigeria.",
    url: "https://smridgematerials.com/quote-request",
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

const QuoteRequest = () => {
  return (
    <MainLayout>
      <PageBanner
        eyebrow="Request Your Quote"
        title="Get Your Customized Construction Material Quote Today"
        text="Whether you're planning a small renovation or a large-scale development project, we are here to provide you with a tailored quote. Simply fill out the form below, and we'll send you the best offer for your construction materials. Let's build something amazing together!"
      />

      <QuotePage />

      <MaterialGuidance />

      <SupplyCapability />

    </MainLayout>
  );
};

export default QuoteRequest;