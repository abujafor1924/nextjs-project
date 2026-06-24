import { NextResponse } from 'next/server';
import { API_BASE_URL } from '@/lib/constants';

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/popular-service/categories/`, {
      headers: {
        'accept': 'application/json',
      },
      cache: 'no-store' // Disable caching for real-time updates
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy API error:', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}
