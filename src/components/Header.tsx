"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdRocketLaunch, MdMenu, MdClose } from "react-icons/md";

export default function Header() {
  const [open, setOpen] = useState(false);

  const BOT_URL = "https://t.me/VodkaTradeBot?start";
  const CHAT_URL = "https://t.me/VodkaTradeBot_Chat";

  const navItem =
    "relative z-10 rounded-full px-3 py-1 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 hover:bg-white/5 hover:ring-1 hover:ring-white/15 after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-px after:scale-x-0 after:bg-white/50 after:transition-transform after:duration-200 hover:after:scale-x-100";

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/brand/logo.png"
            alt="VODKATRADE"
            width={28}
            height={28}
            priority
          />
          <span className="font-semibold text-white">VODKATRADE</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block font-sans">
          <div
            className="relative inline-flex rounded-full p-[1px]
               [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]
               shadow-[0_14px_34px_rgba(2,10,28,.55)]"
          >
            <div
              className="relative flex items-center gap-4 rounded-full px-6 py-2 text-white/90
                 [background:linear-gradient(180deg,#102544_0%,#0A1A32_100%)]"
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-full opacity-80
                   [background:radial-gradient(130px_70px_at_95%_90%,rgba(34,76,253,.65),rgba(34,76,253,.18)_60%,transparent_70%)]"
              />
              <span
                className="pointer-events-none absolute inset-0 rounded-full
                   [background:linear-gradient(180deg,rgba(255,255,255,.08),transparent_35%)]"
              />
              <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />

              <Link href="#home" className={navItem}>
                Home
              </Link>
              <Link href="#about" className={navItem}>
                About
              </Link>
              <Link href="#features" className={navItem}>
                Features
              </Link>
              <a
                href={CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={navItem}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="ml-4 hidden md:block">
          <span className="inline-flex rounded-full p-[1px] [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]">
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white
                 transition-all duration-300 ease-out outline-none
                 [background:linear-gradient(135deg,#2A61FC_0%,#82F3FD_100%)]
                 hover:[background:linear-gradient(135deg,#3A71FF_0%,#9EF7FF_100%)]
                 shadow-[0_8px_26px_rgba(37,99,235,.35)]
                 hover:shadow-[0_16px_40px_rgba(37,99,235,.55)]
                 hover:-translate-y-0.5 active:translate-y-0
                 focus-visible:ring-2 focus-visible:ring-sky-300/60
                 overflow-hidden font-sans"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/20 blur-sm transition-transform duration-700 hover:translate-x-[220%]" />
              <MdRocketLaunch className="h-5 w-5" />
              Get Started
            </a>
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden grid h-10 w-10 z-[60] place-content-center rounded-xl ring-1 ring-white/15 text-white"
        >
          <MdMenu className={open ? "hidden" : "h-6 w-6"} />
          <MdClose className={open ? "h-6 w-6" : "hidden"} />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 z-40 px-4 pt-[72px] transition-all duration-300 ${
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-3"
        }`}
      >
        <div
          className="mx-auto max-w-7xl rounded-2xl p-[1px]
            [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]"
        >
          <div
            className="rounded-2xl p-4
              [background:linear-gradient(180deg,#102544_0%,#0A1A32_100%)] ring-1 ring-white/10"
          >
            <ul className="space-y-2 text-white/90">
              <li>
                <Link
                  href="#home"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-white/5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-white/5"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-white/5"
                >
                  Features
                </Link>
              </li>
              <li>
                <a
                  href={CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-white/5"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <a
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white
                  [background:linear-gradient(135deg,#2A61FC_0%,#82F3FD_100%)]
                  hover:[background:linear-gradient(135deg,#3A71FF_0%,#9EF7FF_100%)]
                  ring-1 ring-white/15"
              >
                <MdRocketLaunch className="h-5 w-5" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* hairline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/25" />
    </header>
  );
}
