import { getDb } from "./db";

const SEED_PROFESSORS = [
  {
    id: "p-tang",
    name: "Dr. Mei-Huei Tang",
    department: "Computer & Information Science",
    title: "Professor & Department Chair · Software Engineering",
    classes: [
      "Software Engineering",
      "Software Architecture",
      "Software Quality Assurance",
    ],
    office: "Zurn Science Center",
    office_hours: "Posted on office door · or by appointment",
    avatar_style: "lehenga",
    avatar_color: "#dc2626",
    dance_style: "idle-sway",
  },
  {
    id: "p-liu",
    name: "Dr. Yunkai Liu",
    department: "Computer & Information Science",
    title: "Professor · Program Director · Cybersecurity",
    classes: [
      "Cybersecurity Fundamentals",
      "Network Security",
      "Advanced Topics in Security",
    ],
    office: "Zurn Science Center",
    office_hours: "Posted on office door · or by appointment",
    avatar_style: "rajasthan",
    avatar_color: "#c2410c",
    dance_style: "idle-bob",
  },
  {
    id: "p-manakkadu",
    name: "Dr. Sheheeda Mariam Manakkadu",
    department: "Computer & Information Science",
    title: "Associate Professor",
    classes: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
    ],
    office: "Zurn Science Center",
    office_hours: "Posted on office door · or by appointment",
    avatar_style: "saree",
    avatar_color: "#be185d",
    dance_style: "idle-sway",
  },
  {
    id: "p-rahman",
    name: "Dr. Md Tajmilur Rahman",
    department: "Computer & Information Science",
    title: "Assistant Professor · Software Engineering",
    classes: [
      "Software Engineering",
      "Web Development",
      "Mobile Application Development",
    ],
    office: "Zurn Science Center",
    office_hours: "Posted on office door · or by appointment",
    avatar_style: "bengal",
    avatar_color: "#f8fafc",
    dance_style: "idle-bob",
  },
  {
    id: "p-tong",
    name: "Dr. Jizhou Tong",
    department: "Computer & Information Science",
    title: "Assistant Professor · Cybersecurity",
    classes: [
      "Information Security",
      "Applied Cryptography",
      "Secure Software Development",
    ],
    office: "Zurn Science Center",
    office_hours: "Posted on office door · or by appointment",
    avatar_style: "gujarat",
    avatar_color: "#fde047",
    dance_style: "idle-bob",
  },
  {
    id: "p-wang",
    name: "Dr. Kefei Wang",
    department: "Computer & Information Science",
    title: "Assistant Professor",
    classes: [
      "Operating Systems",
      "Distributed Systems",
      "Cloud Computing",
    ],
    office: "Zurn Science Center",
    office_hours: "Posted on office door · or by appointment",
    avatar_style: "maharashtra",
    avatar_color: "#fef9c3",
    dance_style: "idle-sway",
  },
  {
    id: "p-khan",
    name: "Dr. Rashid Khan",
    department: "Computer & Information Science",
    title: "Assistant Teaching Professor · Cybersecurity",
    classes: [
      "Introduction to Cybersecurity",
      "Network Defense",
      "Ethical Hacking",
    ],
    office: "Zurn Science Center",
    office_hours: "Posted on office door · or by appointment",
    avatar_style: "kashmir",
    avatar_color: "#7c2d12",
    dance_style: "idle-bob",
  },
  {
    id: "p-bazan",
    name: "Dr. Ronny Bazan-Antequera",
    department: "Computer & Information Science",
    title: "Assistant Teaching Professor",
    classes: [
      "Introduction to Programming",
      "Object-Oriented Programming",
      "Computer Science Foundations",
    ],
    office: "Zurn Science Center",
    office_hours: "Posted on office door · or by appointment",
    avatar_style: "tamil-nadu",
    avatar_color: "#fef3c7",
    dance_style: "idle-bob",
  },
  {
    id: "p-tweneboah",
    name: "Dr. Samuel Tweneboah-Koduah",
    department: "Computer & Information Science",
    title: "Assistant Teaching Professor",
    classes: [
      "Introduction to Programming",
      "Computer Organization",
      "Discrete Structures",
    ],
    office: "Zurn Science Center",
    office_hours: "Posted on office door · or by appointment",
    avatar_style: "karnataka",
    avatar_color: "#ca8a04",
    dance_style: "idle-sway",
  },
  {
    id: "p-cannell",
    name: "Prof. Jeremy Cannell",
    department: "Computer & Information Science",
    title: "Visiting Instructor · Adjunct Faculty",
    classes: [
      "Web Development",
      "Programming Electives",
      "Applied Computing",
    ],
    office: "Zurn Science Center",
    office_hours: "By appointment",
    avatar_style: "andhra",
    avatar_color: "#fef3c7",
    dance_style: "idle-bob",
  },
  {
    id: "p-zhang",
    name: "Prof. Qing Zhang",
    department: "Computer & Information Science",
    title: "Visiting Instructor",
    classes: [
      "Introduction to Programming",
      "Data Structures",
      "Software Tools",
    ],
    office: "Zurn Science Center",
    office_hours: "By appointment",
    avatar_style: "odisha",
    avatar_color: "#fef9c3",
    dance_style: "idle-sway",
  },
];

