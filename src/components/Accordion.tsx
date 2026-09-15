"use client";

import { useState } from "react";

export function Accordion({
  items,
}: {
  items: { title: string; content: React.ReactNode }[];
}) {
  // Starts fully collapsed — no item open until the visitor picks one.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-caw-gray-light overflow-hidden rounded-2xl border border-caw-gray-light bg-white shadow-[0_30px_60px_-12px_rgba(13,22,58,0.35)]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-6 text-left transition-colors duration-200 hover:bg-[#fdeef3]"
            >
              <span className="text-xl font-bold text-black transition-colors duration-200 group-hover:text-[#e42158]">
                {item.title}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`h-5 w-5 shrink-0 text-[#e42158] transition-transform duration-300 group-hover:scale-125 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                {/* pt-6 sits on top of the button's own pb-6, so the body text gets
                    visibly more breathing room below the title than the flush 24px. */}
                <div className="px-6 pb-6 pt-6 text-base leading-relaxed text-black">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
