import React from 'react';
import type { Metadata } from 'next';

// This metadata helps search engines index your Privacy Policy correctly
export const metadata: Metadata = {
  title: 'Privacy Policy | Bellevie Health Care Services',
  description: 'Learn how Bellevie Health Care Services collects, uses, and protects your personal and medical data.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-zinc-800 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 border-b border-zinc-200 pb-8">
          <h1 className="text-4xl font-extrabold text-zinc-900 mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">Effective Date: May 24, 2026</p>
        </header>

        {/* Content Section */}
        <article className="space-y-10">
          <p className="text-lg text-zinc-600 leading-relaxed">
            Welcome to <strong>BelleVie Health Care Services</strong>. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you use our services, website, or communicate with us.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-[#33c2df] mb-4">1. Information We Collect</h2>
            <div className="grid md:grid-cols-2 gap-6 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <div>
                <h4 className="font-bold mb-2">Personal Information</h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-zinc-600">
                  <li>Full name, Phone, Email, Address</li>
                  <li>Passport or National ID</li>
                  <li>Emergency contact info</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Medical Information</h4>
                <ul className="list-disc pl-5 text-sm space-y-1 text-zinc-600">
                  <li>Medical reports & history</li>
                  <li>Diagnostic results & prescriptions</li>
                  <li>Hospital preferences</li>
                </ul>
              </div>
            </div>
          </section>

          {[
            { title: "2. How We Use Your Information", content: "We use your data to arrange medical consultations, process appointments, provide support, and ensure legal/regulatory compliance." },
            { title: "3. Information Sharing", content: "We share information strictly with authorized hospitals, doctors, diagnostic centers, and travel support partners. We never sell your personal information." },
            { title: "5. Confidentiality of Medical Records", content: "All medical records are treated with the highest level of confidentiality and are only shared with professionals directly involved in your care." },
            { title: "10. Your Rights", content: "You have the right to access, correct, or request the deletion of your personal data, and to withdraw consent for communications at any time." },
          ].map((item, index) => (
            <section key={index}>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{item.content}</p>
            </section>
          ))}

          {/* Contact Box */}
          <div className="mt-12 bg-[#33c2df]/5 border border-[#33c2df]/20 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-[#33c2df] mb-4">12. Contact Us</h3>
            <p className="text-sm text-zinc-700 leading-relaxed">
              For any privacy-related questions, reach out to us:<br/>
              <strong>Bellevie Health Care Services</strong><br/>
              Email: <a href="mailto:info@belleviehealth.com" className="text-[#33c2df] underline">info@belleviehealth.com</a><br/>
              Phone: +8801805464400<br/>
              Address: Dhaka, Bangladesh
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}