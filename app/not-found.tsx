import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-20 text-center text-sm text-slate-950">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Chayanon Portfolio</p>
      <h1 className="bg-gradient-to-r from-slate-950 to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
        404 Not Found
      </h1>
      <div className="my-5 h-px w-64 rounded bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 md:my-7 md:w-80" />
      <p className="max-w-lg text-base leading-7 text-slate-500 md:text-xl">
        ขออภัยครับ หน้าที่คุณกำลังค้นหาไม่มีอยู่หรืออาจถูกย้ายไปแล้ว
      </p>
      <a href="/" className="group mt-10 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-2.5 font-medium text-white shadow-[0_8px_20px_rgba(15,23,42,0.16)] transition-all hover:bg-slate-800 hover:shadow-[0_10px_26px_rgba(15,23,42,0.22)] active:scale-95">
        กลับหน้าแรก
        <ArrowRight size={20} className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </main>
  );
}
