"use client";

import { useEffect, useRef } from "react";

export type MousePosition = { x: number; y: number };

/**
 * Returns a ref that always holds the latest cursor position.
 * Using a ref (not state) avoids re-rendering consumers on every mousemove —
 * consumers read `ref.current` inside their own rAF loop.
 */
export function useMousePositionRef() {
  const ref = useRef<MousePosition>({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      ref.current.x = e.clientX;
      ref.current.y = e.clientY;
    };
    const onLeave = () => {
      ref.current.x = -9999;
      ref.current.y = -9999;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return ref;
}
