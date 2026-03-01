import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    emoji: "👩‍🎓",
    quote:
      "The feedback on my opening paragraph was so specific I knew exactly what to change. No generic advice.",
    label: "High school senior, California",
  },
  {
    emoji: "🧑‍🎓",
    quote:
      "Finally something that does not rewrite my essay for me. I kept my voice and just made it stronger.",
    label: "International applicant",
  },
  {
    emoji: "👩‍💼",
    quote:
      "I used it for my UC PIQs. The rubric scores helped me see which essay needed the most work before submitting.",
    label: "College applicant",
  },
  {
    emoji: "🙂",
    quote:
      "Got my review in under two minutes. The inline comments pointed to the exact sentences to improve.",
    label: "Student user",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          What students say about Univyrse
        </h2>
        <p className="text-lg text-gray-600">
          Real feedback from applicants who used our essay review
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t) => (
          <Card key={t.label} className="h-full border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-3xl">
                {t.emoji}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-800">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-xs font-medium text-gray-700">{t.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
