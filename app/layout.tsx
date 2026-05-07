import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gannon CIS Professor Reviews",
  description:
    "Student reviews of professors in the Department of Computer & Information Science at Gannon University.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <header className="flex items-center justify-between mb-8 border-b border-slate-200 pb-5">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="text-3xl">🎓</span>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900">
                  Gannon CIS Professor Reviews
                </h1>
                <p className="text-xs text-slate-500 -mt-0.5">
                  Department of Computer &amp; Information Science · unofficial · for current and prospective students
                </p>
              </div>
            </Link>
            <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-slate-900">
              Faculty Directory →
            </Link>
          </header>
          {children}
          <footer className="mt-16 text-center text-xs text-slate-500 leading-relaxed">
            <p>
              Unofficial student-run resource. Not affiliated with or endorsed by Gannon University.
            </p>
            <p className="mt-1">
              Faculty avatars are stylized illustrations and are not intended to depict the
              likeness of any specific individual. Names and titles are sourced from Gannon&apos;s
              public faculty directory.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
