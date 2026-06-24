"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  ChevronRight, 
  LogOut,
  ShieldCheck,
  Settings,
  Bell,
  Stethoscope,
  Loader2,
  Banknote
} from 'lucide-react';

interface UserProfile {
  id: number;
  phone_number: string;
  name: string;
  email: string;
  district: string;
}

interface Appointment {
  id: number;
  doctor_name: string;
  doctor_image: string;
  subcategory_name: string;
  appointment_date: string;
  appointment_time: string;
  patient_name: string;
  patient_phone: string;
  payment_status: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const [profileRes, appointmentsRes] = await Promise.all([
          fetch('/api/auth/profile', {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch('/api/auth/appointments', {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);

        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setUser(profileData);
        } else if (profileRes.status === 401) {
          handleSignOut();
          return;
        }

        if (appointmentsRes.ok) {
          const appointmentsData = await appointmentsRes.json();
          setAppointments(appointmentsData.results || appointmentsData);
        }
      } catch (e) {
        console.error("Failed to fetch profile data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleSignOut = () => {
    localStorage.removeItem('auth_token');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <Loader2 className="animate-spin text-[#33c2df]" size={48} />
      </div>
    );
  }

  if (!user) return null;

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: User Bio Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 p-8 shadow-2xl shadow-[#33c2df]/5">
              <div className="text-center mb-8">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 rounded-full bg-[#33c2df]/10 flex items-center justify-center border-4 border-white dark:border-zinc-800 shadow-xl">
                    <User size={64} className="text-[#33c2df]" />
                  </div>
                  <div className="absolute bottom-1 right-1 w-8 h-8 bg-green-500 border-4 border-white dark:border-zinc-900 rounded-full"></div>
                </div>
                <h1 className="text-2xl font-black text-zinc-900 dark:text-white line-clamp-1">{user.name}</h1>
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-1">Patient Account #{user.id}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-700">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center text-[#33c2df] shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Phone</div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-white">{user.phone_number}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-700">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center text-[#33c2df] shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Email</div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-white truncate max-w-[180px]">{user.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-700">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center text-[#33c2df] shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">District</div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-white">{user.district}</div>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleSignOut}
                className="w-full mt-8 flex items-center justify-center gap-2 text-red-500 font-black text-xs uppercase tracking-widest py-4 border-2 border-red-50 dark:border-red-900/20 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-all"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>

            <div className="bg-[#33c2df] rounded-[2.5rem] p-8 text-white relative overflow-hidden">
               <div className="relative z-10">
                  <ShieldCheck size={32} className="mb-4 opacity-80" />
                  <h3 className="text-xl font-black mb-2">Health Passport</h3>
                  <p className="text-white/70 text-sm font-medium leading-relaxed">
                    Your account includes a digital health passport for easy access to international treatments.
                  </p>
               </div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Right: Dashboard / Appointments */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Calendar, label: "Bookings", color: "bg-blue-500" },
                { icon: Bell, label: "Alerts", color: "bg-orange-500" },
                { icon: Settings, label: "Settings", color: "bg-zinc-500" },
                { icon: Stethoscope, label: "Records", color: "bg-emerald-500" }
              ].map((action, i) => (
                <button key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 hover:border-[#33c2df] transition-all group text-center">
                  <div className={`w-12 h-12 ${action.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg`}>
                    <action.icon size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-[#33c2df]">{action.label}</span>
                </button>
              ))}
            </div>

            {/* Appointment History */}
            <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-2xl shadow-[#33c2df]/5">
              <div className="p-8 sm:p-10 border-b border-zinc-50 dark:border-zinc-800 flex items-center justify-between">
                <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-3">
                   Your Appointments
                </h2>
                <Link href="/doctor" className="text-xs font-black text-[#33c2df] uppercase tracking-widest hover:underline">Book New</Link>
              </div>

              <div className="p-4 sm:p-10 space-y-4">
                {appointments.map((app) => (
                  <div key={app.id} className="group bg-zinc-50 dark:bg-zinc-800/50 rounded-3xl p-6 border border-zinc-100 dark:border-zinc-700 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white dark:hover:bg-zinc-800 transition-all hover:shadow-xl hover:shadow-[#33c2df]/5">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-[#33c2df] shadow-sm overflow-hidden relative">
                         {app.doctor_image ? (
                           <img src={app.doctor_image} alt={app.doctor_name} className="w-full h-full object-cover" />
                         ) : (
                           <Stethoscope size={24} />
                         )}
                      </div>
                      <div>
                        <div className="text-sm font-black text-zinc-900 dark:text-white group-hover:text-[#33c2df] transition-colors">{app.doctor_name || "Doctor"}</div>
                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{app.subcategory_name || "Medical Consultation"} • #{app.id}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8">
                       <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold">
                            <Calendar size={14} />
                            {app.appointment_date}
                          </div>
                          <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold">
                            <Clock size={14} />
                            {app.appointment_time}
                          </div>
                       </div>
                       
                       <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${
                         app.payment_status?.toLowerCase() === 'paid' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                       }`}>
                         <Banknote size={12} />
                         {app.payment_status || 'Unpaid'}
                       </div>

                       <button className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-[#33c2df] hover:text-white transition-all">
                          <ChevronRight size={18} />
                       </button>
                    </div>
                  </div>
                ))}
              </div>

              {appointments.length === 0 && (
                <div className="p-20 text-center">
                   <Calendar size={48} className="text-zinc-200 mx-auto mb-4" />
                   <p className="text-zinc-500 font-medium">No appointments found in your history.</p>
                   <Link href="/doctor" className="mt-6 inline-block bg-[#33c2df] text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest">Start Booking</Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
