// @ts-ignore - node:sqlite has no @types yet
import { DatabaseSync } from "node:sqlite";
import path from "path";
import fs from "fs";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "gannon.db");

if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });

let _db: any = null;

export function getDb(): any {
  if (_db) return _db;
  const db = new DatabaseSync(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS professors (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      department TEXT NOT NULL,
      title TEXT NOT NULL DEFAULT '',
      classes TEXT NOT NULL,
      office TEXT NOT NULL,
      office_hours TEXT NOT NULL,
      avatar_style TEXT NOT NULL,
      avatar_color TEXT NOT NULL,
      dance_style TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      professor_id TEXT NOT NULL,
      author TEXT NOT NULL,
      class_taken TEXT NOT NULL,
      rating INTEGER NOT NULL,
      difficulty INTEGER NOT NULL,
      body TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (professor_id) REFERENCES professors(id)
    );
    CREATE INDEX IF NOT EXISTS idx_comments_prof ON comments(professor_id);
  `);
  _db = db;
  return db;
}

export type Professor = {
  id: string;
  name: string;
  department: string;
  title: string;
  classes: string[];
  office: string;
  office_hours: string;
  avatar_style: string;
  avatar_color: string;
  dance_style: string;
};

export type Comment = {
  id: number;
  professor_id: string;
  author: string;
  class_taken: string;
  rating: number;
  difficulty: number;
  body: string;
  created_at: string;
};

export function getAllProfessors(): Professor[] {
  const rows = getDb().prepare("SELECT * FROM professors ORDER BY name").all() as any[];
  return rows.map((r) => ({ ...r, classes: JSON.parse(r.classes) }));
}

export function getProfessor(id: string): Professor | null {
  const row = getDb().prepare("SELECT * FROM professors WHERE id = ?").get(id) as any;
  if (!row) return null;
  return { ...row, classes: JSON.parse(row.classes) };
}

export function getCommentsForProfessor(professorId: string): Comment[] {
  return getDb()
    .prepare("SELECT * FROM comments WHERE professor_id = ? ORDER BY datetime(created_at) DESC")
    .all(professorId) as Comment[];
}

export function getProfessorStats(professorId: string): { avgRating: number; avgDifficulty: number; count: number } {
  const row = getDb()
    .prepare(
      "SELECT AVG(rating) as avgRating, AVG(difficulty) as avgDifficulty, COUNT(*) as count FROM comments WHERE professor_id = ?"
    )
    .get(professorId) as any;
  return {
    avgRating: row.avgRating ?? 0,
    avgDifficulty: row.avgDifficulty ?? 0,
    count: row.count ?? 0,
  };
}

export function addComment(c: Omit<Comment, "id" | "created_at">): Comment {
  const result = getDb()
    .prepare(
      "INSERT INTO comments (professor_id, author, class_taken, rating, difficulty, body) VALUES (?, ?, ?, ?, ?, ?)"
    )
    .run(c.professor_id, c.author, c.class_taken, c.rating, c.difficulty, c.body);
  return getDb().prepare("SELECT * FROM comments WHERE id = ?").get(result.lastInsertRowid) as Comment;
}
