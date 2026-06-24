import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact Us | Bellevie",
  description: "Get in touch with Bellevie for healthcare inquiries, appointments, and support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col pb-24">
      <ContactHero />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
