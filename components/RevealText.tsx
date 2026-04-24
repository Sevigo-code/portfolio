'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { REVEAL_CONFIG } from '@/lib/animationConfig';

type RevealTextProps = {
  children: string;
  className?: string;
};

export function RevealText({ children, className = '' }: RevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 1.2', 'end 0'],
  });

  const words = children.split(' ');

  return (
    <p ref={containerRef} className={`reveal-text ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <RevealWord key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </RevealWord>
        );
      })}
    </p>
  );
}

type RevealWordProps = {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
};

function RevealWord({ children, progress, range }: RevealWordProps) {
  const opacity = useTransform(progress, range, [REVEAL_CONFIG.initialOpacity, 1]);

  return (
    <>
      <motion.span className="reveal-word" style={{ opacity }}>
        {children}
      </motion.span>
      {' '}
    </>
  );
}
