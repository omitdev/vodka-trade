import Image from "next/image";
import BrandPill from "./ui/BrandPill";

function Card({
  title,
  desc,
  bg,
}: {
  title: string;
  desc: string;
  bg: string;
}) {
  return (
    <figure
      className="group relative h-[222px] w-[240px] overflow-hidden rounded-2xl bg-[#0d0c16]
                 transition-transform duration-300 ease-out will-change-transform hover:cursor-pointer
                 hover:-translate-y-1 hover:scale-[1.02] focus-within:-translate-y-1 focus-within:scale-[1.02]"
    >
      <Image
        src={bg}
        alt=""
        fill
        sizes="240px"
        draggable={false}
        priority={false}
        className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* viền màu #0d0c16 */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl [box-shadow:inset_0_0_0_1px_#0d0c16]" />
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
                       group-hover:opacity-100 [box-shadow:inset_0_0_0_1px_#0d0c16,inset_0_20px_60px_rgba(13,12,22,.35)]"
      />

      <figcaption className="absolute inset-x-0 top-0 z-10 w-[75%] p-5 text-white">
        <h4 className="mb-4 text-[17px] font-semibold leading-tight">
          {title}
        </h4>
        <p className="text-[13px] leading-relaxed text-white">{desc}</p>
      </figcaption>
    </figure>
  );
}

export default function SectionToolkit() {
  const cards = [
    {
      title: "Millisecond Execution",
      desc: "Trade in milliseconds — stay ahead and secure profits fast.",
      bg: "/bg/bg-toolkit-1.png",
    },
    {
      title: "Gas-Saving Engine",
      desc: "Optimized for TON — max efficiency, zero wasted gas.",
      bg: "/bg/bg-toolkit-2.png",
    },
    {
      title: "One-tap Smart Trade Tool",
      desc: "Pre-set strategies, one-tap execution. Easy and precise.",
      bg: "/bg/bg-toolkit-3.png",
    },
    {
      title: "Multi-Snipe Power",
      desc: "Snipe multiple tokens in parallel — dominate listings instantly.",
      bg: "/bg/bg-toolkit-4.png",
    },
    {
      title: "Zero-Delay Trading",
      desc: "Instant response. No delay, no warm-up. Just trade.",
      bg: "/bg/bg-toolkit-5.png",
    },
    {
      title: "Live Profit Dashboard",
      desc: "Track fees, PnL, and trades in one dashboard.",
      bg: "/bg/bg-toolkit-6.png",
    },
    {
      title: "Simple & Clean Interface",
      desc: "Clean UI designed for both new and pro traders.",
      bg: "/bg/bg-toolkit-7.png",
    },
  ];

  const top = cards.slice(0, 4);
  const bottom = cards.slice(4);

  return (
    <section id="toolkit" className="relative overflow-x-clip py-24 md:py-32">
      {/* BG toàn section */}
      <Image
        src="/bg/toolkid-bg.png"
        alt="Toolkit Background"
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      {/* lớp tối để chữ dễ đọc (tuỳ chỉnh opacity) */}
      <div className="absolute inset-0 -z-10 bg-[#070b14]/60" />

      <div className="text-center">
        <BrandPill />
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
          <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Your Complete Trading Toolkit
          </span>
        </h2>
        <p className="mt-2 text-3xl md:text-5xl font-semibold text-white/25">
          on TON
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6">
        <div className="mx-auto w-fit grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {top.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
        <div className="mx-auto mt-5 w-fit grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {bottom.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
