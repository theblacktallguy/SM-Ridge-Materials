import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Products from "@/pages/Products/Products";
import Services from "@/pages/Services/Services";
import QuoteRequest from "@/pages/QuoteRequest/QuoteRequest";
import CompanyProfile from "@/pages/CompanyProfile/CompanyProfile";
import FAQ from "@/pages/FAQ/FAQ";
import Contact from "@/pages/Contact/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "@/pages/Terms/Terms";

import RouteScrollManager from "@/components/common/RouteScrollManager";

const AppRouter = () => {
  return (
    <BrowserRouter>

      {/* 🧠 FULL CONTROL SCROLL ENGINE */}
      <RouteScrollManager />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/quote-request" element={<QuoteRequest />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

    </BrowserRouter>
  );
};

export default AppRouter;