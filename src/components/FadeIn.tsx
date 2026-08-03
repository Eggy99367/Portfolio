"use client";

import { motion } from "framer-motion";
import { type CSSProperties, type ReactNode } from "react";

const MOTION_TAGS = {
  div: motion.div,
  nav: motion.nav,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
} as const;

type FadeInProps = {
  children: ReactNode;
  as?: keyof typeof MOTION_TAGS;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  id?: string;
  style?: CSSProperties;
};

export default function FadeIn({
  children,
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  id,
  style,
}: FadeInProps) {
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
