"use client";

import { type CSSProperties } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";
import type { Experience } from "@/data/experience";

type ExperienceCardProps = {
  experience: Experience;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

const STACK_SCALE_STEP = 0.03;
const SHRINK_WINDOW_EPSILON = 0.0001;

export default function ExperienceCard({ experience, index, total, progress }: ExperienceCardProps) {
  const stackDepth = total - 1 - index;
  const targetScale = 1 - stackDepth * STACK_SCALE_STEP;

  const slot = 1 / total;
  const shrinkStart = Math.min((index + 1) * slot, 1 - SHRINK_WINDOW_EPSILON);
  const shrinkEnd = Math.max(shrinkStart + SHRINK_WINDOW_EPSILON, 1);
  const scale = useTransform(progress, [shrinkStart, shrinkEnd], [1, targetScale]);

  return (
    <div
      className="sticky top-[calc(var(--stack-offset))] h-[85vh] md:top-[calc(2rem+var(--stack-offset))]"
      style={{ "--stack-offset": `${index * 28}px` } as CSSProperties}
    >
      <motion.div
        style={{ scale, transformOrigin: "top center" }}
        className="relative flex h-full flex-col gap-4 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:gap-6 sm:rounded-[50px] sm:p-6 md:gap-8 md:rounded-[60px] md:p-8"
      >
        <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
          <span
            className="font-black leading-none text-[#D7E2EA]"
            style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
          >
            {experience.number}
          </span>
          <div className="flex flex-col gap-1 pt-2 sm:pt-4">
            <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
              {experience.category}
            </span>
            <h3 className="text-2xl font-medium uppercase text-[#D7E2EA] sm:text-3xl md:text-4xl">
              {experience.name}
            </h3>
          </div>
        </div>

        <p className="max-w-3xl text-sm font-light leading-relaxed text-[#D7E2EA]/70 sm:text-base">
          {experience.description}
        </p>

        <div className="flex flex-1 gap-3">
          <div className="flex w-[40%] flex-col gap-3">
            <PlaceholderImage
              caption={experience.col1[0].caption}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <PlaceholderImage
              caption={experience.col1[1].caption}
              className="w-full flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-[60%]">
            <PlaceholderImage
              caption={experience.col2.caption}
              className="h-full w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
