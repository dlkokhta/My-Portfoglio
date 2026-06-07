"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * A thin bar pinned to the top of the viewport that fills left-to-right as the
 * page scrolls. Driven by Framer Motion's scroll progress (0→1) mapped to
 * scaleX. The spring smooths the motion; reduced-motion uses the raw value.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: prefersReducedMotion ? scrollYProgress : smoothProgress }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-accent"
    />
  );
};

export default ScrollProgress;
