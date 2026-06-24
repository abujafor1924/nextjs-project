import React from 'react'
import { Stethoscope, Search, MapPin, Star } from 'lucide-react'

const DoctorHero = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-3 py-1 text-sm font-bold text-[#33c2df] mb-6 ring-1 ring-[#33c2df]/10">
            <Stethoscope size={16} />
            <span>Expert Medical Professionals</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl leading-[1.1]">
            Find the Right <span className="text-[#33c2df]">Specialist</span> for You
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            Connect with top-rated doctors across all specialties. Expert care is just a click away.
          </p>
          {/* <div className="mt-12 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex flex-col md:flex-row gap-2 p-2 bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl shadow-[#33c2df]/10 border border-zinc-100 dark:border-zinc-800">
              <div className="flex-1 flex items-center gap-3 px-6 py-4 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800">
                <Search className="text-[#33c2df]" size={20} />
                <input 
                  type="text" 
                  placeholder="Specialty, Doctor name, or Symptom" 
                  className="w-full bg-transparent outline-none text-zinc-900 dark:text-white font-bold placeholder:text-zinc-400 text-sm"
                />
              </div>
              <div className="flex-1 flex items-center gap-3 px-6 py-4">
                <MapPin className="text-[#33c2df]" size={20} />
                <input 
                  type="text" 
                  placeholder="Dhaka, Bangladesh" 
                  className="w-full bg-transparent outline-none text-zinc-900 dark:text-white font-bold placeholder:text-zinc-400 text-sm"
                />
              </div>
              <button className="bg-[#33c2df] hover:brightness-110 text-white font-black text-xs uppercase tracking-widest py-4 px-10 rounded-2xl transition-all shadow-lg shadow-[#33c2df]/20">
                Search Now
              </button>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">
              <span>Popular:</span>
              <button className="text-[#33c2df] hover:underline">Cardiology</button>
              <button className="text-[#33c2df] hover:underline">Pediatrics</button>
              <button className="text-[#33c2df] hover:underline">Neurology</button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#33c2df]/5 via-transparent to-transparent"></div>
    </section>
  )
}

export default DoctorHero
