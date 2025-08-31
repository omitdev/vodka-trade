// components/SectionEdge.tsx
import Image from "next/image";
import React from "react";
import BrandPill from "./ui/BrandPill";

const GRAD = "[background:linear-gradient(135deg,#2A61FC_0%,#82F3FD_100%)]";

function TopBadge({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`absolute z-10 grid h-12 w-12 place-content-center rounded-full ring-1 ring-white/45 shadow-[0_10px_32px_rgba(56,189,248,.35)] ${GRAD} ${className}`}
    >
      {children}
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[420px] rounded-3xl overflow-hidden">
      <div className="rounded-3xl p-[1px] [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]">
        <div
          className="relative rounded-3xl px-7 py-8 text-white/90 shadow-[0_16px_44px_rgba(2,10,28,.45)]
                        [background:linear-gradient(180deg,#0B1630_0%,#0A1834_100%)]"
        >
          <div
            className="pointer-events-none absolute -right-12 bottom-0 h-48 w-48 rounded-full
                          bg-[radial-gradient(closest-side,rgba(59,130,246,.35),transparent_70%)]"
          />
          <svg
            className="absolute left-4 top-4 h-3 w-3 text-white/70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
          </svg>
          <svg
            className="absolute right-4 top-4 h-3 w-3 text-white/70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" />
          </svg>
          <h4 className="mb-3 text-[22px] font-semibold leading-tight">
            {title}
          </h4>
          <p className="text-sm leading-relaxed text-white/70">{desc}</p>
          <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
      </div>
    </div>
  );
}

export default function SectionEdge() {
  return (
    <section id="features" className="relative overflow-x-clip p-20">
      {/* glow nhẹ 2 bên */}
      <div
        className="pointer-events-none absolute -left-64 top-10 h-[600px] w-[300px] -z-10 rounded-full blur-[160px] opacity-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(42,97,252,.9), rgba(130,243,253,.4))",
        }}
      />

      <div
        className="pointer-events-none absolute -right-64 top-30 h-[600px] w-[300px] -z-10 rounded-full blur-[160px] opacity-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(42,97,252,.9), rgba(130,243,253,.4))",
        }}
      />

      <div className="text-center">
        <BrandPill />
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Unleash your edge in
          </span>
        </h2>
        <p className="mt-2 text-3xl md:text-5xl font-semibold text-white/25">
          every trade
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl px-6">
        <div className="relative h-[210px]">
          <svg
            className="absolute inset-0"
            viewBox="0 0 1000 210"
            preserveAspectRatio="none"
          >
            <path
              d="M500 60 H 330 Q 260 60 260 120 V 170"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M500 60 H 670 Q 740 60 740 120 V 170"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M500 60 V 170"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="120"
              y1="60"
              x2="880"
              y2="60"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="1"
            />
          </svg>

          <div className="absolute left-1/2 top-[60px] -translate-x-1/2 -translate-y-1/2">
            <div
              className="relative h-16 w-16 rounded-full ring-1 ring-white/40 grid place-content-center"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(130,243,253,.35), transparent 70%)",
              }}
            >
              <div
                className={`h-10 w-10 rounded-full ${GRAD} ring-1 ring-white/60 grid place-content-center`}
              >
                <svg
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0-5v3M12 19v3M2 12h3M19 12h3" />
                </svg>
              </div>
              <span className="pointer-events-none absolute inset-[-8px] rounded-full ring-1 ring-white/18" />
              <span className="pointer-events-none absolute inset-[-14px] rounded-full ring-1 ring-white/12" />
              <span className="pointer-events-none absolute inset-[-20px] rounded-full ring-1 ring-white/8" />
            </div>
          </div>

          <TopBadge className="left-[26%] top-[170px] -translate-x-1/2 -translate-y-1/2">
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 3h4v6h-4zM5 12h14v9H5z" />
            </svg>
          </TopBadge>
          <TopBadge className="left-1/2 top-[170px] -translate-x-1/2 -translate-y-1/2">
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="m2 21 9-4 9 4-9-18-9 18Z" />
            </svg>
          </TopBadge>
          <TopBadge className="left-[74%] top-[170px] -translate-x-1/2 -translate-y-1/2">
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z" />
            </svg>
          </TopBadge>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 pt-6 md:grid-cols-3">
          <Card
            title="Advanced Tools For Smart Traders"
            desc="Stay ahead with live charts, wallet tracking, and instant trade insights."
          />
          <Card
            title="Ultra Sniper using Private Nodes"
            desc="Experience lightning speed with private nodes — secure, stealthy, unstoppable."
          />
          <Card
            title="Seamless Trading, Maximum Control"
            desc="Cutting-edge tech for effortless, reliable, and profitable trading."
          />
        </div>
      </div>
    </section>
  );
}
