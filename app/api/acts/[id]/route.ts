import { NextResponse } from 'next/server';
import { getActById } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const act = getActById(id);
  
  if (!act) {
    return new NextResponse('Act not found', { status: 404 });
  }
  
  return NextResponse.json(act);
}
