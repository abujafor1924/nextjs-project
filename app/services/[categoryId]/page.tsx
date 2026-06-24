import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, 
  ArrowLeft,
  LayoutGrid,
  Activity
} from 'lucide-react';
import { API_BASE_URL } from '@/lib/constants';

interface Subcategory {
  id: number;
  category: number;
  name: string;
  icon: string | null;
}

interface Category {
  id: number;
  name: string;
  icon: string;
}

async function getSubcategories(categoryId: string): Promise<Subcategory[]> {
  const response = await fetch(`${API_BASE_URL}/popular-service/subcategories/?category=${categoryId}`, {
    headers: { 'accept': 'application/json' },
    next: { revalidate: 3600 }
  });
  if (!response.ok) return [];
  return response.json();
}

async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${API_BASE_URL}/popular-service/categories/`, {
    headers: { 'accept': 'application/json' },
    next: { revalidate: 3600 }
  });
  if (!response.ok) return [];
  return response.json();
}

export default async function CategoryServicesPage({ 
  params 
}: { 
  params: Promise<{ categoryId: string }>
}) {
  const { categoryId } = await params;
  const [subcategories, categories] = await Promise.all([
    getSubcategories(categoryId),
    getCategories()
  ]);

  const category = categories.find(c => c.id === parseInt(categoryId));
  const categoryName = category ? category.name : 'Medical Services';

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs / Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#33c2df] font-bold text-sm mb-8 transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#33c2df]/10 px-4 py-1.5 text-xs font-black text-[#33c2df] mb-6 tracking-widest uppercase border border-[#33c2df]/20">
                <LayoutGrid size={14} />
                <span>Our Specialities</span>
              </div>
              <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl leading-[1.1]">
                {categoryName}
              </h1>
              <p className="mt-4 text-lg font-medium text-zinc-500 dark:text-zinc-400 max-w-2xl">
                Explore our specialized {categoryName.toLowerCase()} services and find the right expert for your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Subcategories Grid */}
        {subcategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subcategories.map((sub) => (
              <div 
                key={sub.id} 
                className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-10 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#33c2df]/10 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className={`w-20 h-20 rounded-3xl bg-[#33c2df]/5 dark:bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm relative overflow-hidden`}>
                  {sub.icon ? (
                    <Image 
                      src={sub.icon} 
                      alt={sub.name}
                      fill
                      sizes="48px"
                      className="object-contain p-4"
                    />
                  ) : (
                    <Activity size={32} className="text-[#33c2df]" />
                  )}
                </div>
                
                <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-4 group-hover:text-[#33c2df] transition-colors">
                  {sub.name}
                </h3>
                
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                  Specialized care and treatment for {sub.name.toLowerCase()} related conditions.
                </p>
                
                <Link 
                  href={`/doctor?category=${categoryId}&subcategory=${sub.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#33c2df] group-hover:gap-4 transition-all duration-300"
                >
                  View Doctors
                  <ChevronRight size={16} strokeWidth={3} />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] border border-dashed border-zinc-200 dark:border-zinc-800">
            <Activity size={48} className="text-zinc-300 mx-auto mb-6" />
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-2">No Subcategories Found</h2>
            <p className="text-zinc-500 font-medium">We are currently updating our services for this department.</p>
          </div>
        )}
      </div>
    </main>
  );
}
