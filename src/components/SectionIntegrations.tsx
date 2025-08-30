// components/SectionIntegrations.tsx
import Image from "next/image";
import BrandPill from "./ui/BrandPill";

export default function SectionIntegrations() {
  // đặt ảnh bản đồ vào /public/bg/world-map.png (hoặc .svg/.webp)
  const partners = [
    { src: "/partners/dedust.png", alt: "DeDust.io" },
    { src: "/partners/gaspump.png", alt: "GasPump" },
    { src: "/partners/stonfi.png", alt: "STON.fi" },
    { src: "/partners/tonfun.png", alt: "TONFUN" },
    { src: "/partners/lab.png", alt: "MEMESLAB" },
    { src: "/partners/gaspump.png", alt: "GASPUMP" },
  ];

  return (
    <section className="relative overflow-x-clip py-24 md:py-32">
      <Image
        src="/bg/world-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-center"
        priority={false}
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

        {/* UPDATING */}
        <div className="mt-10 select-none text-5xl md:text-[96px] font-extrabold tracking-wide">
          <span className="bg-gradient-to-b from-[#82F3FD] to-[#2A61FC] bg-clip-text text-transparent drop-shadow-[0_6px_30px_rgba(37,99,235,.35)]">
            UPDATING
          </span>
        </div>

        {/* Partner badges */}
        <ul className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {partners.map((p) => (
            <li
              key={p.alt}
              className="rounded-full p-[1px]
                         [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]"
            >
              <div className="flex items-center rounded-full bg-[linear-gradient(180deg,#0B1630_0%,#0A1834_100%)] px-3 py-2 ring-1 ring-white/10">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={90}
                  height={24}
                  className="h-6 w-auto mr-2"
                />
                {p.alt}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
