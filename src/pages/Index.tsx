import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import GlobalAffiliations from "@/components/home/GlobalAffiliations";
import CoreServices from "@/components/home/CoreServices";
import TechFocus from "@/components/home/TechFocus";
import LitigationMetrics from "@/components/home/LitigationMetrics";
import PartnersSection from "@/components/home/PartnersSection";
import GlobalNetwork from "@/components/home/GlobalNetwork";
import LibraryImage from "@/components/home/LibraryImage";
import PatentsCounters from "@/components/home/PatentsCounters";
import BlogSection from "@/components/home/BlogSection";
import ConfidentialitySection from "@/components/home/ConfidentialitySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <GlobalAffiliations />
    <CoreServices />
    <TechFocus />
    <LitigationMetrics />
    <PartnersSection />
    <GlobalNetwork />
    <LibraryImage />
    <PatentsCounters />
    <BlogSection />
    <ConfidentialitySection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
