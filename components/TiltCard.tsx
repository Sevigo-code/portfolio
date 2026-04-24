'use client';

import { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { TILT_CONFIG } from '@/lib/animationConfig';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export function TiltCard({ children, className = '', href, onClick }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: TILT_CONFIG.springStiffness,
    damping: TILT_CONFIG.springDamping,
  });
  const springY = useSpring(mouseY, {
    stiffness: TILT_CONFIG.springStiffness,
    damping: TILT_CONFIG.springDamping,
  });

  const rotateX = useTransform(springY, [-0.5, 0.5], [TILT_CONFIG.maxTilt, -TILT_CONFIG.maxTilt]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-TILT_CONFIG.maxTilt, TILT_CONFIG.maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: TILT_CONFIG.perspective,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: TILT_CONFIG.scale }}
        transition={{ scale: { duration: 0.3 } }}
        className="tilt-inner"
      >
        {children}
      </motion.div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="tilt-link">
        {content}
      </a>
    );
  }

  return content;
}
