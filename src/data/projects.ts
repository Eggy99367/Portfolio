export type ProjectImage = {
  caption: string;
};

export type Project = {
  number: string;
  category: string;
  name: string;
  description: string;
  liveUrl: string;
  col1: [ProjectImage, ProjectImage];
  col2: ProjectImage;
};

export const projects: Project[] = [
  {
    number: "01",
    category: "Startup / Co-Founder",
    name: "Cliniway",
    description:
      "An AI-powered simulated-consultation and clinical training platform. Co-founded and built the core AI pipeline: a React/Node.js/PostgreSQL/Prisma consultation simulator where users interview a virtual patient, plus a RAG-based evaluation system (Qdrant, OpenAI API, Amazon S3) that grounds feedback in medical guidelines with a Redis-backed job queue. Deployed with Docker on Render, Terraform for infrastructure, and GitHub Actions for CI/CD.",
    liveUrl: "https://github.com/Eggy99367",
    col1: [
      { caption: "Simulated-consultation interface" },
      { caption: "RAG-based clinical feedback view" },
    ],
    col2: { caption: "Course video platform overview" },
  },
  {
    number: "02",
    category: "Personal / Academic",
    name: "Fabflix",
    description:
      "A full-stack movie shopping platform built with Java Servlets, MySQL, HTTPS, and reCAPTCHA for secure login, search, and checkout. Implemented connection pooling and full-text search, deployed on AWS EC2 with MySQL replication, and containerized with Docker + Kubernetes using sticky sessions and JWT authentication.",
    liveUrl: "https://github.com/Eggy99367/Fabflix",
    col1: [
      { caption: "Movie search and browse page" },
      { caption: "Checkout flow" },
    ],
    col2: { caption: "Docker + Kubernetes deployment architecture" },
  },
  {
    number: "03",
    category: "Research / Personal",
    name: "LLM Activation Steering via Sparse Autoencoders",
    description:
      "A mechanistic-interpretability project building an inference-time activation-steering pipeline for the Gemma-2-2b LLM, injecting interpretable SAE feature directions into the residual stream (TransformerLens, SAELens, Neuronpedia) to control sentiment and truthfulness without fine-tuning. Owned evaluation: built an automated LLM-judge to score steered vs. prompted generations on IMDB and TruthfulQA.",
    liveUrl: "https://github.com/Eggy99367",
    col1: [
      { caption: "Activation-steering pipeline diagram" },
      { caption: "Steered vs. baseline generation comparison" },
    ],
    col2: { caption: "IMDB / TruthfulQA evaluation results" },
  },
];
