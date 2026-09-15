import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { WellnessAssessmentTool } from "@/components/WellnessAssessmentTool";

export const metadata = {
  title: "Services | Center for Adolescent Wellness",
};

const TRAININGS = [
  {
    name: "Mandated Reporter Training",
    points: [
      "Local mandated reporting laws",
      "Definitions of child abuse (including physical, sexual, emotional abuse, neglect, and human trafficking)",
      "Signs and symptoms of abuse",
      "Working with youth safely",
    ],
  },
  {
    name: "Recognizing and Responding to Red Flags",
    points: [
      "Typical adolescent development",
      "Mental health diagnoses in childhood and adolescence",
      "Warning signs of mental health challenges",
      "Strategies for recognition and intervention",
    ],
  },
  {
    name: "Building Healthy Boundaries",
    points: [
      "Role of staff in the lives of youth",
      "Relationship building between youth and adults",
      "Building and maintaining appropriate, observable, interruptible boundaries with youth",
      "Recognizing red flag behavior",
      "Empowering teens and staff to utilize safe practices",
    ],
  },
  {
    name: "Building Safe Environments",
    points: [
      "Role of youth serving organizations with regards to youth mental, emotional, social health",
      "Best practices to ensure the mental, emotional, and social health of youth",
      "Implementing best practices at your YSO",
      "Evaluating your physical site to ensure safe practices",
    ],
  },
  {
    name: "Youth Mental Health First Aid (YMHFA)",
    points: [
      "How to identify, understand and respond to signs of mental illnesses and substance use disorders",
      "Common mental health challenges for youth, typical adolescent development, and teaches a 5-step action plan for how to help young people in both crisis and non-crisis situations",
      "6.5-hour course that can be taught in-person or virtually",
    ],
  },
  {
    name: "Teen Mental Health First Aid (tMHFA)",
    points: [
      "Teaches teens how to identify, understand and respond to signs of mental health and substance use challenges in their peers",
      "Common mental health challenges for youth, and teaches a 5-step action plan for how to help their peers in both crisis and non-crisis situations",
      "Three-part course of 90 minutes each or six parts of 45 minutes each",
    ],
  },
  {
    name: "Managing Empathic Strain, Secondary Traumatic Stress, and Burnout",
    points: [
      "Provides definitions for empathic strain, secondary traumatic stress, and burnout",
      "Warning signs and symptoms of these challenges",
      "How to address these challenges",
      "Tools for building boundaries and rebounding from strain",
    ],
  },
  {
    name: "Supporting Teen Behavior and Mindful Masculinity",
    points: [
      "Dynamics and development of adolescent males",
      "Relationship building with male-identifying youth and staff",
      "Building a healthy community culture",
      "Getting the best out of male-identifying youth and staff",
    ],
  },
];

const ACCORDION_ITEMS = [
  {
    title: "Wellness Assessment",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Utilize our custom <WellnessAssessmentTool /> to analyze mental,
          emotional, and social health policies and procedures
        </li>
        <li>
          Evaluate how current policies, procedures, and training align to create
          and ensure safe environments
        </li>
        <li>
          Provide a written report on areas of strength and opportunities for
          improvement
        </li>
        <li>
          Present findings to agency leadership and board at the request of the
          organization
        </li>
      </ul>
    ),
  },
  {
    title: "Policy Development",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Revise current and/or create new policies and procedures in accordance
          with local and national laws and best practices to support the mental,
          emotional, and social health needs of children and staff
        </li>
        <li>Policies and procedures customized to fit the YSO, its culture, and needs</li>
      </ul>
    ),
  },
  {
    title: "Training",
    content: (
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Available for youth serving professionals, parents and community
          members, and children and teens
        </li>
        <li>
          Developed and customized to reflect organizational policies and
          procedures, organizational culture, and local laws
        </li>
        <li>Customized trainings upon request</li>
        <li>
          Available trainings include:
          <ul className="mt-3 list-disc space-y-4 pl-4 sm:pl-5">
            {TRAININGS.map((training) => (
              <li key={training.name}>
                <span className="font-semibold">{training.name}</span>
                <ul className="mt-1 list-[circle] space-y-1 pl-4 sm:pl-5">
                  {training.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Consulting Services",
    content: (
      <p>
        BBYO-CAW staff regularly consult on issues and crises within organizations
        as they arise. YSOs may contact the Center for a free 30-minute assessment
        and then purchase hours based on the issue at hand.
      </p>
    ),
  },
  {
    title: "Presentations",
    content: (
      <div className="space-y-4">
        <p>
          Team members from BBYO’s Center for Adolescent Wellness regularly present at
          industry events like Camp Collab, the American Camp Association Tri-State
          Conference, and the Foundation for Jewish Camps Conference.
        </p>
        <p>
          <Link
            href="/contact"
            className="font-semibold text-[#e42158] underline decoration-2 underline-offset-2 transition-colors hover:text-black"
          >
            Contact us
          </Link>{" "}
          to schedule a conference speaker or to see us speak live.
        </p>
      </div>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        image="/images/services/hero.png"
      />
      <section className="-mt-[50px] px-6 pb-16 pt-20 text-left sm:px-10 md:px-[100px]">
        <Reveal>
          <h2 className="px-4 text-4xl font-bold text-[#e42158] sm:text-5xl">What We Offer</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 px-4 text-lg leading-relaxed text-black">
            The BBYO Center for Adolescent Wellness ensures that
            youth-serving organizations are places where all youth thrive. BBYO-CAW
            has the tools, resources, and training to make this possible with the
            below services. To request a service, package, or quote, please contact
            Drew Fidler at{" "}
            <a
              href="mailto:dfidler@bbyo.org"
              className="font-semibold text-[#e42158] underline decoration-2 underline-offset-2 hover:text-black"
            >
              dfidler@bbyo.org
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 max-w-md px-4 text-left">
            <p className="text-lg font-semibold text-black">Our programs are for:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed text-black">
              <li>Camps</li>
              <li>Schools</li>
              <li>After-School Programs</li>
              <li>Youth Movements</li>
              <li>Synagogues</li>
              <li>Other Youth-Serving Organizations</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 px-4">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#e42158] px-8 py-3 text-base font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(228,33,88,0.7)]"
            >
              Request Services
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Full-bleed cyan band. Carries the same horizontal padding as the section
          above so the accordion lines up with the copy. */}
      <section className="bg-[#00d7eb] px-6 py-16 text-left sm:px-10 md:px-[100px]">
        <Reveal>
          <div className="px-4">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">Learn More</h3>
            <div className="mt-8">
              <Accordion items={ACCORDION_ITEMS} />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
