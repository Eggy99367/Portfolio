import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:yhchen.tw0109@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/Eggy99367", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yhchen0109/", icon: FaLinkedin },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 -mt-10 flex flex-col items-center rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-32"
    >
      <FadeIn
        as="h2"
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Let&apos;s Talk
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.1}
        className="mt-8 max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA] text-[clamp(1rem,2vw,1.35rem)]"
      >
        Have a project in mind or just want to connect? My inbox is open.
      </FadeIn>

      <FadeIn delay={0.2} className="mt-10">
        <ContactButton href="mailto:yhchen.tw0109@gmail.com" />
      </FadeIn>

      <FadeIn delay={0.3} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-base"
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            {label}
          </a>
        ))}
      </FadeIn>
    </section>
  );
}
