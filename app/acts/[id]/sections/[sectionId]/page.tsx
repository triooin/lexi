import { notFound } from 'next/navigation';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button-variants';
import { ChevronLeft, Info, AlertTriangle, Scale, BookOpen } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export default async function SectionPage({ params }: { params: Promise<{ id: string, sectionId: string }> }) {
  const { id, sectionId } = await params;
  
  const section = await prisma.section.findUnique({
    where: { id: sectionId },
    include: {
      act: true,
    }
  });
  
  if (!section || section.actId !== id) {
    notFound();
  }

  const act = section.act;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <Link href={`/acts/${act.id}`} className={cn(buttonVariants({ variant: "ghost" }), "mb-4 -ml-4 text-muted-foreground")}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to {act.title}
        </Link>
        
        <div className="space-y-2">
          <div className="text-sm font-medium text-primary">{act.title}</div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
            <span className="bg-muted text-foreground font-mono text-lg px-3 py-1 rounded-md border">
              Section {section.number}
            </span>
            {section.title}
          </h1>
        </div>
      </div>

      <Alert className="bg-muted/50 border-border text-foreground">
        <Info className="h-4 w-4 text-muted-foreground" />
        <AlertTitle className="text-foreground font-semibold">Source Transparency</AlertTitle>
        <AlertDescription className="text-sm mt-1">
          Source: Public domain legal text (Government of India – India Code).<br/>
          This is a structured and reformatted version for readability. Content may not reflect latest amendments.
          <div className="mt-2 text-xs text-muted-foreground">Last updated: {new Date(section.updatedAt).toLocaleDateString()}</div>
        </AlertDescription>
      </Alert>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card className="border-border shadow-sm">
            <CardHeader className="bg-muted/50 border-b pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                Statutory Text
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-foreground leading-relaxed whitespace-pre-wrap font-serif text-lg">
                  {section.content}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Metadata</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between py-1 border-b">
                <span className="text-muted-foreground">Act</span>
                <span className="font-medium text-right max-w-[150px] truncate" title={act.title}>{act.title}</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-muted-foreground">Year</span>
                <span className="font-medium">{act.year}</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-muted-foreground">Number</span>
                <span className="font-medium">{section.number}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-muted-foreground">Updated</span>
                <span className="font-medium">{new Date(section.updatedAt).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
