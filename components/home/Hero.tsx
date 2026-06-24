import Link from "next/link";
import { Stethoscope, Activity, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-3 py-1 text-sm font-bold text-[#33c2df] dark:bg-[#33c2df]/20 dark:text-[#33c2df] mb-6 ring-1 ring-[#33c2df]/10">
              <Activity size={16} />
              <span>Trusted by 50,000+ Patients</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl leading-[1.1]">
              Your Health, Our Priority: <span className="text-[#33c2df]">Expert Medical Care</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0 font-medium">
              Book appointments with top specialists, schedule advanced diagnostic tests, 
              and manage your family&apos;s health records with ease and security.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/doctor"
                className="flex items-center gap-2 w-full sm:w-auto rounded-2xl bg-[#33c2df] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#33c2df]/20 hover:brightness-110 transition-all dark:shadow-none"
              >
                <Stethoscope size={18} />
                Find a Doctor
              </Link>
              <Link
                href="/diagnostics"
                className="flex items-center gap-2 w-full sm:w-auto rounded-2xl border-2 border-zinc-900 px-8 py-4 text-sm font-bold text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
              >
                <Calendar size={18} />
                Book a Test
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <span className="text-zinc-400 font-bold italic">Visual Placeholder: Modern Medical Facility</span>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-2xl border border-zinc-100 dark:border-zinc-700 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                  <Activity size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-900 dark:text-white">99%</div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Recovery Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#33c2df]/5 via-transparent to-transparent dark:from-[#33c2df]/10"></div>
    </section>
  );
}
