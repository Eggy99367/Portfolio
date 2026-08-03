import { ImageIcon } from "lucide-react";
import type { CSSProperties } from "react";

type PlaceholderImageProps = {
  caption: string;
  className?: string;
  style?: CSSProperties;
  theme?: "dark" | "light";
};

export default function PlaceholderImage({ caption, className, style, theme = "dark" }: PlaceholderImageProps) {
  const isLight = theme === "light";

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden border p-4 text-center ${
        isLight
          ? "border-[#0C0C0C]/15 bg-[radial-gradient(circle_at_1px_1px,rgba(12,12,12,0.12)_1px,transparent_0)]"
          : "border-[#D7E2EA]/15 bg-[radial-gradient(circle_at_1px_1px,rgba(215,226,234,0.12)_1px,transparent_0)]"
      } bg-[length:16px_16px] ${className ?? ""}`}
      style={{ backgroundColor: isLight ? "#ECECEC" : "#141414", ...style }}
    >
      <ImageIcon className={`h-6 w-6 ${isLight ? "text-[#0C0C0C]/40" : "text-[#D7E2EA]/40"}`} strokeWidth={1.5} />
      <span
        className={`max-w-[85%] text-[0.65rem] font-light uppercase tracking-wide ${
          isLight ? "text-[#0C0C0C]/40" : "text-[#D7E2EA]/40"
        }`}
      >
        {caption}
      </span>
    </div>
  );
}
