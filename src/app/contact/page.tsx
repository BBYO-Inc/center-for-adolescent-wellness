import Image from "next/image";
import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

// The contact form is TEMPORARILY HIDDEN. `ContactForm.tsx` still exists and works,
// but it never sent anything anywhere — submissions were silently discarded while
// showing the visitor a "Thank you!" message. Until it is rebuilt on an approved
// form tool (Jotform or FormAssembly), this page points people at Drew directly.
// To restore: re-import ContactForm and drop it back into the section below.

export const metadata = {
  title: "Contact Us | Center for Adolescent Wellness",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" image="/images/contact/hero.png" />
      <section className="-mt-[50px] px-6 pb-20 pt-28 sm:px-10 md:px-[100px]">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="flex flex-col items-center rounded-[2rem] bg-white px-8 pb-10 pt-2 text-center shadow-[0_30px_60px_-12px_rgba(13,22,58,0.35)]">
              <div className="relative -mt-12 h-44 w-44 shrink-0 overflow-hidden rounded-full shadow-[0_12px_24px_-8px_rgba(13,22,58,0.35)]">
                <Image
                  src="/images/about/staff/drew-fidler.png"
                  alt="Drew Fidler, LCSW-C"
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>

              <h2 className="mt-[22px] text-2xl font-bold text-black">
                Drew Fidler, LCSW-C
              </h2>
              <p className="mt-1 text-base font-semibold text-[#e42158]">
                Executive Director
              </p>

              <p className="mt-6 text-base leading-relaxed text-black">
                We’re excited to work with you. Send us a note with your contact
                information, details about your organization, and the types of{" "}
                <Link
                  href="/services"
                  className="font-semibold text-[#e42158] underline decoration-2 underline-offset-2 transition-colors hover:text-black"
                >
                  services
                </Link>{" "}
                you are interested in. We’ll get back to you as soon as we can!
              </p>

              <a
                href="mailto:dfidler@bbyo.org"
                className="mt-8 inline-block rounded-full bg-[#e42158] px-8 py-3 text-base font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(228,33,88,0.7)]"
              >
                Connect
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
