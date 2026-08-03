import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiRedis,
  SiQdrant,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiCloudflare,
  SiPytorch,
  SiFigma,
} from "react-icons/si";
import { FaCoffee, FaAws } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";

export type TechLogo = {
  name: string;
  Icon: IconType;
  color: string;
};

export const row1Logos: TechLogo[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Java", Icon: FaCoffee, color: "#E76F00" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Prisma", Icon: SiPrisma, color: "#FFFFFF" },
  { name: "Redis", Icon: SiRedis, color: "#FF4438" },
];

export const row2Logos: TechLogo[] = [
  { name: "Qdrant", Icon: SiQdrant, color: "#DC244C" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Terraform", Icon: SiTerraform, color: "#844FBA" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#D7E2EA" },
  { name: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },
  { name: "OpenAI API", Icon: RiOpenaiFill, color: "#D7E2EA" },
  { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];
