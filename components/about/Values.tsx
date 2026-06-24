const values = [
  {
    name: "Integrity",
    description: "We build trust through transparency and honesty in all our dealings.",
  },
  {
    name: "Innovation",
    description: "We constantly explore new technologies and creative approaches.",
  },
  {
    name: "Quality",
    description: "We take pride in our craftsmanship and attention to detail.",
  },
  {
    name: "Collaboration",
    description: "We work closely with our clients as true partners in their success.",
  },
];

export default function Values() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-4xl">Our Core <span className="text-[#33c2df]">Values</span></h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 font-medium">
            These core principles guide our medical practice and how we serve our patients every day.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-black text-zinc-900 dark:text-white border-l-4 border-[#33c2df] pl-4">{value.name}</dt>
              <dd className="mt-3 text-zinc-600 dark:text-zinc-400 font-medium pl-4">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
