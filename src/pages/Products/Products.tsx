import PageBanner from "@/components/layout/PageBanner";
import MainLayout from "@/components/layout/MainLayout";
import ProductsPage from "@/components/product/ProductsPage";
import SupplyCapability from "@/components/product/SupplyCapability";
import SupplyProcess from "@/components/product/SupplyProcess";
import TrustBlock from "@/components/product/TrustBlock";


export const metadata = {
  title: "Construction Materials Supplier in Lagos | Cement, Steel, Sand & Blocks",
  description:
    "Browse high-quality construction materials including cement, steel, sand, blocks, roofing, and plumbing supplies. SM Ridge Materials delivers across Lagos and Southwest Nigeria.",
  keywords: [
    "construction materials Lagos",
    "cement supplier Nigeria",
    "steel supplier Lagos",
    "sand and blocks Lagos",
    "building materials supplier Nigeria",
    "roofing materials Lagos",
  ],
  openGraph: {
    title: "Construction Materials | SM Ridge Materials",
    description:
      "Reliable supply of cement, steel, sand, blocks, and other construction materials across Lagos and Southwest Nigeria.",
    url: "https://smridgematerials.com/products",
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

const Products = () => {
  return (
    <MainLayout>
      <PageBanner 
        eyebrow="Our Products" 
        title="High-Quality Construction Materials" 
        text="Explore our wide range of premium construction materials, including cement, steel, sand, blocks, and more. We provide reliable and timely delivery to contractors and developers across Lagos and Southwest Nigeria."
      />

      <ProductsPage />

      <SupplyCapability />

      <SupplyProcess />

      <TrustBlock />

    </MainLayout>
  );
};

export default Products;