import { NextResponse } from 'next/server';
import { searchSections } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  
  if (!query) {
    return NextResponse.json([]);
  }
  
  const results = searchSections(query);
  return NextResponse.json(results);
}
