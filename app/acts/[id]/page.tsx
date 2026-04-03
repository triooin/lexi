import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getActById, getSectionsByActId } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button-variants';
import { ChevronLeft, FileText, Info, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

export default async function ActPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const act = getActById(id);
  
  if (!act) {
    notFound();
  }

  const sections = getSectionsByActId(id);
  
  // Group sections by chapter
  const chapters = sections.reduce((acc, section) => {
    const chapterName = section.chapter || "General";
    if (!acc[chapterName]) {
      acc[chapterName] = [];
    }
    acc[chapterName].push(section);
    return acc;
  }, {} as Record<string, typeof sections>);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <Link href="/acts" className={cn(buttonVariants({ variant: "ghost" }), "mb-4 -ml-4 text-muted-foreground")}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Acts
        </Link>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-sm bg-muted">{act.type}</Badge>
            <Badge variant="outline" className="text-sm">Year {act.year}</Badge>
            <span className="text-sm text-muted-foreground">Last updated: {act.lastUpdated}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{act.title}</h1>
          <p className="text-lg text-muted-foreground">{act.description}</p>
        </div>
      </div>

      <Alert className="bg-primary/10 border-primary/20 text-primary">
        <Info className="h-4 w-4 text-primary" />
        <AlertTitle>Source Information</AlertTitle>
        <AlertDescription className="text-sm mt-1">
          Source: Public domain legal text (Government of India – India Code).<br/>
          This is a structured and reformatted version for readability. Content may not reflect latest amendments.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        {Object.entries(chapters).map(([chapterName, chapterSections]) => (
          <div key={chapterName} className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground border-b pb-2">{chapterName}</h2>
            <div className="grid gap-3">
              {chapterSections.map((section) => (
                <Link key={section.id} href={`/acts/${act.id}/sections/${section.id}`}>
                  <Card className="hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer">
                    <CardHeader className="py-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-muted text-foreground font-mono text-sm px-2 py-1 rounded shrink-0 mt-0.5">
                          {section.nodeType} {section.sectionNumber ? section.sectionNumber : ''}
                        </div>
                        <CardTitle className="text-base font-medium leading-snug text-foreground">
                          {section.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
