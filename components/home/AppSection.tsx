"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Smartphone, 
  Download, 
  Calendar, 
  MessageSquare, 
  Shield,
  Star,
  Bell
} from 'lucide-react';

export default function AppSection() {
  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden relative">
      {/* Decorative Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#33c2df]/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Right Side (Visuals) - Moved to left for better balance on desktop */}
          <div className="relative order-2 lg:order-1">
            {/* Main Phone Mockup */}
            <div className="relative z-20 mx-auto lg:mx-0 w-[280px] sm:w-[320px] aspect-[9/19] rounded-[3rem] border-[12px] border-zinc-900 dark:border-zinc-800 bg-zinc-900 shadow-[0_0_80px_rgba(0,0,0,0.15)] overflow-hidden">
              <Image 
                src="/images/app-banner/158ad734-5897-4dfb-a82b-298452210be8.jpeg"
                alt="Bellevie App"
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover"
              />
            </div>

            {/* Floating UI Elements (The "Alive" part) */}
            <div className="absolute -top-10 -right-4 sm:right-10 z-30 animate-bounce-slow">
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20 dark:border-zinc-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <Bell size={20} />
                </div>
                <div>
                  <div className="text-xs font-black text-zinc-900 dark:text-white">Appointment Set!</div>
                  <div className="text-[10px] font-bold text-zinc-500">Dr. Sarah Johnson • 10:30 AM</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-4 sm:-left-12 z-30 animate-float">
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20 dark:border-zinc-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#33c2df]/20 flex items-center justify-center text-[#33c2df]">
                    <Star size={16} fill="currentColor" />
                  </div>
                  <div className="text-xs font-black text-zinc-900 dark:text-white">Lab Results</div>
                </div>
                <div className="h-2 w-24 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-2"></div>
                <div className="h-2 w-16 bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
              </div>
            </div>

            <div className="absolute bottom-20 -right-4 sm:-right-8 z-30 animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <div className="bg-zinc-900 dark:bg-[#33c2df] p-4 rounded-2xl shadow-2xl text-white">
                <MessageSquare size={24} />
              </div>
            </div>

            {/* Decorative Background Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square border border-zinc-100 dark:border-zinc-900 rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square border border-zinc-50 dark:border-zinc-900/50 rounded-full -z-10"></div>
          </div>

          {/* Left Side (Content) */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-4 py-1.5 text-xs font-black text-[#33c2df] mb-8 tracking-widest uppercase border border-[#33c2df]/20">
              <Smartphone size={14} />
              <span>The Next Generation of Healthcare</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white mb-8 leading-[1.05]">
              Your Health, <br />
              <span className="text-[#33c2df]">Simplified.</span>
            </h2>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-12 max-w-lg">
              Experience the future of medical care with our all-in-one mobile platform. 
              Everything you need, from consultations to records, is just a tap away.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-[#33c2df] shadow-sm">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="text-sm font-black text-zinc-900 dark:text-white">Secure Data</div>
                  <div className="text-xs font-bold text-zinc-500">HIPAA Compliant</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-[#33c2df] shadow-sm">
                  <Calendar size={24} />
                </div>
                <div>
                  <div className="text-sm font-black text-zinc-900 dark:text-white">24/7 Access</div>
                  <div className="text-xs font-bold text-zinc-500">Always Connected</div>
                </div>
              </div>
            </div>

            {/* Modern Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-5 rounded-[2rem] hover:scale-105 transition-all shadow-2xl shadow-zinc-900/20 active:scale-95">
                <Download size={24} strokeWidth={3} />
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-[0.1em] opacity-60 leading-none mb-1">Download for</div>
                  <div className="text-lg font-black leading-none">iPhone</div>
                </div>
              </button>
              <a href="https://play.google.com/store/apps/details?id=com.bellevie.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-2 border-zinc-100 dark:border-zinc-800 px-8 py-5 rounded-[2rem] hover:scale-105 transition-all active:scale-95 shadow-lg">
                <Download size={24} strokeWidth={3} />
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-[0.1em] opacity-60 leading-none mb-1">Download for</div>
                  <div className="text-lg font-black leading-none">Android</div>
                </div>
              </button>

              </a>
              
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
