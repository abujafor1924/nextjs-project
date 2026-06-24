import React from 'react'
import { Phone, Mail } from 'lucide-react'
import { FacebookIcon, YouTubeIcon, InstagramIcon } from '../icons/BrandIcons'

export default function Topbar() {
  return (
    <div className="w-full bg-zinc-50 border-b border-zinc-200 py-1.5 text-zinc-500 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-5 text-[11px] font-medium tracking-wide">
          <div className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">
            <Phone size={12} strokeWidth={2.5} />
            <span>+8801805-464400</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer border-l border-zinc-300 dark:border-zinc-700 pl-5">
            <Mail size={12} strokeWidth={2.5} />
            <span>info.belleviebd@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3.5  pr-4">
            <a href="https://www.facebook.com/share/18x4Uo8Uui/" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><FacebookIcon size={14} /></a>
            <a href="https://youtube.com/@bellevieglobalhealthservices?si=_JARGlhg-W-q5xuG" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><YouTubeIcon size={14} /></a>
            <a href="https://www.instagram.com/bellevieglobalhealth?igsh=MWc0NGp6dXRwbWtkYQ==" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><InstagramIcon size={14} /></a>
          </div>
          {/* <div className="text-[11px] font-bold uppercase tracking-widest hover:text-zinc-900 dark:hover:text-white cursor-pointer transition-colors">
            Contact Us
          </div> */}
        </div>
      </div>
    </div>
  )
}
