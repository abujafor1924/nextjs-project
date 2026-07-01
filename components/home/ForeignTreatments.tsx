"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, ArrowRight, Hospital, Star } from 'lucide-react';

const destinations = [
  {
    country: "India",
    flag: "🇮🇳",
    image: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1614&auto=format&fit=crop",
    hospitalCount: "120+ Partner Hospitals",
    description: "World-class Cardiology & Oncology at affordable costs.",
    link: "/coming-soon",
    featured: "Apollo, Fortis, Max Healthcare"
  },
  {
    country: "China",
    flag: "🇨🇳",
    image: "https://ichef.bbci.co.uk/images/ic/1024xn/p078rd1k.jpg.webp",
    hospitalCount: "95+ Partner Hospitals",
    description: "Leaders in traditional medicine & advanced biotechnology.",
    link: "/coming-soon",
    featured: "Peking Union, Huashan Hospital"
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop",
    hospitalCount: "85+ Partner Hospitals",
    description: "Leading destination for Wellness & Cosmetic surgery.",
    link: "/coming-soon",
    featured: "Bumrungrad, Bangkok Hospital"
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop",
    hospitalCount: "60+ Partner Hospitals",
    description: "Specialized in Hair Transplants & Ophthalmology.",
    link: "/coming-soon",
    featured: "Medical Park, Acibadem"
  }
];

export default function ForeignTreatments() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-4 py-1.5 text-xs font-black text-[#33c2df] mb-6 tracking-widest uppercase border border-[#33c2df]/20">
            <Globe size={14} />
            <span>Global Medical Tourism</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-6xl mb-6">
            World-Class Health Care <span className="text-[#33c2df]">Beyond Borders</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
            We connect you with the most prestigious international hospitals. 
            From visa assistance to post-treatment care, we handle everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {destinations.map((dest) => (
            <Link 
              key={dest.country} 
              href={dest.link}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-2xl hover:shadow-[#33c2df]/10"
            >
              {/* Destination Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.country}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-xl px-3 py-1.5 flex items-center gap-2 border border-white/20">
                  <span className="text-xl">{dest.flag}</span>
                  <span className="text-sm font-black text-zinc-900 dark:text-white">{dest.country}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#33c2df] mb-3">
                  <Hospital size={16} strokeWidth={2.5} />
                  <span className="text-xs font-black uppercase tracking-widest">{dest.hospitalCount}</span>
                </div>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-6">
                  {dest.description}
                </p>

                <div className="pt-5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Top Hospitals</span>
                    <span className="text-[11px] font-black text-zinc-900 dark:text-white truncate max-w-[140px]">{dest.featured}</span>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-zinc-900 group-hover:bg-[#33c2df] group-hover:text-white transition-colors">
                    <ArrowRight size={18} strokeWidth={3} />
                  </div>
                </div>
              </div>

              {/* Overlay Badge for Featured */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-[#33c2df] text-white p-2 rounded-xl shadow-lg">
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            </Link>
          ))}
        </div>
{/* 
        <div className="mt-16 text-center">
          <Link 
            href="/coming-soon"
            className="inline-flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-10 py-5 rounded-2xl text-base font-black uppercase tracking-widest hover:bg-[#33c2df] hover:text-white transition-all shadow-xl"
          >
            View All 4+ Countries
            <Globe size={20} strokeWidth={2.5} />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
