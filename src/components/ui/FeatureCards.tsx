import Image from "next/image";

type Feature = {
  title: string;
  desc: string;
  icon: string;
  bg: string; // ảnh nền blob
};

const features: Feature[] = [
  {
    title: "Advanced Tools For Smart Traders",
    desc: "Stay ahead with live charts, wallet tracking, and instant trade insights.",
    icon: "/icons/lightbulb.svg",
    bg: "/card-bg-1.png",
  },
  {
    title: "Ultra Sniper using Private Nodes",
    desc: "Experience lightning speed with private nodes – secure, stealthy, unstoppable.",
    icon: "/icons/sniper.svg",
    bg: "/card-bg-2.png",
  },
  {
    title: "Seamless Trading, Maximum Control",
    desc: "Cutting-edge tech for effortless, reliable, and profitable trading.",
    icon: "/icons/control.svg",
    bg: "/card-bg-3.png",
  },
];

function FeatureCard({ title, desc, icon, bg }: Feature) {
  return (
    <div className="relative w-full max-w-sm rounded-2xl">
      {/* Border */}
      <div className="rounded-2xl p-[1px] [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]">
        {/* Content */}
        <div
          className="relative overflow-hidden rounded-2xl p-6 text-white/90 shadow-[0_12px_40px_rgba(2,10,28,.35)]
          [background:linear-gradient(180deg,#0B1630_0%,#0A1834_100%)]"
        >
          {/* bg image */}
          <Image
            src={bg}
            alt=""
            fill
            className="absolute inset-0 object-cover opacity-40 pointer-events-none"
          />

          {/* Icon */}
          <div className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-sky-400 to-blue-600 shadow-lg">
            <Image src={icon} alt="" width={24} height={24} />
          </div>

          {/* Title & desc */}
          <h4 className="relative mb-2 text-lg font-semibold leading-snug text-center">
            {title}
          </h4>
          <p className="relative text-sm leading-relaxed text-center text-white/70">
            {desc}
          </p>

          {/* ring overlay */}
          <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
      </div>
    </div>
  );
}

export default function FeatureCards() {
  return (
    <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
      {features.map((f, i) => (
        <FeatureCard key={i} {...f} />
      ))}
    </div>
  );
}
