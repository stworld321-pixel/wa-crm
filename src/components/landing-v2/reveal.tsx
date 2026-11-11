/**
 * Scroll reveal for the v2 landing page.
 *
 * The app's global `prefers-reduced-motion` override only resets CSS
 * animation/transition durations. framer-motion animates inline styles from
 * JS, so it slips past that block and has to opt out explicitly here.
 */
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Fades and lifts children into place once, when they enter the viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
