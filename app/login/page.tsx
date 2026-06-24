"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Phone, 
  Lock, 
  ArrowRight, 
  Loader2, 
  Stethoscope
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    phone_number: '',
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
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token for subsequent authenticated requests
        if (data.access || data.token) {
          localStorage.setItem('auth_token', data.access || data.token);
        }
        router.push('/doctor');
      } else {
        setError(data.detail || "Invalid credentials. Please try again.");
      }
    } catch (e) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col lg:flex-row">
      {/* Left: Branding Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-zinc-900 relative overflow-hidden items-center justify-center p-20">
        <div className="relative z-10 text-white max-w-lg">
          <Link href="/" className="inline-flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-[#33c2df] rounded-xl flex items-center justify-center">
               <Stethoscope className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter">BELLEVIE</span>
          </Link>
          <h2 className="text-5xl font-black mb-8 leading-[1.1]">Welcome <br /> Back, Hero.</h2>
          <p className="text-xl font-medium text-white/50 leading-relaxed mb-12">
            Manage your healthcare journey effortlessly. Your records and specialists are just a login away.
          </p>
        </div>
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#33c2df]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#33c2df]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </div>

      {/* Right: Form Side */}
      <div className="flex-1 flex items-center justify-center p-8 sm:p-12 lg:p-20">
        <div className="max-w-md w-full">
          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-3xl font-black text-zinc-900 dark:text-white mb-2">Sign In</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">Enter your credentials to access your account.</p>
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
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Password</label>
                <Link href="/reset-password" edit-instruction="Use /reset-password as the path for resetting" className="text-[10px] font-black uppercase tracking-widest text-[#33c2df] hover:underline">Forgot?</Link>
              </div>
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
                  Sign In
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <div className="pt-6 text-center">
              <p className="text-sm font-bold text-zinc-500">
                Don't have an account? <Link href="/register" className="text-[#33c2df] hover:underline">Join Now</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
