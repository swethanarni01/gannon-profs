"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CommentForm({ professorId, classes }: { professorId: string; classes: string[] }) {
  const router = useRouter();
  const [author, setAuthor] = useState("");
  const [classTaken, setClassTaken] = useState(classes[0] ?? "");
  const [rating, setRating] = useState(5);
  const [difficulty, setDifficulty] = useState(3);
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setErr(null);
    try {
      const res = await fetch(`/api/professors/${professorId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: author.trim() || "anon",
          class_taken: classTaken,
          rating,
          difficulty,
          body: body.trim(),
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "Failed to submit");
      }
      setBody("");
      setAuthor("");
      router.refresh();
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="bubble-card rounded-3xl p-6 space-y-4">
      <h3 className="font-bold text-lg text-slate-900">Submit a Review</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-semibold text-slate-600">Display name (optional)</span>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="anon"
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-slate-600">Class you took</span>
          <select
            value={classTaken}
            onChange={(e) => setClassTaken(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            {classes.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <span className="text-xs font-semibold text-slate-600">Overall rating</span>
          <div className="mt-1 flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                className={`text-2xl transition ${n <= rating ? "text-amber-400" : "text-slate-300"}`}
                aria-label={`Rate ${n} stars`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-600">Difficulty (1 easy, 5 brutal)</span>
          <div className="mt-1 flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setDifficulty(n)}
                className={`text-2xl transition ${n <= difficulty ? "text-rose-500" : "text-slate-300"}`}
                aria-label={`Difficulty ${n}`}
              >
                ●
              </button>
            ))}
          </div>
        </div>
      </div>

      <label className="block">
        <span className="text-xs font-semibold text-slate-600">Your comment</span>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={4}
          placeholder="Describe your experience with this professor and the course. Be specific, honest, and respectful."
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
        />
      </label>

      {err && <p className="text-sm text-rose-600">{err}</p>}

      <button
        type="submit"
        disabled={submitting || body.trim().length < 5}
        className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-bold px-5 py-2.5 disabled:opacity-50 hover:shadow-lg transition"
      >
        {submitting ? "Submitting…" : "Submit Review"}
      </button>
    </form>
  );
}
