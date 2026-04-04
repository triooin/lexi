import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  
  if (!query) {
    return NextResponse.json([]);
  }
  
  try {
    const results = await prisma.section.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { content: { contains: query, mode: 'insensitive' } },
          { number: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: {
        act: true,
      },
      take: 50, // Limit results
    });
    
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error searching sections:', error);
    return NextResponse.json({ error: 'Failed to search' }, { status: 500 });
  }
}
