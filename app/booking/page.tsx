"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Loader2,
  Stethoscope,
  MapPin
} from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

interface Doctor {
  id: number;
  name: string;
  image: string;
  subcategory_name: string;
  hospital_name: string;
  fees: string;
}

function BookingContent() {
  const searchParams = useSearchParams();
  const doctorId = searchParams.get('doctor_id');
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [loadingDoctor, setLoadingDoctor] = useState(!!doctorId);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [appointmentId, setAppointmentId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    doctor_id: doctorId || '',
    date: '',
    time: '',
    name: '',
    phone: '',
    transaction_id: '',
    payment_method: 'bkash'
  });

  // Fetch Doctor Details if ID is present
  useEffect(() => {
    if (!doctorId) return;
    const fetchDoctor = async () => {
      try {
        const res = await fetch(`/api/doctor/${doctorId}`);
        const data = await res.json();
        setDoctor({
          id: data.id,
          name: data.name,
          image: data.image,
          subcategory_name: data.subcategory_name,
          hospital_name: data.hospital?.name || "Premium Hospital",
          fees: data.doctor_fees || "500"
        });
      } catch (e) { 
        console.error("Failed to fetch doctor for booking:", e); 
      } finally {
        setLoadingDoctor(false);
      }
    };
    fetchDoctor();
  }, [doctorId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('auth_token');

    if (!token) {
      alert("Please login first to book an appointment.");
      router.push('/login?redirect=' + window.location.pathname + window.location.search);
      return;
    }

    setSubmitLoading(true);
    try {
      const response = await fetch('/api/appointments/create', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          patient_name: formData.name,
          patient_phone: formData.phone,
          appointment_date: formData.date,
          appointment_time: formData.time + ":00",
          doctor_id: formData.doctor_id
        })
      });

      const data = await response.json();

      if (response.ok) {
        setAppointmentId(data.id);
        setStep(3); // Go to payment step
      } else {
        alert(data.detail || 'Failed to create appointment. Please check your details.');
      }
    } catch (e) {
      alert('Network error. Please try again.');
    } finally {
      setSubmitLoading(false);
    }
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('auth_token');
    setSubmitLoading(true);

    try {
      const response = await fetch('/api/payments/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          appointment: appointmentId,
          transaction_id: formData.transaction_id,
          amount: doctor?.fees || "500",
          method: formData.payment_method
        })
      });

      if (response.ok) {
        setStep(4); // Final confirmation
      } else {
        const data = await response.json();
        alert(data.detail || 'Payment submission failed. Please check your transaction ID.');
      }
    } catch (e) {
      alert('Network error. Please try again.');
    } finally {
      setSubmitLoading(false);
    }
  };


  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  if (!doctorId) {
    return (
      <div className="mx-auto max-w-3xl px-4 text-center py-20">
        <Stethoscope size={64} className="mx-auto text-zinc-200 mb-6" />
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-4">No Doctor Selected</h2>
        <p className="text-zinc-500 mb-8">Please select a doctor first to book an appointment.</p>
        <Link href="/doctor" className="bg-[#33c2df] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest">
          Browse Doctors
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      {/* Progress */}
      <div className="mb-12">
        <Link href={`/doctor/${doctorId}`} className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#33c2df] font-bold text-sm mb-8 transition-colors">
          <ArrowLeft size={16} />
          Back to Profile
        </Link>
        
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-200 dark:bg-zinc-800 -z-0 -translate-y-1/2"></div>
          <div className={`absolute top-1/2 left-0 h-0.5 bg-[#33c2df] -z-0 -translate-y-1/2 transition-all duration-500`} style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-4 transition-all duration-300 ${
              step >= i ? 'bg-[#33c2df] border-white dark:border-zinc-950 text-white' : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-400'
            }`}>
              {step > i ? <CheckCircle2 size={18} /> : i}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <span className={`text-[10px] font-black uppercase tracking-widest ${step >= 1 ? 'text-[#33c2df]' : 'text-zinc-400'}`}>Schedule</span>
          <span className={`text-[10px] font-black uppercase tracking-widest ${step >= 2 ? 'text-[#33c2df]' : 'text-zinc-400'}`}>Details</span>
          <span className={`text-[10px] font-black uppercase tracking-widest ${step >= 3 ? 'text-[#33c2df]' : 'text-zinc-400'}`}>Payment</span>
          <span className={`text-[10px] font-black uppercase tracking-widest ${step >= 4 ? 'text-[#33c2df]' : 'text-zinc-400'}`}>Done</span>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 p-8 md:p-12 shadow-2xl shadow-[#33c2df]/5">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-2">Schedule Your Visit</h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-10">Select your preferred date and time for the consultation.</p>
            
            {/* Selected Doctor Summary (Read Only) */}
            {loadingDoctor ? (
              <div className="flex items-center gap-4 mb-10 p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-3xl animate-pulse">
                <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-700 rounded-2xl"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-700 w-1/3 rounded"></div>
                  <div className="h-3 bg-zinc-200 dark:bg-zinc-700 w-1/4 rounded"></div>
                </div>
              </div>
            ) : doctor && (
              <div className="flex items-center gap-6 mb-10 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-[2rem] border border-zinc-100 dark:border-zinc-700">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white dark:ring-zinc-800">
                  <Image 
                    src={doctor.image} 
                    alt={doctor.name} 
                    fill 
                    sizes="80px"
                    className="object-cover" 
                  />
                </div>
                <div>
                  <div className="text-xs font-black text-[#33c2df] uppercase tracking-widest mb-1">{doctor.subcategory_name}</div>
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white">{doctor.name}</h3>
                  <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-bold mt-1">
                    <MapPin size={12} />
                    {doctor.hospital_name}
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-8">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Appointment Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    name="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl px-6 py-5 text-sm font-bold text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-[#33c2df] transition-all"
                  />
                  <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Available Time Slots</label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, time }))}
                      className={`py-4 rounded-2xl text-xs font-black border transition-all ${
                        formData.time === time 
                          ? 'bg-[#33c2df] border-[#33c2df] text-white shadow-lg shadow-[#33c2df]/20' 
                          : 'bg-white dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 text-zinc-500 hover:border-[#33c2df]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={nextStep}
                disabled={!formData.date || !formData.time}
                className="w-full bg-[#33c2df] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-xs uppercase tracking-widest py-6 rounded-2xl transition-all shadow-xl shadow-[#33c2df]/20 mt-4 flex items-center justify-center gap-2"
              >
                Next: Patient Details
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-2">Patient Information</h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-10">Please provide the contact details for the appointment.</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Full Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter patient full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl px-6 py-5 text-sm font-bold text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-[#33c2df]"
                  />
                  <User className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Phone Number</label>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="+880 1XXX XXXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl px-6 py-5 text-sm font-bold text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-[#33c2df]"
                  />
                  <Phone className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="button"
                  onClick={prevStep}
                  className="flex-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-black text-xs uppercase tracking-widest py-6 rounded-2xl transition-all hover:brightness-95"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  disabled={submitLoading}
                  className="flex-[2] bg-[#33c2df] hover:brightness-110 disabled:opacity-50 text-white font-black text-xs uppercase tracking-widest py-6 rounded-2xl transition-all shadow-xl shadow-[#33c2df]/20 flex items-center justify-center gap-2"
                >
                  {submitLoading ? <Loader2 className="animate-spin" size={20} /> : "Continue to Payment"}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-2">Payment Details</h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-10">Complete your booking by paying the consultation fee.</p>
            
            {/* Payment Instruction Card */}
            <div className="bg-[#33c2df] rounded-3xl p-8 mb-10 text-white relative overflow-hidden shadow-xl shadow-[#33c2df]/20">
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">Send Money To</div>
                      <div className="text-2xl font-black tabular-nums">+880 1805-464400</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black uppercase">Official</div>
                  </div>

                  <div className="flex justify-between items-end border-t border-white/20 pt-6">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">Payable Amount</div>
                      <div className="text-3xl font-black">৳{doctor?.fees}</div>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-bold opacity-70 italic max-w-[150px]">Please complete payment through bKash or Nagad App</p>
                    </div>
                  </div>
               </div>
               <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <form onSubmit={handlePaymentSubmit} className="space-y-8">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                   <button 
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, payment_method: 'bkash' }))}
                    className={`p-4 rounded-2xl border-2 flex items-center justify-center gap-3 transition-all ${
                      formData.payment_method === 'bkash' ? 'border-[#e2136e] bg-[#e2136e]/5' : 'border-zinc-100 dark:border-zinc-800 hover:border-zinc-200'
                    }`}
                   >
                     <div className="w-8 h-8 rounded-lg bg-[#e2136e] flex items-center justify-center text-white font-black text-[10px]">bKash</div>
                     <span className={`text-xs font-black uppercase tracking-widest ${formData.payment_method === 'bkash' ? 'text-[#e2136e]' : 'text-zinc-400'}`}>bKash</span>
                   </button>
                   <button 
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, payment_method: 'nagad' }))}
                    className={`p-4 rounded-2xl border-2 flex items-center justify-center gap-3 transition-all ${
                      formData.payment_method === 'nagad' ? 'border-[#f7941d] bg-[#f7941d]/5' : 'border-zinc-100 dark:border-zinc-800 hover:border-zinc-200'
                    }`}
                   >
                     <div className="w-8 h-8 rounded-lg bg-[#f7941d] flex items-center justify-center text-white font-black text-[10px]">Nagad</div>
                     <span className={`text-xs font-black uppercase tracking-widest ${formData.payment_method === 'nagad' ? 'text-[#f7941d]' : 'text-zinc-400'}`}>Nagad</span>
                   </button>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Transaction ID</label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="transaction_id"
                    required
                    placeholder="Enter TRX ID from payment SMS"
                    value={formData.transaction_id}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-6 py-5 text-sm font-bold text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-[#33c2df]"
                  />
                </div>
                <p className="text-[10px] font-medium text-zinc-400 mt-2 ml-1 italic">* Enter the TRX ID received from the operator after sending money.</p>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="submit"
                  disabled={submitLoading || !formData.transaction_id}
                  className="w-full bg-[#33c2df] hover:brightness-110 disabled:opacity-50 text-white font-black text-xs uppercase tracking-widest py-6 rounded-2xl transition-all shadow-xl shadow-[#33c2df]/20 flex items-center justify-center gap-2"
                >
                  {submitLoading ? <Loader2 className="animate-spin" size={20} /> : (
                    <>
                      Verify & Confirm Booking
                      <CheckCircle2 size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in zoom-in-95 duration-500 text-center">
            <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-8 border-4 border-white dark:border-zinc-950 shadow-xl">
              <CheckCircle2 size={48} className="text-green-500" />
            </div>
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-2">Booking Confirmed!</h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-4 max-w-sm mx-auto">Your appointment with {doctor?.name} has been successfully scheduled.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#33c2df]/10 rounded-xl text-[#33c2df] text-[10px] font-black uppercase tracking-widest mb-12">
               Booking ID: #BVL-{appointmentId}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/doctor"
                className="flex-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black text-xs uppercase tracking-widest py-5 rounded-2xl transition-all hover:brightness-110"
              >
                Find More Doctors
              </Link>
              <Link 
                href="/"
                className="flex-1 bg-[#33c2df] text-white font-black text-xs uppercase tracking-widest py-5 rounded-2xl transition-all hover:brightness-110 shadow-lg shadow-[#33c2df]/20"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-20">
      <Suspense fallback={<div className="flex items-center justify-center h-screen"><Loader2 className="animate-spin text-[#33c2df]" size={48} /></div>}>
        <BookingContent />
      </Suspense>
    </main>
  );
}
