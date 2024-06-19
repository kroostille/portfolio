export type Project = {
  id: "onix";
  name: string;
  scope: string;
  year: number;
  description: string;
  team: { role: string; name: string }[];
  tools: string;
  link: string;
  linkText: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  mediaAlt: string;
};

export const projects: Project[] = [
  {
    id: "onix",
    name: "ONIX Wallet Extension",
    scope: "UI/UX Design",
    year: 2024,
    description:
      "I have compared lots of crypto wallets last year and worked on designing one at my previous job. I wanted to design another one that will reflect the feelings I had when I was exploring the crypto ecosystem. I ended up with something darker and cyber.",
    team: [
      { role: "Designer", name: "Vaimiti Dock" },
      { role: "Developer", name: "Kenji Lau" },
    ],
    tools: "Figma, After Effects",
    link: "https://onix-7jbovx471-0xyami.vercel.app/index.html",
    linkText: "Play demo",
    mediaType: "video",
    mediaSrc: "/assets/projects/onix/onix-intro.mp4",
    mediaAlt: "",
  },
];
