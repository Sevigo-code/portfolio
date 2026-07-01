"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion, type MotionValue } from "motion/react";
import { useMousePositionRef } from "@/hooks/useMousePosition";
import { REPULSION_CONFIG } from "@/lib/interactionConfig";

type SpriteHandle = {
  el: HTMLElement | null;
  pushX: MotionValue<number>;
  pushY: MotionValue<number>;
};

/**
 * Decorative pixel-art sprites organized into 3 visual layers
 * (foreground, middle, background) with fixed hand-tuned positions.
 */

type SpriteProps = { size?: number; color?: string };
type SpriteLayer = "foreground" | "middle" | "background";
type SpriteType = "plus" | "cross" | "moon" | "spiral" | "star";

type SpriteConfig = {
  type: SpriteType;
  x: number;
  y: number;
  layer: SpriteLayer;
  color?: string;
};

function PixelPlus({ size = 12, color = "#c8f261" }: SpriteProps) {
  const px = size / 3;
  return (
    <svg width={size} height={size} shapeRendering="crispEdges" viewBox={`0 0 ${size} ${size}`}>
      <rect x={px} y={0} width={px} height={px} fill={color} />
      <rect x={0} y={px} width={px} height={px} fill={color} />
      <rect x={px} y={px} width={px} height={px} fill={color} />
      <rect x={2 * px} y={px} width={px} height={px} fill={color} />
      <rect x={px} y={2 * px} width={px} height={px} fill={color} />
    </svg>
  );
}

function PixelCross({ size = 12, color = "#7c6ef5" }: SpriteProps) {
  const px = size / 5;
  const cells = [
    [0, 0], [4, 0],
    [1, 1], [3, 1],
    [2, 2],
    [1, 3], [3, 3],
    [0, 4], [4, 4],
  ];
  return (
    <svg width={size} height={size} shapeRendering="crispEdges" viewBox={`0 0 ${size} ${size}`}>
      {cells.map(([x, y], i) => (
        <rect key={i} x={x * px} y={y * px} width={px} height={px} fill={color} />
      ))}
    </svg>
  );
}

function PixelMoon({ size = 16, color = "#f5e6a3" }: SpriteProps) {
  const px = size / 7;
  const cells: [number, number][] = [
    [2, 0], [3, 0],
    [1, 1], [2, 1],
    [0, 2], [1, 2],
    [0, 3], [1, 3],
    [0, 4], [1, 4],
    [1, 5], [2, 5],
    [2, 6], [3, 6],
  ];
  return (
    <svg width={size} height={size} shapeRendering="crispEdges" viewBox={`0 0 ${size} ${size}`}>
      {cells.map(([x, y], i) => (
        <rect key={i} x={x * px} y={y * px} width={px} height={px} fill={color} />
      ))}
    </svg>
  );
}

function PixelSpiral({ size = 18, color = "#f5e6a3" }: SpriteProps) {
  const px = size / 7;
  const cells: [number, number][] = [
    [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6],
    [6, 5], [6, 4], [6, 3], [6, 2], [6, 1], [6, 0],
    [5, 0], [4, 0], [3, 0], [2, 0], [1, 0],
    [1, 1], [1, 2], [1, 3], [1, 4],
    [2, 4], [3, 4], [4, 4],
    [4, 3], [4, 2],
    [3, 2],
  ];
  return (
    <svg width={size} height={size} shapeRendering="crispEdges" viewBox={`0 0 ${size} ${size}`}>
      {cells.map(([x, y], i) => (
        <rect key={i} x={x * px} y={y * px} width={px} height={px} fill={color} />
      ))}
    </svg>
  );
}

function PixelStar({ size = 16, color = "#c8f261" }: SpriteProps) {
  const px = size / 5;
  const cells = [
    [2, 0],
    [2, 1],
    [0, 2], [1, 2], [2, 2], [3, 2], [4, 2],
    [2, 3],
    [2, 4],
  ];
  return (
    <svg width={size} height={size} shapeRendering="crispEdges" viewBox={`0 0 ${size} ${size}`}>
      {cells.map(([x, y], i) => (
        <rect key={i} x={x * px} y={y * px} width={px} height={px} fill={color} />
      ))}
    </svg>
  );
}

const SPRITE_MAP: Record<SpriteType, (p: SpriteProps) => React.JSX.Element> = {
  plus: PixelPlus,
  cross: PixelCross,
  moon: PixelMoon,
  spiral: PixelSpiral,
  star: PixelStar,
};

const LAYER_STYLE: Record<
  SpriteLayer,
  { size: [number, number]; opacity: number; duration: number }
> = {
  foreground: { size: [18, 22], opacity: 0.9, duration: 8 },
  middle:     { size: [12, 14], opacity: 0.5, duration: 10 },
  background: { size: [8, 10],  opacity: 0.25, duration: 13 },
};

/**
 * Hand-tuned sprite positions.
 * Text zone (x < 50, y 20-70) is avoided so the name + tagline read cleanly.
 * Sprites cluster in the corners, edges, and the right-side badge zone.
 */
