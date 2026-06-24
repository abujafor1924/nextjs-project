"use strict";

import React from "react";
import { 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye, 
  Stethoscope,
  ChevronRight,
  Microscope,
  Activity
} from "lucide-react";

const SPECIALTIES = [
  { name: "Cardiology", icon: Heart, color: "text-red-500", bg: "bg-red-50" },
  { name: "Neurology", icon: Brain, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Pediatrics", icon: Baby, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "Orthopedics", icon: Bone, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Ophthalmology", icon: Eye, color: "text-cyan-500", bg: "bg-cyan-50" },
  { name: "Pathology", icon: Microscope, color: "text-emerald-500", bg: "bg-emerald-50" },
  { name: "General Medicine", icon: Stethoscope, color: "text-zinc-500", bg: "bg-zinc-50" },
  { name: "Gastroenterology", icon: Activity, color: "text-rose-500", bg: "bg-rose-50" },
];

export default function Specialties() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-4">
            Browse by <span className="text-[#33c2df]">Specialty</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">
            Find the right expert across our specialized medical departments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SPECIALTIES.map((spec, idx) => (
            <div 
              key={idx}
              className="group p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 hover:border-[#33c2df] hover:shadow-2xl hover:shadow-[#33c2df]/10 transition-all cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl ${spec.bg} dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <spec.icon className={spec.color} size={32} />
              </div>
              <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-2">
                {spec.name}
              </h3>
              <div className="flex items-center gap-1 text-[#33c2df] text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                View Doctors
                <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
