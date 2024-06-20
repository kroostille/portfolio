export type Project = {
  id: string;
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
  {
    id: "ichiba",
    name: "Ichiba Marketplace",
    scope: "Web Design",
    year: 2024,
    description:
      "Ichiba Market is a web design project of an e-commerce marketplace with a minimalist and consistent design. Through this project I wanted to experiment with CMS management and animations using Framer.",
    team: [{ role: "Web Designer", name: "Vaimiti Dock" }],
    tools: "Figma, Mid Journey, Framer",
    link: "https://ichiba-market.framer.website/",
    linkText: "Preview Framer template",
    mediaType: "image",
    mediaSrc: "/assets/projects/ichiba/ichiba-intro.jpg",
    mediaAlt: "Ichiba marketplace",
  },
];
