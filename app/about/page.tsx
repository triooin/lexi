import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Scale, BookOpen, AlertTriangle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">About Lexi</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern, structured interface for accessing public-domain Indian legal information.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Legal texts are often difficult to read, poorly formatted, and hard to navigate. Lexi aims to solve this by providing a clean, structured, and modern interface for reading public-domain Indian laws (Bare Acts).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe that access to the law should be straightforward, which is why we add non-authoritative, plain-English explanations to help students, researchers, and citizens understand the basic premise of legal sections.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            Strict Compliance
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Lexi is built from the ground up to be legally safe and compliant. We strictly adhere to the following principles:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
              <span>We only use public domain legal texts (e.g., from India Code).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
              <span>All summaries and explanations are originally written by us.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 dark:text-red-400 font-bold">✗</span>
              <span>We DO NOT scrape Indian Kanoon, eCourts, or private databases.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 dark:text-red-400 font-bold">✗</span>
              <span>We DO NOT copy proprietary headnotes or formatting.</span>
            </li>
          </ul>
        </div>
      </div>

      <Card className="bg-amber-500/10 border-amber-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
            <AlertTriangle className="h-5 w-5" />
            Important Legal Disclaimer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-amber-700 dark:text-amber-300">
          <p>
            This platform provides structured access to Indian legal information for educational and informational purposes only.
          </p>
          <p>
            The content presented (including Acts, Sections, and related materials) is based on publicly available legal texts, including resources from the Government of India such as India Code (<a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-600 dark:hover:text-amber-400">https://www.indiacode.nic.in</a>).
          </p>
          <p>
            This website is not an official government source and does not claim ownership of any statutory text. For authoritative and legally binding versions, users must refer to official government publications.
          </p>
          <p className="font-medium">
            No proprietary legal databases (including Indian Kanoon or similar platforms) are copied or reproduced.
          </p>
          <p className="font-bold">
            This platform does not provide legal advice.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
