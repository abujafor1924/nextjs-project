"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Phone, 
  Lock, 
  ArrowRight, 
  Loader2, 
  CheckCircle2,
  Stethoscope,
  ShieldCheck
} from 'lucide-react';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    phone_number: '',
    new_password: '',
    confirm_password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.new_password !== formData.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => router.push('/login'), 3000);
      } else {
        setError(data.detail || "Reset failed. Please verify your phone number.");
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
          <div className="w-20 h-20 bg-[#33c2df]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={40} className="text-[#33c2df]" />
          </div>
          <h1 className="text-3xl font-black text-zinc-900 dark:text-white">Password Updated!</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">Your password has been reset successfully. Redirecting to login...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col lg:flex-row">
      {/* Left Area */}
      <div className="hidden lg:flex lg:w-1/3 bg-zinc-50 dark:bg-zinc-900/50 border-r border-zinc-100 dark:border-zinc-800 items-center justify-center p-20">
         <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2 mb-12">
                <div className="w-10 h-10 bg-[#33c2df] rounded-xl flex items-center justify-center">
                <Stethoscope className="text-white" size={24} />
                </div>
                <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">BELLEVIE</span>
            </Link>
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-6">Secure Your Account.</h2>
            <p className="text-zinc-500 font-medium leading-relaxed">
                If you've forgotten your password, don't worry. Simply enter your registered phone number and a new password to regain access.
            </p>
         </div>
      </div>

      {/* Right Area: Form */}
      <div className="flex-1 flex items-center justify-center p-8 sm:p-12 lg:p-20">
        <div className="max-w-md w-full">
          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-3xl font-black text-zinc-900 dark:text-white mb-2">Reset Password</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">Choose a strong new password for your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 p-4 rounded-2xl text-red-600 dark:text-red-400 text-sm font-bold">
                {error}
              </div>
            )}

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
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">New Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  name="new_password"
                  required
                  placeholder="••••••••"
                  value={formData.new_password}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-6 py-4 text-sm font-bold text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-[#33c2df] transition-all"
                />
                <Lock className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Confirm Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  name="confirm_password"
                  required
                  placeholder="••••••••"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl px-6 py-4 text-sm font-bold text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-[#33c2df] transition-all"
                />
                <Lock className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:brightness-110 disabled:opacity-50 font-black text-xs uppercase tracking-widest py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2 mt-4"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : (
                <>
                  Update Password
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <div className="pt-6 text-center">
              <p className="text-sm font-bold text-zinc-500">
                Back to <Link href="/login" className="text-[#33c2df] hover:underline">Sign In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
