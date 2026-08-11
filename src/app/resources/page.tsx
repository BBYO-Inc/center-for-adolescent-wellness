import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Resources | Center for Adolescent Wellness",
};

type ResourceType = "video" | "article" | "event";

const RESOURCES: { name: string; description: string; href: string; type: ResourceType }[] = [
  {
    name: "An Introduction to The BBYO Center for Adolescent Wellness",
    description:
      "Youth-serving organizations (YSOs) impact the lives of young people in a profound way, and as such, need to be safe spaces for them.",
    href: "https://youtu.be/X4Sbfi5M0jM",
    type: "video",
  },
  {
    name: "Penn Hillel to Launch Inaugural Peer Mental Health Partnership With BBYO",
    description:
      "Partnership developing curriculum for student leaders on supporting peers with mental health challenges.",
    href: "https://www.jewishexponent.com/2022/11/16/penn-hillel-to-launch-inaugural-peer-mental-health-partnership-with-bbyo/",
    type: "article",
  },
  {
    name: "Community is an Intervention: Promoting Youth and Adult Wellbeing",
    description:
      "JFNA panel examining systemic causes of mental health challenges and community-driven responses and evidence-based practices.",
    href: "https://www.youtube.com/watch?v=E2d5-92bbKw&list=PLCdO7ehuPllY7k-nqqBJYtJ0tX6ZpU6km&index=15",
    type: "video",
  },
  {
    name: "Strengthening Our Structures: World Mental Health Day and Sukkot",
    description:
      "Examines the sukkah as an analogy for mental health, exploring impermanence and resilience.",
    href: "https://ejewishphilanthropy.com/strengthening-our-open-structures-world-mental-health-day-and-sukkot/",
    type: "article",
  },
  {
    name: "End of Summer Jewish Mental Health Summit",
    description:
      "Brought together camp directors and mental health staff representing over 70 programs for reflection and planning.",
    href: "https://ejewishphilanthropy.com/end-of-summer-youth-mental-health-summit-insights-and-opportunities/",
    type: "article",
  },
  {
    name: "Drew Fidler Honored by Jewish Federation of Greater Washington",
    description:
      "Recognition of the BBYO-CAW Director among Capital Chai Award honorees for leadership impact.",
    href: "https://www.shalomdc.org/meet-federations-capital-chai-honorees/",
    type: "event",
  },
  {
    name: "Utilizing Teen Mental Health First Aid Training to Develop Peer Advocates",
    description:
      "Discusses survey findings on peers' important role in youth-serving organizations addressing mental health needs.",
    href: "https://ejewishphilanthropy.com/where-do-teens-turn-for-support-and-what-does-it-mean-for-those-who-want-to-help-them/",
    type: "article",
  },
  {
    name: "Good Deeds Day",
    description:
      "Live Q&A on navigating COVID-19 pandemic challenges while remaining engaged in volunteer work.",
    href: "https://www.facebook.com/GoodDeedsDayInternational/videos/299534018088551/",
    type: "video",
  },
  {
    name: "Overcoming Mental Health Challenges: Break the Stigma",
    description:
      "Stories of overcoming anxiety, depression, and other challenges young people face, and exploring community support.",
    href: "https://www.youtube.com/watch?v=H8-6lzKUo6E",
    type: "video",
  },
];

function ResourceIcon({ type }: { type: ResourceType }) {
  if (type === "video") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M10.5 9l4.5 3-4.5 3V9z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (type === "event") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <rect x="3.5" y="5" width="17" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3.5 10h17" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
      <path d="M6 3h9l4 4v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </svg>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        image="/images/resources/hero.png"
      />
      <section className="-mt-[50px] px-6 py-20 text-left sm:px-10 md:px-[100px]">
        <Reveal>
          <h2 className="px-4 text-4xl font-bold text-[#e42158] sm:text-5xl">
            Articles &amp; Media
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 px-4 text-lg leading-relaxed text-black">
            Members of the BBYO Center for Adolescent Wellness staff regularly
            write, speak, and train organizations on how they can ensure youth
            mental, emotional, and social health and wellness.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 px-4 text-lg leading-relaxed text-black">
            Below are links to our authored articles and recordings of speaking
            engagements and training.
          </p>
        </Reveal>
      </section>

      <section className="-mt-10 px-6 pb-24 sm:px-10 md:px-[100px]">
        <Reveal>
          {/* Card list below md — the table's columns get too cramped to be usable on phones/small tablets */}
          <div className="space-y-3 md:hidden">
            {RESOURCES.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                // Tailwind wraps `hover:` in @media (hover: hover), which never
                // matches on touch devices — `active:` is what actually fires on tap.
                className="flex items-start gap-4 rounded-2xl bg-caw-gray-light px-5 py-4 transition-colors hover:bg-[#fbdbe4] active:bg-[#fbdbe4]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e42158] text-white">
                  <ResourceIcon type={resource.type} />
                </span>
                <span>
                  <span className="block font-semibold text-black">{resource.name}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-caw-gray">
                    {resource.description}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[640px] border-separate border-spacing-y-2 text-left">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold tracking-normal text-[#e42158]">
                    Name
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold tracking-normal text-[#e42158]">
                    Description
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold tracking-normal text-[#e42158]">
                    Explore
                  </th>
                </tr>
              </thead>
              <tbody>
                {RESOURCES.map((resource, i) => {
                  const rowBg = i % 2 === 0 ? "bg-caw-gray-light" : "bg-white";
                  return (
                    <tr key={resource.href}>
                      <td
                        className={`${rowBg} rounded-l-2xl px-6 py-5 align-top font-semibold text-black`}
                      >
                        {resource.name}
                      </td>
                      <td className={`${rowBg} px-6 py-5 align-top text-black`}>
                        {resource.description}
                      </td>
                      <td className={`${rowBg} rounded-r-2xl px-6 py-5 align-top`}>
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${resource.name}`}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e42158] text-white transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(228,33,88,0.7)]"
                        >
                          <ResourceIcon type={resource.type} />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>
    </>
  );
}
