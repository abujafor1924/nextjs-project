import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "../icons/BrandIcons";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-black tracking-tighter text-[#33c2df]">
              Bellevie
            </Link>
            <p className="text-base text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
              Your trusted partner in modern medical and diagnostic healthcare services. 
              Providing excellence in care through innovation and technology.
            </p>
            <div className="flex gap-4">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#33c2df] hover:border-[#33c2df]/30 transition-all">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Find a Doctor", href: "/doctor" },
                { name: "Book a Test", href: "/contact" },
                // { name: "Medical Packages", href: "/packages" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-zinc-500 dark:text-zinc-400 font-medium hover:text-[#33c2df] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white mb-8">Departments</h3>
            <ul className="space-y-4">
              {["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Ophthalmology"].map((item) => (
                <li key={item}>
                  <Link href="https://belleviebd.netlify.app/services/1" className="text-base text-zinc-500 dark:text-zinc-400 font-medium hover:text-[#33c2df] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white mb-8">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-[#33c2df] shrink-0" size={20} />
                <span className="text-base text-zinc-500 dark:text-zinc-400 font-medium">Crown Park (2nd Floor), 6/4, Block # B, Humayun Road, Mohammadpur, 1207 Dhaka, Bangladesh</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-[#33c2df] shrink-0" size={20} />
                <span className="text-base text-zinc-500 dark:text-zinc-400 font-medium">+8801805-464400
</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-[#33c2df] shrink-0" size={20} />
                <span className="text-base text-zinc-500 dark:text-zinc-400 font-medium">info.belleviebd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            © {new Date().getFullYear()} Bellevie Global Health Services. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs font-bold text-zinc-400 hover:text-[#33c2df] uppercase tracking-widest">Privacy Policy</Link>
            <Link href="#" className="text-xs font-bold text-zinc-400 hover:text-[#33c2df] uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
