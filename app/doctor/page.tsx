import DoctorList from '@/components/doctor/DoctorList';
import { API_BASE_URL, DOCTOR_APPOINTMENT_CATEGORY_ID } from '@/lib/constants';

export const metadata = {
  title: "All Doctors | Bellevie",
  description: "Discover the experienced doctors at Bellevie, dedicated to providing exceptional healthcare services and personalized care for our patients.",
};

interface ApiSubcategory {
  id: number;
  name: string;
  category: number;
}

interface ApiDoctor {
  id: number;
  name: string;
  image: string;
  designation: string;
  years_of_experience: number;
  doctor_fees: string;
  hospital_name: string;
  subcategories?: ApiSubcategory[];
}

interface DoctorListItem {
  id: number;
  name: string;
  image: string;
  designation: string;
  years_of_experience: number;
  doctor_fees: string;
  hospital_name: string;
  subcategory_name: string;
  subcategory_id: number;
}

async function fetchAllDoctors(initialUrl: string): Promise<ApiDoctor[]> {
  const doctors: ApiDoctor[] = [];
  let url: string | null = initialUrl;

  while (url) {
    const response: Response = await fetch(url, {
      headers: { accept: 'application/json' },
      next: { revalidate: 60 },
    });

    if (!response.ok) break;

    const data: { results?: ApiDoctor[]; next?: string | null } = await response.json();
    doctors.push(...(data.results || []));
    url = data.next ?? null;
  }

  return doctors;
}

function normalizeDoctor(
  doctor: ApiDoctor,
  categoryId?: number,
  subcategoryId?: string,
): DoctorListItem | null {
  const subcategories = doctor.subcategories ?? [];

  let matchedSubcategory: ApiSubcategory | undefined;

  if (subcategoryId && categoryId) {
    matchedSubcategory =
      subcategories.find(
        (sub) => sub.id === Number(subcategoryId) && sub.category === categoryId,
      ) ?? subcategories.find((sub) => sub.id === Number(subcategoryId));
  } else if (subcategoryId) {
    matchedSubcategory = subcategories.find((sub) => sub.id === Number(subcategoryId));
  } else if (categoryId) {
    matchedSubcategory = subcategories.find((sub) => sub.category === categoryId);
  } else {
    matchedSubcategory = subcategories[0];
  }

  if (!matchedSubcategory) return null;

  return {
    id: doctor.id,
    name: doctor.name,
    image: doctor.image,
    designation: doctor.designation,
    years_of_experience: doctor.years_of_experience,
    doctor_fees: doctor.doctor_fees,
    hospital_name: doctor.hospital_name,
    subcategory_name: matchedSubcategory.name,
    subcategory_id: matchedSubcategory.id,
  };
}

async function getDoctors(subcategory?: string, category?: string): Promise<DoctorListItem[]> {
  const categoryId = category ? Number(category) : (subcategory ? undefined : DOCTOR_APPOINTMENT_CATEGORY_ID);

  const params = new URLSearchParams({ page: '1' });
  if (categoryId) {
    params.set('subcategories__category', String(categoryId));
  }
  if (subcategory) {
    params.set('subcategories', subcategory);
  }

  const url = `${API_BASE_URL}/popular-service/doctors/?${params.toString()}`;

  try {
    const doctors = await fetchAllDoctors(url);
    const seen = new Set<number>();
    return doctors
      .map((doctor) => normalizeDoctor(doctor, categoryId, subcategory))
      .filter((doctor): doctor is DoctorListItem => {
        if (!doctor || seen.has(doctor.id)) return false;
        seen.add(doctor.id);
        return true;
      });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return [];
  }
}

export default async function DoctorPage({
  searchParams,
}: {
  searchParams: Promise<{ subcategory?: string; category?: string }>;
}) {
  const { subcategory, category } = await searchParams;
  const doctors = await getDoctors(subcategory, category);
  const isFiltered = Boolean(subcategory || category);
  const matchedSubcategoryName = subcategory && doctors.length > 0 ? doctors[0].subcategory_name : null;

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 pt-12">
      <DoctorList
        doctors={doctors}
        title={
          matchedSubcategoryName
            ? `${matchedSubcategoryName} Specialists`
            : isFiltered
            ? 'Filtered Specialists'
            : 'Doctor Appointments'
        }
        subtitle={
          isFiltered
            ? matchedSubcategoryName
              ? `Available ${matchedSubcategoryName.toLowerCase()} specialists for consultation`
              : 'Available specialists for your selected category'
            : 'Book an appointment with our verified medical specialists'
        }
      />
    </main>
  );
}
