import Image from "next/image";

export default function HeroPortrait() {
  return (
    <div
      className="relative flex aspect-[3/4] w-full items-end justify-center overflow-hidden rounded-t-[999px]"
      // style={{
      //   background: "linear-gradient(180deg, #2A2E33 0%, #0C0C0C 85%)",
      // }}
    >
      <Image
        src="/images/avatar.png"
        alt="Vincent Chen"
        width={1411}
        height={1437}
        priority
        sizes="(min-width: 1024px) 520px, (min-width: 640px) 360px, 280px"
        className="h-auto w-full"
      />
    </div>
  );
}
