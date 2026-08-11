"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "It was wonderful to have you and Brandon on-site with us, and the staff found the session engaging, interactive, and valuable. I had multiple staff members approach me yesterday and today raving about the session. I appreciate the time and care you put into your presentation.",
    attribution: "Ramah Day Camp Director, Dina Greenberg",
  },
  {
    quote:
      "This training helped me see the options and power I have to help others in need. The skills taught in the course are life-saving, and I’m very grateful I had the chance to learn them!",
    attribution: "Nathan Kugler, Teen Mental Health First Aid Participant",
  },
  {
    quote:
      "The Marlene Meyerson JCC Manhattan is a proud client of BBYO's Center for Adolescent Wellness. Through the Wellness Assessment Process, BBYO CAW's experience with best practices in child abuse prevention and supporting mental and emotional health has helped us fully realize our goals of creating a safe environment for all of our youth to thrive. BBYO CAW is a trusted colleague and resource whenever a challenging child safety situation arises and a favorite trainer among staff and teens alike.",
    attribution: "Marlene Meyerson JCC of Manhattan",
  },
  {
    quote:
      "We value our partnership with BBYO CAW for the education and training of both staff and our Counselors-in-Training. Presenters are knowledgeable and deliver important skills that reinforce best practices in caring for campers. The Center is available and responsive throughout the year, helping us think through topics we want to discuss and explore.",
    attribution: "Camps Airy and Louise",
  },
];

// Matches the circular icon buttons on the Resources page: pink circle, white
// glyph, pink glow on hover.
const arrowStyles =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e42158] text-white transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(228,33,88,0.7)]";

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Fades out, swaps the quote, fades back in. `resolve` receives the current
  // index, so stepping stays correct even mid-fade when state hasn't landed yet.
  const change = (resolve: (i: number) => number) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(resolve);
      setVisible(true);
    }, 300);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      change((i) => (i + 1) % TESTIMONIALS.length);
    }, 10000);
  };

  // Manual navigation restarts the countdown, so a quote you just chose doesn't
  // get replaced a moment later by the tail end of the previous cycle.
  const goToManually = (next: number) => {
    change(() => next);
    startTimer();
  };

  const step = (delta: number) => {
    change((i) => (i + delta + TESTIMONIALS.length) % TESTIMONIALS.length);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <div>
      <div className="flex min-h-[420px] items-center justify-center rounded-[2rem] bg-white px-8 py-12 shadow-[0_30px_60px_-12px_rgba(13,22,58,0.25)] sm:min-h-[340px] sm:px-16 sm:py-14">
        <div
          className={`mx-auto max-w-2xl transition-opacity duration-300 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-center text-lg leading-relaxed text-caw-ink sm:text-xl">
            &ldquo;{current.quote}&rdquo;
          </p>
          <p className="mt-6 text-center text-sm font-semibold uppercase tracking-wide text-[#e42158]">
            {current.attribution}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous testimonial"
          className={arrowStyles}
        >
          <Chevron direction="left" />
        </button>

        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToManually(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next testimonial"
          className={arrowStyles}
        >
          <Chevron direction="right" />
        </button>
      </div>
    </div>
  );
}
