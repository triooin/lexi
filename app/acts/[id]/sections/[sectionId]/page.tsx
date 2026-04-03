import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getActById, getSectionById } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button-variants';
import { ChevronLeft, Info, AlertTriangle, Scale, BookOpen } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default async function SectionPage({ params }: { params: Promise<{ id: string, sectionId: string }> }) {
  const { id, sectionId } = await params;
  
  const act = getActById(id);
  const section = getSectionById(sectionId);
  
  if (!act || !section || section.actId !== act.id) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <Link href={`/acts/${act.id}`} className={cn(buttonVariants({ variant: "ghost" }), "mb-4 -ml-4 text-muted-foreground")}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to {act.title}
        </Link>
        
        <div className="space-y-2">
          <div className="text-sm font-medium text-primary">{act.title}</div>
          {section.chapter && <div className="text-sm text-muted-foreground">{section.chapter}</div>}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
            <span className="bg-muted text-foreground font-mono text-lg px-3 py-1 rounded-md border">
              {section.nodeType} {section.sectionNumber ? section.sectionNumber : ''}
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
          <div className="mt-2 text-xs text-muted-foreground">Last updated: {section.lastUpdated}</div>
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
                  {section.text}
                </p>
              </div>
            </CardContent>
          </Card>

          {section.explanation && (
            <Card className="border-emerald-500/20 shadow-sm bg-emerald-500/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <Scale className="h-5 w-5" />
                  Simplified Explanation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-700 dark:text-emerald-300 leading-relaxed">
                  {section.explanation}
                </p>
                <div className="mt-4 pt-4 border-t border-emerald-500/20 flex items-start gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                  <AlertTriangle className="h-4 w-4 shrink-0" />
                  <p>
                    <strong>Disclaimer:</strong> This explanation is non-authoritative and provided for educational purposes only. It does not constitute legal advice.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          {(section.punishment || section.fines) && (
            <Card className="border-red-500/20 shadow-sm bg-red-500/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-red-600 dark:text-red-400">Penalties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.punishment && (
                  <div>
                    <div className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">Punishment</div>
                    <div className="text-sm text-red-700 dark:text-red-300 font-medium">{section.punishment}</div>
                  </div>
                )}
                {section.punishment && section.fines && <Separator className="bg-red-500/20" />}
                {section.fines && (
                  <div>
                    <div className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">Fines</div>
                    <div className="text-sm text-red-700 dark:text-red-300 font-medium">{section.fines}</div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

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
                <span className="text-muted-foreground">Type</span>
                <span className="font-medium">{section.nodeType}</span>
              </div>
              {section.sectionNumber && (
                <div className="flex justify-between py-1 border-b">
                  <span className="text-muted-foreground">Number</span>
                  <span className="font-medium">{section.sectionNumber}</span>
                </div>
              )}
              <div className="flex justify-between py-1">
                <span className="text-muted-foreground">Updated</span>
                <span className="font-medium">{section.lastUpdated}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
