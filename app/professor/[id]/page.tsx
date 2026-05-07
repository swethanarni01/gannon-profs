import { notFound } from "next/navigation";
import DancingAvatar from "@/components/DancingAvatar";
import CommentForm from "@/components/CommentForm";
import { getProfessor, getCommentsForProfessor, getProfessorStats } from "@/lib/db";
import { seed } from "@/lib/seed";

export const dynamic = "force-dynamic";

export default function ProfessorPage({ params }: { params: { id: string } }) {
  seed();
  const prof = getProfessor(params.id);
  if (!prof) notFound();
  const comments = getCommentsForProfessor(prof.id);
  const stats = getProfessorStats(prof.id);

  return (
    <main className="space-y-8">
      <section className="bubble-card rounded-3xl p-8 grid md:grid-cols-[200px_1fr] gap-8 items-center">
        <div className="flex justify-center">
          <DancingAvatar style={prof.avatar_style} color={prof.avatar_color} dance={prof.dance_style} size={180} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">{prof.name}</h2>
          {prof.title && <p className="text-slate-600 font-medium mt-0.5">{prof.title}</p>}
          <p className="text-sm text-slate-500 mt-0.5">{prof.department}</p>

          <div className="mt-4 flex flex-wrap gap-6 text-sm">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Average Rating</p>
              <p className="text-xl font-bold text-amber-500">
                {stats.count > 0 ? `★ ${stats.avgRating.toFixed(1)}` : "No reviews yet"}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Average Difficulty</p>
              <p className="text-xl font-bold text-rose-500">
                {stats.count > 0 ? stats.avgDifficulty.toFixed(1) : "—"}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Reviews</p>
              <p className="text-xl font-bold text-slate-900">{stats.count}</p>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Office</p>
              <p className="text-slate-700">{prof.office}</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Office Hours</p>
              <p className="text-slate-700">{prof.office_hours}</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
              Areas / Typical Courses
            </p>
            <ul className="flex flex-wrap gap-2">
              {prof.classes.map((c) => (
                <li
                  key={c}
                  className="bg-white border border-slate-200 rounded-full px-3 py-1 text-sm text-slate-700"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Student Reviews</h3>
        {comments.length === 0 ? (
          <p className="text-slate-500 italic">No reviews yet. Be the first to contribute.</p>
        ) : (
          comments.map((c) => (
            <article key={c.id} className="bubble-card rounded-2xl p-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="font-bold text-slate-900">{c.author}</span>
                  <span className="text-slate-400 text-sm"> · {c.class_taken}</span>
                </div>
                <div className="text-sm">
                  <span className="text-amber-500 font-bold">{"★".repeat(c.rating)}</span>
                  <span className="text-slate-300">{"★".repeat(5 - c.rating)}</span>
                  <span className="ml-3 text-rose-500 font-bold">Difficulty {c.difficulty}/5</span>
                </div>
              </div>
              <p className="mt-2 text-slate-700">{c.body}</p>
              <p className="mt-2 text-xs text-slate-400">
                {new Date(c.created_at + "Z").toLocaleString()}
              </p>
            </article>
          ))
        )}
      </section>

      <CommentForm professorId={prof.id} classes={prof.classes} />
    </main>
  );
}
