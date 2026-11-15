/*
 * TEAM MEMBERS: replace the 5 entries below with confirmed team info.
 * - teamPhoto: optional group photo in public/team/, e.g. "/team/group.jpg"
 * - photo: individual portrait in public/team/, e.g. "/team/louis.jpg"
 *          (leave "" to show initials until real photos are added)
 */
export const teamPhoto = "";

const members = [
  {
    name: "Team Member 1",
    role: "Founder & Creative Director",
    photo: "",
    bio: "Guides product direction, creative strategy and client partnerships from concept to launch.",
    skills: ["Product Strategy", "Creative Direction"],
    links: { linkedin: "", x: "", instagram: "", github: "" },
  },
  {
    name: "Team Member 2",
    role: "Lead Software Engineer",
    photo: "",
    bio: "Architects responsive web applications, software systems and reliable technical foundations.",
    skills: ["Web Apps", "System Architecture"],
    links: { linkedin: "", x: "", instagram: "", github: "" },
  },
  {
    name: "Team Member 3",
    role: "UI/UX & Product Designer",
    photo: "",
    bio: "Shapes clear user journeys, visual systems and intuitive interfaces built around real users.",
    skills: ["UI/UX Design", "Design Systems"],
    links: { linkedin: "", x: "", instagram: "", github: "" },
  },
  {
    name: "Team Member 4",
    role: "Frontend & Interactive Developer",
    photo: "",
    bio: "Crafts fast, accessible and engaging digital interfaces across desktop and mobile devices.",
    skills: ["React", "Interactive UI"],
    links: { linkedin: "", x: "", instagram: "", github: "" },
  },
  {
    name: "Team Member 5",
    role: "Poietik Academy & Operations Lead",
    photo: "",
    bio: "Supports project delivery while nurturing community learning initiatives at Poietik Academy.",
    skills: ["Tech Education", "Operations"],
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
