'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { MAGNETIC_CONFIG } from '@/lib/animationConfig';

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'ghost';
};

export function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: MAGNETIC_CONFIG.springStiffness,
    damping: MAGNETIC_CONFIG.springDamping,
    mass: MAGNETIC_CONFIG.springMass,
  });
  const springY = useSpring(y, {
    stiffness: MAGNETIC_CONFIG.springStiffness,
    damping: MAGNETIC_CONFIG.springDamping,
    mass: MAGNETIC_CONFIG.springMass,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MAGNETIC_CONFIG.radius) {
        x.set(dx * MAGNETIC_CONFIG.strength);
        y.set(dy * MAGNETIC_CONFIG.strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);

  const baseClassName = `magnetic-btn magnetic-btn-${variant} ${className}`;
  const style = { x: springX, y: springY };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={baseClassName}
        style={style}
      >
        <span className="magnetic-btn-inner">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={baseClassName}
      style={style}
      type="button"
    >
      <span className="magnetic-btn-inner">{children}</span>
    </motion.button>
  );
}
