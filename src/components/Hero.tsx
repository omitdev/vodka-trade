import Image from "next/image";
import Link from "next/link";
import { GrLinkNext } from "react-icons/gr";
import { MdRocketLaunch } from "react-icons/md";
import { PiBookFill } from "react-icons/pi";
import Starfield from "./ui/Starfield";

export default function Hero() {
  const BOT_URL = "https://t.me/VodkaTradeBot?start";
  const DOCS_URL = "https://vodkatrade.gitbook.io/vodkatrade-docs/";

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden pt-16 text-center"
    >
      <Starfield />

      {/* BG */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={70}
        className="absolute -z-10 object-cover"
      />

      {/* Content shifted up */}
      <div className="relative z-10 mx-auto max-w-4xl -translate-y-16 md:-translate-y-28">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Next-Gen Trading
          </span>
        </h1>
        <p className="mt-4 text-3xl md:text-5xl font-semibold text-white/25">
          On TON
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          {/* Primary CTA */}
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full
                       bg-gradient-to-r from-sky-400 to-blue-600 px-5 py-3 text-sm font-medium text-white
                       shadow-lg shadow-blue-600/25 transition-all duration-200 ease-out will-change-transform
                       [background-size:200%_100%] hover:[background-position:100%_0%]
                       hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(37,99,235,.45)] focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-sky-300/70"
          >
            {/* sheen */}
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200
                         [background:linear-gradient(180deg,rgba(255,255,255,.14),transparent_40%)]
                         group-hover:opacity-100"
            />
            <MdRocketLaunch className="h-5 w-5" />
            <span className="relative font-sans">Start Trading Now!</span>
            <GrLinkNext className="h-4 w-4 opacity-80" />
          </a>

          {/* Secondary CTA */}
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-full p-[1px]
             [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]
             transition-all duration-200 hover:-translate-y-0.5
             hover:shadow-[0_16px_40px_rgba(2,10,28,.6)]"
          >
            <span
              className="relative isolate inline-flex items-center gap-2 rounded-full px-5 py-3
               text-sm font-medium text-white ring-1 ring-white/10
               transition-colors duration-200 group-hover:ring-white/20"
              style={{
                background: "linear-gradient(180deg,#102544 0%,#0A1A32 100%)",
              }}
            >
              {/* highlight xanh base */}
              <span
                className="pointer-events-none absolute inset-0 rounded-full opacity-80 transition-opacity duration-200"
                style={{
                  background:
                    "radial-gradient(130px 70px at 100% 95%, rgba(34,76,253,.65), rgba(34,76,253,.18) 50%, transparent 60%)",
                }}
              />
              {/* glow khi hover */}
              <span
                className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200
                 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(220px 120px at 80% 50%, rgba(130,243,253,.22), transparent 70%)",
                }}
              />
              {/* gloss */}
              <span
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg,rgba(255,255,255,.08),transparent 35%)",
                }}
              />

              <PiBookFill className="h-5 w-5" />
              <span className="relative font-sans">Open Docs</span>
              <GrLinkNext className="h-4 w-4 opacity-80" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
