"use client";

import React from 'react';
import Link from 'next/link';
import { Timer, ArrowLeft, Home, Bell, Phone } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <div className="mb-12 relative inline-block">
          <div className="w-32 h-32 rounded-[2.5rem] bg-[#33c2df]/10 flex items-center justify-center animate-pulse">
            <Timer size={64} className="text-[#33c2df]" strokeWidth={1.5} />
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-[#33c2df] text-white flex items-center justify-center shadow-xl animate-bounce">
            <Bell size={24} />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-white mb-6">
          Emergency <span className="text-[#33c2df]">Contact</span>
        </h1>
        
        <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-8 max-w-lg mx-auto">
          For urgent assistance or medical emergencies, please contact our 24/7 hotline immediately. Our dedicated team is ready to provide you with the support and guidance you need.
        </p>

        {/* Contact Info for Foreign Treatments */}
        <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-3xl p-6 mb-12 max-w-md mx-auto">
          <p className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-4">Immediate Inquiry for Foreign Treatment</p>
          <a 
            href="tel:+8801805464400" 
            className="flex items-center justify-center gap-3 text-2xl font-black text-zinc-900 dark:text-white hover:text-[#33c2df] transition-colors"
          >
            <Phone size={24} className="text-[#33c2df]" />
            +880 1805-464400
          </a>
          <p className="text-xs font-bold text-zinc-500 mt-3">Available for WhatsApp & Direct Call</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-[#33c2df] hover:text-white transition-all shadow-xl group"
          >
            <Home size={18} strokeWidth={3} />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-2 border-zinc-100 dark:border-zinc-800 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-[#33c2df] transition-all"
          >
            <ArrowLeft size={18} strokeWidth={3} />
            Go Back
          </button>
        </div>

        {/* Decorative Grid */}
        <div className="mt-24 grid grid-cols-3 gap-8 opacity-20">
          <div className="h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
          <div className="h-1 bg-[#33c2df] rounded-full"></div>
          <div className="h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
