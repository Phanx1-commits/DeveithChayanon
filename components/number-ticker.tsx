"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NumberTickerProps = {
  value: number;
  duration?: number;
  className?: string;
};

export function NumberTicker({ value, duration = 900, className }: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, value]);

  return <span className={cn("tabular-nums", className)}>{displayValue.toLocaleString("en-US")}</span>;
}
