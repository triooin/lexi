import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  
  try {
    const act = await prisma.act.findUnique({
      where: { id },
    });
    
    if (!act) {
      return new NextResponse('Act not found', { status: 404 });
    }
    
    return NextResponse.json(act);
  } catch (error) {
    console.error(`Error fetching act ${id}:`, error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
