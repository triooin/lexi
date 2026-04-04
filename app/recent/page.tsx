import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { History, Clock } from "lucide-react"
import prisma from "@/lib/prisma"
import Link from "next/link"

export const dynamic = 'force-dynamic';

export default async function RecentUpdatesPage() {
  const recentActs = await prisma.act.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    take: 10,
  });

  return (
    <div className="flex-1 space-y-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Recent Updates</h2>
      </div>
      <p className="text-muted-foreground">
        Stay informed about the latest amendments, new acts, and changes to the legal repository.
      </p>

      <div className="space-y-4">
        {recentActs.map((act) => (
          <Link key={act.id} href={`/acts/${act.id}`} className="block">
            <Card className="border-border shadow-sm hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <History className="h-5 w-5 text-primary" />
                    {act.title}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{new Date(act.updatedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground line-clamp-2">
                  {act.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
