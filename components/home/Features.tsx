import { Stethoscope, FlaskConical, ClipboardList, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Expert Specialists",
    description: "Connect with board-certified doctors across 40+ specialties including Cardiology, Neurology, and Pediatrics.",
    icon: Stethoscope,
    color: "bg-[#33c2df]/10 text-[#33c2df] dark:bg-[#33c2df]/20 dark:text-[#33c2df]",
  },
  {
    title: "Advanced Diagnostics",
    description: "Fully automated laboratory and high-precision imaging services (MRI, CT, Ultrasound) with same-day reports.",
    icon: FlaskConical,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    title: "Digital Health Records",
    description: "Secure, lifetime access to your prescriptions, lab reports, and medical history through our encrypted patient portal.",
    icon: ClipboardList,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    title: "Safe & Sanitized",
    description: "Following international safety protocols with touchless check-ins and frequent sterilization of all patient areas.",
    icon: ShieldCheck,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-4 py-1.5 text-xs font-black text-[#33c2df] mb-6 tracking-widest uppercase border border-[#33c2df]/20">
            <ClipboardList size={14} />
            <span>Core Advantages</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-6xl mb-6">
            Why Choose <span className="text-[#33c2df]">Bellevie Care</span>
          </h2>
          <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
            We combine clinical excellence with the latest technology to provide 
            seamless healthcare services for you and your family.
          </p>
        </div>
        <div className="mx-auto mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="group relative flex flex-col bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#33c2df]/10 hover:-translate-y-2 dark:bg-zinc-900 dark:border-zinc-800">
                <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                  <feature.icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black tracking-tight text-zinc-900 dark:text-white mb-4 group-hover:text-[#33c2df] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
