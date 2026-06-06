"use client";

import { useTypewriter, type UseTypewriterOptions } from "../hooks/useTypewriter";

interface RotatingTextProps extends UseTypewriterOptions {
  /** Optional class applied to the wrapping element. */
  className?: string;
  /** Optional class applied to the blinking caret. */
  caretClassName?: string;
}

const RotatingText = ({
  className,
  caretClassName = "text-cyan-400",
  ...options
}: RotatingTextProps) => {
  const text = useTypewriter(options);

  return (
    <span className={className}>
      {/* Stable, single label for assistive tech — the animated text below is
          decorative so screen readers aren't spammed on every keystroke. */}
      <span className="sr-only">{options.words[0]}</span>
      <span aria-hidden="true">
        {text}
        <span className={`animate-caret-blink ml-0.5 font-light ${caretClassName}`}>
          |
        </span>
      </span>
    </span>
  );
};

export default RotatingText;
