"use client";

import SpeedTest from "@cloudflare/speedtest";
import { useEffect, useState } from "react";

const loadingSteps = [
  { label: "กำลังเตรียมโครงสร้างเว็บไซต์", detail: "จัดวางหน้าและเลย์เอาต์" },
  { label: "กำลังโหลดส่วนประกอบ", detail: "React / TypeScript" },
  { label: "กำลังเตรียมผลงาน", detail: "Portfolio projects" },
  { label: "กำลังตรวจสอบการเชื่อมต่อ", detail: "Network status" },
];

type NetworkState = {
  online: boolean;
  type: string;
  ping: number | null;
  speed: number | null;
  checking: boolean;
};

export function SiteLoader({ isLeaving = false, onComplete }: { isLeaving?: boolean; onComplete?: () => void }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [network, setNetwork] = useState<NetworkState>({ online: true, type: "กำลังตรวจสอบ", ping: null, speed: null, checking: true });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStepIndex((current) => Math.min(current + 1, loadingSteps.length - 1));
    }, 430);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let completed = false;

    const finish = () => {
      if (cancelled || completed) return;
      completed = true;
      onComplete?.();
    };

    if (!navigator.onLine) {
      setNetwork({ online: false, type: "ออฟไลน์", ping: null, speed: null, checking: false });
      const offlineTimer = window.setTimeout(finish, 900);
      return () => {
        cancelled = true;
        window.clearTimeout(offlineTimer);
      };
    }

    const browserNavigator = navigator as Navigator & { connection?: { effectiveType?: string } };
    const connectionType = browserNavigator.connection?.effectiveType?.toUpperCase() || "ออนไลน์";
    setNetwork((current) => ({ ...current, online: true, type: connectionType, checking: true }));

    const speedTest = new SpeedTest({
      autoStart: true,
      logAimApiUrl: null,
      measurements: [
        { type: "latency", numPackets: 5 },
        { type: "download", bytes: 1_000_000, count: 2, bypassMinDuration: true },
      ],
      measureDownloadLoadedLatency: false,
      measureUploadLoadedLatency: false,
    });

    speedTest.onPhaseChange = ({ measurement }) => {
      if (measurement.type === "latency") setStepIndex(3);
      if (measurement.type === "download") setStepIndex(3);
    };

    speedTest.onResultsChange = () => {
      const ping = speedTest.results.getUnloadedLatency();
      const bandwidth = speedTest.results.getDownloadBandwidth();
      setNetwork((current) => ({
        ...current,
        ping: typeof ping === "number" ? Math.round(ping) : current.ping,
        speed: typeof bandwidth === "number" ? Number((bandwidth / 1_000_000).toFixed(1)) : current.speed,
        checking: true,
      }));
    };

    speedTest.onFinish = (results) => {
      if (cancelled) return;
      const ping = results.getUnloadedLatency();
      const bandwidth = results.getDownloadBandwidth();
      setNetwork({
        online: true,
        type: connectionType,
        ping: typeof ping === "number" ? Math.round(ping) : null,
        speed: typeof bandwidth === "number" ? Number((bandwidth / 1_000_000).toFixed(1)) : null,
        checking: false,
      });
      window.setTimeout(finish, 500);
    };

    speedTest.onError = () => {
      if (cancelled) return;
      setNetwork({ online: navigator.onLine, type: navigator.onLine ? "ทดสอบไม่ได้" : "ออฟไลน์", ping: null, speed: null, checking: false });
      window.setTimeout(finish, 900);
    };

    const timeout = window.setTimeout(() => {
      speedTest.pause();
      setNetwork({ online: navigator.onLine, type: navigator.onLine ? "หมดเวลา" : "ออฟไลน์", ping: null, speed: null, checking: false });
      finish();
    }, 9_000);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      speedTest.pause();
    };
  }, [onComplete]);

  const currentStep = isLeaving ? { label: "พร้อมใช้งาน", detail: "เปิดเว็บไซต์ได้แล้ว" } : loadingSteps[stepIndex];

  return (
    <div className={`site-loader ${isLeaving ? "site-loader-leaving" : ""}`} role="status" aria-label="กำลังโหลดเว็บไซต์">
      <div className="site-loader-panel">
        <div className="site-loader-topbar">
          <div className="site-loader-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="site-loader-window">chayanon.dev</span>
          <span className="site-loader-status">LIVE</span>
        </div>

        <div className="site-loader-content">
          <div className="site-loader-brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <p className="site-loader-kicker">CHAYANON PORTFOLIO</p>
          <p className="site-loader-command"><span>&gt;</span> {currentStep.label}<span className="site-loader-cursor" /></p>
          <div className="site-loader-step-detail"><span>{currentStep.detail}</span><span className={`site-loader-network ${network.online ? "is-online" : "is-offline"}`}><i />{network.type}</span></div>
          <div className="site-loader-metrics" aria-label="สถานะเครือข่าย">
            <span>Ping <strong>{network.ping !== null ? `${network.ping} ms` : "--"}</strong></span>
            <span>Speed <strong>{network.speed !== null ? `${network.speed} Mbps` : "--"}</strong></span>
            <span>{network.checking ? "กำลังวัด..." : network.ping !== null && network.speed !== null ? "ทดสอบจริง" : "ทดสอบไม่ได้"}</span>
          </div>
          <div className="site-loader-progress" aria-hidden="true"><span /></div>
          <div className="site-loader-meta"><span>React</span><span>TypeScript</span><span>Tailwind CSS</span></div>
        </div>
      </div>
    </div>
  );
}
