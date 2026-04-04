import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const acts = await prisma.act.findMany({
      orderBy: {
        title: 'asc',
      },
    });
    return NextResponse.json(acts);
  } catch (error) {
    console.error('Error fetching acts:', error);
    return NextResponse.json({ error: 'Failed to fetch acts' }, { status: 500 });
  }
}
