const AREAS = [
  {
    area: "Youth Protection Policies and Procedures",
    component:
      "Does the agency have anti-harassment, discrimination, child abuse prevention, and mandated reporting policies and procedures?",
  },
  {
    area: "Mental, Emotional, Social Health (MESH) Policies and Procedures",
    component:
      "How the agency is prepared to respond to and support children with any challenges or issues?",
  },
  {
    area: "Screening and Selecting of Staff & Volunteers",
    component:
      "How the agency ensures that staff or volunteers are safe, and how the agency communicates its vision on child protection?",
  },
  {
    area: "Guidelines on Healthy Boundaries",
    component:
      "How the institution sets and maintains expectations, rules, and boundaries to support child development, and aid youth through challenges?",
  },
  {
    area: "Training & Education",
    component: "How an institution brings its policies, values, and goals to life?",
  },
  {
    area: "Ensuring Safe Environments",
    component:
      "Does the physical environment promote mental, emotional, and social health and wellness?",
  },
  {
    area: "Agency Transparency",
    component:
      "How the agency communicates its policies, procedures, and supports back to stakeholders?",
  },
];

export function WellnessAssessmentDiagram() {
  return (
    <figure className="overflow-hidden rounded-[2rem] bg-[#00d7eb] p-4 shadow-[0_30px_60px_-12px_rgba(13,22,58,0.35)] sm:p-8">
      <figcaption className="text-center">
        <h4 className="text-3xl font-bold text-white sm:text-4xl">
          Wellness Assessment Framework
        </h4>
      </figcaption>

      <ol className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
        {AREAS.map(({ area, component }, i) => (
          <li
            key={area}
            className="flex gap-3 rounded-2xl bg-white p-4 shadow-[0_12px_24px_-8px_rgba(13,22,58,0.35)] sm:gap-4 sm:p-5"
          >
            <span
              aria-hidden
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e42158] text-sm font-bold text-white sm:h-9 sm:w-9"
            >
              {i + 1}
            </span>
            <div>
              <h5 className="text-base font-bold leading-snug text-[#e42158]">
                {area}
              </h5>
              <p className="mt-1.5 text-sm leading-relaxed text-black">{component}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
