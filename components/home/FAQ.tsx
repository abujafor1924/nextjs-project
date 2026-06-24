"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How do I book an appointment with a specialist?",
    answer: "You can book an appointment easily through our website by clicking the 'Find a Doctor' button, or via our mobile app. Alternatively, you can call our 24/7 helpline for assistance."
  },
  {
    question: "What diagnostic services do you provide?",
    answer: "We offer a comprehensive range of diagnostic services including MRI, CT Scans, X-rays, Ultrasounds, and advanced pathology lab tests with same-day digital reporting."
  },
  {
    question: "Do you offer international medical tourism services?",
    answer: "Yes, we partner with top-tier hospitals in India, Thailand, Turkey, and Singapore. We provide complete assistance including visa processing, hospital selection, and post-treatment care."
  },
  {
    question: "Are my medical records secure?",
    answer: "Absolutely. We use HIPAA-compliant encrypted servers to ensure your personal health information and medical history are protected and only accessible to you and your authorized doctors."
  },
  {
    question: "What insurance providers do you work with?",
    answer: "We are empaneled with all major national and international health insurance providers. Please contact our billing department or check the app for a specific list of partners."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-4 py-1.5 text-xs font-black text-[#33c2df] mb-6 tracking-widest uppercase border border-[#33c2df]/20">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-6xl mb-6">
            Frequently Asked <span className="text-[#33c2df]">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
            Everything you need to know about our services and healthcare process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`group rounded-[2.5rem] border transition-all duration-500 ${
                  isOpen 
                    ? 'bg-white dark:bg-zinc-900 border-[#33c2df]/30 shadow-2xl shadow-[#33c2df]/10' 
                    : 'bg-white/50 dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                >
                  <span className={`text-xl font-black tracking-tight transition-colors duration-500 ${
                    isOpen ? 'text-[#33c2df]' : 'text-zinc-900 dark:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    isOpen 
                      ? 'bg-[#33c2df] border-[#33c2df] text-white rotate-180 shadow-lg shadow-[#33c2df]/30' 
                      : 'border-zinc-200 dark:border-zinc-700 text-zinc-400 group-hover:border-[#33c2df] group-hover:text-[#33c2df]'
                  }`}>
                    <ChevronDown size={20} strokeWidth={3} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-10 pt-0">
                    <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800 mb-8" />
                    <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

    
      </div>
    </section>
  );
}
