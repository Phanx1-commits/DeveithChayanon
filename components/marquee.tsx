import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
};

export function Marquee({ children, className, reverse = false, pauseOnHover = false }: MarqueeProps) {
  const trackClassName = cn(
    "flex shrink-0 gap-[var(--gap)] animate-marquee",
    reverse && "[animation-direction:reverse]",
    pauseOnHover && "group-hover:[animation-play-state:paused]",
  );

  return (
    <div className={cn("group flex gap-[var(--gap)] overflow-hidden [--duration:30s] [--gap:1rem]", className)}>
      <div className={trackClassName}>{children}</div>
      <div aria-hidden="true" className={trackClassName}>{children}</div>
    </div>
  );
}
