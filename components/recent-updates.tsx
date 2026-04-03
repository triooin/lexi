import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import prisma from "@/lib/prisma"

export async function RecentUpdates() {
  // Get the 5 most recently updated acts
  const recentActs = await prisma.act.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    take: 5,
  });

  return (
    <div className="space-y-8">
      {recentActs.map((act) => (
        <div key={act.id} className="flex items-center">
          <Avatar className="h-9 w-9 bg-primary/10 text-primary">
            <AvatarFallback className="bg-primary/10 font-semibold">{act.title.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{act.title}</p>
            <p className="text-sm text-muted-foreground">
              Updated {new Date(act.updatedAt).toLocaleDateString()}
            </p>
          </div>
          <div className="ml-auto font-medium text-sm text-muted-foreground">
            {act.year}
          </div>
        </div>
      ))}
    </div>
  )
}
