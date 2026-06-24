"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to send message.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-100 dark:border-zinc-900 p-8 md:p-12 shadow-2xl shadow-zinc-200/50 dark:shadow-none text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center py-12">
          <div className="w-20 h-20 bg-[#33c2df]/10 rounded-full flex items-center justify-center text-[#33c2df] mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-widest">
            Message <span className="text-[#33c2df]">Sent!</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">
            Thank you for reaching out. Our team will get back to you as soon as possible.
          </p>
          <button 
            onClick={() => setStatus("idle")}
            className="mt-8 text-[#33c2df] font-bold uppercase tracking-widest text-xs hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-100 dark:border-zinc-900 p-8 md:p-12 shadow-2xl shadow-zinc-200/50 dark:shadow-none">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 uppercase tracking-widest text-center">
          Send a <span className="text-[#33c2df]">Message</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33c2df]/50 transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33c2df]/50 transition-all font-medium"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
              Subject
            </label>
            <select 
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33c2df]/50 transition-all font-medium appearance-none"
            >
              <option>General Inquiry</option>
              <option>Medical Appointment</option>
              <option>Health Package Inquiry</option>
              <option>Technical Support</option>
              <option>Feedback</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">
              Your Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="How can we help you today?"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33c2df]/50 transition-all font-medium resize-none"
            ></textarea>
          </div>

          {status === "error" && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm font-medium text-center">
              {errorMessage}
            </div>
          )}
          
          <button 
            disabled={status === "loading"}
            className="w-full bg-[#33c2df] text-white py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-[#33c2df]/20 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" strokeWidth={3} />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={18} strokeWidth={3} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
