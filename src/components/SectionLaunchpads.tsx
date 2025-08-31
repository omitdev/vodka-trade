import Image from "next/image";

const BTN = "[background:linear-gradient(135deg,#2A61FC_0%,#82F3FD_100%)]";
type Badge = { alt: string; src: string; angle: number; ring: 1 | 2 | 3 | 4 };

const BADGES: Badge[] = [
  { alt: "Ton.fun", src: "/partners/tonfun.png", angle: 210, ring: 4 },
  { alt: "DeDust.io", src: "/partners/dedust.png", angle: 20, ring: 4 },
  { alt: "STON.fi", src: "/partners/stonfi.png", angle: 240, ring: 3 },
  { alt: "Gas Pump", src: "/partners/gaspump.png", angle: 180, ring: 2 },
  { alt: "blum.io", src: "/partners/blum.png", angle: 340, ring: 3 },
  { alt: "Memes Lab", src: "/partners/lab.png", angle: 20, ring: 2 },
];

const BOT_URL = "https://t.me/VodkaTradeBot?start";

export default function SectionLaunchpads() {
  return (
    <section
      id="launchpads"
      className="relative overflow-x-clip py-28 md:py-36"
    >
      <div className="relative mx-auto aspect-square w-[86vw] max-w-[820px]">
        <Image
          src="/illus/community.png" // ⬅️ đặt ảnh duy nhất của bạn
          alt=""
          fill
          sizes="(max-width:820px) 86vw, 820px"
          className="pointer-events-none select-none object-contain md:object-cover -z-10"
          draggable={false}
          priority={false}
        />

        {/* fade đáy ảnh – mạnh hơn */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10
             h-[25%] bg-gradient-to-b
             from-transparent via-[rgba(4,9,20,.65)] to-[rgba(4,9,20,.98)]
             backdrop-blur-md"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 grid place-content-center text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white/90">
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              Snipe on Trending
            </span>
          </h3>
          <p className="mt-2 text-2xl md:text-3xl font-semibold text-white/25">
            TON Launchpads
          </p>

          <div className="mt-6">
            <a
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/30 shadow ${BTN}`}
            >
              More Details
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5 12h12l-5-5l1.4-1.4L21.8 12l-8.4 6.4L12 17l5-5H5z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Referral banner */}
      <div className="mx-auto max-w-5xl px-6 relative -mt-[90px] md:-mt-[112px] z-20">
        <div className="relative isolate rounded-2xl overflow-visible shadow-[0_10px_36px_rgba(2,10,28,.45)]">
          {/* BG base + Angular Gradient (không viền) */}
          <div
            className="absolute inset-0 -z-10 rounded-2xl"
            style={{
              background: `
      radial-gradient(80% 120% at 75% 60%, rgba(34,76,253,.55) 0%, rgba(34,76,253,.22) 45%, rgba(34,76,253,0) 70%),
      radial-gradient(120% 140% at 0% 0%, rgba(11,31,64,.45) 0%, rgba(11,31,64,0) 60%),
      linear-gradient(135deg, #04132B 0%, #08192F 35%, #0A1834 60%, #224CFD 100%)
    `,
            }}
          />

          {/* nhẹ lớp gloss phía trên (tuỳ, có thể giữ hoặc bỏ) */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 rounded-2xl
                    [background:linear-gradient(180deg,rgba(255,255,255,.06),transparent_35%)]"
          />

          {/* Ảnh tràn ra ngoài bên phải */}
          <div className="pointer-events-none absolute left-4 top-3/5 z-10 h-[140px] w-[240px] sm:h-[240px] sm:w-[420px] sm:left-auto sm:-right-4 -translate-y-1/2">
            <Image
              src="/illus/referral.png"
              alt="Referral Illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Nội dung */}
          <div className="relative z-20 grid gap-6 rounded-2xl p-4 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold text-white/90">
                Five-tier Referral System
              </h4>
              <p className="mt-1 text-sm text-white/70">
                Earn up to 50% in trading fee kickbacks.
              </p>
              <a
                href="#referral"
                className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/30 ${BTN}`}
              >
                Get Your Referral Link
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M10 17l5-5-5-5v10Z" />
                </svg>
              </a>
            </div>
            <div className="min-h-[160px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- sub components ---------- */

function Orbit({ size }: { size: string }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: size,
        height: size,
        boxShadow: "inset 0 0 0 1px rgba(56,132,255,.25)",
      }}
    />
  );
}

function Marker({ deg }: { deg: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70"
      style={{
        transform: `translate(-50%,-50%) rotate(${deg}deg) translate(${(41 / 100) * 50}%)`,
      }}
    />
  );
}

function Badge({ alt, src, angle, ring }: Badge) {
  // bán kính theo vòng (tỉ lệ với nửa chiều rộng)
  const RATIO = { 4: 0.48, 3: 0.38, 2: 0.28, 1: 0.18 } as const;
  const r = RATIO[ring] * 100; // % của nửa cạnh, dùng trick rotate+translate

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `translate(-50%,-50%) rotate(${angle}deg) translate(${r}%) rotate(${-angle}deg)`,
      }}
    >
      <div
        className="rounded-full p-[1px]
                      [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]"
      >
        <div className="flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,#0B1630_0%,#0A1834_100%)] px-3 py-1.5 ring-1 ring-white/10 shadow">
          <Image
            src={src}
            alt={alt}
            width={72}
            height={20}
            className="h-5 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
