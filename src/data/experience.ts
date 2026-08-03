export type ExperienceImage = {
  caption: string;
};

export type Experience = {
  number: string;
  category: string;
  name: string;
  description: string;
  col1: [ExperienceImage, ExperienceImage];
  col2: ExperienceImage;
};

export const experience: Experience[] = [
  {
    number: "01",
    category: "Software Engineer, Co-Founder · Sep 2025 – Present",
    name: "Cliniway",
    description:
      "Co-founded Cliniway, a simulated-consultation and clinical training platform, and designed its core AI pipeline. Built a post-course simulated consultation system (React, Node.js, PostgreSQL, Prisma) where users interview a virtual patient, perform exams, order tests, and write SOAP notes, plus a RAG-based evaluation system (Qdrant, OpenAI API, Amazon S3) that grounds feedback in medical guidelines with a Redis-backed job queue. Deployed on Render with Docker and Terraform, with CI/CD via GitHub Actions, and built an online-course video platform delivered via Cloudflare.",
    col1: [
      { caption: "Simulated-consultation interface" },
      { caption: "RAG-based clinical feedback pipeline" },
    ],
    col2: { caption: "Course video platform overview" },
  },
  {
    number: "02",
    category: "Software Development Intern · Jul 2025 – Aug 2025",
    name: "KIOXIA Corporation",
    description:
      "Set up SSD test benches and built a Raspberry Pi–based central control and monitoring system for a fleet of test machines, streaming measurement data and control commands to a test dispatch platform (C++, JavaScript). Executed hardware validation flows including SSD power-consumption characterization under Modern Standby, automated test-data retrieval into Power BI, designed PostgreSQL/MySQL schemas for measurement data, and built a React automation dispatch platform with proactive alerting.",
    col1: [
      { caption: "Raspberry Pi test-bench control system" },
      { caption: "Power BI measurement dashboard" },
    ],
    col2: { caption: "React automation dispatch platform" },
  },
  {
    number: "03",
    category: "Full-Stack Developer · Feb 2024 – Jul 2024",
    name: "Group Buying Platform",
    description:
      "Built a LINE Chatbot to streamline the ordering workflow for a client's group-buying business and developed a React-based dashboard for order and inventory management. Analyzed data requirements, created ER diagrams, and designed an efficient MySQL schema, then containerized the chatbot, dashboard, and database with Docker for smooth API-based data transfer.",
    col1: [
      { caption: "LINE Chatbot ordering flow" },
      { caption: "React management dashboard" },
    ],
    col2: { caption: "Dockerized service architecture" },
  },
  {
    number: "04",
    category: "Research and Development Intern · Jun 2023 – Jul 2023",
    name: "Billion Pixels Optics Co.",
    description:
      "Performed camera-module testing and data collection to build datasets supporting evaluation and improvement. Collaborated with engineers to analyze test data and suggest adjustments, and delivered prototypes and insights to key clients such as ASUS, improving stakeholder engagement.",
    col1: [
      { caption: "Camera-module test setup" },
      { caption: "Test data collection & analysis" },
    ],
    col2: { caption: "Client prototype delivery" },
  },
];
