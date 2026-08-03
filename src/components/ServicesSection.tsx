import FadeIn from "./FadeIn";
import { skills } from "@/data/skills";

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Skills
      </FadeIn>

      <div className="mx-auto flex max-w-5xl flex-col">
        {skills.map((skill, i) => (
          <FadeIn
            key={skill.number}
            delay={i * 0.1}
            className="flex items-start gap-6 border-t py-8 last:border-b sm:gap-10 sm:py-10 md:gap-14 md:py-12"
            style={{ borderColor: "rgba(12, 12, 12, 0.15)" }}
          >
            <span
              className="shrink-0 font-black text-[#0C0C0C]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
            >
              {skill.number}
            </span>
            <div className="flex flex-col gap-3 pt-2 sm:gap-4">
              <h3
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {skill.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
              >
                {skill.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
