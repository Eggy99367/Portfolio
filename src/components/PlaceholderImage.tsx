import { ImageIcon } from "lucide-react";
import type { CSSProperties } from "react";

type PlaceholderImageProps = {
  caption: string;
  className?: string;
  style?: CSSProperties;
};

export default function PlaceholderImage({ caption, className, style }: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden border border-[#D7E2EA]/15 bg-[radial-gradient(circle_at_1px_1px,rgba(215,226,234,0.12)_1px,transparent_0)] bg-[length:16px_16px] p-4 text-center ${className ?? ""}`}
      style={{ backgroundColor: "#141414", ...style }}
    >
      <ImageIcon className="h-6 w-6 text-[#D7E2EA]/40" strokeWidth={1.5} />
      <span className="max-w-[85%] text-[0.65rem] font-light uppercase tracking-wide text-[#D7E2EA]/40">
        {caption}
      </span>
    </div>
  );
}
