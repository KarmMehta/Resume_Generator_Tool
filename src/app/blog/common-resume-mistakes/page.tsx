import type { Metadata } from "next";
import Image from "next/image";
import hero from "@/../public/images/blog/common-resume-mistakes-hero.webp";

export const metadata: Metadata = {
  title: "Common Resume Mistakes (and How to Fix Them) | ResumeGen",
  description:
    "The quickest fixes for the most common resume errors—vague bullets, missing metrics, clutter, inconsistent formatting, and more.",
  alternates: {
    canonical: "https://www.nexgenspark.com/blog/common-resume-mistakes",
  },
  openGraph: {
    title: "Common Resume Mistakes (and How to Fix Them)",
    description:
      "The quickest fixes for the most common resume errors.",
    url: "https://www.nexgenspark.com/blog/common-resume-mistakes",
    images: ["/images/blog/common-resume-mistakes-thumb.webp"],
  },
};

export default function BlogPost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Common Resume Mistakes (and How to Fix Them)
      </h1>

      <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
        <Image
          src={hero}
          alt="Resume on desk with sticky notes highlighting mistakes"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="prose max-w-none">
        <p>
          Great experience can still get filtered out by small mistakes. Use
          this list to tighten yours quickly.
        </p>

        <h2>Top mistakes & quick fixes</h2>
        <ol>
          <li>
            <strong>One generic resume for all jobs.</strong> Tailor the summary
            and top bullets to each posting.
            <br />
            <em>Fix:</em> Keep a master resume; customize{" "}
            <strong>5–8 keywords</strong> and impact bullets per role.
          </li>
          <li>
            <strong>Vague bullets.</strong> Prefer specifics: “Increased
            qualified leads by 32%.”
            <br />
            <em>Fix:</em> Action + what + tech/method +{" "}
            <strong>metric</strong>.
          </li>
          <li>
            <strong>No numbers.</strong> Add %, $, #, and time saved to show
            impact.
          </li>
          <li>
            <strong>Visual clutter.</strong> Avoid tables/text boxes that
            confuse ATS.
          </li>
          <li>
            <strong>Typos & inconsistent formatting.</strong> Keep dates,
            dashes, headings consistent.
          </li>
        </ol>

        <h2>Quick formatting tune-ups</h2>
        <ul>
          <li>1 page (entry/mid) or 2 pages (senior).</li>
          <li>Standard fonts: Inter, Arial, Calibri, Times New Roman.</li>
          <li>Clear section headings; single column; generous line height.</li>
          <li>Export to PDF for final submits.</li>
        </ul>

        <p>
          A results-focused, error-free resume gets faster callbacks. Tighten
          wording, quantify outcomes, and keep the layout easy to scan.
        </p>
      </section>
    </main>
  );
}
