import PageBanner from "@/components/layout/PageBanner";
import MainLayout from "@/components/layout/MainLayout";


export const metadata = {
  title: "Terms of Use | SM Ridge Materials",
  description:
    "Read the terms and conditions for using SM Ridge Materials services, including quotes, construction material supply, and delivery coordination across Southwest Nigeria.",
  keywords: [
    "terms of use SM Ridge Materials",
    "construction services terms Nigeria",
    "building materials supplier terms",
    "Lagos material supply conditions",
    "service terms construction Nigeria",
  ],
  openGraph: {
    title: "Terms of Use | SM Ridge Materials",
    description:
      "Terms and conditions for using our construction material supply and delivery services.",
    url: "https://smridgematerials.com/terms",
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

const TermsOfUse = () => {
  return (
    <MainLayout>
      <PageBanner
        eyebrow="Terms of Use"
        title="Terms and conditions for using our services"
        text="These terms outline the conditions for using SM Ridge Materials' services, including quotes, material supply, and delivery coordination."
      />

      <section className="policy-page">
        <div className="policy-container">

          <div className="policy-block">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing our website or using our services, you agree to comply
              with and be bound by these Terms of Use. If you do not agree with
              these terms, please do not use our services.
            </p>
          </div>

          <div className="policy-block">
            <h2>Services Overview</h2>
            <p>
              SM Ridge Materials provides construction material supply, quote
              requests, and delivery coordination services. All services are
              subject to availability and confirmation.
            </p>
          </div>

          <div className="policy-block">
            <h2>Quotes & Pricing</h2>
            <ul>
              <li>All quotes are based on current market conditions.</li>
              <li>Prices may change depending on quantity and location.</li>
              <li>Quotes are not final until confirmed by our team.</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>Orders & Delivery</h2>
            <ul>
              <li>Delivery timelines depend on logistics and location.</li>
              <li>Clients must provide accurate delivery information.</li>
              <li>Delays may occur due to unforeseen circumstances.</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>Customer Responsibilities</h2>
            <ul>
              <li>Ensure all submitted information is accurate.</li>
              <li>Provide clear access to delivery locations.</li>
              <li>Confirm orders before dispatch.</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>Limitation of Liability</h2>
            <p>
              SM Ridge Materials is not liable for delays, damages, or losses
              resulting from factors beyond our control, including but not
              limited to weather conditions, transportation issues, or site
              access limitations.
            </p>
          </div>

          <div className="policy-block">
            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and branding,
              remains the property of SM Ridge Materials and may not be reused
              without permission.
            </p>
          </div>

          <div className="policy-block">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Use at any time.
              Continued use of our services implies acceptance of any updates.
            </p>
          </div>

          <div className="policy-block">
            <h2>Contact Information</h2>
            <p>
              For questions regarding these Terms of Use, please contact us
              through our official contact page.
            </p>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default TermsOfUse;