const SPRITES: SpriteConfig[] = [
  // --- foreground (max 5): punchy, alternating green / purple / cream ---
  { type: "plus",   x: 6,  y: 12, layer: "foreground", color: "#c8f261" },
  { type: "cross",  x: 88, y: 20, layer: "foreground", color: "#7c6ef5" },
  { type: "moon",   x: 72, y: 62, layer: "foreground", color: "#f5e6a3" },
  { type: "plus",   x: 94, y: 78, layer: "foreground", color: "#c8f261" },
  { type: "spiral", x: 60, y: 10, layer: "foreground", color: "#7c6ef5" },

  // --- middle (max 8): medium presence ---
  { type: "star",   x: 54, y: 86, layer: "middle", color: "#c8f261" },
  { type: "cross",  x: 82, y: 48, layer: "middle", color: "#7c6ef5" },
  { type: "plus",   x: 96, y: 40, layer: "middle", color: "#f5e6a3" },
  { type: "moon",   x: 66, y: 90, layer: "middle", color: "#f5e6a3" },
  { type: "cross",  x: 4,  y: 88, layer: "middle", color: "#7c6ef5" },
  { type: "star",   x: 12, y: 6,  layer: "middle", color: "#c8f261" },
  { type: "spiral", x: 90, y: 8,  layer: "middle", color: "#c8f261" },
  { type: "plus",   x: 78, y: 14, layer: "middle", color: "#7c6ef5" },

  // --- background (max 10): quiet pixel dust, green + cream only ---
  { type: "star",   x: 2,  y: 4,  layer: "background", color: "#c8f261" },
  { type: "plus",   x: 18, y: 92, layer: "background", color: "#f5e6a3" },
  { type: "cross",  x: 98, y: 60, layer: "background", color: "#c8f261" },
  { type: "star",   x: 86, y: 92, layer: "background", color: "#f5e6a3" },
  { type: "plus",   x: 70, y: 4,  layer: "background", color: "#c8f261" },
  { type: "moon",   x: 56, y: 4,  layer: "background", color: "#f5e6a3" },
  { type: "star",   x: 98, y: 28, layer: "background", color: "#c8f261" },
  { type: "plus",   x: 64, y: 96, layer: "background", color: "#f5e6a3" },
  { type: "cross",  x: 48, y: 94, layer: "background", color: "#c8f261" },
  { type: "star",   x: 92, y: 54, layer: "background", color: "#f5e6a3" },
];

function pickSize(layer: SpriteLayer, seed: number) {
  const [min, max] = LAYER_STYLE[layer].size;
  const t = ((seed * 9301 + 49297) % 233280) / 233280;
  return Math.round(min + t * (max - min));
}

function Sprite({
  cfg,
  index,
  register,
  unregister,
}: {
  cfg: SpriteConfig;
  index: number;
  register: (i: number, h: SpriteHandle) => void;
  unregister: (i: number) => void;
}) {
  const reduce = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const { opacity, duration } = LAYER_STYLE[cfg.layer];
  const size = pickSize(cfg.layer, index + 1);
  const Component = SPRITE_MAP[cfg.type];
  const delay = (index % 6) * 0.35;

  // Repulsion target (raw), piped through a spring for elastic return.
  const pushX = useMotionValue(0);
  const pushY = useMotionValue(0);
  const springX = useSpring(pushX, {
    stiffness: REPULSION_CONFIG.springStiffness,
    damping: REPULSION_CONFIG.springDamping,
    mass: REPULSION_CONFIG.springMass,
  });
  const springY = useSpring(pushY, {
    stiffness: REPULSION_CONFIG.springStiffness,
    damping: REPULSION_CONFIG.springDamping,
    mass: REPULSION_CONFIG.springMass,
  });

  // Register this sprite's float element + push values with the parent,
  // which runs a single shared rAF loop for cursor repulsion.
  useEffect(() => {
    register(index, { el: floatRef.current, pushX, pushY });
    return () => unregister(index);
  }, [register, unregister, index, pushX, pushY]);

  return (
    <motion.div
      ref={wrapperRef}
      className="absolute"
      style={{
        top: `${cfg.y}%`,
        left: `${cfg.x}%`,
        opacity,
        x: springX,
        y: springY,
      }}
    >
      <motion.div
        ref={floatRef}
        animate={
          reduce
            ? undefined
            : {
                y: [0, -14, 0, 10, 0],
                x: [0, 6, 0, -6, 0],
                rotate: [0, 6, 0, -6, 0],
              }
        }
        transition={
          reduce
            ? undefined
            : { duration, delay, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Component size={size} color={cfg.color} />
      </motion.div>
    </motion.div>
  );
}

export default function PixelSpriteLayer({
  sprites = SPRITES,
}: {
  sprites?: SpriteConfig[];
}) {
  const reduce = useReducedMotion();
  const mouseRef = useMousePositionRef();
  const handlesRef = useRef<Map<number, SpriteHandle>>(new Map());

  const register = useCallback((i: number, h: SpriteHandle) => {
    handlesRef.current.set(i, h);
  }, []);
  const unregister = useCallback((i: number) => {
    handlesRef.current.delete(i);
  }, []);

  // Single shared rAF loop drives repulsion for every sprite — one loop and
  // one batch of layout reads per frame instead of one loop per sprite.
  useEffect(() => {
    if (reduce) return;
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      return;
    }

    const radius = REPULSION_CONFIG.radius;
    let raf = 0;
    const tick = () => {
      const { x: mx, y: my } = mouseRef.current;
      handlesRef.current.forEach(({ el, pushX, pushY }) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cx - mx;
        const dy = cy - my;
        const dist = Math.hypot(dx, dy);

        if (dist < radius && dist > 0) {
          const force = (1 - dist / radius) * REPULSION_CONFIG.maxDisplacement;
          const angle = Math.atan2(dy, dx);
          pushX.set(Math.cos(angle) * force);
          pushY.set(Math.sin(angle) * force);
        } else {
          pushX.set(0);
          pushY.set(0);
        }
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mouseRef, reduce]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {sprites.map((cfg, i) => (
        <Sprite
          key={`${cfg.type}-${i}`}
          cfg={cfg}
          index={i}
          register={register}
          unregister={unregister}
        />
      ))}
    </div>
  );
}

