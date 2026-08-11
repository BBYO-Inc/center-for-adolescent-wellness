import Image from "next/image";

// Footer links: underline wipes in from the left on hover, back out to the right.
const linkStyles =
  "relative inline-block font-semibold transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:text-white hover:after:origin-left hover:after:scale-x-100 motion-reduce:after:transition-none";


export function Footer() {
  return (
    // relative + z-10 so decorative glows on the page above (e.g. the blog cards)
    // paint behind the footer instead of bleeding over it.
    <footer className="relative z-10 mt-auto bg-[#e42158] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        {/* gap matches the BBYO block on the right so both sit the same
            distance from their divider */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Image
            src="/images/shared/caw-logo.png"
            alt="BBYO Center for Adolescent Wellness"
            width={1283}
            height={1224}
            // The logo PNG carries ~9.7% transparent padding on its right edge,
            // which at h-28 is ~11px. Pulling that back makes the visible circle
            // sit the same 24px from the divider as the address text does.
            className="-mr-[11px] h-28 w-auto shrink-0"
          />

          <div className="h-14 w-px shrink-0 bg-white/30" aria-hidden />

          <div>
            <p className="text-sm leading-relaxed text-[#fbdbe4]">
              PO Box 14540
              <br />
              Washington, DC 20004
              <br />
              (202) 857-6563
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[#fbdbe4]">
              Follow us on{" "}
              <a
                href="https://www.linkedin.com/company/bbyo-center-for-adolescent-wellness/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyles}
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Image
            src="/images/shared/bbyo-logo.svg"
            alt="BBYO"
            width={254}
            height={86}
            unoptimized
            className="h-10 w-auto shrink-0 opacity-80 [filter:brightness(0)_invert(1)]"
          />

          <div className="hidden h-10 w-px shrink-0 bg-white/30 sm:block" aria-hidden />

          <div className="text-sm leading-relaxed text-[#fbdbe4]">
            <p>Learn more about BBYO</p>
            <a
              href="https://bbyo.org"
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              bbyo.org
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-4 text-center text-xs text-[#fbdbe4]">
          © {new Date().getFullYear()} BBYO Center for Adolescent Wellness. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
