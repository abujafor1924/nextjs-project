"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { Stethoscope, Calendar, Activity } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "Expert Medical Care",
    highlight: "Best Doctors & Hospitals At Your Reach.",
    description: "Live Your Life On Strong Feet.",
    cta: "Find a Doctor",
    link: "/doctor",
    icon: Stethoscope,
    image: "/images/slider/838c3fb4-782b-4880-9266-33ca40842c90.jpeg",
    gradient: "from-zinc-900/60 via-zinc-900/40 to-zinc-900/60"
  },
  {
    title: "Advanced Diagnostics",
    highlight: "Right Treatment Right Time.",
    description: "Bellevie covers every aspects of your medical needs and ensures healthy living.",
    cta: "Book a Test",
    link: "/contact",
    icon: Calendar,
    image: "/images/slider/7c46a1f9-d16b-4d65-a0e0-e1bc7c264ebb.jpeg",
    gradient: "from-zinc-900/60 via-zinc-900/40 to-zinc-900/60"
  },
  {
    title: "Health Packages",
    highlight: "Always Responsive to your Healthcare Call", 
    description: "Your One Stop helthcare Solution. We are here to serve you with the best healthcare services.",
    cta: "Find a Doctor",
    link: "/doctor",
    icon: Stethoscope,
    image: "/images/slider/a276f120-a572-4b9a-98cf-810d4d30017f.jpeg",
    gradient: "from-zinc-900/60 via-zinc-900/40 to-zinc-900/60"
  }
];

export default function HomeSlider() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    const firstSlide = slides[0];
    return (
      <div className="w-full h-[500px] sm:h-[600px] overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={firstSlide.image}
              alt={firstSlide.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/20 px-3 py-1 text-xs font-bold text-[#33c2df] mb-6 ring-1 ring-[#33c2df]/30 backdrop-blur-md">
                <firstSlide.icon size={14} />
                <span className="uppercase tracking-widest">{firstSlide.title}</span>
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl mb-6 leading-[1.1]">
                {firstSlide.highlight}
              </h1>
              <p className="text-lg leading-8 text-zinc-100 mb-10 font-medium">
                {firstSlide.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] sm:h-[600px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={0}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
              </div>
              
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
                <div className="max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/20 px-3 py-1 text-xs font-bold text-[#33c2df] mb-6 ring-1 ring-[#33c2df]/30 backdrop-blur-md">
                    <slide.icon size={14} />
                    <span className="uppercase tracking-widest">{slide.title}</span>
                  </div>
                  
                  <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl mb-6 leading-[1.1]">
                    {slide.highlight}
                  </h1>
                  
                  <p className="text-lg leading-8 text-zinc-100 mb-10 font-medium">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href={slide.link}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#33c2df] px-8 py-4 text-sm font-black text-white hover:brightness-110 transition-all active:scale-95"
                    >
                      <slide.icon size={18} />
                      {slide.cta}
                    </Link>
                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 backdrop-blur-sm transition-all"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.1);
          width: 50px !important;
          height: 50px !important;
          border-radius: 15px;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: 900;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 12px !important;
          height: 12px !important;
        }
        .swiper-pagination-bullet-active {
          background: #33c2df !important;
          width: 30px !important;
          border-radius: 6px !important;
        }
      `}</style>
    </div>
  );
}
