import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import Vission from "@/components/about/Vission";

export const metadata = {
  title: "About Us | Bellevie",
  description: "Learn more about Bellevie, our mission, values, and the team behind our modern web experiences.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <Mission />
      <Vission />
      <Values />
    </div>
  );
}
