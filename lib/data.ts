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

export const PROFESSORS: Professor[] = [
  {
    id: "p-tang",
    name: "Dr. Mei-Huei Tang",
    department: "Computer & Information Science",
    title: "Professor & Department Chair · Software Engineering",
    classes: ["Software Engineering", "Software Architecture", "Software Quality Assurance"],
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
    classes: ["Cybersecurity Fundamentals", "Network Security", "Advanced Topics in Security"],
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
    classes: ["Data Structures", "Algorithms", "Database Systems"],
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
    classes: ["Software Engineering", "Web Development", "Mobile Application Development"],
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
    classes: ["Information Security", "Applied Cryptography", "Secure Software Development"],
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
    classes: ["Operating Systems", "Distributed Systems", "Cloud Computing"],
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
    classes: ["Introduction to Cybersecurity", "Network Defense", "Ethical Hacking"],
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
    classes: ["Introduction to Programming", "Object-Oriented Programming", "Computer Science Foundations"],
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
    classes: ["Introduction to Programming", "Computer Organization", "Discrete Structures"],
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
    classes: ["Web Development", "Programming Electives", "Applied Computing"],
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
    classes: ["Introduction to Programming", "Data Structures", "Software Tools"],
    office: "Zurn Science Center",
    office_hours: "By appointment",
    avatar_style: "odisha",
    avatar_color: "#fef9c3",
    dance_style: "idle-sway",
  },
];

export const SEED_COMMENTS: Comment[] = [
  {
    id: 1, professor_id: "p-tang", author: "se_student", class_taken: "Software Engineering",
    rating: 5, difficulty: 4,
    body: "Lectures are organized and the team project rubric is clear. Expectations are high but the structure of the course makes it manageable.",
    created_at: "2026-04-12 14:30:00",
  },
  {
    id: 2, professor_id: "p-liu", author: "blue_team", class_taken: "Cybersecurity Fundamentals",
    rating: 5, difficulty: 4,
    body: "Strong real-world examples and hands-on labs. Plan time for the lab writeups; they are graded carefully.",
    created_at: "2026-04-15 10:12:00",
  },
  {
    id: 3, professor_id: "p-manakkadu", author: "ds_learner", class_taken: "Data Structures",
    rating: 4, difficulty: 3,
    body: "Concepts are explained well and office hours help close the gap on tougher topics. Recommended.",
    created_at: "2026-04-18 09:05:00",
  },
  {
    id: 4, professor_id: "p-rahman", author: "webdev_wanderer", class_taken: "Web Development",
    rating: 5, difficulty: 3,
    body: "Project-based and current. Feedback on assignments is detailed and useful.",
    created_at: "2026-04-20 16:48:00",
  },
  {
    id: 5, professor_id: "p-wang", author: "kernel_curious", class_taken: "Operating Systems",
    rating: 4, difficulty: 5,
    body: "OS is a hard course no matter who teaches it. Start the projects the day they are assigned.",
    created_at: "2026-04-22 11:30:00",
  },
  {
    id: 6, professor_id: "p-khan", author: "intro_to_security", class_taken: "Introduction to Cybersecurity",
    rating: 4, difficulty: 2,
    body: "Good first course in security. Practical examples and accessible pace.",
    created_at: "2026-04-25 13:55:00",
  },
];

export function getAllProfessors(): Professor[] {
  return PROFESSORS;
}

export function getProfessor(id: string): Professor | null {
  return PROFESSORS.find((p) => p.id === id) ?? null;
}

export function getCommentsForProfessor(professorId: string): Comment[] {
  return SEED_COMMENTS.filter((c) => c.professor_id === professorId);
}

export function getProfessorStats(professorId: string): {
  avgRating: number;
  avgDifficulty: number;
  count: number;
} {
  const cs = getCommentsForProfessor(professorId);
  if (cs.length === 0) return { avgRating: 0, avgDifficulty: 0, count: 0 };
  const sumR = cs.reduce((s, c) => s + c.rating, 0);
  const sumD = cs.reduce((s, c) => s + c.difficulty, 0);
  return { avgRating: sumR / cs.length, avgDifficulty: sumD / cs.length, count: cs.length };
}
