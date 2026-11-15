/*
 * TEAM MEMBERS: confirmed team entries below.
 * - teamPhoto: optional group photo in public/team/, e.g. "/team/group.jpg"
 * - photo: individual portrait in public/team/, e.g. "/team/nathaniel.jpg"
 *          (leave "" to show initials until real photos are added)
 */
export const teamPhoto = "";

const members = [
  {
    name: "Nathaniel Addae Marfo",
    role: "Founder & CEO / Full-Stack Developer",
    photo: "",
    bio: "Leads product vision, technical architecture and full-stack software development from concept to production.",
    skills: ["Full-Stack Dev", "System Architecture", "Product Leadership"],
    links: { linkedin: "", x: "", instagram: "", github: "" },
  },
  {
    name: "Louis Simpson",
    role: "Business Development & Client Relations",
    photo: "/team/simpson.webp",
    bio: "Builds lasting client partnerships, shapes project scopes and ensures every engagement delivers real business value.",
    skills: ["Business Strategy", "Client Relations", "Growth"],
    links: { linkedin: "", x: "", instagram: "", github: "" },
  },
  {
    name: "Mckeown Julius Ofori",
    role: "Software Developer (MERN Stack)",
    photo: "/team/julius.jpeg",
    bio: "Develops responsive web applications and scalable backend APIs using MongoDB, Express, React and Node.js.",
    skills: ["MongoDB & Node.js", "React", "REST APIs"],
    links: { linkedin: "", x: "", instagram: "", github: "https://github.com/OforiMcke" },
  },
  {
    name: "Esther",
    role: "Communications & Marketing",
    photo: "",
    bio: "Shapes brand storytelling, digital campaigns and clear communication that connects Ignitus Poietik with people and businesses.",
    skills: ["Brand Storytelling", "Digital Marketing", "Communications"],
    links: { linkedin: "", x: "", instagram: "", github: "" },
  },
];

// ── No need to edit below this line ──────────────────────────

const LINK_NAMES = { linkedin: "LinkedIn", x: "X", instagram: "Instagram", github: "GitHub" };

const toSlug = (name) =>
  name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const team = members.map((member) => ({
  ...member,
  slug: toSlug(member.name),
  socials: Object.entries(member.links || {})
    .filter(([, url]) => url)
    .map(([brand, url]) => ({ name: LINK_NAMES[brand] || brand, brand, url })),
}));

export default team;
