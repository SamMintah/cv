import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  profile
  
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Samuel Mintah",
  initials: "SM",
  location: "Accra, Ghana",
  locationLink: "https://www.google.com/maps/place/Accra",
  about: "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: profile,
  personalWebsiteUrl: "https://linkfree.eddiehub.io/SamMintah",
  contact: {
    email: "sam.mintah01@gmail.com",
    tel: "+233536369414",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SamMintah",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "linkedin.com/in/samuel-mintah-a4878a158",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/kweku__mintah",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "OpenLabs (NIIT) Ghana",
      degree: "Software Development",
      start: "02/2022",
      end: "08/2023",
    },
    {
      school: "Kpando Senior High School",
      degree: "General Science",
      start: "04/2011",
      end: "06/2014",
    },
  ],
  work: [
    {
      company: "Esoko",
      link: "https://esoko.com",
      badges: [],
      title: "Software Developer",
      logo: JojoMobileLogo,
      start: "02/2023",
      end: "12/2023",
      description: ` Esoko is an agri-tech company empowering organizations with innovative technology and services to improve how market value chains work.
        Achievements/Tasks:
         Developed API for internal service management tool.
         Led the end-to-end development and integration of Esoko's APIs into MTN's mobile app, architecting and building the API infrastructure. This provided users seamless access to crucial agricultural services: Market Prices, Weather Forecasts, Agronomic Advisory, and Climate Smart Information.
         Conducted unit testing for software components, ensuring functionality and identifying and resolving bugs.
        Ensured high availability of backend systems.
      `,
      Documentation:" https://sammintah.github.io/agro-smart-api-doc/",

      technologies: ["JavaScript", "React", "Express.js", "MongoDB"],
    },    
    {
      company: "Central Tech Hub",
      link: "https://centraltechhub.com",
      badges: [],
      title: "Software Developer",
      logo: ClevertechLogo,
      start: "04/2022",
      end: "02/2023",
      description:
        "Central Tech Hub is a primary technology and entrepreneurship system that seeks to provide quality tech labor force, products, and services. I actively contributed to the creation of an administrative dashboard tailored for a client's construction project management needs and played a key role in a $200k software project from design to distribution.",
      Documentation:" ",

      technologies: ["React"],
    },
  ],
  skills: [
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Redis",
    "Firebase",
    "REST APIs",
    "PostgreSQL",
    "Docker",
    "RabbitMQ",
    "Linux",
    "GraphQL",
    "TypeScript",
    "Express.js",
    "OAuth 2.0",
    "GIT"
  ],
  projects: [
    {
      title: "aidexx",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Openai",
        "clerk",
        "prisma",
        "postgresSQL",
        "tailwindcss"
      ],
      description: "Aidexx AI project is an innovative SaaS platform that leverages cutting-edge artificial intelligence models to simplify and enhance various aspects of your workflow. From generating code snippets to creating stunning images and music compositions, Aidexx AI offers a comprehensive suite of intelligent tools.      ",
      logo: ConsultlyLogo,
      link: {
        label: "aidexx.com",
        href: "https://aidexx.vercel.app/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    }
  ],
  openSourceContributions: [
    {
      organization: "The Palisadoes Foundation",
      link: "https://palisadoesfoundation.org",
      start: "03/2023",
      end: "Present",
      description: "Contributed to Talawa-admin .Talawa is a modular open source project to manage group activities of both non-profit organizations and businesses.",
    }
  ],
  certificates: [
    {
      title: "Pre-MEST Software Development Program",
      issuer: "MEST & Mastercard Foundation",
      start: "08/2022",
      end: "11/2022",
    },
    {
      title: "Web Development Foundation - Udacity",
      issuer:"Udacity",
      start: "05/2022",
      end: "06/2022",
    },
    {
      title: "JavaScript Programming Foundations - Udacity",
      issuer:"Udacity",
      start: "06/2022",
      end: "07/2022",
    },
  ],
  interests: ["Remote Work", "IoT", "Artificial Intelligence", "Machine Learning", "Music", "Art", "Web3"],

} as const;
