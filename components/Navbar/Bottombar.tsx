"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, HeartPulse, Stethoscope, User } from 'lucide-react'

const navLinks = [
  { name: 'Doctors', href: '/doctor', hasDropdown: true },
  // { name: 'Packages', href: '/packages' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Bottombar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState("");

  React.useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setIsLoggedIn(true);
      // Fetch profile for name
      fetch('/api/auth/profile', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(res => res.json())
      .then(data => {
        if (data.name) setUserName(data.name);
      })
      .catch(() => setIsLoggedIn(false));
    }
  }, [pathname]);

  return (
    <div className="w-full bg-white dark:bg-black border-y border-zinc-200 dark:border-zinc-800 sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Appointment Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/booking"
              className="flex items-center gap-2 bg-[#33c2df] text-white px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-md shadow-[#33c2df]/10 dark:shadow-none"
            >
              <Stethoscope size={14} strokeWidth={3} />
              Book Appointment
            </Link>
          </div>

          {/* Main Healthcare Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative flex items-center gap-1 text-[11px] font-black uppercase tracking-widest transition-all py-4 ${
                    isActive
                      ? 'text-[#33c2df]'
                      : 'text-zinc-500 hover:text-[#33c2df] dark:text-zinc-400 dark:hover:text-[#33c2df]'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={10} strokeWidth={3} className="opacity-40 group-hover:text-[#33c2df] transition-colors" />}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#33c2df] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              )
            })}
          </div>

          {/* Auth Actions */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <Link 
                  href="/login"
                  className="text-[11px] font-black uppercase tracking-widest text-zinc-500 hover:text-[#33c2df] transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/register"
                  className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  Join Now
                </Link>
              </>
            ) : (
              <Link 
                href="/profile"
                className="flex items-center gap-2 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#33c2df]/10 flex items-center justify-center border border-[#33c2df]/20 group-hover:bg-[#33c2df] transition-all">
                  <User size={14} className="text-[#33c2df] group-hover:text-white transition-colors" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">{userName || "Profile"}</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex w-full items-center justify-between md:hidden">
            <Link 
              href="/booking"
              className="flex items-center gap-1.5 text-[#33c2df] font-black text-[10px] uppercase tracking-widest"
            >
              <Stethoscope size={16} strokeWidth={2.5} />
              Appointment
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-zinc-900 dark:text-white bg-zinc-50 dark:bg-zinc-900 rounded-lg"
            >
              {isOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between text-sm font-black uppercase tracking-widest ${
                  pathname === link.href ? 'text-[#33c2df]' : 'text-zinc-500'
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} />}
              </Link>
            ))}

            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-900 space-y-4">
              {!isLoggedIn ? (
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center bg-[#33c2df] text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <Link 
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest"
                >
                  <User size={18} />
                  My Profile
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

