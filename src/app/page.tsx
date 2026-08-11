import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/home/hero-subpage.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Scrim to keep the headline legible over the bright image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/35" />
        <div className="relative mx-auto max-w-5xl px-6 pb-48 pt-60 text-center text-white sm:pb-56 sm:pt-72">
          <Reveal>
            <h1 className="font-display text-5xl leading-none drop-shadow-md sm:text-6xl md:text-7xl">
              Building a World Where Every Young Person Can Thrive
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-white/90 drop-shadow">
              The BBYO Center for Adolescent Wellness seeks to identify and provide
              best practices in adolescent health and wellness so that youth-serving
              organizations can be places where adolescents thrive.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-[#e42158] transition-shadow duration-300 hover:shadow-[0_0_60px_16px_rgba(248,249,10,0.7)]"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold text-[#e42158] sm:text-5xl">Our Mission</h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-black">
            Ensuring that youth-serving organizations are places where youth thrive
            mentally, emotionally, and socially.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mx-auto mt-12 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl shadow-[0_30px_60px_-12px_rgba(13,22,58,0.35)]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/X4Sbfi5M0jM"
              title="BBYO Center for Adolescent Wellness"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>

      {/* QUICK LINKS */}
      <section className="overflow-hidden bg-[#00d7eb]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
          {[
            { href: "/about", title: "About Us", body: "Learn who we are and the vision behind our work.", img: "/images/home/card-about.jpg", glow: "#f8f90a" },
            { href: "/services", title: "Services", body: "Explore the training and support we offer organizations.", img: "/images/home/card-services.jpg", glow: "#f8f90a" },
            { href: "/resources", title: "Resources", body: "Browse our publications, interviews, and tools.", img: "/images/home/card-resources.jpg", glow: "#f8f90a" },
          ].map((card, i) => (
            <Reveal key={card.href} delay={i * 150} className="group relative">
              {/* Pink glow behind the card, bleeds out from the bottom-right on hover */}
              <span
                aria-hidden
                style={{ backgroundColor: card.glow }}
                className="pointer-events-none absolute -bottom-20 -right-20 z-0 h-72 w-72 rounded-full opacity-0 blur-[56px] transition-opacity duration-300 group-hover:opacity-100"
              />
              <Link
                href={card.href}
                className="relative z-10 block transform-gpu rounded-2xl bg-white p-6 shadow-[0_30px_60px_-12px_rgba(13,22,58,0.35)] transition-transform duration-300 ease-out will-change-transform [backface-visibility:hidden] hover:-translate-y-1 hover:scale-[1.03]"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl shadow-[0_12px_24px_-8px_rgba(13,22,58,0.35)]">
                  <Image
                    src={card.img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-black">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-black">{card.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
