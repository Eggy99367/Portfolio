type LiveProjectButtonProps = {
  href: string;
  className?: string;
};

export default function LiveProjectButton({ href, className }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#0C0C0C] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#0C0C0C] transition-colors duration-200 hover:bg-[#0C0C0C]/10 sm:px-10 sm:py-3.5 sm:text-base ${className ?? ""}`}
    >
      Live Project
    </a>
  );
}
