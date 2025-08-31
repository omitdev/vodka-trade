"use client";
// components/SectionIntegrations.tsx
import Image from "next/image";
import BrandPill from "./ui/BrandPill";
import { motion } from "framer-motion";

const partners = [
  { src: "/partners/dedust.png", alt: "DeDust.io" },
  { src: "/partners/stonfi.png", alt: "STON.fi" },
  { src: "/partners/tonfun.png", alt: "Ton.fun" },
  { src: "/partners/lab.png", alt: "Memeslab" },
  { src: "/partners/blum.png", alt: "blum.io" },
  { src: "/partners/gaspump.png", alt: "GasPump" },
];

function Pill({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="shrink-0 rounded-full p-[1px] [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]">
      <div className="flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,#0B1630_0%,#0A1834_100%)] px-3 py-1.5 ring-1 ring-white/10 shadow">
        <Image
          src={src}
          alt={alt}
          width={90}
          height={24}
          className="h-5 w-auto sm:h-6"
        />
        <span className="hidden sm:inline text-xs sm:text-sm text-white/85 whitespace-nowrap">
          {alt}
        </span>
      </div>
    </div>
  );
}

function MarqueeLTR({
  items,
  duration = 26,
}: {
  items: { src: string; alt: string }[];
  duration?: number;
}) {
  const Row = (
    <div className="flex items-center gap-1 ml-1 lg:ml-6 lg:gap-6 whitespace-nowrap">
      {items.map((p) => (
        <Pill key={p.alt} {...p} />
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden w-full min-h-[48px] sm:min-h-[56px]">
      {/* fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[var(--background,#0d0c16)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[var(--background,#0d0c16)] to-transparent" />

      <motion.div
        className="absolute left-0 top-0 will-change-transform"
        style={{ display: "inline-flex" }}
        animate={{ x: ["0%", "100%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {Row}
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute left-0 top-0 will-change-transform"
        style={{ display: "inline-flex" }}
        animate={{ x: ["-100%", "0%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {Row}
      </motion.div>

      {/* giữ chiều cao */}
      <div className="invisible">{Row}</div>
    </div>
  );
}

export default function SectionIntegrations() {
  return (
    <section className="relative overflow-x-clip py-24 md:py-32">
      <Image
        src="/bg/world-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-center"
      />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <BrandPill />

        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Integrated with TON’s Top DEXs,
          </span>
        </h2>
        <p className="mt-1 text-2xl md:text-4xl font-semibold text-white/35">
          Launchpads &amp; Protocols
        </p>

        <div className="mt-10">
          <MarqueeLTR items={partners} duration={24} />
        </div>
      </div>
    </section>
  );
}
