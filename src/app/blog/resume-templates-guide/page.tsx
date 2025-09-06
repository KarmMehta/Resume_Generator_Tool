import type { Metadata } from "next";
import Image from "next/image";
import hero from "@/../public/images/blog/resume-templates-guide-hero.png";

export const metadata: Metadata = {
  title: "Best Resume Templates for 2025 (ATS-Friendly) | ResumeGen",
  description:
    "Choose a resume template style that fits your industry and stays ATS-compatible. Fonts, layout, and file tips included.",
  alternates: {
    canonical: "https://www.nexgenspark.com/blog/resume-templates-guide",
  },
  openGraph: {
    title: "Best Resume Templates for 2025 (ATS-Friendly)",
    description:
      "Template styles that read cleanly in ATS—plus formatting tips.",
    url: "https://www.nexgenspark.com/blog/resume-templates-guide",
    images: ["/images/blog/resume-templates-guide-thumb.webp"],
  },
};

export default function BlogPost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Best Resume Templates for 2025 (ATS-Friendly)
      </h1>

      <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
        <Image
          src={hero}
          alt="Two clean resume templates with a subtle accent color"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="prose max-w-none">
        <p>
          The right template improves readability and lets your achievements
          stand out—without confusing ATS parsers. Pick a style that matches
          your field and keep formatting simple.
        </p>

        <h2>Template styles that work</h2>
        <ul>
          <li>
            <strong>Classic Professional (single column):</strong> Clear
            headings, strong typographic hierarchy. Great for finance,
            operations, admin, consulting, IT.
          </li>
          <li>
            <strong>Modern (subtle accent):</strong> Light color for headers or
            icons; maintain clean structure. Good for product/marketing/design.
          </li>
          <li>
            <strong>ATS-first minimal:</strong> No tables or text boxes; standard
            fonts; simple structure.
          </li>
        </ul>

        <h2>Formatting tips</h2>
        <ul>
          <li>Use Inter, Arial, Calibri, or Times New Roman.</li>
          <li>Headings 13–16 pt; body 10.5–12 pt; generous line spacing.</li>
          <li>Use consistent date format and bullet styling.</li>
          <li>Export to PDF for email; keep DOCX only if explicitly requested.</li>
          <li>
            File name: <code>FirstName-LastName-Resume.pdf</code>.
          </li>
        </ul>

        <p>
          Design attracts attention—<em>results</em> land interviews. Whichever
          template you choose, lead with impact and quantify outcomes.
        </p>
      </section>
    </main>
  );
}
