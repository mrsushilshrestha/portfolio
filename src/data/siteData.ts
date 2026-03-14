// =============================================================================
//  SITE DATA — Content Manager
//  Edit this file to update all content on the portfolio website.
//  No coding knowledge needed — just edit the text values inside quotes "".
// =============================================================================

// ── ASSET IMPORTS ─────────────────────────────────────────────────────────────
// To use a local image, place it in: src/assets/
// Then add: import myImage from "@/assets/my-image.png";
// And use the variable name (e.g. myImage) in moodImage field below.
import blackTurmericImg from "@/assets/black-turmeric.png";

// ── PROJECT THUMBNAIL IMPORTS ──────────────────────────────────────────────────
import projectBlogApp from "@/assets/project-image/Sushil-blog.gif";
import projectHandGesture from "@/assets/project-image/gesture-control.png";
import projectAirWrite from "@/assets/project-image/ppt-controll.png";
import projectHospital from "@/assets/project-image/Hospital-Management-System.png";
import projectAttendance from "@/assets/project-image/attendance-management-system.png";
import projectPortfolio from "@/assets/project-image/Demo-Sushil-Shrestha-Portfoilo.gif";

// =============================================================================
//  NAVIGATION LINKS
//  Labels shown in the top navigation bar. href = section ID on the homepage.
// =============================================================================
export const navLinks = [
  { label: "Home",      href: "#hero"      },
  { label: "About",     href: "#about"     },
  { label: "Education", href: "#education" },
  { label: "Projects",  href: "#projects"  },
  { label: "Gallery",   href: "#gallery"   },
  { label: "Contact",   href: "#contact"   },
];

// =============================================================================
//  EDUCATION TIMELINE
//  Add/edit degrees. The description field is optional — comment it out if unused.
// =============================================================================
export const education = [
  {
    year: "Graduating Batch",
    title: "Bachelor of Information Technology",
    institution: "Himalayan WhiteHouse International College, Purbanchal University Kathmandu-Nepal",
    description: "Specializing in software development, web applications, and database management.",
    icon: "Monitor",
  },
  {
    year: "Previous",
    title: "High School (Computer Science)",
    institution: "Columbus HSS College Kathmandu-Nepal",
    // description: "",   // uncomment and fill if needed
    icon: "Code",
  },
];

// =============================================================================
//  TRAINING & CERTIFICATES
//  Workshops, online courses, certifications. Same format as education.
// =============================================================================
export const training = [
  {
    year: "Dec 2024",
    title: "Python (Django)",
    institution: "Skill Shikshya (p) Ltd.",
    description: "Completed training in Python Django framework for full-stack web development.",
    icon: "Terminal",
  },
  {
    year: "Jan 2025",
    title: "Python (Basic)",
    institution: "Hackerrank",
    description: "Certified in Python Basics.",
    icon: "Database",
  },
  {
    year: "Feb 2025",
    title: "Python Training",
    institution: "New IT Venture (N.I.T.V Nepal Limited)",
    description: "Professional training in Python programming.",
    icon: "Cpu",
  },
];

// =============================================================================
//  RESEARCH AREAS (Skills Cards Section)
//  Shown as interactive cards. icon options: Search, Users, Shield, BarChart3,
//  FlaskConical, Microscope, Leaf, BookOpen, Globe, Brain, DnaOff, Beaker
// =============================================================================
export const researchAreas = [
  {
    title: "Backend Development",
    description: "Developing robust server-side applications using Python and Django.",
    icon: "Search",
  },
  {
    title: "Frontend Engineering",
    description: "Creating dynamic web applications with HTML, CSS, JavaScript, and React.",
    icon: "Users",
  },
  {
    title: "Database Management",
    description: "Crafting efficient, data-driven solutions with solid database architectures.",
    icon: "Shield",
  },
  {
    title: "Computer Vision",
    description: "Building applications using OpenCV and machine learning for hand tracking.",
    icon: "BarChart3",
  },
];

// =============================================================================
//  GALLERY ITEMS
//  Images shown in the Gallery section.
//  src: use a URL string OR import a local image and use the variable name.
//  Leave src as "" to hide the image slot.
// =============================================================================
export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  location: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 1, src: "", title: "Fern Frond Unfurling",  location: "Langtang National Park",       description: "New growth of a tree fern captured during spring field survey."        },
  { id: 2, src: "", title: "Himalayan Orchid",       location: "Annapurna Conservation Area", description: "Rare epiphytic orchid found at 2800m elevation."                       },
  { id: 3, src: "", title: "Forest Floor Ecosystem", location: "Chitwan National Park",       description: "Diverse moss and fungal communities on decaying wood."                 },
  { id: 4, src: "", title: "Rainforest Canopy",      location: "Eastern Nepal",               description: "Aerial view showing canopy diversity in subtropical forest."           },
  { id: 5, src: "", title: "Herbarium Specimens",    location: "National Herbarium, Godavari",description: "Pressed botanical specimens prepared for taxonomic study."             },
  { id: 6, src: "", title: "Wetland Flora",          location: "Koshi Tappu Wildlife Reserve",description: "Water lilies in their natural habitat during monsoon season."          },
];

