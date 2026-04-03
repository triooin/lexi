import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tags } from 'lucide-react';
import { LegalDocumentType, LegalNodeType } from '@/lib/data';

const documentTypes: LegalDocumentType[] = [
  "Act / Statute", "Code", "Bill", "Ordinance", "Resolution", 
  "Delegated Legislation", "Case Law / Judgment", "Precedent"
];

const nodeTypes: LegalNodeType[] = [
  "Preamble", "Title", "Part", "Chapter", "Section", "Subsection", 
  "Clause", "Sub-clause", "Proviso", "Explanation", "Illustration", 
  "Article (Constitution)", "Rule", "Sub-rule", "Regulation", "Bye-law", 
  "Order", "Notification", "Circular", "Guideline", "Scheme", 
  "Schedule", "Annexure", "Appendix", "Form", "Offence / Offense", 
  "Punishment", "Penalty", "Fine", "Imprisonment", "Liability", 
  "Compensation", "Damages", "Amendment", "Amendment Act", "Repeal", 
  "Savings", "Definitions / Definition Clause", "Entry (Lists: Union / State / Concurrent)", 
  "Heading", "Marginal Note"
];

export default function TypesPage() {
  return (
    <div className="flex-1 space-y-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Browse by Type</h2>
      </div>
      <p className="text-muted-foreground">
        Explore the different types of legal documents and structural nodes available in the repository.
      </p>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Tags className="h-6 w-6 text-primary" />
            Document Types
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {documentTypes.map((type) => (
              <Card key={type} className="hover:border-primary/50 hover:shadow-md transition-all cursor-pointer bg-card">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-foreground flex items-center justify-between">
                    {type}
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Doc</Badge>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 mt-8">
            <Tags className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            Structural Node Types
          </h3>
          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {nodeTypes.map((type) => (
              <Card key={type} className="hover:border-emerald-500/50 hover:shadow-md transition-all cursor-pointer bg-card">
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium text-foreground flex flex-col gap-2">
                    <span className="truncate" title={type}>{type}</span>
                    <Badge variant="outline" className="w-fit text-[10px] border-emerald-500/20 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">Node</Badge>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
