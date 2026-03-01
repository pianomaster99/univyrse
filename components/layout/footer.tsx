import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-[#000]">Univyrse</span>
            </div>
            <p className="text-sm text-[#000] opacity-90">
              AI-powered college essay review platform
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-[#000]">Product</h4>
            <ul className="space-y-2 text-sm text-[#000] opacity-90">
              <li>
                <Link href="/signup" className="transition-opacity hover:opacity-70">
                  Start Review
                </Link>
              </li>
              <li>
                <Link href="/login" className="transition-opacity hover:opacity-70">
                  See Example
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-[#000]">Legal</h4>
            <ul className="space-y-2 text-sm text-[#000] opacity-90">
              <li>
                <Link href="/privacy" className="transition-opacity hover:opacity-70">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-opacity hover:opacity-70">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-[#000]">Support</h4>
            <ul className="space-y-2 text-sm text-[#000] opacity-90">
              <li>
                <Link href="/help" className="transition-opacity hover:opacity-70">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-opacity hover:opacity-70">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-black/10 pt-8 text-center text-sm text-[#000] opacity-80">
          <p>© 2026 Univyrse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
