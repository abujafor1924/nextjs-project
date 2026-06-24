import PackageHero from "@/components/packages/PackageHero";
import PackageList from "@/components/packages/PackageList";

export const metadata = {
  title: "Health Packages | Bellevie",
  description: "Browse our comprehensive health screening packages at Bellevie. From basic checkups to executive assessments.",
};

export default function PackagesPage() {
  return (
    <div className="flex flex-col pb-24">
      <PackageHero />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PackageList />
      </div>
    </div>
  );
}
