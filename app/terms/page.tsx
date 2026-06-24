import Terms from "@/components/terms/Terms";

export const metadata = {
  title: "Terms & Conditions | Bellevie",
  description: "Read Bellevie's terms and conditions to understand the rules and guidelines for using our services.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col pb-24">
      <Terms />
    </div>
  );
}