// =============================================================================
//  RESEARCH PROJECTS  ★ MAIN SECTION TO MANAGE ★
//
//  HOW IT WORKS:
//  • Each object { } in this array = one project card + one auto-generated page
//  • URL for each project: /project/<id>   (id must be unique, no spaces)
//  • Adding a new project here AUTOMATICALLY creates its full detail page —
//    no other files need to be changed.
//
//  ┌─ PROGRESS GUIDE ─────────────────────────────────────────────────────┐
//  │  progress: (a number 0 to 100 — no % symbol needed)                  │
//  │    0  = Not started / planning stage                                  │
//  │   25  = Early field or lab work begun                                 │
//  │   50  = Mid-experiments / data collection                             │
//  │   75  = Data analysis / writing up                                    │
//  │  100  = Completed / published                                         │
//  └───────────────────────────────────────────────────────────────────────┘
//
//  ┌─ MILESTONE GUIDE ─────────────────────────────────────────────────────┐
//  │  completed: true   → filled green dot on the timeline (done ✓)        │
//  │  completed: false  → empty dot (not started yet ○)                    │
//  └───────────────────────────────────────────────────────────────────────┘
//
//  ┌─ MOOD IMAGE GUIDE ────────────────────────────────────────────────────┐
//  │  1. Place your .png/.jpg file in src/assets/                          │
//  │  2. Import it at the top of this file:                                │
//  │       import myImg from "@/assets/my-image.png";                      │
//  │  3. Set  moodImage: myImg                                             │
//  │  4. Set  showMoodImage: true   (false to hide it)                     │
//  └───────────────────────────────────────────────────────────────────────┘
// =============================================================================

export interface Project {
  id: string;              // Unique page slug — no spaces, use hyphens. e.g. "my-project"
  title: string;           // Full research title displayed at top of page
  category: string;        // Topic area. e.g. "Ethnopharmacology", "Plant Taxonomy"
  description: string;     // One sentence preview shown on the project card
  progress: number;        // 0–100 completion percentage (see guide above)
  image: string;           // Card thumbnail image. Leave "" if not used.
  link?: string;           // Optional: external URL (paper, report, Google Scholar, etc.)
  abstract: string;        // Full abstract shown in the middle of the detail page
  supervisor: {
    name: string;          // Supervisor full name with title. e.g. "Dr. Jane Smith"
    detail?: string;       // Optional: short bio, department line
    institution: string;   // College/University full name
  };
  coSupervisor?: {         // OPTIONAL block — remove entirely if no co-supervisor
    name: string;
    detail?: string;
    institution?: string;
  };
  team: {
    name: string;          // Team member full name
    role: string;          // Enrollment number or role title
    avatar: string;        // Leave "" for auto-initial, or import a photo variable
  }[];
  stats: {
    label: string;         // Short descriptor. e.g. "Team Members", "Duration"
    value: string;         // The displayed value. e.g. "5", "18 months", "DPPH"
  }[];
  milestones: {
    title: string;         // Short milestone name (2–4 words works best)
    date: string;          // e.g. "2024", "Mar 2025", "2024–2025"
    completed: boolean;    // true = done ✓, false = pending ○
  }[];
  moodImage?: string;      // Import image at top, use the variable name here
  showMoodImage?: boolean; // true = shown on right of detail page, false = hidden
}

