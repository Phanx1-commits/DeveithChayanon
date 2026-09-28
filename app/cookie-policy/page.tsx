import { ArrowLeft } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-slate-950 sm:px-10 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950">
          <ArrowLeft size={16} /> กลับหน้าเว็บไซต์
        </a>

        <header className="mt-12 border-b border-slate-200 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Chayanon Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">นโยบายคุกกี้</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            หน้านี้อธิบายว่าเว็บไซต์ของ Chayanon ใช้คุกกี้และพื้นที่จัดเก็บในเบราว์เซอร์อย่างไร
          </p>
        </header>

        <div className="divide-y divide-slate-200">
          <section className="py-8">
            <h2 className="text-xl font-semibold">คุกกี้คืออะไร</h2>
            <p className="mt-3 leading-7 text-slate-600">
              คุกกี้คือข้อมูลขนาดเล็กที่เว็บไซต์อาจบันทึกไว้ในเบราว์เซอร์ เพื่อช่วยจดจำการตั้งค่าหรือทำให้การใช้งานสะดวกขึ้น
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-xl font-semibold">เว็บไซต์นี้ใช้ข้อมูลอะไร</h2>
              <p className="mt-3 leading-7 text-slate-600">
                เว็บไซต์นี้ไม่ได้บันทึกสถานะการยอมรับหรือปฏิเสธไว้ในเบราว์เซอร์ การกดยอมรับมีผลเฉพาะการเข้าชมครั้งนั้น และแบนเนอร์จะแสดงอีกครั้งเมื่อรีเฟรชหรือเปิดหน้าเว็บใหม่
              </p>
          </section>

          <section className="py-8">
            <h2 className="text-xl font-semibold">เราไม่ได้ทำอะไร</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600">
              <li>ไม่ได้เก็บข้อมูลส่วนตัวจากแบนเนอร์คุกกี้</li>
              <li>ไม่ได้ใช้คุกกี้เพื่อการโฆษณาหรือการตลาด</li>
              <li>ไม่ได้ขายหรือส่งต่อข้อมูลการตั้งค่าของคุณให้บุคคลอื่น</li>
            </ul>
          </section>

          <section className="py-8">
            <h2 className="text-xl font-semibold">การควบคุมการแจ้งเตือน</h2>
            <p className="mt-3 leading-7 text-slate-600">
              คุณสามารถกดปฏิเสธเพื่อให้แบนเนอร์ยังคงแสดงอยู่ หรือกดยอมรับเพื่อซ่อนแบนเนอร์ในรอบการเข้าชมปัจจุบัน เมื่อรีเฟรชหน้าเว็บ แบนเนอร์จะแสดงขึ้นอีกครั้ง
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-xl font-semibold">การเปลี่ยนแปลงนโยบาย</h2>
            <p className="mt-3 leading-7 text-slate-600">
              หากมีการเปลี่ยนแปลงวิธีการใช้คุกกี้หรือการแจ้งเตือนในอนาคต เนื้อหาในหน้านี้จะได้รับการปรับปรุงให้สอดคล้องกับการใช้งานจริง
            </p>
          </section>
        </div>

        <footer className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          อัปเดตล่าสุด: 28 กันยายน 2026
        </footer>
      </article>
    </main>
  );
}
