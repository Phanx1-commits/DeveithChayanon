import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"article"> {
  name: string;
  background?: ReactNode;
  Icon: LucideIcon;
  description: string;
  href?: string;
  cta?: string;
  theme?: "light" | "dark";
}

export function BentoGrid({ children, className = "", ...props }: BentoGridProps) {
  return (
    <div className={`grid w-full auto-rows-[13rem] grid-cols-1 gap-4 md:auto-rows-[11rem] md:grid-cols-3 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function BentoCard({ name, background, Icon, description, href, cta = "ดูรายละเอียด", theme = "light", className = "", ...props }: BentoCardProps) {
  const isDark = theme === "dark";
  const content = (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">{background}</div>
      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <Icon className={`h-8 w-8 transition-all duration-500 ease-out group-hover:scale-75 group-hover:-rotate-6 ${isDark ? "text-white" : "text-slate-950 group-hover:text-slate-600"}`} strokeWidth={1.7} />
        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <h3 className={`text-lg font-semibold tracking-tight sm:text-xl ${isDark ? "text-white" : "text-slate-950"}`}>{name}</h3>
          <p className={`mt-2 max-w-xl text-sm leading-6 ${isDark ? "text-slate-300" : "text-slate-500"}`}>{description}</p>
          {href && (
            <span className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${isDark ? "text-white" : "text-slate-700"}`}>
              {cta}
              <ArrowUpRight size={14} />
            </span>
          )}
        </div>
      </div>
      <div className={`pointer-events-none absolute inset-0 transition-colors duration-500 ${isDark ? "bg-white/0 group-hover:bg-white/[0.04]" : "bg-white/0 group-hover:bg-slate-950/[0.02]"}`} />
    </>
  );

  const cardClassName = `group relative isolate overflow-hidden rounded-3xl border transition-all duration-500 ease-out hover:-translate-y-1 ${isDark ? "border-slate-800 bg-slate-950 shadow-[0_12px_36px_rgba(15,23,42,0.16)] hover:border-slate-700 hover:shadow-[0_20px_50px_rgba(15,23,42,0.24)]" : "border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"} ${className}`;

  if (href) {
    return <a href={href} className={cardClassName} {...(props as ComponentPropsWithoutRef<"a">)}>{content}</a>;
  }

  return <article className={cardClassName} {...props}>{content}</article>;
}
