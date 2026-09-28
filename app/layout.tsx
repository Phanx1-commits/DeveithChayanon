import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chayanon S. — Frontend Developer",
  description: "เรซูเม่และผลงานของ Chayanon S.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="antialiased">{children}</body>
    </html>
  );
}
