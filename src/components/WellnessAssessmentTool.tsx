"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { WellnessAssessmentDiagram } from "./WellnessAssessmentDiagram";

/**
 * Inline text trigger that opens the Wellness Assessment diagram in a lightbox.
 * Closes on Escape, on backdrop click, and via the close button.
 *
 * The lightbox is portalled to <body>. Rendered in place it would sit inside the
 * accordion's Reveal wrapper, whose `translate` makes it the containing block for
 * fixed children — the overlay would be anchored to the accordion and clipped by
 * its overflow-hidden instead of covering the screen.
 */
export function WellnessAssessmentTool() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    // Stop the page behind the lightbox from scrolling while it's open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="font-semibold text-[#e42158] underline decoration-2 underline-offset-2 transition-colors hover:text-black"
      >
        Wellness Assessment Tool
      </button>

      {open &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="What goes into a Wellness Assessment"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          // Extra bottom padding so the diagram doesn't end flush against the
          // bottom edge when scrolled all the way down.
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 p-4 pb-12 backdrop-blur-sm sm:p-8 sm:pb-16"
        >
          {/* pt clears the fixed close button so it never sits over the heading */}
          <div className="relative mx-auto w-full max-w-4xl pt-14">
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              // Fixed rather than absolute: the diagram is taller than a phone
              // screen, and an absolute button would scroll out of reach.
              className="fixed right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#e42158] text-white shadow-lg transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(228,33,88,0.7)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <WellnessAssessmentDiagram />
          </div>
        </div>,
          document.body,
        )}
    </>
  );
}
