"use client";

import { useCallback, useEffect, useState } from "react";
import { Code2, Gauge, LayoutDashboard, Menu, Palette, Search, Sparkles, X } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/bento-grid";
import { Marquee } from "@/components/marquee";
import { TextAnimate } from "@/components/text-animate";
import { NumberTicker } from "@/components/number-ticker";
import { SiteLoader } from "@/components/site-loader";

const toolbelt = ["React", "TypeScript", "Tailwind CSS", "Design Systems", "Accessibility", "AI Prototyping", "Web Performance"];

const navItems = [
  { label: "หน้าแรก", href: "#top" },
  { label: "ผลงาน", href: "#experience" },
  { label: "เกี่ยวกับผม", href: "#about" },
  { label: "ติดต่อผม", href: "mailto:hello@example.com" },
];

const creations = [
  {
    title: "WORKSDD",
    description: "แพลตฟอร์มหางานที่ช่วยเชื่อมโยงผู้สมัครกับโอกาสงานที่เหมาะสม",
    url: "https://www.worksdd.com/th",
    image: "/projects/worksdd.png",
    position: "object-center",
  },
  {
    title: "EngeniusForce CRM",
    description: "ระบบ CRM สำหรับจัดการลูกค้า ติดตาม pipeline และสนับสนุนทีมขาย",
    url: "https://engenius-force.vercel.app",
    image: "/projects/engeniusforce-crm.png",
    position: "object-right",
  },
  {
    title: "Bot Engenius",
    description: "แชทบอท LINE สำหรับตอบคำถามและจัดการคลังความรู้ขององค์กร",
    url: "https://bot-engenius-inter.vercel.app/",
    image: "/projects/bot-engenius.png",
    position: "object-center",
  },
];

const engeniusLogo = "/projects/engenius-group-cropped.jpg";

function BrandMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="4.706" cy="16" r="4.706" fill="#171717" />
      <circle cx="16.001" cy="4.706" r="4.706" fill="#171717" />
      <circle cx="16.001" cy="27.294" r="4.706" fill="#171717" />
      <circle cx="27.294" cy="16" r="4.706" fill="#171717" />
    </svg>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderLeaving, setIsLoaderLeaving] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<"accepted" | "declined" | null>(null);
  const [isCookieClosing, setIsCookieClosing] = useState(false);

  useEffect(() => {
    if (isMenuOpen || !isMenuMounted) return;

    const timeout = window.setTimeout(() => setIsMenuMounted(false), 700);
    return () => window.clearTimeout(timeout);
  }, [isMenuOpen, isMenuMounted]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCookieChoice = (choice: "accepted" | "declined") => {
    if (choice !== "accepted" || isCookieClosing) return;

    setIsCookieClosing(true);
    window.setTimeout(() => {
      setCookieConsent("accepted");
      setIsCookieClosing(false);
    }, 450);
  };

  const handleLoaderComplete = useCallback(() => {
    setIsLoaderLeaving(true);
    window.setTimeout(() => setIsLoading(false), 650);
  }, []);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      return;
    }

    setIsMenuMounted(true);
    window.requestAnimationFrame(() => setIsMenuOpen(true));
  };

  return (
    <>
      {isLoading && <SiteLoader isLeaving={isLoaderLeaving} onComplete={handleLoaderComplete} />}
      <main className="min-h-screen bg-white pt-20 text-slate-950 sm:pt-24">
      <nav className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 text-slate-900 backdrop-blur-xl transition-all duration-500 ${isScrolled ? "py-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)]" : "py-4 shadow-sm"}`}>
        <div className="mx-auto flex max-w-[1248px] items-center justify-between px-6 sm:px-10 md:grid md:grid-cols-[1fr_auto_1fr] lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="กลับไปด้านบน">
            <BrandMark />
            <span className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-slate-600">Chayanon</span>
          </a>

          <div className="hidden items-center gap-8 md:flex md:justify-self-center">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="group relative text-sm font-medium text-slate-500 transition-colors hover:text-slate-950">
                {item.label}
                <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-slate-950 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a href="#experience" className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-slate-950 hover:bg-slate-950 hover:text-white hover:shadow-md">โปรเจกต์ของผม</a>
          </div>

          <div className="hidden items-center justify-self-end gap-4 md:flex">
            <a href="#experience" aria-label="ดูผลงาน" className="grid h-9 w-9 place-items-center rounded-full text-slate-600 transition duration-300 hover:bg-slate-100 hover:text-slate-950"><Search size={20} /></a>
            <a href="mailto:hello@example.com" className="rounded-full bg-slate-950 px-8 py-2.5 text-sm font-medium text-white shadow-[0_5px_14px_rgba(15,23,42,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_8px_20px_rgba(15,23,42,0.22)]">ติดต่อผม</a>
          </div>

          <button type="button" className={`relative z-50 rounded-xl p-2 outline-none transition duration-300 active:scale-95 md:hidden ${isMenuOpen ? "bg-white text-slate-950 shadow-[0_6px_16px_rgba(15,23,42,0.12)] hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-300" : "text-slate-800 hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-slate-300"}`} aria-expanded={isMenuOpen} aria-controls="mobileMenu" aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"} onClick={handleMenuToggle}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuMounted && <div id="mobileMenu" className={`absolute inset-x-0 top-0 z-40 h-[100dvh] w-screen overflow-y-auto overscroll-contain bg-slate-100 px-4 pb-4 pt-16 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] sm:px-6 md:hidden ${isMenuOpen ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-full opacity-0"}`}>
          <div className={`mx-auto flex min-h-full max-w-sm flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${isMenuOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[.98] opacity-0"}`}>
            <div className={`relative overflow-hidden bg-slate-950 px-5 pb-7 pt-5 text-white transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "translate-y-0 opacity-100 delay-75" : "-translate-y-3 opacity-0"}`}>
              <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border border-white/10 bg-white/[.04]" />
              <div className="pointer-events-none absolute -bottom-24 left-24 h-40 w-40 rounded-full bg-slate-700/30 blur-3xl" />
              <div className="relative flex items-center justify-between">
                <a href="#top" onClick={() => setIsMenuOpen(false)} className="group flex items-center gap-3" aria-label="กลับไปด้านบน">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white"><BrandMark /></span>
                  <span className="text-lg font-semibold tracking-tight transition-colors group-hover:text-slate-300">Chayanon</span>
                </a>
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">Menu / 01</span>
              </div>
              <div className="relative mt-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">Chayanon Portfolio</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">สร้างประสบการณ์<br /><span className="text-slate-400">ที่น่าจดจำ</span></h2>
              </div>
            </div>

            <div className={`flex flex-1 flex-col px-5 pb-5 pt-6 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "translate-y-0 opacity-100 delay-150" : "translate-y-3 opacity-0"}`}>
              <div className="flex flex-col">
                <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">สำรวจเว็บไซต์</p>
                {navItems.map((item, index) => (
                  <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} style={{ transitionDelay: isMenuOpen ? `${230 + index * 55}ms` : "0ms" }} className={`group flex items-center justify-between border-b border-slate-200 py-4 text-xl font-medium text-slate-900 transition-[transform,opacity,color] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] first:border-t hover:text-slate-500 active:text-slate-400 sm:text-2xl ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}>
                    <span className="flex items-center gap-4"><span className="font-mono text-[10px] font-normal tracking-widest text-slate-400">0{index + 1}</span>{item.label}</span>
                    <span className="text-base text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-slate-950" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>

              <div className={`mt-auto pt-8 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "translate-y-0 opacity-100 delay-400" : "translate-y-4 opacity-0"}`}>
                <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 text-xs font-medium"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.12)]" />พร้อมคุยโปรเจกต์ใหม่</span>
                    <span className="text-slate-400" aria-hidden="true">↗</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">เว็บไซต์ · UI/UX · Frontend</p>
                </div>
                <p className="mt-4 text-center text-[10px] font-medium tracking-[0.16em] text-slate-400">REACT · TYPESCRIPT · TAILWIND CSS</p>
              </div>
            </div>
          </div>
        </div>}
      </nav>

      <div id="top" className="mx-auto max-w-6xl px-6 pb-10 pt-8 sm:px-10 sm:pt-10">
        <section id="about" className="group relative isolate mx-auto text-center text-slate-950">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <h1 className="mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-tight transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:text-5xl sm:leading-[1.2] md:text-6xl">
              <TextAnimate animation="blurInUp" by="character" once>สวัสดีครับ ผมชื่อ Chayanon</TextAnimate>
              <span className="block text-slate-500"><TextAnimate animation="blurInUp" by="character" once>ผู้ออกแบบประสบการณ์ดิจิทัล</TextAnimate></span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 sm:text-base">
              ผมสร้างเว็บไซต์ที่สวย ใช้งานง่าย และใส่ใจในทุกรายละเอียด ด้วย React และ TypeScript
            </p>
            <div className="mt-10 flex justify-center gap-10 border-t border-slate-200 pt-6">
              <div className="text-center">
                <div className="text-4xl font-semibold tracking-tight"><NumberTicker value={5} />+</div>
                <p className="mt-1 text-xs text-slate-500">ปีประสบการณ์</p>
              </div>
              <div className="text-center">
                <NumberTicker value={24} className="text-4xl font-semibold tracking-tight" />
                <p className="mt-1 text-xs text-slate-500">โปรเจกต์ที่ส่งมอบ</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 border-y border-slate-100 py-5" aria-label="เทคโนโลยีและทักษะ">
          <div className="mb-3 flex items-center justify-between gap-4 px-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Toolkit</p>
            <p className="text-xs text-slate-400">เลื่อนเพื่อดูทักษะ · หยุดได้เมื่อชี้เมาส์</p>
          </div>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <Marquee pauseOnHover className="[--duration:26s] [--gap:0.75rem] py-1">
              {toolbelt.map((tool) => <span key={tool} className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">{tool}</span>)}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s] [--gap:0.75rem] py-1">
              {toolbelt.slice().reverse().map((tool) => <span key={`reverse-${tool}`} className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">{tool}</span>)}
            </Marquee>
          </div>
        </section>

        <section className="scroll-mt-8 py-20" aria-labelledby="bento-title">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">How I build</p>
            <h2 id="bento-title" className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">รายละเอียดที่ทำให้งานของผมแตกต่าง</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">ผสมความคิดสร้างสรรค์ เทคโนโลยี และความเข้าใจผู้ใช้งาน เพื่อสร้างเว็บไซต์ที่ดูดีและใช้งานได้จริง</p>
          </div>

          <BentoGrid>
            <BentoCard
              name="Frontend ที่ใช้งานจริง"
              Icon={Code2}
              description="พัฒนาอินเทอร์เฟซด้วย React และ TypeScript ให้โครงสร้างชัด ดูแลง่าย และพร้อมต่อยอด"
              className="md:col-span-2 md:row-span-2"
              href="#experience"
              cta="ดูโปรเจกต์ของผม"
              background={
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(15,23,42,0.10),transparent_34%),linear-gradient(135deg,#fff_0%,#f8fafc_100%)]">
                  <div className="absolute right-8 top-8 grid grid-cols-3 gap-2 opacity-70 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-1">
                    {Array.from({ length: 9 }).map((_, index) => <span key={index} className={`h-10 w-10 rounded-xl border border-slate-200 bg-white shadow-sm ${index === 4 ? "bg-slate-950" : ""}`} />)}
                  </div>
                  <div className="bento-float absolute right-12 top-16 w-32 rounded-2xl border border-slate-200 bg-slate-950 p-3 shadow-[0_16px_30px_rgba(15,23,42,0.18)] transition-transform duration-700 group-hover:rotate-2 group-hover:scale-105">
                    <div className="mb-3 flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-white" /><span className="h-1.5 w-1.5 rounded-full bg-white/30" /><span className="h-1.5 w-1.5 rounded-full bg-white/30" /></div>
                    <div className="space-y-2"><span className="bento-code-line block h-1.5 w-3/4 rounded-full bg-white/80" /><span className="bento-code-line block h-1.5 w-full rounded-full bg-white/25 [animation-delay:300ms]" /><span className="bento-code-line block h-1.5 w-1/2 rounded-full bg-white/45 [animation-delay:600ms]" /></div>
                    <p className="mt-3 text-[9px] font-semibold tracking-[0.18em] text-white/60">REACT / TS</p>
                  </div>
                  <div className="bento-scan absolute right-12 top-16 h-px w-32 bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                  <div className="absolute bottom-20 right-16 h-28 w-28 rounded-full border border-slate-200 transition-transform duration-700 group-hover:scale-125" />
                </div>
              }
            />

            <BentoCard
              name="Responsive Design"
              Icon={LayoutDashboard}
              description="ออกแบบให้สวยและใช้งานง่ายบนทุกหน้าจอ ตั้งแต่มือถือไปจนถึงเดสก์ท็อป"
              background={
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49%,#f1f5f9_50%,transparent_51%),linear-gradient(45deg,transparent_49%,#f1f5f9_50%,transparent_51%)] bg-[length:28px_28px] opacity-70 transition-transform duration-700 group-hover:scale-110">
                  <div className="bento-float-slow absolute bottom-6 right-7 flex items-end gap-2 opacity-80">
                    <div className="h-14 w-8 rounded-md border-2 border-slate-300 bg-white p-1 shadow-sm"><div className="h-full rounded-[3px] bg-slate-100" /></div>
                    <div className="h-20 w-12 rounded-lg border-2 border-slate-400 bg-white p-1 shadow-md"><div className="h-full rounded-[4px] bg-slate-950/90" /></div>
                    <div className="h-12 w-20 rounded-md border-2 border-slate-300 bg-white p-1 shadow-sm"><div className="h-full rounded-[3px] bg-slate-100" /></div>
                  </div>
                </div>
              }
            />

            <BentoCard
              name="UI ที่ใส่ใจรายละเอียด"
              Icon={Palette}
              description="เลือกใช้ spacing, typography และ interaction อย่างตั้งใจ เพื่อประสบการณ์ที่ลื่นไหล"
              background={
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-slate-100 transition-transform duration-700 group-hover:scale-150">
                  <div className="absolute inset-6 rounded-full border border-white bg-white/70" />
                  <div className="bento-orbit absolute inset-0">
                    <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-950 shadow-[0_0_0_5px_rgba(15,23,42,0.08)]" />
                  </div>
                </div>
              }
            />

            <BentoCard
              name="AI Prototyping"
              Icon={Sparkles}
              description="เปลี่ยนไอเดียให้เป็นต้นแบบที่จับต้องได้เร็ว พร้อมทดลองและปรับจาก feedback จริง เพื่อหาทางออกที่เหมาะกับผู้ใช้งาน"
              theme="dark"
              className="md:col-span-2"
              background={
                <div className="absolute inset-0 overflow-hidden bg-slate-950">
                  <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                  <div className="absolute right-6 top-6 flex gap-2 opacity-70 transition-transform duration-700 group-hover:-translate-x-3">
                    {["AI", "UX", "BUILD"].map((label) => <span key={label} className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white/75">{label}</span>)}
                  </div>
                  <div className="bento-pulse absolute bottom-8 right-24 h-14 w-14 rounded-full border border-white/20 bg-white/10 shadow-[0_0_36px_rgba(255,255,255,0.22)]" />
                  <div className="absolute bottom-11 right-[6.15rem] h-2 w-2 rounded-full bg-white shadow-[0_0_16px_5px_rgba(255,255,255,0.65)]" />
                  <div className="absolute -bottom-16 -left-8 h-40 w-40 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />
                </div>
              }
            />

            <BentoCard
              name="เร็วและเข้าถึงง่าย"
              Icon={Gauge}
              description="ใส่ใจ performance, accessibility และประสบการณ์ของผู้ใช้ทุกคน"
              background={
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(148,163,184,0.18),transparent_42%),linear-gradient(135deg,#fff,#f8fafc)]">
                  <div className="bento-float absolute right-5 top-5 h-20 w-20 rounded-full border border-slate-200 bg-white/80 shadow-sm">
                    <div className="absolute inset-2 rounded-full border border-dashed border-slate-300" />
                    <div className="absolute left-1/2 top-1/2 h-px w-7 origin-left rotate-[-38deg] bg-slate-950" />
                    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-950" />
                  </div>
                  <div className="absolute bottom-5 right-6 flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.16em] text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> FAST / A11Y</div>
                </div>
              }
            />
          </BentoGrid>
        </section>

        <section id="experience" className="font-poppins scroll-mt-8 py-20" aria-labelledby="creations-title">
          <h2 id="creations-title" className="text-center text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">ผลงานที่เลือก</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-500">รวมโปรเจกต์ที่ผมมีส่วนร่วมในการออกแบบและพัฒนา ทั้งแพลตฟอร์มดิจิทัล ระบบ CRM และแชทบอท LINE</p>
          <div className="mx-auto mt-10 flex h-auto w-full max-w-5xl flex-col gap-4 md:h-[400px] md:flex-row md:items-center md:gap-6">
            {creations.map((creation) => (
              <a key={creation.title} href={creation.url} target="_blank" rel="noreferrer" aria-label={`เปิดโปรเจกต์ ${creation.title}`} className="group relative block h-56 w-full overflow-hidden rounded-2xl bg-slate-950 transition-all duration-500 hover:shadow-xl hover:shadow-slate-300 md:h-[400px] md:w-56 md:flex-grow md:hover:w-full">
                <img className={`h-full w-full object-cover transition duration-700 lg:grayscale group-hover:scale-105 group-hover:grayscale-0 ${creation.position}`} src={creation.image} alt={creation.title} />
                <div className="absolute inset-0 flex flex-col justify-end bg-black/0 p-6 text-white opacity-0 transition-all duration-300 group-hover:bg-black/55 group-hover:opacity-100 sm:p-10">
                  <h3 className="text-2xl font-medium">{creation.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/85">{creation.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-100 py-16" aria-labelledby="internship-title">
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <div className="group flex items-center justify-center gap-3">
              <img className="h-8 w-32 rounded-md object-contain transition duration-500 lg:grayscale group-hover:scale-105 group-hover:grayscale-0" src={engeniusLogo} alt="Engenius Group" draggable={false} />
              <span className="h-5 w-px bg-slate-200" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">Internship</span>
            </div>
            <h2 id="internship-title" className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">ประสบการณ์ฝึกงานที่ Engenius Group</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">นักศึกษาฝึกงานที่มีส่วนร่วมในการออกแบบและพัฒนา 3 โปรเจกต์ ตั้งแต่แพลตฟอร์มหางาน ระบบ CRM ไปจนถึงแชทบอท LINE</p>
          </div>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
            <Marquee pauseOnHover className="[--duration:24s] [--gap:2rem] py-2">
              {creations.map((creation) => (
                <a key={`internship-${creation.title}`} href={creation.url} target="_blank" rel="noreferrer" aria-label={`เปิดโปรเจกต์ ${creation.title}`} className="group block w-[280px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_30px_rgba(15,23,42,0.12)] sm:w-[340px]">
                  <div className="relative h-32 overflow-hidden bg-slate-100">
                    <img className={`h-full w-full object-cover transition duration-700 lg:grayscale group-hover:scale-105 group-hover:grayscale-0 ${creation.position}`} src={creation.image} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-2.5 py-1 backdrop-blur-sm">
                      <img className="h-4 w-16 rounded-sm object-contain transition duration-500 lg:grayscale group-hover:grayscale-0" src={engeniusLogo} alt="Engenius Group" draggable={false} />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-slate-950">{creation.title}</h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-6 text-slate-500">{creation.description}</p>
                    <span className="mt-4 inline-flex text-xs font-medium text-slate-700 transition-transform duration-300 group-hover:translate-x-1">ดูโปรเจกต์ <span className="ml-1" aria-hidden="true">↗</span></span>
                  </div>
                </a>
              ))}
            </Marquee>
          </div>
          <p className="mt-5 text-center text-xs text-slate-400">เลื่อนเพื่อดูโปรเจกต์ · หยุดได้เมื่อชี้เมาส์</p>
        </section>

      </div>

      <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50/70 px-6 pb-6 pt-14 text-sm text-slate-500 sm:px-10 lg:px-12">
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-slate-200/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1248px] gap-12 md:grid-cols-[1.35fr_0.7fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3 text-slate-950" aria-label="กลับไปด้านบน">
              <BrandMark />
              <span className="text-xl font-semibold tracking-tight">Chayanon</span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-7">
              นักออกแบบและพัฒนาเว็บไซต์ที่ใส่ใจทั้งความสวยงาม ประสบการณ์ใช้งาน และรายละเอียดเบื้องหลังทุกหน้าจอ
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS"].map((skill) => (
                <span key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 font-semibold text-slate-900">สำรวจเว็บ</h2>
            <div className="flex flex-col gap-3">
              <a className="transition hover:text-slate-950" href="#top">หน้าแรก</a>
              <a className="transition hover:text-slate-950" href="#about">เกี่ยวกับผม</a>
              <a className="transition hover:text-slate-950" href="#experience">ผลงาน</a>
            </div>
          </div>

          <div>
            <h2 className="mb-5 font-semibold text-slate-900">มาคุยเรื่องโปรเจกต์กันครับ</h2>
            <p className="max-w-sm leading-7">หากคุณมีไอเดียเว็บไซต์หรือผลิตภัณฑ์ดิจิทัล ผมยินดีพูดคุยและช่วยเปลี่ยนไอเดียให้เป็นประสบการณ์ที่ใช้งานได้จริง</p>
            <a href="mailto:hello@example.com" className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-2.5 font-medium text-white transition hover:bg-slate-800">ติดต่อผม</a>
          </div>
        </div>

        <div className="relative mx-auto mt-12 flex max-w-[1248px] flex-col items-center justify-between gap-4 border-t border-slate-200 pt-5 text-xs sm:flex-row">
          <p>© 2025 Chayanon. สร้างด้วย React, TypeScript และ Tailwind CSS</p>
          <a href="#top" className="font-medium text-slate-700 transition hover:text-slate-950">กลับด้านบน ↑</a>
        </div>

        <div className="relative mx-auto mt-7 max-w-[1248px] border-t border-slate-200 pt-4 text-xs leading-6 text-slate-400">
          <p>เว็บไซต์นี้เคารพความเป็นส่วนตัวของคุณ · <a href="/cookie-policy" className="font-medium text-slate-600 underline underline-offset-2 transition hover:text-slate-950">อ่านนโยบายคุกกี้</a></p>
        </div>
      </footer>

      {cookieConsent === null && (
        <aside
          role="dialog"
          aria-label="การตั้งค่าคุกกี้"
          className={`fixed bottom-4 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 origin-bottom flex-col items-center rounded-2xl border border-slate-300/80 bg-white p-6 text-center text-sm text-slate-500 shadow-[0_16px_50px_rgba(15,23,42,0.16)] [transform-style:preserve-3d] transition-[opacity,transform,box-shadow] duration-700 ease-out will-change-transform sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0 ${isCookieClosing ? "opacity-0 shadow-none" : "opacity-100"}`}
          style={{
            transform: isCookieClosing
              ? "perspective(1100px) rotateX(-18deg) rotateY(10deg) rotateZ(2deg) translate3d(0, 28px, -50px) scale(0.86)"
              : "perspective(1100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(0, 0, 0) scale(1)",
          }}
        >
          <img
            className="h-14 w-14 drop-shadow-[0_8px_8px_rgba(148,163,184,0.35)] [transform-style:preserve-3d] transition-transform duration-700 ease-out"
            style={{
              transform: isCookieClosing
                ? "perspective(500px) rotateX(24deg) rotateY(180deg) rotateZ(12deg) scale(1.3)"
                : "perspective(500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
            }}
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/cookies/cookieImage1.svg"
            alt="ไอคอนคุกกี้"
          />
          <h2 className="mt-2 pb-3 text-xl font-medium text-slate-800">เราใส่ใจความเป็นส่วนตัวของคุณ</h2>
          <p className="w-11/12 leading-6">เว็บไซต์นี้จะแสดงการแจ้งเตือนความเป็นส่วนตัว อ่าน <a href="/cookie-policy" className="font-medium text-slate-700 underline underline-offset-2">นโยบายคุกกี้</a> ได้ที่นี่</p>
          <div className="mt-6 flex w-full items-center justify-center gap-3">
            <button type="button" disabled={isCookieClosing} onClick={() => handleCookieChoice("declined")} className="rounded-full border border-slate-300 px-6 py-2 font-medium text-slate-700 transition hover:bg-slate-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60">ปฏิเสธ</button>
            <button type="button" disabled={isCookieClosing} onClick={() => handleCookieChoice("accepted")} className="rounded-full bg-slate-950 px-6 py-2 font-medium text-white transition hover:bg-slate-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60">ยอมรับ</button>
          </div>
        </aside>
      )}
      </main>
    </>
  );
}
