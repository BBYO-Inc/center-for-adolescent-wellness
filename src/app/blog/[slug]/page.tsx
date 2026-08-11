import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { POSTS, getPost } from "../posts";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Center for Adolescent Wellness`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="px-6 py-16 sm:px-10 sm:py-20 md:px-[100px]">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#e42158] transition-colors hover:text-black"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M15 5l-7 7 7 7" />
            </svg>
            Back to Blog
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-base font-semibold text-[#e42158]">
            {post.author}
          </p>
          <time dateTime={post.date} className="mt-2 block text-base text-caw-gray">
            {post.dateLabel}
          </time>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-black">
            {post.body.map((block, i) => {
              if (block.type === "list") {
                return (
                  <ul key={i} className="list-disc space-y-3 pl-6">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "lead") {
                return (
                  <p key={i} className="font-semibold">
                    {block.text}
                  </p>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-12 border-t border-caw-gray-light pt-8 text-base italic leading-relaxed text-caw-gray">
            {post.authorBio}
          </p>
        </Reveal>

      </div>
    </article>
  );
}
