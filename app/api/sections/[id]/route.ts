import { NextResponse } from 'next/server';
import { getSectionById } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const section = getSectionById(id);
  
  if (!section) {
    return new NextResponse('Section not found', { status: 404 });
  }
  
  return NextResponse.json(section);
}
