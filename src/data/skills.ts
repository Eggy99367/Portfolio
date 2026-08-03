export type Skill = {
  number: string;
  name: string;
  description: string;
};

export const skills: Skill[] = [
  {
    number: "01",
    name: "Full-Stack Development",
    description:
      "Building end-to-end web applications with React, Next.js, Node.js, and TypeScript -- from responsive interfaces to scalable REST APIs.",
  },
  {
    number: "02",
    name: "AI & RAG Pipelines",
    description:
      "Designing retrieval-augmented generation systems and LLM-powered features with OpenAI APIs and Qdrant, grounding model outputs in real, verifiable data.",
  },
  {
    number: "03",
    name: "Backend & Databases",
    description:
      "Architecting reliable backend systems and schemas with PostgreSQL, MySQL, and Prisma, backed by Redis-powered queues for asynchronous processing.",
  },
  {
    number: "04",
    name: "DevOps & Cloud",
    description:
      "Deploying and scaling applications with Docker and Kubernetes on AWS, managing infrastructure as code with Terraform and automating CI/CD with GitHub Actions.",
  },
  {
    number: "05",
    name: "Data & Automation",
    description:
      "Building automation platforms and data pipelines that connect hardware, test systems, and dashboards for real-time visualization and monitoring.",
  },
];