const SEED_COMMENTS: Array<{
  professor_id: string;
  author: string;
  class_taken: string;
  rating: number;
  difficulty: number;
  body: string;
}> = [
  {
    professor_id: "p-tang",
    author: "se_student",
    class_taken: "Software Engineering",
    rating: 5,
    difficulty: 4,
    body:
      "Lectures are organized and the team project rubric is clear. Expectations are high but the structure of the course makes it manageable.",
  },
  {
    professor_id: "p-liu",
    author: "blue_team",
    class_taken: "Cybersecurity Fundamentals",
    rating: 5,
    difficulty: 4,
    body:
      "Strong real-world examples and hands-on labs. Plan time for the lab writeups; they are graded carefully.",
  },
  {
    professor_id: "p-manakkadu",
    author: "ds_learner",
    class_taken: "Data Structures",
    rating: 4,
    difficulty: 3,
    body:
      "Concepts are explained well and office hours help close the gap on tougher topics. Recommended.",
  },
  {
    professor_id: "p-rahman",
    author: "webdev_wanderer",
    class_taken: "Web Development",
    rating: 5,
    difficulty: 3,
    body:
      "Project-based and current. Feedback on assignments is detailed and useful.",
  },
  {
    professor_id: "p-wang",
    author: "kernel_curious",
    class_taken: "Operating Systems",
    rating: 4,
    difficulty: 5,
    body:
      "OS is a hard course no matter who teaches it. Start the projects the day they are assigned.",
  },
  {
    professor_id: "p-khan",
    author: "intro_to_security",
    class_taken: "Introduction to Cybersecurity",
    rating: 4,
    difficulty: 2,
    body:
      "Good first course in security. Practical examples and accessible pace.",
  },
];

export function seed() {
  const db = getDb();
  const count = (db.prepare("SELECT COUNT(*) as c FROM professors").get() as any).c;
  if (count > 0) return { seeded: false, count };

  const insertProf = db.prepare(
    "INSERT INTO professors (id, name, department, title, classes, office, office_hours, avatar_style, avatar_color, dance_style) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
  );
  const insertComment = db.prepare(
    "INSERT INTO comments (professor_id, author, class_taken, rating, difficulty, body) VALUES (?, ?, ?, ?, ?, ?)"
  );

  db.exec("BEGIN");
  try {
    for (const p of SEED_PROFESSORS) {
      insertProf.run(
        p.id,
        p.name,
        p.department,
        p.title,
        JSON.stringify(p.classes),
        p.office,
        p.office_hours,
        p.avatar_style,
        p.avatar_color,
        p.dance_style
      );
    }
    for (const c of SEED_COMMENTS) {
      insertComment.run(c.professor_id, c.author, c.class_taken, c.rating, c.difficulty, c.body);
    }
    db.exec("COMMIT");
  } catch (e) {
    db.exec("ROLLBACK");
    throw e;
  }
  return { seeded: true, count: SEED_PROFESSORS.length };
}
