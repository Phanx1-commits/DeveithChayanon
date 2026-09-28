import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextAnimateProps = {
  children: ReactNode;
  animation?: "blurInUp";
  by?: "character" | "word";
  once?: boolean;
  className?: string;
};

export function TextAnimate({ children, animation = "blurInUp", by = "character", once = false, className }: TextAnimateProps) {
  const text = typeof children === "string" ? children : "";
  const units = by === "word" ? (text.match(/\S+|\s+/g) ?? []) : Array.from(text);

  return (
    <span className={cn("inline", className)} aria-label={text}>
      {units.map((unit, index) => (
        <span
          key={`${unit}-${index}`}
          aria-hidden="true"
          className={cn("text-animate-item", animation === "blurInUp" && "text-animate-blur-in-up")}
          style={{
            animationDelay: `${index * 28}ms`,
            animationIterationCount: once ? 1 : "infinite",
          } as CSSProperties}
        >
          {unit === " " ? "\u00A0" : unit}
        </span>
      ))}
    </span>
  );
}
