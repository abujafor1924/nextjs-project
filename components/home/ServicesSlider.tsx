"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { 
  HeartPulse, 
  ChevronRight,
  ChevronLeft,
  ArrowRight
} from 'lucide-react';
import { BASE_URL } from '@/lib/constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Category {
  id: number;
  name: string;
  icon: string;
  banner: string;
}

export default function ServicesSlider() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const getImageUrl = (path: string) => {
    if (!path || path === 'string' || path === '') {
      return 'https://images.unsplash.com/photo-1504813184591-01592fd03cfd?q=80&w=2070&auto=format&fit=crop'; // Clean medical fallback
    }
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${BASE_URL}${cleanPath}`;
  };

  useEffect(() => {
    setMounted(true);
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        // Filter out categories with placeholder names if they exist
        const validCategories = data.filter((cat: Category) => cat.name !== 'string');
        setCategories(validCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (!mounted || (loading && categories.length === 0)) {
    return (
      <section className="py-24 bg-zinc-50 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-4 py-1.5 text-xs font-black text-[#33c2df] mb-6 tracking-widest uppercase border border-[#33c2df]/20">
                <HeartPulse size={14} />
                <span>Our Specialities</span>
              </div>
              <div className="h-16 w-96 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-2xl mb-4"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[3rem] overflow-hidden h-[500px] animate-pulse">
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!loading && categories.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-zinc-50 dark:bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-4 py-1.5 text-xs font-black text-[#33c2df] mb-6 tracking-widest uppercase border border-[#33c2df]/20">
              <HeartPulse size={14} />
              <span>Our Specialities</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-white sm:text-6xl mb-2">
              Our Medical <span className="text-[#33c2df]">Departments</span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg font-medium">
              We provide a wide range of specialized medical services with world-class experts and advanced technology.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button className="services-prev p-4 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:bg-[#33c2df] hover:border-[#33c2df] text-zinc-400 hover:text-white transition-all duration-500 group">
              <ChevronLeft size={24} strokeWidth={3} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button className="services-next p-4 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:bg-[#33c2df] hover:border-[#33c2df] text-zinc-400 hover:text-white transition-all duration-500 group">
              <ChevronRight size={24} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.services-prev',
            nextEl: '.services-next',
          }}
          pagination={{
            clickable: true,
            el: '.services-pagination',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-24 !px-4 -mx-4"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id} className="h-auto">
              <Link href={`/services/${category.id}`} className="group block h-full">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] h-full transition-all duration-500 hover:shadow-[0_20px_50px_rgba(51,194,223,0.15)] hover:-translate-y-2 flex flex-col overflow-hidden relative">
                  
                  {/* Image Header */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={getImageUrl(category.banner)} 
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute -bottom-6 left-8 w-16 h-16 rounded-2xl bg-white dark:bg-zinc-800 shadow-xl flex items-center justify-center p-3 z-10 border border-zinc-50 dark:border-zinc-700 group-hover:bg-[#33c2df] group-hover:border-[#33c2df] transition-all duration-500 group-hover:-translate-y-2">
                      <div className="relative w-full h-full">
                        <Image 
                          src={getImageUrl(category.icon)} 
                          alt={category.name}
                          fill
                          className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 pt-12 flex flex-col flex-grow">
                    <h4 className="text-2xl font-black text-zinc-900 dark:text-white mb-3 group-hover:text-[#33c2df] transition-colors leading-tight">
                      {category.name}
                    </h4>
                    
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 font-medium line-clamp-3">
                      Experience world-class {category.name.toLowerCase()} care with our expert medical team and state-of-the-art facilities.
                    </p>
                    
                    <div className="mt-auto flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#33c2df]">
                      <span className="relative">
                        Explore Department
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#33c2df] transition-all duration-500 group-hover:w-full"></span>
                      </span>
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>

                  {/* Top subtle highlight */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#33c2df] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Pagination Container */}
        <div className="services-pagination flex justify-center -mt-8"></div>
      </div>

      <style jsx global>{`
        .services-pagination .swiper-pagination-bullet {
          background: #33c2df !important;
          opacity: 0.2 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .services-pagination .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 40px !important;
          border-radius: 6px !important;
        }
        .dark .services-pagination .swiper-pagination-bullet {
          background: #33c2df !important;
        }
      `}</style>
    </section>
  );
}

