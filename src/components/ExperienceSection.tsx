"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import FadeIn from "./FadeIn";
import ExperienceCard from "./ExperienceCard";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="experience"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn
        as="h2"
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Experience
      </FadeIn>

      <div ref={listRef} className="mx-auto mt-4 max-w-6xl">
        {experience.map((item, i) => (
          <ExperienceCard
            key={item.number}
            experience={item}
            index={i}
            total={experience.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
