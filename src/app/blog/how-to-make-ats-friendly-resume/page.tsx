import type { Metadata } from "next";
import Image from "next/image";
import hero from "@/../public/images/blog/ats-friendly-hero.webp";

export const metadata: Metadata = {
  title: "How to Make an ATS-Friendly Resume | ResumeGen",
  description:
    "A practical checklist to make your resume scan perfectly in ATS: layout, headings, fonts, keywords, file type, and more.",
  alternates: {
    canonical: "https://www.nexgenspark.com/blog/how-to-make-ats-friendly-resume",
  },
  openGraph: {
    title: "How to Make an ATS-Friendly Resume",
    description:
      "A practical checklist to make your resume scan perfectly in ATS.",
    url: "https://www.nexgenspark.com/blog/how-to-make-ats-friendly-resume",
    images: ["/images/blog/ats-friendly-thumb.webp"],
  },
};

export default function BlogPost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        How to Make an ATS-Friendly Resume
      </h1>

      <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
        <Image
          src={hero}
          alt="Laptop showing an ATS-friendly resume checklist"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="prose max-w-none">
        <p>
          Most companies use applicant tracking systems (ATS) to parse your
          resume and decide whether a human should read it. An ATS-friendly
          resume is simply <strong>easy for software to scan</strong>:
          predictable structure, standard fonts, and clean text (not graphics or
          tables).
        </p>

        <h2>Core formatting checklist</h2>
        <ul>
          <li>
            <strong>File type:</strong> PDF is safest for formatting; submit
            DOCX only if the employer requests it.
          </li>
          <li>
            <strong>Font &amp; size:</strong> Inter, Arial, Calibri, or Times
            New Roman at 10.5–12 pt; headings 13–16 pt.
          </li>
          <li>
            <strong>Layout:</strong> Single column, left-aligned text,
            consistent spacing.
          </li>
          <li>
            <strong>Headings:</strong> “Experience”, “Education”, “Skills”,
            “Projects”, “Certifications”.
          </li>
          <li>
            <strong>Don’t use:</strong> tables, text boxes, images of text,
            headers/footers with key info.
          </li>
        </ul>

        <h2>Keyword alignment</h2>
        <p>
          Mirror language from the job posting. Add the top{" "}
          <strong>5–8 keywords</strong> across your bullets and skills section
          where they’re truthful. Avoid keyword stuffing—clarity wins.
        </p>

        <h2>Bullet formula that passes humans & ATS</h2>
        <p>
          <strong>Action verb</strong> + <strong>what you did</strong> +{" "}
          <strong>how/tech</strong> + <strong>measurable result</strong>.
        </p>
        <pre>{`Optimized ETL pipelines using Python & SQL, cutting daily runtime 43%.`}</pre>

        <h2>Quick QA before you submit</h2>
        <ul>
          <li>1–2 pages (entry/mid: 1; senior: 2).</li>
          <li>File name: <code>FirstName-LastName-Resume.pdf</code>.</li>
          <li>
            Contact info is text (not in a header/footer) and includes a clean
            LinkedIn URL.
          </li>
        </ul>
      </section>
    </main>
  );
}
