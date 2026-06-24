"use client";

import React from 'react';
import Image from 'next/image';
import { Stethoscope, Building2, Microscope, BriefcaseMedical, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  {
    label: "Expert Doctors",
    value: "30+",
    icon: Stethoscope,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/10"
  },
  {
    label: "Partner Hospitals",
    value: "5+",
    icon: Building2,
    color: "text-[#33c2df]",
    bg: "bg-[#33c2df]/10"
  },
  {
    label: "Diagnostic Centers",
    value: "10+",
    icon: Microscope,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/10"
  },
  {
    label: "Insurance Partners",
    value: "2+",
    icon: BriefcaseMedical,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/10"
  }
];

export default function TrustedPartner() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-4 py-1.5 text-xs font-black text-[#33c2df] mb-8 tracking-widest uppercase border border-[#33c2df]/20">
              <ShieldCheck size={14} />
              <span>Reliable & Certified</span>
            </div>
            
            <h2 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-5xl mb-8 leading-[1.1]">
              Your <span className="text-[#33c2df]">Trusted Partner</span> in <br /> Modern Healthcare
            </h2>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-12 max-w-xl">
              At Bellevie, we combine world-class medical expertise with state-of-the-art 
              technology to provide you with the best healthcare experience.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="group p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-[#33c2df]/30 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className={stat.color} size={24} strokeWidth={2.5} />
                  </div>
                  <div className="text-2xl font-black text-zinc-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-[#33c2df] hover:text-white transition-all shadow-xl group"
            >
              Learn More About Us
              <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1675808577247-2281dc17147a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Medical Professional"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-zinc-900 p-8 rounded-[2rem] shadow-2xl border border-zinc-100 dark:border-zinc-800 hidden sm:block">
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl font-black text-[#33c2df] mb-1">2+</div>
                <div className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] leading-tight">
                  Years of<br />Excellence
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#33c2df]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
