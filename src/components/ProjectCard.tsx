"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "./LiveProjectButton";
import PlaceholderImage from "./PlaceholderImage";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

export default function ProjectCard({ project, index, total }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (total - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      className="sticky top-[calc(6rem+var(--stack-offset))] h-[85vh] md:top-[calc(8rem+var(--stack-offset))]"
      style={{ "--stack-offset": `${index * 28}px` } as CSSProperties}
    >
      <motion.div
        ref={cardRef}
        style={{ scale }}
        className="relative flex h-full flex-col gap-4 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:gap-6 sm:rounded-[50px] sm:p-6 md:gap-8 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pt-2 sm:pt-4">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
              </span>
              <h3 className="text-2xl font-medium uppercase text-[#D7E2EA] sm:text-3xl md:text-4xl">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.liveUrl} />
        </div>

        <p className="max-w-3xl text-sm font-light leading-relaxed text-[#D7E2EA]/70 sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-1 gap-3">
          <div className="flex w-[40%] flex-col gap-3">
            <PlaceholderImage
              caption={project.col1[0].caption}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <PlaceholderImage
              caption={project.col1[1].caption}
              className="w-full flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-[60%]">
            <PlaceholderImage
              caption={project.col2.caption}
              className="h-full w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
