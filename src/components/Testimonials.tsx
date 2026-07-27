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

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const indexRef = useRef(0);
  indexRef.current = index;

  const goTo = (next: number) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((indexRef.current + 1) % TESTIMONIALS.length);
    }, 10000);
    return () => clearInterval(timer);
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

      <div className="mt-6 flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
