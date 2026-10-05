import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { job_id, amount } = await request.json();

    if (!job_id || !amount) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (!supabaseAdmin) {
      return NextResponse.json({ message: 'Supabase not configured' }, { status: 500 });
    }

    const { data: escrow, error: escrowError } = await supabaseAdmin
      .from('escrow_payments')
      .insert({
        job_id,
        customer_id: '00000000-0000-0000-0000-000000000000',
        amount: parseFloat(amount),
        status: 'pending',
      })
      .select()
      .single();

    if (escrowError) {
      console.error('Escrow creation error:', escrowError);
      return NextResponse.json({ message: 'Failed to create escrow' }, { status: 500 });
    }

    return NextResponse.json({ escrow }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
