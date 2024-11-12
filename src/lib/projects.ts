export type Project = {
  id: string;
  name: string;
  scope: string;
  year: string;
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
    year: "2024",
    description:
      "I compared many crypto wallets last year and worked on designing one at my previous job. I wanted to create another wallet that reflects the feelings I experienced while exploring the crypto ecosystem. Ultimately, I ended up with a design that is darker and more cybernetic.",
    team: [
      { role: "Designer", name: "Vaimiti DOCK" },
      { role: "Developer", name: "0xYami" },
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
    year: "2024",
    description:
      "Ichiba Market is a web design project of an e-commerce marketplace with a minimalist and consistent design. Through this project I wanted to experiment with CMS management and animations using Framer.",
    team: [{ role: "Web Designer", name: "Vaimiti DOCK" }],
    tools: "Figma, Mid Journey, Framer",
    link: "https://ichiba-market.framer.website/",
    linkText: "Preview Framer template",
    mediaType: "image",
    mediaSrc: "/assets/projects/ichiba/ichiba-intro.jpg",
    mediaAlt: "Ichiba marketplace",
  },
  {
    id: "shadow-exchange",
    name: "Shadow NFT Exchange",
    scope: "Product Design",
    year: "2021-2024",
    description:
      "Shadow Exchange - old VIV3 - is an NFT marketplace with expanded and live analytics on the Flow blockchain. I have spent 2 years working at Shadow as Product designer. Working at the stage of a start-up, I have had to cover various disciplines from branding, UX research and design to project planning and management.",
    team: [
      { role: "Visual Identity", name: "Vaimiti DOCK" },
      { role: "Product Designer", name: "Vaimiti DOCK" },
      { role: "Animation", name: "Tasya ANGGITA RACHMANI" },
    ],
    tools: "Figma, Adobe Illustrator, AfterEffect, Rive, Linear, Notion",
    link: "https://shadow.app/",
    linkText: "Visit website",
    mediaType: "image",
    mediaSrc: "/assets/projects/shadow-exchange/shadow-exchange-intro.jpg",
    mediaAlt: "Shadow NFT exchange",
  },
  {
    id: "shadow-wallet",
    name: "Shadow Wallet Extension",
    scope: "Product Design",
    year: "2022-2024",
    description:
      "Shadow Wallet is the first non-custodial wallet on the Flow blockchain for storing web3 assets. I led this project for a year, from concept and ideation to product release. I was responsible for designing the product, establishing and maintaining the design system, planning, and ensuring product quality and timely delivery.",
    team: [
      { role: "Visual Identity", name: "Vaimiti DOCK" },
      { role: "Product Designer", name: "Vaimiti DOCK" },
      { role: "Animation", name: "Tasya ANGGITA RACHMANI" },
    ],
    tools: "Figma, Adobe Illustrator, AfterEffect, Rive, Linear, Notion",
    link: "https://shadow.app/wallet",
    linkText: "Visit website",
    mediaType: "image",
    mediaSrc: "/assets/projects/shadow-wallet/shadow-wallet-intro.jpg",
    mediaAlt: "Shadow wallet extension",
  },
  {
    id: "filament",
    name: "Filament platform",
    scope: "Product Design",
    year: "2024",
    description:
      "Filament is a commerce platform to create and deploy online stores in minutes with integrated crypto-currency payments.",
    team: [
      { role: "Product Designer", name: "Vaimiti DOCK" },
      { role: "Developer", name: "Roushou" },
    ],
    tools: "Figma, Linear",
    link: "https://www.figma.com/design/ab4fj4TIsGzgo8eEaaichj/Filament-(public)?node-id=0-1&t=aNH5hMkGhq7cBKZK-1",
    linkText: "View mock-ups on Figma",
    mediaType: "image",
    mediaSrc: "/assets/projects/filament/filament-cover.jpg",
    mediaAlt: "Filament plateform cover",
  },
];
