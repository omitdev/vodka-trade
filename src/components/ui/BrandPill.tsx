// components/ui/BrandPill.tsx
import Image from "next/image";
import Link from "next/link";

type Props = { href?: string; className?: string; label?: string };

export default function BrandPill({
  href,
  className = "",
  label = "VODKATRADE",
}: Props) {
  const inner = (
    <div
      className="relative isolate inline-flex items-center gap-3 rounded-full px-6 py-2
                 text-white font-semibold uppercase tracking-wide"
      style={{
        background: "linear-gradient(180deg,#102544 0%,#0A1A32 100%)",
      }}
    >
      {/* highlight xanh (y hệt header) */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(130px 70px at 100% 95%, rgba(34,76,253,.65), rgba(34,76,253,.18) 50%, transparent 60%)",
        }}
      />
      {/* gloss nhẹ phía trên */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(180deg,rgba(255,255,255,.08),transparent 35%)",
        }}
      />
      {/* inner stroke */}
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />

      <Image src="/brand/logo.png" alt={label} width={22} height={16.5} />

      <span className="text-[16px] font-normal text-white">{label}</span>
    </div>
  );

  return (
    <div
      className={`mb-8 inline-flex rounded-full p-[1px]
                  [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]
                  shadow-[0_14px_34px_rgba(2,10,28,.55)] ${className}`}
    >
      {href ? (
        <Link
          href={href}
          className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          {inner}
        </Link>
      ) : (
        inner
      )}
    </div>
  );
}
