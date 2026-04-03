import { NextResponse } from 'next/server';
import { acts } from '@/lib/data';

export async function GET() {
  return NextResponse.json(acts);
}
