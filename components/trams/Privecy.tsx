import React from 'react';
import type { Metadata } from 'next';
import { 
  ShieldCheck, FileText, User, Lock, 
  RefreshCcw, Mail, Database, AlertTriangle, 
  Share2
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Privacy Policy | Bellevie Health Care Services',
  description: 'Learn how Bellevie Health Care Services protects your personal and medical data.',
};

const policySections = [
  {
    icon: User,
    title: "1. Information We Collect",
    description: "We collect personal details (Name, ID, Contact info) and sensitive medical records, including diagnostic results, history, and hospital preferences."
  },
  {
    icon: Database,
    title: "2. How We Use Data",
    description: "Your information is used to arrange medical consultations, process appointments, provide customer support, and maintain regulatory compliance."
  },
  {
    icon: Share2, // Note: If Share2 isn't available, use 'Share' from lucide-react
    title: "3. Information Sharing",
    description: "We share data only with authorized healthcare providers and partners. We never sell or rent your personal information to third parties."
  },
  {
    icon: Lock,
    title: "5. Data Confidentiality",
    description: "All medical records are treated as strictly confidential and shared only with the professionals directly involved in your treatment."
  },
  {
    icon: ShieldCheck,
    title: "4 & 9. Data Protection",
    description: "We implement robust security to prevent unauthorized access. We retain data only for as long as necessary to provide services and comply with law."
  },
  {
    icon: RefreshCcw,
    title: "10 & 11. Your Rights",
    description: "You have the right to access, correct, or delete your data, and withdraw consent for communication at any time."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#33c2df]/10 px-4 py-2 text-sm font-semibold text-[#33c2df]">
            Bellevie Privacy Commitment
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-zinc-500">Effective Date: May 24, 2026</p>
        </div>

        {/* Policy Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {policySections.map((item, index) => (
            <div key={index} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#33c2df]/10 text-[#33c2df]">
                <item.icon size={22} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
       

      </div>
    </main>
  );
}