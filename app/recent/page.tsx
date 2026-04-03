import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { History, Clock } from "lucide-react"

export default function RecentUpdatesPage() {
  return (
    <div className="flex-1 space-y-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Recent Updates</h2>
      </div>
      <p className="text-muted-foreground">
        Stay informed about the latest amendments, new acts, and changes to the legal repository.
      </p>

      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i} className="border-border shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <History className="h-5 w-5 text-primary" />
                  Update to Bharatiya Nyaya Sanhita, 2023
                </CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{i} day{i > 1 ? 's' : ''} ago</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-foreground">
                Section {100 + i} has been updated with new explanatory notes and cross-references to corresponding sections in the repealed IPC.
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
