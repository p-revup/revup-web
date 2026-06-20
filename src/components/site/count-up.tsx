'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useMotionValue, useReducedMotion } from 'motion/react';

type CountUpProps = {
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
};

export function CountUp({ to, duration = 2, className, suffix = '', prefix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const motionValue = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      queueMicrotask(() => setDisplay(to));
      return;
    }
    const controls = animate(motionValue, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest))
    });
    return () => controls.stop();
  }, [inView, to, duration, motionValue, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
