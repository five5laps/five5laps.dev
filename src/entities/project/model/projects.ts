import type { IProject } from "./types";

export const projects: IProject[] = [
  {
    id: "myfirsthns",
    title: "MyFirstHNS",
    url: "https://www.myfirsthns.ru",
    description:
      "Community platform for Hide'n'Seek servers. The project has been evolving since 2017 through restarts and full rewrites while keeping the community active. The site showcases three servers with different rulesets, live server status, and a custom HNS engine built for smooth movement and reliable gameplay.",
    stack: ["Next.js", "React", "TypeScript"],
    highlights: [
      "Three HNS servers: classic rules, MIX practice, and no-rules",
      "Live server status and quick join links",
      "Fully custom HNS engine for competitive movement",
      "Discord community integration",
    ],
  },
];
