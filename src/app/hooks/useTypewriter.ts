import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export interface UseTypewriterOptions {
  /** Words to cycle through. Pass a stable reference (e.g. a module-level const). */
  words: string[];
  /** Delay between typing each character (ms). */
  typingSpeed?: number;
  /** Delay between deleting each character (ms). */
  deletingSpeed?: number;
  /** Pause once a word is fully typed, before it starts deleting (ms). */
  pauseTime?: number;
}

/**
 * Drives a typewriter / rotating-text effect and returns the text currently
 * visible. The effect types a word out, pauses, deletes it, then moves to the
 * next word and loops.
 *
 * When the user prefers reduced motion the animation is skipped entirely and
 * the first word is returned as static text.
 */
export function useTypewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1600,
}: UseTypewriterOptions): string {
  const prefersReducedMotion = useReducedMotion();
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    const isWordComplete = !isDeleting && text === currentWord;
    const isWordCleared = isDeleting && text === "";

    const delay = isWordComplete
      ? pauseTime
      : isDeleting
        ? deletingSpeed
        : typingSpeed;

    const timeout = setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
      } else if (isWordCleared) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else {
        setText(
          isDeleting
            ? currentWord.slice(0, text.length - 1)
            : currentWord.slice(0, text.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    prefersReducedMotion,
  ]);

  if (prefersReducedMotion) {
    return words[0] ?? "";
  }

  return text;
}
