"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const BOT_URL = "https://t.me/VodkaTradeBot?start";

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden pt-18 text-center"
    >
      {/* BG */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        // className="-z-10 object-cover object-top"
        className="absolute -z-10 object-cover"
        // style={{ inset: "-1px" }}
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
          <a
            href={BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/25"
          >
            Start Trading Now!
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5Z" />
            </svg>
          </a>

          <Link
            href="#docs"
            className="inline-flex items-center gap-2 rounded-full bg-[#0b0e1a]/80 px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/10"
          >
            Open Docs
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10 17l5-5-5-5v10Z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
