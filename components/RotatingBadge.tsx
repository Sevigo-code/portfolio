"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function RotatingBadge() {
  const text = "BOGOTÁ ✦ COLOMBIA ✦ FREELANCE ✦ DEV ✦ ";

  return (
    <div className="relative h-44 w-44 flex-shrink-0">
      {/* Outer rotating text */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        viewBox="0 0 200 200"
        className="h-full w-full"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          />
        </defs>
        <text
          className="fill-text font-mono text-[13px] uppercase tracking-[0.25em]"
          style={{ fontFamily: "var(--font-silkscreen)" }}
        >
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </motion.svg>

      {/* Inner rotating image (same direction as outer) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="absolute inset-0 m-auto h-32 w-32 overflow-hidden rounded-full"
      >
        <Image
          src="/cat.png"
          alt="Cat"
          width={128}
          height={128}
          className="h-full w-full object-cover"
          style={{ imageRendering: "pixelated" }}
          priority
        />
      </motion.div>
    </div>
  );
}
