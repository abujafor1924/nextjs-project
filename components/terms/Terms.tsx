import {
  ShieldCheck,
  FileText,
  CreditCard,
  Calendar,
  Globe,
  Lock,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";

const terms = [
  {
    icon: FileText,
    title: "Service Role",
    description:
      "Bellevie provides healthcare assistance including doctor appointments, hospital coordination, and medical support services. We do not provide direct medical treatment.",
  },
  {
    icon: ShieldCheck,
    title: "Patient Responsibility",
    description:
      "Patients must provide accurate medical information and follow all instructions provided by healthcare professionals.",
  },
  {
    icon: AlertTriangle,
    title: "Medical Disclaimer",
    description:
      "Treatment decisions and outcomes depend on doctors and hospitals. Bellevie does not guarantee specific medical results.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Service charges and membership fees must be paid according to the selected package. Prices may change without prior notice.",
  },
  {
    icon: Calendar,
    title: "Appointments",
    description:
      "Appointments are subject to doctor availability. Cancellation or rescheduling requests should be communicated in advance.",
  },
  {
    icon: Lock,
    title: "Privacy",
    description:
      "Patient information is kept confidential and shared only with relevant healthcare providers when required.",
  },
  {
    icon: Globe,
    title: "International Treatment",
    description:
      "Visa approval, travel arrangements, and treatment costs depend on embassies, airlines, and hospitals. BelleVie is not responsible for such changes.",
  },
  {
    icon: AlertTriangle,
    title: "Liability",
    description:
      "Bellevie is not liable for medical negligence, treatment outcomes, delays, or third-party service issues.",
  },
  {
    icon: RefreshCcw,
    title: "Updates",
    description:
      "Terms & Conditions may be updated at any time. Continued use of our services indicates acceptance of the latest version.",
  },
];

export default function Terms() {
  return (
    <main className="min-h-screen bg-white dark:bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Bellevie Global Health Services
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">
            Please read these terms carefully before using our healthcare
            coordination and medical tourism services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {terms.map((term, index) => {
            const Icon = term.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950">
                  <Icon size={22} />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">
                  {term.title}
                </h3>

                <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  {term.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 rounded-2xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-900 dark:bg-cyan-950/30">
          <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
            By using Bellevie Global Health Services, you acknowledge that you
            have read, understood, and agreed to these Terms & Conditions.
          </p>
        </div>
      </div>
    </main>
  );
}
