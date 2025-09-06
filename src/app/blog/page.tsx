import Link from "next/link";
import Image from "next/image";

// Static-import thumbs (bullet-proof paths)
import atsThumb from "@/../public/images/blog/ats-friendly-thumb.webp";
import mistakesThumb from "@/../public/images/blog/common-resume-mistakes-thumb.webp";
import templatesThumb from "@/../public/images/blog/resume-templates-guide-thumb.webp";

export default function BlogIndex() {
  const posts = [
    {
      slug: "how-to-make-ats-friendly-resume",
      title: "How to Make an ATS-Friendly Resume",
      summary:
        "Simple formatting, clear sections, and keyword alignment so your resume passes screening and reaches recruiters.",
      img: atsThumb,
      alt: "Top-down view of an ATS-friendly resume with green checkmarks",
    },
    {
      slug: "common-resume-mistakes",
      title: "Common Resume Mistakes (and How to Fix Them)",
      summary:
        "Avoid vague bullets, missing metrics, and formatting traps. Use these quick fixes to tighten your resume fast.",
      img: mistakesThumb,
      alt: "Printed resume with red pen and checklist of common mistakes",
    },
    {
      slug: "resume-templates-guide",
      title: "Best Resume Templates for 2025 (ATS-Friendly)",
      summary:
        "Pick a template style that fits your industry and stays ATS-compatible, with fonts and layout that scan cleanly.",
      img: templatesThumb,
      alt: "Neat grid of printed resume templates on a desk",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Career Tips & Resume Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          >
            <Link href={`/blog/${p.slug}`} className="block">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
            </Link>
            <div className="p-4">
              <h2 className="font-semibold text-lg">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p className="text-sm text-gray-600 mt-2">{p.summary}</p>
              <Link
                href={`/blog/${p.slug}`}
                className="inline-flex items-center gap-1 text-blue-600 text-sm mt-3"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
