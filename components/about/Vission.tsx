import React from 'react'

const Vission = () => {
  return (
    <div>
       <section className="py-24 sm:py-32 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl h-96 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
            <img src="/images/office-about/FB_IMG_1778920529356.jpg.jpeg" alt="" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Our Vision
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             Our vision is to become a globally trusted healthcare support and medical facilitation platform that redefines affordable healthcare accessibility across Asia and beyond. 
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             BelleVie envisions a future where every individual, regardless of economic background, can receive world-class medical care, modern treatment solutions, and holistic healthcare support with dignity and confidence.
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
             By combining Bangladeshi local hospitals with international medical expertise, Traditional Chinese Medicine, digital healthcare innovation, and strategic healthcare partnerships, BelleVie aims to create a sustainable healthcare ecosystem that improves lives, strengthens communities, and promotes healthier futures for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Vission
