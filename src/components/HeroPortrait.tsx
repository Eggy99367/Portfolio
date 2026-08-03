import { UserRound } from "lucide-react";

export default function HeroPortrait() {
  return (
    <div
      className="relative flex aspect-[3/4] w-full items-end justify-center overflow-hidden rounded-t-[999px]"
      style={{
        background: "linear-gradient(180deg, #2A2E33 0%, #0C0C0C 85%)",
      }}
    >
      <UserRound
        className="h-[70%] w-[70%] translate-y-[15%] text-[#646973]"
        strokeWidth={0.6}
      />
    </div>
  );
}
