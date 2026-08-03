import { Terminal, Cog, Cloud, CircuitBoard } from "lucide-react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import DecorativeIcon from "./DecorativeIcon";

const ABOUT_TEXT =
  "A computer science graduate from uc irvine with a 4.0 gpa, and an incoming electrical and computer engineering master's student at ucla, i build full-stack platforms and applied-ai systems -- from rag pipelines to automation tooling -- across react, node.js, and cloud-native infrastructure. Let's build something incredible together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      >
        <DecorativeIcon icon={Terminal} />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      >
        <DecorativeIcon icon={Cloud} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      >
        <DecorativeIcon icon={Cog} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      >
        <DecorativeIcon icon={CircuitBoard} />
      </FadeIn>

      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        About me
      </FadeIn>

      <div className="mt-10 flex flex-col items-center gap-16 sm:mt-14 sm:gap-20 md:mt-16 md:gap-24">
        <AnimatedText
          text={ABOUT_TEXT}
          className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA] text-[clamp(1rem,2vw,1.35rem)]"
        />
        <ContactButton />
      </div>
    </section>
  );
}
