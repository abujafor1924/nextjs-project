"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  const info = [
    {
      icon: <Phone className="text-[#33c2df]" size={24} />,
      title: "Phone",
      details: ["+8801805-464400", "+8801805-464400"],
      label: "Call us anytime"
    },
    {
      icon: <Mail className="text-[#33c2df]" size={24} />,
      title: "Email",
      details: ["info.belleviebd@gmail.com"],
      label: "Send us a message"
    },
    {
      icon: <MapPin className="text-[#33c2df]" size={24} />,
      title: "Location",
      details: ["Crown Park (2nd Floor), 6/4, Block # B, Humayun Road, Mohammadpur, 1207 Dhaka, Bangladesh"],
      label: "Visit our office"
    },
    {
      icon: <Clock className="text-[#33c2df]" size={24} />,
      title: "Hours",
      details: ["sat - Thu: 10am - 6pm", "Sat - Thu: 10am - 6pm"],
      label: "Working hours"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
      {info.map((item, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all group"
        >
          <div className="mb-4 bg-zinc-50 dark:bg-zinc-800 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-1 uppercase tracking-wider text-[11px]">
            {item.title}
          </h3>
          <p className="text-[#33c2df] text-xs font-bold mb-4 uppercase tracking-tighter italic">
            {item.label}
          </p>
          <div className="space-y-1">
            {item.details.map((detail, idx) => (
              <p key={idx} className="text-zinc-600 dark:text-zinc-400 font-medium">
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
