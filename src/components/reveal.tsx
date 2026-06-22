"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Direction the element travels in from as it reveals. */
  from?: "up" | "down" | "left" | "right" | "none";
}

const distance = 28;

const offsets: Record<NonNullable<RevealProps["from"]>, { x?: number; y?: number }> = {
  up: { y: distance },
  down: { y: -distance },
  left: { x: distance },
  right: { x: -distance },
  none: {},
};

/**
 * Fades + slides a single element in once it scrolls into view.
 * Respects prefers-reduced-motion via globals.css animation-duration override.
 */
export function Reveal({ children, delay = 0, className, from = "up" }: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offsets[from] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/** Wraps children and staggers Reveal-style entrance for each direct motion child. */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={container}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
