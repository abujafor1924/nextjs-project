import HomeSlider from "@/components/home/HomeSlider";
import ServicesSlider from "@/components/home/ServicesSlider";
import TrustedPartner from "@/components/home/TrustedPartner";
import ForeignTreatments from "@/components/home/ForeignTreatments";
import HospitalPartners from "@/components/home/HospitalPartners";
import AppSection from "@/components/home/AppSection";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <ServicesSlider />
      <TrustedPartner />
      <ForeignTreatments />
      <HospitalPartners />
      <AppSection />
      <Features />
      <FAQ />
    </>
  );
}

