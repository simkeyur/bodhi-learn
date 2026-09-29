import { useCallback, useEffect, useRef } from 'react';
import { speech } from './speech';

// Timers that are cancelled (along with any speech) when the screen unmounts,
// so feedback never plays for a world the child has already left.
export function useKidTimers() {
  const timers = useRef(new Set<number>());

  const clearAll = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current.clear();
  }, []);

  useEffect(() => () => {
    clearAll();
    speech.stop();
  }, [clearAll]);

  const later = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(() => {
      timers.current.delete(id);
      fn();
    }, ms);
    timers.current.add(id);
  }, []);

  // Say the clips, then run `next` once they finish, but never sooner than
  // `minMs` so the celebration stays on screen long enough to enjoy.
  const sayThen = useCallback((clips: string[], next: () => void, minMs = 1400) => {
    const startedAt = Date.now();
    speech.say(clips, {
      onEnd: () => later(next, Math.max(350, minMs - (Date.now() - startedAt))),
    });
  }, [later]);

  return { later, sayThen, clearAll };
}

// Returns [greetingClip] the first time it's called after the screen mounts, then [].
// Lets a world open with its welcome line without repeating it every round.
export function useGreeting(greetingClip: string) {
  const greeted = useRef(false);
  useEffect(() => () => {
    greeted.current = false;
  }, []);
  return useCallback(() => {
    if (greeted.current) return [];
    greeted.current = true;
    return [greetingClip];
  }, [greetingClip]);
}
