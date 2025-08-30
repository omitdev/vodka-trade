import Link from "next/link";
import Image from "next/image";
import { MdRocketLaunch } from "react-icons/md";

export default function Header() {
  const BOT_URL = "https://t.me/VodkaTradeBot?start";

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
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

        {/* Nav */}
        <nav className="hidden md:block">
          {/* viền gradient */}
          <div
            className="relative inline-flex rounded-full p-[1px]
               [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]
               shadow-[0_14px_34px_rgba(2,10,28,.55)]"
          >
            {/* thân pill */}
            <div
              className="relative flex items-center gap-10 rounded-full px-10 py-2 text-white/90
                 [background:linear-gradient(180deg,#102544_0%,#0A1A32_100%)]"
            >
              {/* highlight xanh tập trung giữa (gần “Features”) */}
              <span
                className="pointer-events-none absolute inset-0 rounded-full opacity-80
                   [background:radial-gradient(130px_70px_at_95%_90%,rgba(34,76,253,.65),rgba(34,76,253,.18)_60%,transparent_70%)]"
              />
              {/* gloss nhẹ phía trên */}
              <span
                className="pointer-events-none absolute inset-0 rounded-full
                   [background:linear-gradient(180deg,rgba(255,255,255,.08),transparent_35%)]"
              />
              {/* inner stroke */}
              <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />

              <Link
                href="#home"
                className="relative text-md font-thin hover:text-white"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="relative text-md font-thin hover:text-white"
              >
                About
              </Link>
              <Link
                href="#features"
                className="relative text-md font-thin hover:text-white"
              >
                Features
              </Link>
              <Link
                href="#contact"
                className="relative text-md font-thin hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* CTA → Telegram bot (gradient #2A61FC → #82F3FD + icon) */}
        {/* CTA → Telegram bot với BORDER GRADIENT */}
        <div className="ml-4">
          <span
            className="inline-flex rounded-full p-[1px]
               [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]"
          >
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2
                 text-sm font-semibold text-white shadow transition hover:opacity-90
                 [background:linear-gradient(135deg,#2A61FC_0%,#82F3FD_100%)]"
            >
              <MdRocketLaunch className="h-5 w-5" />
              Get Started
            </a>
          </span>
        </div>
      </div>

      {/* hairline under header */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/25" />
    </header>
  );
}
