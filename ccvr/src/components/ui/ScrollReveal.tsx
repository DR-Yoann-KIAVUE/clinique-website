"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type Direction = "up" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  threshold?: number;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  none: { x: 0, y: 0 },
};

const easeOutQuart: [number, number, number, number] = [0.25, 1, 0.5, 1];

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.15,
  className,
  stagger = false,
  staggerDelay = 0.08,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const { x, y } = offsets[direction];

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay, delayChildren: delay } },
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.55, ease: easeOutQuart, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Child item for stagger containers */
export function ScrollRevealItem({
  children,
  direction = "up",
  className,
}: {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
}) {
  const { x, y } = offsets[direction];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x, y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.55, ease: easeOutQuart },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