// ─────────────────────────────────────────────────────────────────────────────
//  YOUR PROJECTS  — edit existing ones below, or add more using the template
// ─────────────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "blog-app-django",
    title: "Blog App using Django",
    category: "Web Development",
    description: "A full-featured blog application built with Django.",
    progress: 100,
    image: projectBlogApp,
    abstract: "A full-featured blog application built with Django, featuring user authentication with JWT, CRUD operations for blog posts, comments, likes, and user profiles.",
    supervisor: {
      name: "Self-Project",
      institution: "Personal Portfolio",
    },
    stats: [
      { label: "Role", value: "Full Stack Developer" },
      { label: "Tech", value: "Django, Python" },
    ],
    milestones: [
      { title: "Authentication", date: "Done", completed: true },
      { title: "CRUD Features", date: "Done", completed: true },
    ],
    team: [{ name: "Sushil Shrestha", role: "Developer", avatar: "" }],
    showMoodImage: false,
  },
  {
    id: "hand-gesture-ppt",
    title: "Hand Gesture PPT Control",
    category: "Computer Vision",
    description: "Control PowerPoint presentations using hand gestures detected via webcam.",
    progress: 100,
    image: projectHandGesture,
    abstract: "Control PowerPoint presentations using hand gestures detected via webcam. Built with OpenCV and cvzone's HandTrackingModule for intuitive presentation navigation.",
    supervisor: {
      name: "Self-Project",
      institution: "Personal Portfolio",
    },
    stats: [
      { label: "Role", value: "Computer Vision Dev" },
      { label: "Tech", value: "Python, OpenCV" },
    ],
    milestones: [
      { title: "Model Training", date: "Done", completed: true },
      { title: "Presentation Integration", date: "Done", completed: true },
    ],
    team: [{ name: "Sushil Shrestha", role: "Developer", avatar: "" }],
    showMoodImage: false,
  },
  {
    id: "air-write-hand-gesture",
    title: "AIR Write Hand Gesture",
    category: "Computer Vision",
    description: "Innovative application allowing users to write in the air using hand movements.",
    progress: 100,
    image: projectAirWrite,
    abstract: "Innovative application that allows users to write in the air using just hand movements. Utilizes computer vision and machine learning for hand tracking and gesture recognition.",
    supervisor: {
      name: "Self-Project",
      institution: "Personal Portfolio",
    },
    stats: [
      { label: "Role", value: "Computer Vision Dev" },
      { label: "Tech", value: "Python, ML" },
    ],
    milestones: [
      { title: "Gesture Tracking", date: "Done", completed: true },
    ],
    team: [{ name: "Sushil Shrestha", role: "Developer", avatar: "" }],
    showMoodImage: false,
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    category: "Web Application",
    description: "Comprehensive hospital management solution built with PHP.",
    progress: 100,
    image: projectHospital,
    abstract: "Comprehensive hospital management solution built with PHP, HTML, CSS, JavaScript, and Bootstrap. Features patient records, appointment scheduling, billing, and staff management.",
    supervisor: {
      name: "Self-Project",
      institution: "Personal Portfolio",
    },
    stats: [
      { label: "Role", value: "Full Stack Developer" },
      { label: "Tech", value: "PHP, Bootstrap" },
    ],
    milestones: [
      { title: "System Built", date: "Done", completed: true },
    ],
    team: [{ name: "Sushil Shrestha", role: "Developer", avatar: "" }],
    showMoodImage: false,
  },
  {
    id: "attendance-management-system",
    title: "Attendance Management System",
    category: "Desktop Application",
    description: "Java-based attendance tracking system developed with NetBeans.",
    progress: 100,
    image: projectAttendance,
    abstract: "Java-based attendance tracking system developed with NetBeans. Features user authentication, student/staff management, attendance recording, and reporting functionality.",
    supervisor: {
      name: "Self-Project",
      institution: "Personal Portfolio",
    },
    stats: [
      { label: "Role", value: "Java Developer" },
      { label: "Tech", value: "Java, NetBeans" },
    ],
    milestones: [
      { title: "Software Complete", date: "Done", completed: true },
    ],
    team: [{ name: "Sushil Shrestha", role: "Developer", avatar: "" }],
    showMoodImage: false,
  },

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  ADD A NEW PROJECT — copy this template, uncomment it, fill it in       ║
  // ║  Each new project auto-creates its page at /project/<id>                ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  //
  // {
  //   id: "my-new-project",         // ← unique slug, no spaces, use hyphens
  //   title: "Full Project Title",
  //   category: "Your Category",
  //   description: "One sentence summary for the card preview.",
  //   progress: 0,                  // ← 0 to 100
  //   image: "",
  //   // link: "https://...",        // ← optional external link
  //   abstract: "Full abstract paragraph...",
  //   supervisor: {
  //     name: "Dr. Supervisor Name",
  //     detail: "Department, College.",
  //     institution: "College Name, Affiliated to University",
  //   },
  //   // coSupervisor: {             // ← remove block if no co-supervisor
  //   //   name: "Co-Supervisor Name",
  //   //   detail: "Role/Department.",
  //   //   institution: "Institution",
  //   // },
  //   stats: [
  //     { label: "Label", value: "Value" },
  //   ],
  //   milestones: [
  //     { title: "Milestone 1", date: "2025",      completed: false },
  //     { title: "Milestone 2", date: "2025–2026", completed: false },
  //   ],
  //   team: [
  //     { name: "Member Name", role: "Roll Number or Role", avatar: "" },
  //   ],
  //   moodImage: "",          // ← import image at top and use variable here
  //   showMoodImage: false,   // ← true to show, false to hide
  // },

];
