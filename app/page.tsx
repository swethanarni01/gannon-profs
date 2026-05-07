import Link from "next/link";
import DancingAvatar from "@/components/DancingAvatar";
import { getAllProfessors, getProfessorStats } from "@/lib/data";

export default function Home() {
  const enriched = getAllProfessors().map((p) => ({ ...p, stats: getProfessorStats(p.id) }));

  return (
    <main>
      <section className="bubble-card rounded-3xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-2 text-slate-900">Faculty Directory</h2>
        <p className="text-slate-600 max-w-2xl">
          Browse faculty in the Department of Computer &amp; Information Science. Each profile
          includes courses commonly taught, office information, and reviews submitted by
          students. Select a professor to read more or contribute a review.
        </p>
      </section>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {enriched.map((p) => (
          <Link
            key={p.id}
            href={`/professor/${p.id}`}
            className="bubble-card rounded-3xl p-6 hover:shadow-xl transition group"
          >
            <div className="flex justify-center mb-2">
              <DancingAvatar
                style={p.avatar_style}
                color={p.avatar_color}
                dance={p.dance_style}
                size={120}
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg leading-tight text-slate-900">{p.name}</h3>
              {p.title && <p className="text-xs text-slate-500 mt-0.5">{p.title}</p>}
              <div className="mt-3 flex items-center justify-center gap-3 text-sm">
                <span className="font-bold text-amber-500">
                  {p.stats.count > 0 ? "★".repeat(Math.round(p.stats.avgRating)) : "—"}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600">
                  {p.stats.count} {p.stats.count === 1 ? "review" : "reviews"}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2 group-hover:text-slate-700">
                View profile and reviews →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
