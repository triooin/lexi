'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search as SearchIcon, BookOpen, AlertCircle } from 'lucide-react';
import { LegalSection } from '@/lib/data';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<LegalSection[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground">Search Legal Text</h1>
        <p className="text-muted-foreground">
          Search through structured public-domain Indian legal sections.
        </p>
      </div>

      <Card className="border-border shadow-sm">
        <CardContent className="pt-6">
          <form onSubmit={handleSearch} className="flex gap-3">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search for keywords, section numbers, or topics..." 
                className="pl-10 h-12 text-base"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button type="submit" size="lg" disabled={isLoading || !query.trim()}>
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {hasSearched && (
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-foreground">
            {results.length} {results.length === 1 ? 'result' : 'results'} found for &quot;{query}&quot;
          </h2>
          
          {results.length === 0 ? (
            <div className="text-center py-12 bg-muted/50 rounded-lg border border-dashed border-border">
              <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground font-medium">No sections found matching your query.</p>
              <p className="text-sm text-muted-foreground mt-1">Try using different keywords or simpler terms.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {results.map((section) => (
                <Link key={section.id} href={`/acts/${section.actId}/sections/${section.id}`}>
                  <Card className="hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer">
                    <CardHeader className="py-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-muted text-foreground font-mono text-sm px-2 py-1 rounded shrink-0 mt-0.5">
                          {section.nodeType} {section.sectionNumber ? section.sectionNumber : ''}
                        </div>
                        <div className="space-y-1">
                          <CardTitle className="text-base font-medium leading-snug text-foreground">
                            {section.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {section.text}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
