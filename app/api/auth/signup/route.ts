import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, password, firstName, lastName, role } = await request.json();

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (!supabaseAdmin) {
      return NextResponse.json({ message: 'Supabase not configured' }, { status: 500 });
    }

    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (authError) {
      return NextResponse.json({ message: authError.message }, { status: 400 });
    }

    const { error: profileError } = await supabaseAdmin.from('profiles').insert({
      id: authData.user.id,
      email,
      full_name: `${firstName} ${lastName}`,
      role: role || 'customer',
    });

    if (profileError) {
      console.error('Profile creation error:', profileError);
      return NextResponse.json({ message: 'Failed to create profile' }, { status: 500 });
    }

    const { data: sessionData, error: sessionError } = await supabaseAdmin.auth.admin.createSession(
      authData.user.id
    );

    if (sessionError) {
      return NextResponse.json({ message: sessionError.message }, { status: 400 });
    }

    const response = NextResponse.json({ user: authData.user }, { status: 201 });
    response.cookies.set('auth_token', sessionData.session.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
