export const REVEAL_EASE = [0.4, 0, 0.2, 1] as const;

export const REVEAL_VISIBLE = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
} as const;

export const revealInitial = (y = 24, blur = 10) => ({
  opacity: 0,
  y,
  filter: `blur(${blur}px)`,
});

export const revealTransition = (delay = 0, duration = 0.6) => ({
  duration,
  delay,
  ease: REVEAL_EASE,
});

export const REVEAL_VIEWPORT = {
  once: true,
  amount: 0.25,
} as const;
