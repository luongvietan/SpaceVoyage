"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words";
  direction?: "bottom" | "top";
};

export default function BlurText({
  text,
  className,
  delay = 100,
  animateBy = "words",
  direction = "bottom",
}: BlurTextProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const items = animateBy === "words" ? text.split(" ") : [text];
  const fromY = direction === "bottom" ? 50 : -50;
  const throughY = direction === "bottom" ? -5 : 5;

  return (
    <h1 ref={containerRef} className={className}>
      <span className="flex flex-wrap justify-center gap-x-3">
        {items.map((item, index) => (
          <motion.span
            key={`${item}-${index}`}
            className="inline-block"
            initial={{ filter: "blur(10px)", opacity: 0, y: fromY }}
            animate={
              isInView
                ? {
                    filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                    opacity: [0, 0.5, 1],
                    y: [fromY, throughY, 0],
                  }
                : { filter: "blur(10px)", opacity: 0, y: fromY }
            }
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1],
              delay: (delay / 1000) * index,
            }}
          >
            {item}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
