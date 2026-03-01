/** Shared Brown supplemental essay for hero and "What you get back" demo */

export const BROWN_ESSAY = {
  prompt:
    'If you could teach a class on any one thing, whether academic or otherwise, what would it be? (100 words)*',
  body: `"The Art of Algorithms: Exploring the Intersection of Math, Philosophy, and Emotion" by "Professor Chen." Can algorithms compose symphonies or paint skies like Van Gogh? This course invites students to explore where mathematics meets creativity. Daily debates will delve into Gödel's incompleteness theorem, AI's interpretation of art, and questions that blur the boundaries between logic and emotion: Can machines ever "feel" beauty? By blending abstract equations with philosophical paradoxes, we will examine how algorithms shape, mimic, and challenge human expression. The goal is to inspire everyone to rethink creativity and innovation in a world increasingly shaped by code.`,
};

/** Substrings to highlight in the demo essay (AI-highlighted issues) */
export const DEMO_HIGHLIGHTS = [
  "Can algorithms compose symphonies or paint skies like Van Gogh?",
  "By blending abstract equations with philosophical paradoxes",
  "in a world increasingly shaped by code",
];

export const DEMO_SCORE = 88;

export const DEMO_TOP_PRIORITIES = [
  "Strengthen the opening hook",
  "Tighten the middle paragraph",
  "Add one concrete example",
];

export const DEMO_INLINE_COMMENTS = [
  { tag: "Hook", text: "Consider a stronger opening line here to hook the reader." },
  { tag: "Flow", text: "Try trimming a sentence or two so the flow feels snappier." },
  { tag: "Insight", text: "Add one concrete example to ground the philosophical ideas." },
];
