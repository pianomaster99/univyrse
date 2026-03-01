import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold">Univyrse</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">See example</Link>
            </Button>
            <Button variant="primary" asChild>
              <Link href="/signup">Start review</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
