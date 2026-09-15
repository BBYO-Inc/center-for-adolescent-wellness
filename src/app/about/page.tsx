import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";

export const metadata = {
  title: "About Us | Center for Adolescent Wellness",
};

const PARTNERS = [
  { name: "AM Skier Consulting Hours", image: "/images/about/partners/am-skier-consulting-hours.jpeg" },
  { name: "Berman Hebrew Academy", image: "/images/about/partners/berman-hebrew-academy.png" },
  { name: "Blue Star Camp", image: "/images/about/partners/blue-star-camp-logo.png" },
  { name: "CYJ Midwest", image: "/images/about/partners/cyj-midwest.png" },
  { name: "CYJ Texas", image: "/images/about/partners/cyj-texas.png" },
  { name: "Camp Collab Conference", image: "/images/about/partners/camp-collab-conference.svg" },
  { name: "Camp Harlam", image: "/images/about/partners/camp-harlam.png" },
  { name: "Camp Judaea", image: "/images/about/partners/camp-judaea.png" },
  { name: "Camp Ramah in New England", image: "/images/about/partners/camp-ramah-in-new-england.png" },
  { name: "Camp Shoresh", image: "/images/about/partners/camp-shoresh.png" },
  { name: "Camp Tel Yehuda", image: "/images/about/partners/camp-tel-yehuda.png" },
  { name: "Camp Wise and JCC Day Camp", image: "/images/about/partners/camp-wise-and-jcc-day-camp.png" },
  { name: "Camp YJ", image: "/images/about/partners/camp-yj.png" },
  { name: "Camp Zeke", image: "/images/about/partners/camp-zeke.png" },
  { name: "Camps Airy and Louise", image: "/images/about/partners/camps-airy-and-louise.png" },
  { name: "Capital Camps", image: "/images/about/partners/capital-camps.jpeg", scale: 0.8 },
  { name: "Cohen Camps - Tevya", image: "/images/about/partners/cohen-camps-tevya.png", scale: 0.8 },
  { name: "Commonpoint JCC", image: "/images/about/partners/commonpoint-jcc.webp" },
  { name: "Emma Kaufman Camp", image: "/images/about/partners/emma-kaufman-camp.png" },
  { name: "Jewish Federation of Greater Washington", image: "/images/about/partners/jewish-federation-of-greater-washington.webp" },
  { name: "Jewish Federation of MetroWest NJ", image: "/images/about/partners/jewish-federation-of-metrowest-nj.webp" },
  { name: "Jfed Bay Area", image: "/images/about/partners/jfed-bay-area.jpg" },
  { name: "MMJCCM", image: "/images/about/partners/mmjccm.png" },
  { name: "Medford Day Camps", image: "/images/about/partners/medford-day-camps.png" },
  { name: "Milton JPDS", image: "/images/about/partners/milton-jpds.png" },
  { name: "Opportunities for Better Tomorrow", image: "/images/about/partners/opportunities-for-better-tomorrow.png" },
  { name: "Perlman Camp", image: "/images/about/partners/perlman-camp.png" },
  { name: "Ramah Darom", image: "/images/about/partners/ramah-darom.png" },
  { name: "Ramah Day Camp in Philadelphia", image: "/images/about/partners/ramah-day-camp-in-philadelphia.jpeg" },
  { name: "Ramah Network", image: "/images/about/partners/ramah-network.jpeg" },
  { name: "Ramah Poconos", image: "/images/about/partners/ramah-poconos.png" },
  { name: "Ramah Wisconsin", image: "/images/about/partners/ramah-wisconsin.jpeg" },
  { name: "Rockwern Academy", image: "/images/about/partners/rockwern-academy.png" },
  { name: "RootOne", image: "/images/about/partners/rootone.jpeg" },
];

