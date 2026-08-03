"use client";

import { useEffect, useRef } from "react";
import { row1Logos, row2Logos, type TechLogo } from "@/data/techStack";

function LogoTile({ logo }: { logo: TechLogo }) {
  const { Icon, name, color } = logo;
  return (
    <div className="flex h-[140px] w-[220px] shrink-0 items-center justify-center rounded-2xl bg-[#141414] sm:h-[190px] sm:w-[300px] md:h-[270px] md:w-[420px]">
      <Icon className="h-[35%] w-[35%]" style={{ color }} aria-label={name} />
    </div>
  );
}

function MarqueeRow({
  logos,
  innerRef,
}: {
  logos: TechLogo[];
  innerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const tripled = [...logos, ...logos, ...logos];
  return (
    <div className="overflow-hidden">
      <div ref={innerRef} className="flex gap-3" style={{ willChange: "transform" }}>
        {tripled.map((logo, i) => (
          <LogoTile key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ overflowX: "clip" }}
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow logos={row1Logos} innerRef={row1Ref} />
        <MarqueeRow logos={row2Logos} innerRef={row2Ref} />
      </div>
    </section>
  );
}
