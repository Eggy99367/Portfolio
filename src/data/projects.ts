export type ProjectImage = {
  caption: string;
};

export type Project = {
  number: string;
  category: string;
  name: string;
  description: string;
  liveUrl?: string;
  col1: [ProjectImage, ProjectImage];
  col2: ProjectImage;
};

export const projects: Project[] = [
  {
    number: "01",
    category: "Client / Academic Initiative",
    name: "AI Youth Training Program Website",
    description:
      "Built the event website for a government-backed \"Youth AI Practical Training Program\" run by Shih Chien University, displaying program details, course schedules, and partner-company activities for an AI upskilling initiative in the retail and food-service industries. Built with Next.js, TypeScript, and CSS.",
    liveUrl: "https://github.com/usc-sai-youth/usc-sai-youth",
    col1: [
      { caption: "Program details and schedule page" },
      { caption: "Partner-company activity listings" },
    ],
    col2: { caption: "Event website overview" },
  },
  {
    number: "02",
    category: "Research / Personal",
    name: "LLM Activation Steering via Sparse Autoencoders",
    description:
      "A mechanistic-interpretability project building an inference-time activation-steering pipeline for the Gemma-2-2b LLM, injecting interpretable SAE feature directions into the residual stream (TransformerLens, SAELens, Neuronpedia) to control sentiment and truthfulness without fine-tuning. Owned evaluation: built an automated LLM-judge to score steered vs. prompted generations on IMDB and TruthfulQA.",
    col1: [
      { caption: "Activation-steering pipeline diagram" },
      { caption: "Steered vs. baseline generation comparison" },
    ],
    col2: { caption: "IMDB / TruthfulQA evaluation results" },
  },
  {
    number: "03",
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
    number: "04",
    category: "Personal / Academic",
    name: "3D Teapot Reconstruction via Active Stereo Vision",
    description:
      "Reconstructed high-fidelity 3D meshes from 2D images using structured light (Gray code) and calibrated stereo cameras. Resolved misalignment and ghosting artifacts via ICP and Global Pivot Calibration to align multi-view point clouds.",
    liveUrl: "https://github.com/Eggy99367/3D-Teapot-Reconstruction",
    col1: [
      { caption: "Structured-light capture setup" },
      { caption: "Point-cloud alignment via ICP" },
    ],
    col2: { caption: "Reconstructed 3D teapot mesh" },
  },
  {
    number: "05",
    category: "Personal / Academic",
    name: "QR-based Event Attendance System",
    description:
      "Developed an event attendance system using React with Google OAuth authentication and Google APIs. Automated QR-code ticketing and supported on-site scanning, reducing check-in time by 70%.",
    col1: [
      { caption: "Google OAuth sign-in flow" },
      { caption: "QR ticketing and on-site scanning" },
    ],
    col2: { caption: "Attendance dashboard" },
  },
  {
    number: "06",
    category: "Personal / Academic",
    name: "WebReg Redesign",
    description:
      "Redesigned UC Irvine's WebReg course-registration tool with React, improving information flow, user experience, and responsive UI.",
    col1: [
      { caption: "Redesigned course search" },
      { caption: "Responsive registration flow" },
    ],
    col2: { caption: "Before / after UI comparison" },
  },
  {
    number: "07",
    category: "Personal / Academic",
    name: "Mini Search Engine",
    description:
      "Implemented a lightweight search engine with tokenization, stopword removal, and inverted-index construction. Built a query processor supporting keyword and boolean retrieval, with relevance ranking based on term frequency.",
    col1: [
      { caption: "Inverted-index construction" },
      { caption: "Boolean query processor" },
    ],
    col2: { caption: "Search relevance ranking results" },
  },
];