const STAFF = [
  {
    name: "Drew Fidler, LCSW-C",
    image: "/images/about/staff/drew-fidler.png",
    bio: [
      "Drew Fidler, LCSW-C, is the Executive Director of the BBYO Center for Adolescent Wellness, where she helps ensure that BBYO and other Youth Serving Organizations are places where youth can thrive through institutional best practices in health, wellness, and child protection. Drew is dedicated to making youth-serving organizations safer and healthier for participants.",
      "Prior to joining BBYO, Drew worked for Baltimore Child Abuse Center (BCAC) as a Forensic Interviewer, Policy and Program Development Manager, and then as the Director of Prevention and Education. Drew has trained thousands of professionals on how to protect children and their own organization from incident, and has received training from the Department of Justice, Office for Victims of Crime and the TEND Academy in building organizational resiliency. Prior to roles at BCAC, Drew worked with at-risk youth in the U.S. and abroad. She has spent her career helping youth-serving organizations and their staff in understand youth development, mental health, manage difficult situations, and learn how to best support and advocate for their needs. Drew has an MSW from New York University and a BA in Psychology from Skidmore College.",
    ],
  },
  {
    name: "Rabbi Brandon Bernstein",
    image: "/images/about/staff/brandon-bernstein.jpg",
    bio: [
      "Rabbi Brandon Bernstein has spent his rabbinate exploring ways to discover the intersection between what was and what is, between ancient wisdom and contemporary knowledge. He has a BA in Comparative Literature from the University of California, Berkeley, and was ordained in 2014 by the Hebrew Union College-Jewish Institute of Religion in New York. Since ordination, he has worked primarily with teens, college students, and young adults, previously serving as Campus Rabbi for multiple Hillels and the Director of Jewish Learning for Moishe House. He currently works as the part-time rabbi of Congregation Beth Shalom in Dekalb, IL, a Retained Jewish Education Consultant for BBYO, and a contract trainer for the BBYO CAW.",
    ],
  },
  {
    name: "Jennifer Ferris-Glick",
    image: "/images/about/staff/jennifer-ferris-glick.jpg",
    bio: [
      "Jennifer Ferris-Glick is a contractor with BBYO-CAW, and a dedicated Mindful Empowerment Mentor, aspiring counseling psychologist, and seasoned Jewish educator committed to guiding individuals through life’s transitions with resilience and self-compassion. As an EMDR Therapist in-training, Jennifer leverages her extensive teaching experience, surpassing 16,000 hours in yoga, meditation, Jewish mysticism, and mindfulness. Her academic journey is marked by profound exploration in psychology, holding degrees in Psychology and Art Therapy. She conducted research in Cognitive Neuropsychology at Carnegie Mellon University, and she is currently advancing her studies in Counseling Psychology at Chatham University.",
    ],
  },
  {
    name: "Michal Berkson Powell",
    image: "/images/about/staff/michal-berkson-powell.jpg",
    bio: [
      "Michal Berkson Powell is a contractor with BBYO-CAW and a licensed clinical social worker with experience working with children, teens, families, and teachers in schools, clinics, synagogues, and summer camps. With a career extending from public schools in L.A. to the Jewish Social Service Agency in D.C. to private practice, Michal focuses on ensuring kids and parents can succeed to the best of their abilities wherever they live, work, or learn. Michal received her Master’s in Social Work from the University of Chicago and her Bachelor’s degree in Human Development and Psychological Services from Northwestern University.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        image="/images/about/hero.png"
      />
      <section className="-mt-[50px] px-6 py-20 text-left sm:px-10 md:px-[100px]">
        <Reveal>
          <h2 className="px-4 text-4xl font-bold text-[#e42158] sm:text-5xl">
            The BBYO Center for Adolescent Wellness
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 px-4 text-lg leading-relaxed text-black">
            Youth-serving organizations (YSOs) impact the lives of young people in a
            profound way. These organizations seek to shape who youth are and the
            people they will become. YSOs offer welcoming and inclusive environments
            where young people feel safe to share their emotions and feelings and are
            ripe environments for promoting adolescent wellness. To accomplish these
            goals, these organizations need to be mentally, emotionally, and
            physically safe spaces for youth. The BBYO Center for Adolescent Wellness
            (BBYO-CAW) seeks to identify and provide best practices in adolescent
            health and wellness so that YSOs can be places where adolescents thrive.
          </p>
        </Reveal>
        <Reveal delay={250}>
          <p className="mt-6 px-4 text-lg leading-relaxed text-black">
            The BBYO Center for Adolescent Wellness is a project of BBYO. Learn more
            about BBYO{" "}
            <a
              href="https://bbyo.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#e42158] underline decoration-2 underline-offset-2 hover:text-black"
            >
              here
            </a>
            .
          </p>
        </Reveal>
      </section>

      {/* STAFF */}
      <section className="bg-[#00d7eb] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center text-4xl font-bold text-white sm:text-5xl">
              Meet the Team
            </h2>
          </Reveal>

          <div className="mt-[76px] grid gap-x-10 gap-y-20 sm:grid-cols-2">
            {STAFF.map((person, i) => (
              <Reveal key={person.name} delay={(i % 2) * 150} className="h-full">
                <div className="flex h-full flex-col items-center rounded-[2rem] bg-white px-8 pb-8 pt-2 text-center shadow-[0_30px_60px_-12px_rgba(13,22,58,0.35)]">
                  <div className="relative -mt-12 h-44 w-44 shrink-0 overflow-hidden rounded-full shadow-[0_12px_24px_-8px_rgba(13,22,58,0.35)]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="176px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-[22px] text-2xl font-bold text-black">{person.name}</h3>
                  <div className="mt-4 w-full space-y-4 text-left text-base leading-relaxed text-black">
                    {person.bio.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative isolate overflow-hidden px-6 py-20">
        <Image
          src="/images/about/testimonials-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center text-4xl font-bold text-white sm:text-5xl">
              What People Are Saying
            </h2>
          </Reveal>
          <Reveal delay={150} className="mt-12">
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="px-6 py-20 sm:px-10 md:px-[100px]">
        <Reveal>
          <h2 className="text-center text-4xl font-bold text-[#e42158] sm:text-5xl">
            Our Partners
          </h2>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-6">
          {PARTNERS.map((partner, i) => (
            <Reveal key={partner.name} delay={(i % 6) * 75}>
              <div
                className="relative h-20 w-full"
                style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 16vw"
                  className="object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
