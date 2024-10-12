import { NextResponse } from 'next/server';
import { supabase } from '@/supabaseClient';

export async function POST(request) {
  try {
    const A = 123;
    const B = 456;
    const C = 789;
    const D = 12;

    const { data, error } = await supabase
      .from('dahsboard')
      .insert([{ A, B, C, D }]);

    console.log('Data:', data);
    console.log('Supabase error:', error ? error.message : 'No error message');
    console.log('Supabase error code:', error ? error.code : 'No error code');

    if (error) {
      return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.error('Error in POST request:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


export async function GET() {
  try {
    const { data, error } = await supabase
      .from('dahsboard')
      .select('*'); // Select all columns from the 'dashboard' table

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.error('Error in GET request:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}