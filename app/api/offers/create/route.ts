import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { job_id, provider_id, amount, message } = await request.json();

    if (!job_id || !provider_id || !amount) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (!supabaseAdmin) {
      return NextResponse.json({ message: 'Supabase not configured' }, { status: 500 });
    }

    const { data: offer, error } = await supabaseAdmin
      .from('offers')
      .insert({
        job_id,
        provider_id,
        customer_id: '00000000-0000-0000-0000-000000000000',
        amount: parseFloat(amount),
        message,
        status: 'pending',
      })
      .select()
      .single();

    if (error) {
      console.error('Offer creation error:', error);
      return NextResponse.json({ message: 'Failed to create offer' }, { status: 500 });
    }

    return NextResponse.json({ offer }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
