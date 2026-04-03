import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bookmark, BookOpen } from "lucide-react"
import Link from "next/link"

export default function BookmarksPage() {
  return (
    <div className="flex-1 space-y-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Bookmarks</h2>
      </div>
      <p className="text-muted-foreground">
        Your saved acts, sections, and legal documents for quick access.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-4">
        {[1, 2, 3].map((i) => (
          <Link key={i} href={`/acts/bns-2023`}>
            <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer bg-card flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-lg text-primary group-hover:text-primary/80 flex items-start gap-2 leading-tight">
                      <Bookmark className="h-5 w-5 shrink-0 mt-0.5 fill-primary text-primary" />
                      Bharatiya Nyaya Sanhita, 2023
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <CardDescription className="text-sm mb-4 line-clamp-3">
                  The Bharatiya Nyaya Sanhita (BNS) is the criminal code of India, replacing the Indian Penal Code (IPC).
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>Act</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
