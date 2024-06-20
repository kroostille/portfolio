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
      "I have compared lots of crypto wallets last year and worked on designing one at my previous job. I wanted to design another one that will reflect the feelings I had when I was exploring the crypto ecosystem. I ended up with something darker and cyber.",
    team: [
      { role: "Designer", name: "Vaimiti DOCK" },
      { role: "Developer", name: "Kenji LAU" },
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
    year: "2021-2023",
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
    year: "2022-2023",
    description:
      "Shadow Wallet - old Flipper - is the first non-custodial wallet on Flow blockchain to store  web3 assets. As a non-custodial wallet, Shadow wallet does not require any personal information from users, ensuring a secure and private DeFi & NFT experience.",
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
];
