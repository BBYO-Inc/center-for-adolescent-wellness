import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { POSTS } from "./posts";

export const metadata = {
  title: "Blog | Center for Adolescent Wellness",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        image="/images/blog/hero.jpg"
      />
      <section className="-mt-[50px] px-6 py-20 text-left sm:px-10 md:px-[100px]">
        <Reveal>
          <h2 className="px-4 text-4xl font-bold text-[#e42158] sm:text-5xl">
            From the Center
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 px-4 text-lg leading-relaxed text-black">
            Writing from the BBYO Center for Adolescent Wellness team on youth
            safety, mental health, and building organizations where adolescents
            thrive.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6 px-4">
          {POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={200 + i * 100} className="group relative">
              {/* Yellow glow behind the card, matching the homepage quick links */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -right-16 z-0 h-64 w-64 rounded-full bg-[#f8f90a] opacity-0 blur-[56px] transition-opacity duration-300 group-hover:opacity-100"
              />
              <Link
                href={`/blog/${post.slug}`}
                // rounded-[2rem] rather than the home cards' rounded-2xl: this tile is
                // ~3x wider, so it needs a bigger radius to read as equally rounded.
                className="relative z-10 block transform-gpu rounded-[2rem] border border-caw-gray-light bg-white p-6 shadow-[0_30px_60px_-12px_rgba(13,22,58,0.35)] transition-transform duration-300 ease-out will-change-transform [backface-visibility:hidden] hover:-translate-y-1 sm:p-8"
              >
                <h3 className="text-2xl font-bold leading-snug text-black sm:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-[#e42158]">
                  {post.author}
                </p>
                <time
                  dateTime={post.date}
                  className="mt-1 block text-sm text-caw-gray"
                >
                  {post.dateLabel}
                </time>
                <p className="mt-4 text-base leading-relaxed text-black">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-[#e42158]">
                  Read the post
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
