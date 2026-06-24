"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Phone, 
  Lock, 
  User, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Loader2, 
  CheckCircle2,
  Stethoscope
} from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    phone_number: '',
    name: '',
    email: '',
    district: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => router.push('/login'), 2000);
      } else {
        setError(data.detail || "Registration failed. Please check your data.");
      }
    } catch (e) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-black text-zinc-900 dark:text-white">Account Created!</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">Your account has been successfully registered. Redirecting to login...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col lg:flex-row">
      {/* Left: Design/Marketing Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#33c2df] relative overflow-hidden items-center justify-center p-20">
        <div className="relative z-10 text-white max-w-lg">
          <Link href="/" className="inline-flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
               <Stethoscope className="text-[#33c2df]" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter">BELLEVIE</span>
          </Link>
          <h2 className="text-5xl font-black mb-8 leading-[1.1]">Join Our <br /> Health Community</h2>
          <p className="text-xl font-medium text-white/80 leading-relaxed mb-12">
            Access world-class medical specialists, manage your appointments, and keep track of your health records in one place.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-black mb-1">120+</div>
              <div className="text-xs font-black uppercase tracking-widest opacity-60">Verified Doctors</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-1">100k+</div>
              <div className="text-xs font-black uppercase tracking-widest opacity-60">Happy Patients</div>
            </div>
          </div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </div>

      {/* Right: Form Side */}
      <div className="flex-1 flex items-center justify-center p-8 sm:p-12 lg:p-20">
        <div className="max-w-md w-full">
          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-3xl font-black text-zinc-900 dark:text-white mb-2">Create Account</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">Fill in your details to get started with Bellevie.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 p-4 rounded-2xl text-red-600 dark:text-red-400 text-sm font-bold">
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Full Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-6 py-4 text-sm font-bold text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-[#33c2df] transition-all"
                />
                <User className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Phone Number</label>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone_number"
                    required
                    placeholder="+880"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-6 py-4 text-sm font-bold text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-[#33c2df] transition-all"
                  />
                  <Phone className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">District</label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="district"
                    required
                    placeholder="Dhaka"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-6 py-4 text-sm font-bold text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-[#33c2df] transition-all"
                  />
                  <MapPin className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="user@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-6 py-4 text-sm font-bold text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-[#33c2df] transition-all"
                />
                <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  name="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-6 py-4 text-sm font-bold text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-[#33c2df] transition-all"
                />
                <Lock className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#33c2df] hover:brightness-110 disabled:opacity-50 text-white font-black text-xs uppercase tracking-widest py-5 rounded-2xl transition-all shadow-xl shadow-[#33c2df]/20 flex items-center justify-center gap-2 mt-4"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : (
                <>
                  Register Now
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <div className="pt-6 text-center">
              <p className="text-sm font-bold text-zinc-500">
                Already have an account? <Link href="/login" className="text-[#33c2df] hover:underline">Sign In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
