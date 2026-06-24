"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, User, LogOut } from 'lucide-react';

const navLinks = [
  { name: 'Doctors', href: '/doctor', hasDropdown: false },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Check login status on mount
  React.useEffect(() => {
    const token = localStorage.getItem('auth_token');
    setIsLoggedIn(!!token);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="w-full bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-12 w-36">
              <Image
                src="/imageslogo/Gemini_Generated_Image_mv8pwamv8pwamv8pw.png"
                alt="Bellevie Healthcare"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] font-black uppercase tracking-widest transition-colors ${
                  pathname === link.href ? 'text-[#33c2df]' : 'text-zinc-600 hover:text-[#33c2df]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Actions */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <Link href="/login" className="text-[12px] font-black uppercase tracking-widest text-zinc-600 hover:text-[#33c2df]">Login</Link>
                <Link href="/register" className="bg-[#33c2df] text-white px-6 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-widest hover:brightness-110">Join Now</Link>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/profile" className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-widest hover:text-[#33c2df]">
                  <User size={16} /> Profile
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-zinc-500 hover:text-red-500 transition-colors text-xs font-black uppercase tracking-widest"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-zinc-900">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}