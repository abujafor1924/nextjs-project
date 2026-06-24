"use client";

import { Check, ShieldCheck, Activity, Zap } from "lucide-react";

const packages = [
  {
    name: "Basic Health Check",
    price: "$199",
    description: "Essential screenings for everyday health monitoring.",
    icon: <Activity className="text-[#33c2df]" size={32} />,
    features: [
      "Physical Examination",
      "Blood Pressure Check",
      "Body Mass Index (BMI)",
      "Basic Blood Count",
      "Cholesterol Profile",
      "Doctor Consultation"
    ],
    highlight: false
  },
  {
    name: "Premium Wellness",
    price: "$499",
    description: "Comprehensive screening for a deeper health insight.",
    icon: <ShieldCheck className="text-[#33c2df]" size={32} />,
    features: [
      "Everything in Basic",
      "ECG Heart Screening",
      "Liver Function Test",
      "Kidney Function Test",
      "Diabetes Screening (HbA1c)",
      "Chest X-Ray",
      "Urinalysis Full"
    ],
    highlight: true
  },
  {
    name: "Executive Elite",
    price: "$999",
    description: "Advanced diagnostics for the ultimate health assessment.",
    icon: <Zap className="text-[#33c2df]" size={32} />,
    features: [
      "Everything in Premium",
      "Treadmill Stress Test",
      "Ultrasound Abdomen",
      "Thyroid Profile",
      "Tumor Markers",
      "Bone Mineral Density",
      "Specialist Review"
    ],
    highlight: false
  }
];

export default function PackageList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
      {packages.map((pkg, index) => (
        <div 
          key={index}
          className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ${
            pkg.highlight 
              ? 'bg-zinc-900 border-[#33c2df] shadow-2xl shadow-[#33c2df]/20 scale-105 z-10' 
              : 'bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 hover:border-[#33c2df]/50'
          }`}
        >
          {pkg.highlight && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#33c2df] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              Most Popular
            </div>
          )}
          
          <div className="mb-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
              pkg.highlight ? 'bg-zinc-800' : 'bg-zinc-50 dark:bg-zinc-800'
            }`}>
              {pkg.icon}
            </div>
            <h3 className={`text-2xl font-black mb-2 ${pkg.highlight ? 'text-white' : 'text-zinc-900 dark:text-white'}`}>
              {pkg.name}
            </h3>
            <p className={`text-sm font-medium ${pkg.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
              {pkg.description}
            </p>
          </div>
          
          <div className="mb-8">
            <span className={`text-4xl font-black ${pkg.highlight ? 'text-white' : 'text-zinc-900 dark:text-white'}`}>
              {pkg.price}
            </span>
            <span className={`text-sm font-bold ml-1 ${pkg.highlight ? 'text-[#33c2df]' : 'text-[#33c2df]'}`}>
              / package
            </span>
          </div>
          
          <div className="flex-1 space-y-4 mb-10">
            {pkg.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`mt-1 p-0.5 rounded-full ${pkg.highlight ? 'bg-[#33c2df]/20 text-[#33c2df]' : 'bg-zinc-100 dark:bg-zinc-800 text-[#33c2df]'}`}>
                  <Check size={14} strokeWidth={4} />
                </div>
                <span className={`text-sm font-medium ${pkg.highlight ? 'text-zinc-300' : 'text-zinc-600 dark:text-zinc-400'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
          
          <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all ${
            pkg.highlight 
              ? 'bg-[#33c2df] text-white hover:brightness-110 shadow-lg shadow-[#33c2df]/20' 
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-[#33c2df] hover:text-white'
          }`}>
            Book This Package
          </button>
        </div>
      ))}
    </div>
  );
}
