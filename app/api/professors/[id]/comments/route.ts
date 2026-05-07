import { NextRequest, NextResponse } from "next/server";
import { addComment, getCommentsForProfessor, getProfessor } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  if (!getProfessor(params.id)) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json({ comments: getCommentsForProfessor(params.id) });
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  if (!getProfessor(params.id)) return NextResponse.json({ error: "not found" }, { status: 404 });
  const data = await req.json().catch(() => null);
  if (!data) return NextResponse.json({ error: "invalid json" }, { status: 400 });

  const author = String(data.author ?? "anon").slice(0, 40);
  const class_taken = String(data.class_taken ?? "").slice(0, 80);
  const body = String(data.body ?? "").slice(0, 2000);
  const rating = Number(data.rating);
  const difficulty = Number(data.difficulty);

  if (!class_taken) return NextResponse.json({ error: "class required" }, { status: 400 });
  if (body.trim().length < 5) return NextResponse.json({ error: "comment too short" }, { status: 400 });
  if (!Number.isInteger(rating) || rating < 1 || rating > 5)
    return NextResponse.json({ error: "rating must be 1-5" }, { status: 400 });
  if (!Number.isInteger(difficulty) || difficulty < 1 || difficulty > 5)
    return NextResponse.json({ error: "difficulty must be 1-5" }, { status: 400 });

  const comment = addComment({
    professor_id: params.id,
    author,
    class_taken,
    rating,
    difficulty,
    body,
  });
  return NextResponse.json({ comment }, { status: 201 });
}
