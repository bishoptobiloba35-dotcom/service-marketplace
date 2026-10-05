import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, category, budget, location, description } = body;

    if (!title || !category || !budget || !location || !description) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (!supabaseAdmin) {
      return NextResponse.json({ message: 'Supabase not configured' }, { status: 500 });
    }

    const { data: job, error } = await supabaseAdmin
      .from('jobs')
      .insert({
        customer_id: '00000000-0000-0000-0000-000000000000',
        title,
        category,
        budget: parseFloat(budget),
        location,
        description,
        status: 'open',
      })
      .select()
      .single();

    if (error) {
      console.error('Job creation error:', error);
      return NextResponse.json({ message: 'Failed to create job' }, { status: 500 });
    }

    return NextResponse.json({ job }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
