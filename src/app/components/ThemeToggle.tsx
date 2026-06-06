"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * Floating light/dark toggle. Sits bottom-right on small screens (next to the
 * burger menu, thumb-reachable) and moves to the top-right from `md` up.
 *
 * The icon is only rendered after mount: on the server the theme is unknown,
 * so rendering it immediately would cause a hydration mismatch.
 */
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"
      }
      className="fixed bottom-6 right-6 z-50 p-2 text-2xl text-slate-700 transition hover:scale-110 md:bottom-auto md:top-6 dark:text-white"
    >
      {mounted ? (
        isDark ? (
          <FiSun />
        ) : (
          <FiMoon />
        )
      ) : (
        // Placeholder keeps the icon's footprint stable before mount.
        <span className="block h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
