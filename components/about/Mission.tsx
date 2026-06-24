export default function Mission() {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             Our mission is to bridge the gap between people and quality healthcare by creating affordable, accessible, and reliable medical support services for all. 
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              BelleVie strives to empower individuals and families through innovative healthcare solutions, strategic hospital partnerships, digital health services, and financial healthcare coverage opportunities.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              We are committed to ensuring that even low and middle-income communities can access advanced medical treatment, expert consultations, and international healthcare facilities without unnecessary complexity or financial burden. 
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Through compassion, technology, and global collaboration, BelleVie aims to transform healthcare support into a more humane, transparent, and patient-centered experience.
            </p>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl h-96 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
            <img src="/images/office-about/FB_IMG_1778920529356.jpg.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
