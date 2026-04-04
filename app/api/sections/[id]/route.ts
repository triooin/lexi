import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  
  try {
    const section = await prisma.section.findUnique({
      where: { id },
      include: {
        act: true,
      }
    });
    
    if (!section) {
      return new NextResponse('Section not found', { status: 404 });
    }
    
    return NextResponse.json(section);
  } catch (error) {
    console.error(`Error fetching section ${id}:`, error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
