"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  // On the homepage the nav is transparent and overlays the top of the hero;
  // when the mobile menu is open it goes solid to match the white dropdown.
  const transparent = isHome && !open;

  return (
    <header
      className={
        isHome
          ? `absolute inset-x-0 top-0 z-50 ${open ? "bg-white" : ""}`
          : "relative z-50 bg-white md:bg-transparent"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/shared/caw-logo.png"
            alt="BBYO Center for Adolescent Wellness"
            width={1283}
            height={1224}
            priority
            className="h-20 w-auto sm:h-28 md:h-40"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            const isContact = link.href === "/contact";

            if (isContact) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full border-2 px-5 py-2 text-base font-semibold transition-shadow duration-300 ${
                    transparent
                      ? "border-white text-white drop-shadow hover:shadow-[0_0_24px_4px_rgba(248,249,10,0.7)]"
                      : "border-[#e42158] bg-white text-[#e42158] hover:shadow-[0_0_24px_4px_rgba(228,33,88,0.7)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-base font-semibold transition-shadow duration-300 ${
                  transparent
                    ? "text-white drop-shadow hover:shadow-[0_0_24px_4px_rgba(248,249,10,0.7)]"
                    : `hover:shadow-[0_0_24px_4px_rgba(228,33,88,0.7)] ${active ? "text-[#e42158]" : "text-caw-ink"}`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className={`md:hidden ${transparent ? "text-white drop-shadow" : "text-caw-ink"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-caw-gray-light bg-white px-6 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-base font-semibold text-caw-ink hover:text-[#e42158]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
