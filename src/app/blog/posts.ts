export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  hero: string;
  thumb: string;
  altHero: string;
  altThumb: string;
  keywords: string[];
  canonical: string;
};

export const posts: BlogPost[] = [
  {
    slug: "how-to-make-ats-friendly-resume",
    title: "How to Make an ATS-Friendly Resume",
    excerpt:
      "Simple formatting, clear sections, and keyword alignment so your resume passes screening and reaches recruiters.",
    date: "2025-09-06",
    hero: "/images/blog/ats-friendly-hero.webp",
    thumb: "/images/blog/ats-friendly-thumb.webp",
    altHero: "Laptop on a clean desk showing an ATS-friendly resume checklist on screen.",
    altThumb: "Close-up of a resume page with green checkmarks for ATS-friendly elements.",
    keywords: ["ATS resume", "resume formatting", "resume tips", "job search"],
    canonical: "https://www.nexgenspark.com/blog/how-to-make-ats-friendly-resume",
  },
  {
    slug: "common-resume-mistakes",
    title: "Common Resume Mistakes (and How to Fix Them)",
    excerpt:
      "Avoid vague bullets, missing metrics, and formatting traps. Use quick fixes to tighten your resume fast.",
    date: "2025-09-06",
    hero: "/images/blog/common-resume-mistakes-hero.webp",
    thumb: "/images/blog/common-resume-mistakes-thumb.webp",
    altHero: "Printed resume with sticky notes and red markup highlighting common mistakes.",
    altThumb: "Red pen hovering over a checklist of resume errors and fixes.",
    keywords: ["resume mistakes", "resume errors", "resume tips", "job search"],
    canonical: "https://www.nexgenspark.com/blog/common-resume-mistakes",
  },
  {
    slug: "resume-templates-guide",
    title: "Best Resume Templates for 2025 (ATS-Friendly)",
    excerpt:
      "Pick a template style that fits your industry and stays ATS-compatible, with fonts and layout that scan cleanly.",
    date: "2025-09-06",
    hero: "/images/blog/resume-templates-guide-hero.png",
    thumb: "/images/blog/resume-templates-guide-thumb.webp",
    altHero: "Two modern resume template pages with a blue header, laid flat on a desk.",
    altThumb: "Two printed resume templates styled with clean headings and icon accents.",
    keywords: ["resume templates", "ATS templates", "resume design", "2025"],
    canonical: "https://www.nexgenspark.com/blog/resume-templates-guide",
  },
];