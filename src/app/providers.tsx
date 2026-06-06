"use client";

import { ThemeProvider } from "next-themes";

/**
 * Client-side providers wrapper. Hosts next-themes so the whole app can read
 * and toggle the theme. `attribute="class"` toggles `class="dark"` on <html>,
 * which Tailwind's `dark:` variants respond to (darkMode: "class").
 */
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
