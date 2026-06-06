"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/** Diameter of the glow in px. */
const GLOW_SIZE = 600;
/** Easing factor — lower = more lag as the glow trails the cursor. */
const EASE = 0.12;

/**
 * A soft radial glow that trails the mouse cursor, adding subtle depth over
 * the flat background. The glow is moved with `transform: translate3d` so the
 * browser can composite it on the GPU (no per-frame repaint).
 *
 * Disabled (left static, centered) under prefers-reduced-motion and on devices
 * without a fine pointer (touch).
 */
const CursorGlow = () => {
  const prefersReducedMotion = useReducedMotion();
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const render = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * EASE;
      currentY += dy * EASE;

      // Element is centered by CSS; offset it relative to the viewport centre.
      const offsetX = currentX - window.innerWidth / 2;
      const offsetY = currentY - window.innerHeight / 2;
      glow.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;

      // Settle: stop the loop once it has caught up, restart on the next move.
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
        frame = 0;
        return;
      }
      frame = requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!frame) frame = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        ref={glowRef}
        className="absolute rounded-full will-change-transform"
        style={{
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          left: "50%",
          top: "50%",
          marginLeft: -GLOW_SIZE / 2,
          marginTop: -GLOW_SIZE / 2,
          background:
            "radial-gradient(circle, rgba(68, 107, 82, 0.25), transparent 70%)",
        }}
      />
    </div>
  );
};

export default CursorGlow;
