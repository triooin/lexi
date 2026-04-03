import { NextResponse } from 'next/server';
import { getSectionsByActId } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const sections = getSectionsByActId(id);
  
  return NextResponse.json(sections);
}
