"use client";

import { useRef, useState, useEffect } from "react";

export function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let t0 = 0;
        const run = (ts: number) => {
          if (!t0) t0 = ts;
          const p = Math.min((ts - t0) / 1800, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * to));
          if (p < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);

  return <span ref={ref}>{count}{suffix}</span>;
}
