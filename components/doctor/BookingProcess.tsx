"use strict";

import React from "react";
import { UserSearch, CalendarCheck, ClipboardList, MessageSquare } from "lucide-react";

const STEPS = [
  {
    id: 1,
    title: "Find a Specialist",
    description: "Browse through our verified experts by specialty or name.",
    icon: UserSearch,
  },
  {
    id: 2,
    title: "Select a Date",
    description: "Pick a convenient time slot that fits your schedule.",
    icon: CalendarCheck,
  },
  {
    id: 3,
    title: "Confirm Details",
    description: "Provide your basic info and confirm the appointment.",
    icon: ClipboardList,
  },
  {
    id: 4,
    title: "Get Consulted",
    description: "Visit the clinic or consult online via our secure platform.",
    icon: MessageSquare,
  },
];

export default function BookingProcess() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-4">
            How to <span className="text-[#33c2df]">Book</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Experience a seamless appointment booking process designed for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Decorative connector for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-[#33c2df]/10 -z-0"></div>
          
          {STEPS.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-[#33c2df]/20 group-hover:border-[#33c2df] flex items-center justify-center mb-8 shadow-xl shadow-[#33c2df]/5 transition-all group-hover:-translate-y-2">
                <step.icon className="text-[#33c2df]" size={40} />
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#33c2df] text-white rounded-2xl flex items-center justify-center font-black shadow-lg">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
