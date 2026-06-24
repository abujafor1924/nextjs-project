"use client";

import React from 'react';
import { Building2, Globe2, Award } from 'lucide-react';

const partners = [
  { name: "AmarLab Diagnostics Center", location: "Dhaka", logo: "AMARlAB" },
  { name: "Partner Laboratory Services ", location: "Dhaka", logo: "Partner Laboratory" },
  { name: "Concord Molecular lab", location: "Dhaka", logo: "Concord " },
  { name: "Thyrocare", location: "Dhaka", logo: "Thyrocare" },
  { name: "Ibn Sina diagnostics", location: "Dhaka", logo: "IBN SINA" },
  { name: "BIRDEM General Hospital", location: "Dhaka", logo: "BIRDEM" },
  { name: "Popular Medical", location: "Dhaka", logo: "POPULAR" },
  { name: "Aqidah Mental Health", location: "Dhaka", logo: "AQIDAH" },
];

export default function HospitalPartners() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950/50 border-y border-zinc-100 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-4 py-1.5 text-xs font-black text-[#33c2df] mb-6 tracking-widest uppercase border border-[#33c2df]/20">
            <Award size={14} />
            <span>Trusted Local Network</span>
          </div>
          <h2 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl mb-4">
            Partnering with the <span className="text-[#33c2df]">Best in Bangladesh</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-zinc-500 dark:text-zinc-400 font-medium">
            We are proud to be affiliated with the most prestigious medical institutions in Bangladesh, 
            ensuring our patients have access to top-tier healthcare and specialized expertise nationwide.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 transition-all duration-500 hover:shadow-xl hover:shadow-[#33c2df]/5 hover:-translate-y-1"
            >
              <div className="mb-4 text-zinc-300 dark:text-zinc-700 group-hover:text-[#33c2df] transition-colors duration-500">
                <Building2 size={32} strokeWidth={1.5} />
              </div>
              
              <div className="text-center">
                <div className="text-xs font-black text-zinc-700 dark:text-zinc-900 uppercase tracking-[0.2em] mb-1">
                  {partner.logo}
                </div>
                <div className="text-[10px] font-bold text-zinc-700 dark:text-zinc-900 flex items-center justify-center gap-1 uppercase tracking-widest">
                  <Globe2 size={10} />
                  {partner.location}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#33c2df]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 pt-10 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#33c2df] to-blue-600 opacity-20"></div>
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 bg-[#33c2df] text-white flex items-center justify-center text-[10px] font-black">
              +25
            </div>
          </div>
          <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400">
            Trusted by over <span className="text-zinc-900 dark:text-white">25+ Certified Hospitals in Bangladesh</span>
          </p>
        </div>
      </div>
    </section>
  );
}
