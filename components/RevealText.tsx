'use client';

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { REVEAL_CONFIG } from '@/lib/animationConfig';
import type { Seg } from '@/lib/i18n';

type RevealTextProps = {
  segments: Seg[];
  className?: string;
};

type Word = { text: string; hl?: boolean };

/** Flatten segments into words. A segment's first token glues onto the
 *  previous word only when there is no space on either side of the
 *  boundary (e.g. "Telesentinel" + ", donde" -> "Telesentinel,"). */
function toWords(segments: Seg[]): Word[] {
  const words: Word[] = [];
  let prevEndsWithSpace = true;
  for (const seg of segments) {
    if (!seg.t) continue;
    const glued = !seg.t.startsWith(' ') && !prevEndsWithSpace;
    const tokens = seg.t.split(' ').filter(Boolean);
    tokens.forEach((tok, i) => {
      if (i === 0 && glued && words.length > 0) {
        words[words.length - 1].text += tok;
      } else {
        words.push({ text: tok, hl: seg.hl });
      }
    });
    prevEndsWithSpace = seg.t.endsWith(' ');
  }
  return words;
}

export function RevealText({ segments, className = '' }: RevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 1.2', 'end 0'],
  });

  const words = useMemo(() => toWords(segments), [segments]);

  return (
    <p ref={containerRef} className={`reveal-text ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <RevealWord
            key={`${i}-${word.text}`}
            progress={scrollYProgress}
            range={[start, end]}
            hl={word.hl}
          >
            {word.text}
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
  hl?: boolean;
};

function RevealWord({ children, progress, range, hl }: RevealWordProps) {
  const opacity = useTransform(progress, range, [REVEAL_CONFIG.initialOpacity, 1]);

  return (
    <>
      <motion.span className={`reveal-word${hl ? ' hl' : ''}`} style={{ opacity }}>
        {children}
      </motion.span>
      {' '}
    </>
  );
}
