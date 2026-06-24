export default function AboutHero() {
  return (
    // <section className="relative overflow-hidden py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950">
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
    //     <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl leading-[1.1]">
    //       About <span className="text-[#33c2df]">Bellevie</span>
    //     </h1>
    //     <p className="mx-auto mt-6 text-lg leading-10 text-zinc-600 dark:text-zinc-400 font-medium">
    //     BelleVie Global Health Services is a healthcare facilitation and support platform dedicated to making quality medical treatment more accessible, affordable, and patient-friendly for people from all economic backgrounds. 
    //     With a strong international healthcare network, BelleVie is presently connected with leading hospitals in India, Thailand, and China to ensure patients receive advanced and effective medical care with proper guidance and support.
    //     BelleVie specializes in integrating modern medical treatment with Traditional Chinese Medicine (TCM), creating opportunities for patients to access precision healthcare solutions at comparatively budget-friendly costs. 
    //     Through digital healthcare support, medical coordination, hospital partnerships, health membership programs, and financial coverage collaborations, BelleVie aims to simplify the healthcare journey for patients and families in Bangladesh.
    //     From doctor consultations and treatment planning to international medical support and patient care coordination, BelleVie is committed to building a trusted healthcare ecosystem where technology, compassion, and affordability work together for better human wellbeing.

    //     </p>

        
 
     
         
    //   </div>
    // </section>
    <section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
  
  {/* Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#33c2df]/20 blur-3xl"></div>
  </div>

  <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
    
    {/* Title */}
    <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl leading-tight">
      About <span className="text-[#33c2df]">Bellevie</span>
    </h1>

    <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
      Global Healthcare Facilitation & Support Platform
    </p>

    {/* Card */}
    <div className="mt-10 rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-xl border border-zinc-200 dark:border-zinc-800 p-8 sm:p-10 text-left">
      
      <p className="text-zinc-700 dark:text-zinc-300 leading-8 text-base sm:text-lg">
        BelleVie Global Health Services is a healthcare facilitation and support platform dedicated to making quality medical treatment more accessible, affordable, and patient-friendly for people from all economic backgrounds.
      </p>

      <p className="mt-5 text-zinc-700 dark:text-zinc-300 leading-8 text-base sm:text-lg">
        With a strong international healthcare network, BelleVie is connected with leading hospitals in India, Thailand, and China to ensure patients receive advanced and effective medical care with proper guidance and support.
      </p>

      <p className="mt-5 text-zinc-700 dark:text-zinc-300 leading-8 text-base sm:text-lg">
        It integrates modern medical treatment with Traditional Chinese Medicine (TCM), offering precision healthcare solutions at affordable costs.
      </p>

      <p className="mt-5 text-zinc-700 dark:text-zinc-300 leading-8 text-base sm:text-lg">
        Through digital healthcare support, hospital partnerships, membership programs, and financial collaborations, BelleVie simplifies the healthcare journey for patients in Bangladesh.
      </p>

      <p className="mt-5 text-zinc-700 dark:text-zinc-300 leading-8 text-base sm:text-lg font-medium">
        From consultation to international treatment coordination, BelleVie builds a trusted ecosystem where technology, compassion, and affordability work together.
      </p>
    </div>
  </div>
</section>
  );
}


