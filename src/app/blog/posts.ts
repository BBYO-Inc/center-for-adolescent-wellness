export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "lead"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  author: string;
  /** Machine-readable publish date, YYYY-MM-DD. */
  date: string;
  /** Display form, BBYO house style: month spelled out, no ordinals. */
  dateLabel: string;
  excerpt: string;
  body: PostBlock[];
  /** Short author bio printed below the article. */
  authorBio: string;
};

export const POSTS: Post[] = [
  {
    slug: "making-youth-spaces-safer",
    title:
      "Making Youth Spaces Safer: Research Shows Proactive Child Abuse Prevention Works",
    author:
      "Drew Fidler, LCSW-C, Executive Director, BBYO Center for Adolescent Wellness",
    date: "2026-08-10",
    dateLabel: "August 10, 2026",
    excerpt:
      "New research shows that proactive prevention measures reduce incidents of child abuse in youth-serving organizations — and points to exactly which practices make the difference.",
    body: [
      {
        type: "paragraph",
        text: "Over the past fifteen years, the world has reeled as allegations of child abuse within youth-serving organizations (YSO) have come to light. The idea that institutions designed to support adolescent development could instead be places of harm, was both shocking and deeply undermined our trust in these spaces as safe. In response, many organizations undertook efforts to develop policies and procedures and staff training programs aimed at creating healthy, safe environments for youth. YSOs embarked on this work without knowing whether it would be effective. They primarily relied on best practices, such as those outlined by the Center for Disease Control’s 2007 report, “Preventing Child Sexual Abuse Within Youth Serving Organizations.”",
      },
      {
        type: "paragraph",
        text: "New research from Dr. Luciana Assini-Meytin at the Moore Center for the Prevention of Child Abuse at Johns Hopkins Bloomberg School of Public Health shows that proactive prevention works. In evaluating six of the largest YSOs (4-H, Big Brothers Big Sisters of America, Boys and Girls Clubs of America, Boy Scouts of America, Girl Scouts of the USA, and the YMCA of the USA), the research demonstrates that in fact proactive prevention measures reduce incidents of child abuse in YSOs and create safer environments for youth. Specifically, studies found a 20% decline in child sexual abuse allegations in these settings between younger and older adults. It also revealed that high-quality training focused on boundary violations rather than solely on “grooming,” had a greater impact on reducing opportunities for abuse by encouraging earlier intervention.",
      },
      { type: "lead", text: "Here’s what works:" },
      {
        type: "list",
        items: [
          "Staff training focused on boundary violations and abuse in that specific setting",
          "Clear policies on adult-child interactions",
          "Clear procedures on what to do and where to go if a boundary violation is observed",
          "Codes of conduct that explicitly define what is acceptable and what is not",
        ],
      },
      {
        type: "paragraph",
        text: "These elements are important because they don’t just impact a child’s experience but also create ripple effects across the entire community. Policies, procedures, and training that explicitly address child abuse prevention and healthy boundaries with youth make every aspect of communities safer. When institutions prioritize youth safety between adults and children, they become more attuned to potential violations between children as well, allowing them to respond more quickly and appropriately.",
      },
      {
        type: "paragraph",
        text: "The research also shows that some institutions – particularly schools and religious settings – are still lagging and have not made the same gains in prevention efforts. The authors theorize that this may stem from a combination of ineffective training and a lack of policies that address real world issues. The BBYO Center for Adolescent Wellness (BBYO-CAW) has seen firsthand how well-designed policies and training can transform an organization’s philosophy and readiness to respond to boundary and policy violations. In many schools, staff are regularly instructed to report suspected abuse but then training stops there. There is little to no follow-up or discussion of what healthy boundaries with youth looks like, how to perform one’s job safely, how to recognize when someone violates these boundaries, and how to intervene or know what steps to take next.",
      },
      {
        type: "paragraph",
        text: "This research should strengthen and inspire continued efforts in this space. Every institution serving youth, including camps, schools, JCCs, youth movements, sports teams, and others, should use this research and this moment to engage in the work. This author understands that when there is so much happening in the world around us – antisemitism, the war in Israel, school violence, the mental health crisis – it can be hard to make the case for focusing on child abuse prevention. Yet it is precisely in times of chaos that the need for youth-serving organizations becomes even greater. As young people seek out supportive places, people, and programs, it is imperative that those same institutions are fully prepared to keep them safe.",
      },
      {
        type: "paragraph",
        text: "Let this research be your call to action. YSOs don’t have to do it alone. Reach out, ask for help, and commit to building safer spaces. In a world where young people are turning to our spaces for support and stability, we must ensure they find care—not harm—when they walk through our doors.",
      },
    ],
    authorBio:
      "Drew Fidler, LCSW-C, is the Executive Director of the BBYO Center for Adolescent Wellness, where she helps ensure that BBYO and other youth-serving organizations are places where adolescents can thrive through institutional best practices in health and wellness.",
  },
];

export function getPost(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}
