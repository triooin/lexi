import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  
  try {
    const sections = await prisma.section.findMany({
      where: { actId: id },
      orderBy: {
        number: 'asc', // Or whatever field makes sense
      },
    });
    
    return NextResponse.json(sections);
  } catch (error) {
    console.error(`Error fetching sections for act ${id}:`, error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
