"use client";
import React, { ReactNode } from "react";
import BrandPill from "./ui/BrandPill";
import { PiWebhooksLogoFill, PiLightbulbFilamentFill } from "react-icons/pi";
import { LuCrosshair } from "react-icons/lu";
import { MdRocketLaunch } from "react-icons/md";
import { motion } from "framer-motion";

const GRAD = "[background:linear-gradient(135deg,#2A61FC_0%,#82F3FD_100%)]";
const H = 210;
const TOP = 60;

function Card({
  title,
  desc,
  icon,
  index,
}: {
  title: string;
  desc: string;
  icon: ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[420px] rounded-3xl overflow-visible bg-[#0d0c16]"
    >
      {/* Badge */}
      <div className="absolute left-1/2 -top-8 -translate-x-1/2 z-10">
        <motion.div
          whileHover={{ scale: 1.08, rotate: 5 }}
          transition={{ type: "spring", stiffness: 250 }}
          className={`grid h-16 w-16 place-content-center rounded-full ring-1 ring-white/45 shadow-[0_10px_32px_rgba(56,189,248,.35)] ${GRAD}`}
        >
          {icon}
        </motion.div>
      </div>

      <div className="rounded-3xl p-[1px] [background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(153,153,153,.10))]">
        <div className="relative rounded-3xl px-7 pt-12 pb-8 text-white/90 shadow-[0_16px_44px_rgba(2,10,28,.45)] [background:linear-gradient(180deg,#0B1630_0%,#0A1834_100%)] text-center">
          <div className="pointer-events-none absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,.35),transparent_70%)]" />
          <h4 className="mb-6 text-[22px] font-semibold leading-tight">
            {title}
          </h4>
          <p className="text-sm leading-relaxed text-white/70">{desc}</p>
          <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
      </div>
    </motion.div>
  );
}

export default function SectionEdge() {
  return (
    <section id="features" className="relative overflow-x-clip p-20">
      <div className="text-center">
        <BrandPill />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-3xl md:text-5xl font-extrabold"
        >
          <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Unleash your edge in
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-2 text-3xl md:text-5xl font-semibold text-white/25"
        >
          every trade
        </motion.p>
      </div>

      <div className="relative mx-auto mt-14 max-w-6xl px-6">
        {/* Connector */}
        <div className="relative h-[210px]">
          {/* ripple + icon giữa */}
          <motion.div
            className="absolute left-1/2 top-[60px] -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="relative h-24 w-24 rounded-full ring-1 ring-white/30 grid place-content-center"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(130,243,253,.35), transparent 70%)",
              }}
            >
              <div
                className={`h-20 w-20 rounded-full ${GRAD} ring-1 ring-white/24 grid place-content-center`}
              >
                <LuCrosshair size={32} />
              </div>
              {[6, 12, 18, 24, 30].map((d, i) => (
                <motion.span
                  key={i}
                  className="pointer-events-none absolute rounded-full ring-1 ring-white/10"
                  style={{ inset: -d }}
                  animate={{ opacity: [0.6, 0], scale: [1, 1.3] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay: i * 0.5,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* 3 connector lines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
            {[
              "M 100 60 Q 50 60 50 170 V 210",
              "M 50 60 V 210",
              "M 0 60 Q 50 60 50 170 V 210",
            ].map((d, i) => (
              <motion.svg
                key={i}
                className="hidden md:block h-full w-full"
                viewBox={`0 0 100 ${H}`}
                preserveAspectRatio="none"
              >
                <motion.path
                  d={d}
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 * i }}
                />
              </motion.svg>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card
            index={0}
            title="Advanced Tools For Smart Traders"
            desc="Stay ahead with live charts, wallet tracking, and instant trade insights."
            icon={<PiLightbulbFilamentFill size={28} />}
          />
          <Card
            index={1}
            title="Ultra Sniper using Private Nodes"
            desc="Experience lightning speed with private nodes — secure, stealthy, unstoppable."
            icon={<MdRocketLaunch size={28} />}
          />
          <Card
            index={2}
            title="Seamless Trading, Maximum Control"
            desc="Cutting-edge tech for effortless, reliable, and profitable trading."
            icon={<PiWebhooksLogoFill size={28} />}
          />
        </div>
      </div>
    </section>
  );
}
