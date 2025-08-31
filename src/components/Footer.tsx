// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const TG_URL = "https://t.me/VodkaTrade";
  const X_URL = "https://x.com/VodkaTrade";

  const features = [
    ["#", "Lightning Trading"],
    ["#", "Ultra-fast Sniper"],
    ["#", "Trading Portfolio"],
    ["#", "Copy Trading"],
    ["#", "Token Transfer"],
    ["#", "Multi-wallet Support"],
  ];
  const resources = [
    ["/docs", "Docs"],
    ["https://github.com/", "Github"],
  ];
  const contacts = [
    [TG_URL, "Telegram"],
    [X_URL, "Twitter / X"],
  ];

  return (
    <footer className="relative text-sm text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* 2 phần: trái = brand, phải = 3 cột */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left: brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/brand/logo.png"
                alt="VODKATRADE"
                width={26}
                height={26}
              />
              <span className="font-semibold text-white">VODKATRADE</span>
            </div>
            <p className="mt-4 text-xs leading-6 text-white/55 font-sans">
              © 2025 VodkaTrade team.
              <br className="font-sans" />
              All Rights Reserved.
            </p>
          </div>

          {/* Right: 3 columns, chia đều */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="mb-3 font-semibold text-white/85">Features</h4>
              <ul className="space-y-2">
                {features.map(([href, label]) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-white font-sans">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white/85">Resources</h4>
              <ul className="space-y-2">
                {resources.map(([href, label]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="hover:text-white font-sans"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white/85">Contact us</h4>
              <ul className="space-y-2">
                {contacts.map(([href, label]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white font-sans"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
