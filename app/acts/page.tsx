import Link from 'next/link';
import prisma from '@/lib/prisma';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Calendar, Clock, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const dynamic = 'force-dynamic';

export default async function ActsPage() {
  const acts = await prisma.act.findMany({
    orderBy: {
      title: 'asc',
    },
  });

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">All Acts & Laws</h2>
      </div>
      <p className="text-muted-foreground">
        Browse the complete repository of available public-domain legal acts.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-4">
        {acts.map((act) => (
          <Link key={act.id} href={`/acts/${act.id}`}>
            <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer bg-card flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-lg text-primary group-hover:text-primary/80 flex items-start gap-2 leading-tight">
                      <Book className="h-5 w-5 shrink-0 mt-0.5" />
                      {act.title}
                    </CardTitle>
                    <Badge variant="secondary" className="mt-2 font-normal text-xs bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                      {act.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <CardDescription className="text-sm mb-4 line-clamp-3">
                  {act.description}
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{act.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>Updated: {new Date(act.updatedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
