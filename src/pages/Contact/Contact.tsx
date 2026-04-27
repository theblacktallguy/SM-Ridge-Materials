import PageBanner from "@/components/layout/PageBanner";
import MainLayout from "@/components/layout/MainLayout";
import ContactOptionsSection from "@/components/contact/ContactOptionsSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import ContactFormSection from "@/components/contact/ContactFormSection";

// ✅ SEO METADATA
export const metadata = {
  title: "Contact SM Ridge Materials | Construction Materials Supplier in Lagos",
  description:
    "Contact SM Ridge Materials for construction material supply, quotes, and delivery services in Southwest Nigeria. Reach our team for fast response and reliable service.",
  keywords: [
    "contact construction materials Lagos",
    "material supplier contact Nigeria",
    "cement supplier Lagos contact",
    "request building materials Lagos",
    "construction supply phone Lagos",
  ],
  openGraph: {
    title: "Contact SM Ridge Materials",
    description:
      "Get in touch for quotes, material supply, and delivery services across Southwest Nigeria.",
    url: "https://smridgematerials.com/contact",
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

const Contact = () => {
  return (
    <MainLayout>
      <PageBanner
        eyebrow="Contact Us"
        title="Let’s discuss your material supply needs"
        text="Get in touch with SM Ridge Materials for product enquiries, quote requests, delivery coordination, and general support across Southwest Nigeria."
      />

      <ContactOptionsSection />

      <ContactFormSection />

      <ContactMapSection />
      
    </MainLayout>
  );
};

export default Contact;