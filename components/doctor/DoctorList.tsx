import React from 'react'
import { Clock, Banknote, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Doctor {
  id: number;
  name: string;
  image: string;
  designation: string;
  years_of_experience: number;
  doctor_fees: string;
  hospital_name: string;
  subcategory_name: string;
  subcategory_id?: number;
}

interface DoctorListProps {
  doctors: Doctor[];
  title?: string;
  subtitle?: string;
}

const DoctorList = ({ doctors, title = "Our Specialists", subtitle = "Top-rated doctors with years of experience" }: DoctorListProps) => {
  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white">{title}</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 font-medium">{subtitle}</p>
          </div>
        </div>

        {doctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="group bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 p-4 hover:shadow-2xl hover:shadow-[#33c2df]/10 transition-all duration-300">
                <Link href={`/doctor/${doctor.id}`} className="block">
                  <div className="aspect-[4/5] rounded-2xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative mb-4">
                    <Image 
                      src={doctor.image || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"} 
                      alt={doctor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Link>

                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs font-bold text-[#33c2df] uppercase tracking-wider">{doctor.subcategory_name}</span>
                    <CheckCircle2 size={12} className="text-green-500" />
                  </div>
                  <Link href={`/doctor/${doctor.id}`} className="block group/name">
                    <h3 className="text-lg font-black text-zinc-900 dark:text-white group-hover/name:text-[#33c2df] transition-colors line-clamp-1">
                      {doctor.name}
                    </h3>
                  </Link>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold mb-1 uppercase tracking-tight">{doctor.hospital_name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-4 line-clamp-1">{doctor.designation}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        <Clock size={14} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-zinc-400 uppercase">Exp.</div>
                        <div className="text-xs font-black text-zinc-900 dark:text-white">{doctor.years_of_experience} Yrs</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        <Banknote size={14} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-zinc-400 uppercase">Fees</div>
                        <div className="text-xs font-black text-zinc-900 dark:text-white">৳{doctor.doctor_fees}</div>
                      </div>
                    </div>
                  </div>

                  <Link 
                    href={`/booking?subcategory=${doctor.subcategory_id ?? doctor.subcategory_name}&doctor_id=${doctor.id}`}
                    className="w-full bg-[#33c2df] hover:brightness-110 text-white font-black text-xs uppercase tracking-widest py-4 rounded-2xl transition-all shadow-lg shadow-[#33c2df]/20 flex items-center justify-center"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-[3rem] border border-dashed border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-2">No Doctors Found</h3>
            <p className="text-zinc-500 font-medium">Try selecting a different specialty or subcategory.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default DoctorList
