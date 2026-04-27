import PageBanner from "@/components/layout/PageBanner";
import MainLayout from "@/components/layout/MainLayout";


export const metadata = {
  title: "Privacy Policy | SM Ridge Materials",
  description:
    "Learn how SM Ridge Materials collects, uses, and protects your personal data when you use our website, request quotes, or contact our team in Lagos and Southwest Nigeria.",
  keywords: [
    "privacy policy SM Ridge Materials",
    "construction company privacy Nigeria",
    "data protection Lagos supplier",
    "building materials company privacy",
    "user data policy Nigeria",
  ],
  openGraph: {
    title: "SM Ridge Materials Privacy Policy",
    description:
      "How we collect, use, and protect your information when you interact with our services.",
    url: "https://smridgematerials.com/privacy-policy",
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


const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <PageBanner
        eyebrow="Privacy Policy"
        title="How we collect, use, and protect your information"
        text="This policy explains how SM Ridge Materials handles your personal data when you interact with our website, request a quote, or contact our team."
      />

      <section className="policy-page">
        <div className="policy-container">

          <div className="policy-block">
            <h2>Introduction</h2>
            <p>
              SM Ridge Materials is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard your
              information when you interact with our website and services.
            </p>
          </div>

          <div className="policy-block">
            <h2>Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Full name and contact details</li>
              <li>Phone number and email address</li>
              <li>Project location and material requirements</li>
              <li>Any additional information you provide in forms</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To process quote requests and enquiries</li>
              <li>To communicate with you regarding your project</li>
              <li>To improve our services and customer experience</li>
              <li>To manage delivery coordination and logistics</li>
            </ul>
          </div>

          <div className="policy-block">
            <h2>Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your
              information from unauthorized access, disclosure, or misuse.
              However, no online transmission is completely secure.
            </p>
          </div>

          <div className="policy-block">
            <h2>Third-Party Sharing</h2>
            <p>
              We do not sell or trade your personal information. Your data may
              only be shared with trusted partners when necessary to fulfill
              delivery or service requirements.
            </p>
          </div>

          <div className="policy-block">
            <h2>Cookies</h2>
            <p>
              Our website may use basic cookies to enhance user experience.
              These cookies do not collect sensitive personal information.
            </p>
          </div>

          <div className="policy-block">
            <h2>Your Rights</h2>
            <p>
              You have the right to request access to the personal data we hold
              about you and request corrections where necessary.
            </p>
          </div>

          <div className="policy-block">
            <h2>Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us through our official contact page.
            </p>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicy;