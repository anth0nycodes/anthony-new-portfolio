import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anthony Hoang",
  initials: "AH",
  url: "https://anthonyhoang.dev",
  location: "Bronx, NY",
  locationLink: "https://www.google.com/maps/place/bronx",
  description:
    "Software Engineer. Part-time LinkedIn warrior. I love building cool things.",
  summary:
    "Hi, my name is Anthony Hoang and I'm based in NYC. I like creating cool things and learning new things.",
  avatarUrl: "/mepfpupdated.png",
  skills: [
    "Next.js",
    "React.js",
    "React Native",
    "TypeScript",
    "Express.js",
    "Node.js",
    "PostgreSQL",
    "tRPC",
    "Supabase",
    "Tailwind CSS",
    "Shadcn UI",
    "Zod",
    "Drizzle ORM",
    "Vercel AI SDK",
    "OpenAI API",
    "Vercel",
    "Git",
    "Vite",
    "Figma",
    "Linear",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hoanganthony2207@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anth0nycodes",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anth0nycodes/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:hoanganthony2207@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Magic Hour (YC W24)",
      href: "https://magichour.ai",
      title: "Software Engineer",
      logoUrl: "/magichour.png",
      start: "August 2025",
      end: "September 2025",
    },
    {
      company: "Magic Hour (YC W24)",
      href: "https://magichour.ai",
      title: "Software Engineer Intern",
      logoUrl: "/magichour.png",
      start: "March 2025",
      end: "August 2025",
    },
    {
      company: "RevisionDojo (YC F24)",
      href: "https://revisiondojo.com",
      title: "Software Engineer Intern",
      logoUrl: "/revisiondojo.png",
      start: "January 2025",
      end: "March 2025",
    },
    {
      company: "Muslim Tech Collaborative",
      href: "https://muslimtech.org/",
      title: "Frontend Developer",
      logoUrl: "/mtc.png",
      start: "December 2024",
      end: "January 2025",
    },
  ],
  education: [
    {
      school: "Lehman College",
      href: "https://www.lehman.cuny.edu/",
      degree: "Bachelor's Degree of Computer Science (BS)",
      logoUrl: "/lehman.png",
      start: "2025",
      end: "Dropped Out 😎",
    },
    {
      school: "DeWitt Clinton High School",
      href: "https://www.dewittclintonhs.com/",
      degree: "High School Diploma",
      logoUrl: "/clinton.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    // {
    //   title: "Beacon",
    //   href: "https://trybeacon.app",
    //   dates: "May 2025 - Present",
    //   description:
    //     "An AI-powered study assistant that transforms your PDFs, documents, slides, and text into interactive revision sets.",
    //   technologies: [
    //     "Next.js",
    //     "TypeScript",
    //     "Tailwind CSS",
    //     "Supabase",
    //     "Drizzle ORM",
    //     "Vercel AI SDK",
    //     "Zod",
    //     "Shadcn UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://trybeacon.app",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/beacon.png",
    // },
    {
      title: "AI Meme Generator",
      href: "https://magichour.ai/products/ai-meme-generator",
      dates: "April 2025",
      active: false,
      description: "Turn your topics into memes within a few seconds with AI.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Python",
        "OpenAI API",
        "Tailwind CSS",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://magichour.ai/products/ai-meme-generator",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/memegenerator.png",
    },
    {
      title: "Muslim Tech Collaborative",
      href: "https://muslimtech.org/",
      dates: "January 2025",
      active: false,
      description:
        "Built a website for Muslim Tech Collaborative to help them showcase their projects and events.",
      technologies: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://muslimtech.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mtcwebsite.png",
    },
  ],
} as const;
