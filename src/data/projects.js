import { GraduationCap, Globe2, Workflow } from "lucide-react";
import { academyUrl } from "./constants";

const projects = [
  {
    title: "Poietik Academy",
    type: "EDUCATION PLATFORM",
    text: "The learning side of Poietik, helping people explore digital skills and technology.",
    style: "violet",
    icon: GraduationCap,
    link: academyUrl,
  },
  {
    title: "Business, built for the web",
    type: "WEBSITE CONCEPT",
    text: "A concept for a modern business website, with clear messaging and a simple path to enquiry.",
    style: "orange",
    icon: Globe2,
  },
  {
    title: "Tools that move work forward",
    type: "PRODUCT CONCEPT",
    text: "A concept exploring how thoughtful software can make everyday work simpler.",
    style: "blue",
    icon: Workflow,
  },
];

export default projects;
