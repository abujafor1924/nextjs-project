import Privecy from "@/components/trams/Privecy";

export const metadata = {
  title: "Privacy Policy | Bellevie",
  description: "Read Bellevie's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col pb-24">
      <Privecy />
    </div>
  );
}