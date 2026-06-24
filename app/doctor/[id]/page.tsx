import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Banknote, 
  Hospital, 
  Stethoscope, 
  Phone, 
  Calendar,
  Share2,
  Bookmark
} from 'lucide-react';
import BookingProcess from '@/components/doctor/BookingProcess';
import { API_BASE_URL } from '@/lib/constants';

interface DoctorDetails {
  id: number;
  name: string;
  image: string;
  designation: string;
  years_of_experience: number;
  doctor_fees: string;
  hospital: {
    id: number;
    name: string;
  };
  subcategory_name: string;
  doctor_details: string;
  doctor_sedule: string;
  contact_details: string;
}

async function getDoctorDetails(id: string): Promise<DoctorDetails | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/popular-service/doctors/${id}/`, {
      headers: { 'accept': 'application/json' },
      next: { revalidate: 3600 }
    });
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Error fetching doctor details:', error);
    return null;
  }
}

export default async function DoctorDetailsPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const doctor = await getDoctorDetails(id);

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 px-4">
        <Stethoscope size={48} className="text-[#33c2df] mb-6" />
        <h1 className="text-2xl font-black text-zinc-900 dark:text-white mb-2">Doctor Not Found</h1>
        <p className="text-zinc-500 font-medium mb-8">The specialist you are looking for is currently unavailable.</p>
        <Link href="/doctor" className="bg-[#33c2df] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest">
          Back to Doctors
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/doctor" className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#33c2df] font-bold text-sm mb-10 transition-colors">
            <ArrowLeft size={16} />
            Back to Specialists
          </Link>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Image Container */}
            <div className="w-full lg:w-1/3">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#33c2df]/10 border-4 border-white dark:border-zinc-800">
                <Image 
                  src={doctor.image || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"} 
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  <button className="p-3 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg text-zinc-900 dark:text-white hover:text-[#33c2df] transition-colors">
                    <Share2 size={20} />
                  </button>
                  <button className="p-3 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg text-zinc-900 dark:text-white hover:text-[#33c2df] transition-colors">
                    <Bookmark size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Basic Info */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-4 py-1.5 text-xs font-black text-[#33c2df] mb-6 tracking-widest uppercase border border-[#33c2df]/20">
                <CheckCircle2 size={14} />
                <span>Verified Specialist</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white mb-4 leading-tight">
                {doctor.name}
              </h1>
              
              <p className="text-xl font-bold text-[#33c2df] mb-6">{doctor.subcategory_name}</p>
              
              <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium mb-10 leading-relaxed max-w-2xl">
                {doctor.designation} at <span className="text-zinc-900 dark:text-white font-black">{doctor.hospital.name}</span>. 
                Dedicated to providing exceptional healthcare with {doctor.years_of_experience} years of experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-700">
                  <div className="flex items-center gap-3 text-zinc-400 mb-2">
                    <Clock size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Experience</span>
                  </div>
                  <div className="text-xl font-black text-zinc-900 dark:text-white">{doctor.years_of_experience} Years</div>
                </div>
                
                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-700">
                  <div className="flex items-center gap-3 text-zinc-400 mb-2">
                    <Banknote size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Consultation</span>
                  </div>
                  <div className="text-xl font-black text-zinc-900 dark:text-white">৳{doctor.doctor_fees}</div>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-700">
                  <div className="flex items-center gap-3 text-zinc-400 mb-2">
                    <Hospital size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Hospital</span>
                  </div>
                  <div className="text-sm font-black text-zinc-900 dark:text-white truncate">{doctor.hospital.name}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href={`/booking?category=${doctor.hospital.id}&subcategory=${doctor.subcategory_name}&doctor_id=${doctor.id}`} 
                  className="bg-[#33c2df] hover:brightness-110 text-white font-black text-sm uppercase tracking-widest px-10 py-5 rounded-2xl transition-all shadow-xl shadow-[#33c2df]/20 flex items-center gap-2"
                >
                  <Calendar size={20} />
                  Book Appointment Now
                </Link>
                <a href={`tel:${doctor.contact_details.match(/\d+/g)?.[0] || ""}`} className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-sm uppercase tracking-widest px-10 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                  <Phone size={20} />
                  Contact Doctor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio / About */}
            <section className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800">
              <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#33c2df] rounded-full"></div>
                About the Specialist
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed whitespace-pre-wrap">
                {doctor.doctor_details || `${doctor.name} is a highly qualified ${doctor.subcategory_name.toLowerCase()} specialist with extensive experience in providing patient-centered care. Currently serving at ${doctor.hospital.name}, they are committed to utilizing the latest medical advancements to ensure the best outcomes for their patients.`}
              </div>
            </section>

            {/* Schedule */}
            <section className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800">
              <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#33c2df] rounded-full"></div>
                Working Hours
              </h2>
              <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-3xl p-8 border border-zinc-100 dark:border-zinc-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#33c2df]/10 text-[#33c2df]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-black text-zinc-900 dark:text-white mb-1">Availability</div>
                    <p className="text-zinc-500 font-bold">{doctor.doctor_sedule}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="bg-[#33c2df] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-[#33c2df]/20">
              <div className="relative z-10">
                <h3 className="text-xl font-black mb-6 uppercase tracking-widest">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Helpline</div>
                      <div className="font-bold whitespace-pre-line">{doctor.contact_details}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Appointment CTA */}
            <div className="bg-zinc-900 dark:bg-white rounded-[2.5rem] p-10 text-white dark:text-zinc-900">
              <h3 className="text-xl font-black mb-4">Book Now</h3>
              <p className="text-zinc-400 dark:text-zinc-500 font-medium mb-8">Schedule your visit with {doctor.name} in just a few clicks.</p>
              <Link href="/booking" className="w-full bg-[#33c2df] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-center block transition-all hover:brightness-110">
                Secure Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BookingProcess />
    </main>
  );
}
