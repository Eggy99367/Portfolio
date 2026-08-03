import type { LucideIcon } from "lucide-react";

type DecorativeIconProps = {
  icon: LucideIcon;
  className?: string;
};

export default function DecorativeIcon({ icon: Icon, className }: DecorativeIconProps) {
  return (
    <div
      className={`flex aspect-square items-center justify-center rounded-[28%] ${className ?? ""}`}
      style={{
        background: "linear-gradient(160deg, #3A4048 0%, #14161A 65%, #0C0C0C 100%)",
        boxShadow:
          "0 18px 40px -12px rgba(0,0,0,0.65), inset 0 1px 1px rgba(215,226,234,0.25), inset 0 -12px 20px rgba(0,0,0,0.5)",
      }}
    >
      <Icon className="h-[46%] w-[46%] text-[#D7E2EA]" strokeWidth={1.4} />
    </div>
  );
}
