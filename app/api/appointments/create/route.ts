import { NextResponse } from 'next/server';
import { API_BASE_URL } from '@/lib/constants';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const authHeader = request.headers.get('Authorization');
    
    // Validate required fields
    if (!body.patient_name || !body.patient_phone || !body.appointment_date || !body.doctor_id) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const response = await fetch(`${API_BASE_URL}/auth/appointments/create/`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        ...(authHeader ? { 'Authorization': authHeader } : {}),
      },
      body: JSON.stringify({
        patient_name: body.patient_name,
        patient_phone: body.patient_phone,
        appointment_date: body.appointment_date,
        appointment_time: body.appointment_time || "09:00:00", 
        doctor_id: parseInt(body.doctor_id)
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('External API Error:', data);
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy Appointment Create error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
