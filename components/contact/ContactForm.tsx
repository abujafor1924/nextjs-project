"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-100 dark:border-zinc-900 p-8 md:p-12 shadow-2xl shadow-zinc-200/50 dark:shadow-none">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 uppercase tracking-widest text-center">
          Send a <span className="text-[#33c2df]">Message</span>
        </h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33c2df]/50 transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33c2df]/50 transition-all font-medium"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
              Subject
            </label>
            <select className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33c2df]/50 transition-all font-medium appearance-none">
              <option>General Inquiry</option>
              <option>Medical Appointment</option>
              <option>Health Package Inquiry</option>
              <option>Technical Support</option>
              <option>Feedback</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
              Your Message
            </label>
            <textarea
              rows={5}
              placeholder="How can we help you today?"
              className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33c2df]/50 transition-all font-medium resize-none"
            ></textarea>
          </div>
          
          <button className="w-full bg-[#33c2df] text-white py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-[#33c2df]/20">
            Send Message
            <Send size={18} strokeWidth={3} />
          </button>
        </form>
      </div>
    </div>
  );
}
