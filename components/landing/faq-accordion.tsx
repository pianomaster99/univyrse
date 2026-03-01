"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(null);

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <Card key={item.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between p-6 text-left"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <h3 className="font-medium">{item.question}</h3>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <CardContent className="pt-0">
                <p className="text-gray-700">{item.answer}</p>
              </CardContent>
            )}
          </Card>
        );
      })}
    </div>
  );
}
