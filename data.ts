export type Page =
  | "home"
  | "about"
  | "events"
  | "societies"
  | "team"
  | "membership"
  | "gallery"
  | "contact"
  | "login"
  | "register"
  | "portal";

export const NAV: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "events", label: "Events" },
  { id: "societies", label: "Societies" },
  { id: "team", label: "Team" },
  { id: "membership", label: "Membership" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: 520, suffix: "+", label: "Student Members" },
  { value: 96, suffix: "+", label: "Events Hosted" },
  { value: 14, suffix: "", label: "Section Awards" },
  { value: 8, suffix: "", label: "Active Societies" },
];

export const SOCIETIES = [
  {
    id: "cs",
    short: "CS",
    name: "Computer Society",
    color: "#00629B",
    members: 168,
    desc: "Algorithms, systems, cloud, and software craftsmanship. The largest chapter on campus — home to NEXUS hackathon and peer programming circles.",
    focus: ["AI / ML", "Cloud", "Open Source", "Competitive Coding"],
  },
  {
    id: "pes",
    short: "PES",
    name: "Power & Energy Society",
    color: "#00B5E2",
    members: 74,
    desc: "Smart grids, renewables, and the energy transition. Site visits, protection labs, and design challenges with industry mentors.",
    focus: ["Smart Grid", "Renewables", "EV", "Power Electronics"],
  },
  {
    id: "ras",
    short: "RAS",
    name: "Robotics & Automation",
    color: "#D4A017",
    members: 91,
    desc: "From ROS workstations to autonomous bots. Weekly build nights, hardware sprints, and the annual RRCE RoboRift.",
    focus: ["ROS 2", "Vision", "Control", "Mechatronics"],
  },
  {
    id: "comsoc",
    short: "ComSoc",
    name: "Communications Society",
    color: "#5B8DEF",
    members: 52,
    desc: "Wireless, 5G/6G, and networked systems. Paper clubs and RF labs that connect theory with spectrum.",
    focus: ["5G / 6G", "IoT Networks", "RF", "Protocol Design"],
  },
  {
    id: "wie",
    short: "WIE",
    name: "Women in Engineering",
    color: "#C45BAF",
    members: 86,
    desc: "An affinity group building leadership, mentorship, and visibility for women across every IEEE society at RRCE.",
    focus: ["Mentorship", "Leadership", "STEM Outreach", "Fellowships"],
  },
  {
    id: "sight",
    short: "SIGHT",
    name: "SIGHT",
    color: "#3DBE7A",
    members: 44,
    desc: "Humanitarian technology. Solar lanterns, assistive devices, and rural connectivity projects with measurable impact.",
    focus: ["Humanitarian Tech", "Sustainability", "Field Work", "Design for Good"],
  },
  {
    id: "cas",
    short: "CAS",
    name: "Circuits & Systems",
    color: "#E07A3D",
    members: 39,
    desc: "Analog, mixed-signal, and VLSI study circles. Tape-out talks and PCB design marathons.",
    focus: ["VLSI", "Analog", "PCB", "Embedded"],
  },
  {
    id: "ias",
    short: "IAS",
    name: "Industry Applications",
    color: "#7A8CFF",
    members: 33,
    desc: "Where campus meets industry. Internships, plant visits, and applied case studies with IEEE professional members.",
    focus: ["Industry", "Internships", "Standards", "Career"],
  },
];

export type EventItem = {
  id: string;
  title: string;
  date: string;
  end?: string;
  time: string;
  venue: string;
  type: "Hackathon" | "Workshop" | "Lecture" | "Visit" | "Summit" | "Contest" | "Celebration";
  status: "upcoming" | "past";
  seats?: string;
  image: string;
  desc: string;
};

export const EVENTS: EventItem[] = [
  {
    id: "nexus-2026",
    title: "NEXUS 2026 — National Hackathon",
    date: "14 Mar 2026",
    end: "16 Mar 2026",
    time: "09:00 IST",
    venue: "RRCE Innovation Arena",
    type: "Hackathon",
    status: "upcoming",
    seats: "180 teams",
    image: "https://images.pexels.com/photos/4384999/pexels-photo-4384999.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "36 hours. Open tracks in AI for Good, climate tech, and campus systems. Mentors from IEEE Bangalore Section, ₹3.5L prize pool, and internship fast-tracks.",
  },
  {
    id: "quantum-dl",
    title: "Distinguished Lecture: Quantum Computing",
    date: "28 Feb 2026",
    time: "16:30 IST",
    venue: "Sir M. Visvesvaraya Auditorium",
    type: "Lecture",
    status: "upcoming",
    seats: "320 seats",
    image: "https://images.pexels.com/photos/29180747/pexels-photo-29180747.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "An IEEE Distinguished Lecturer session on NISQ devices, error correction, and what undergraduates should learn now.",
  },
  {
    id: "iot-lab",
    title: "IoT & Embedded Systems Lab",
    date: "08 Mar 2026",
    time: "10:00 IST",
    venue: "ECE Hardware Studio",
    type: "Workshop",
    status: "upcoming",
    seats: "60 seats",
    image: "https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Hands-on ESP32, MQTT, and edge dashboards. Take home a working sensor node and a certificate from IEEE SB RRCE.",
  },
  {
    id: "isro-visit",
    title: "Industrial Visit — URSC / ISRO",
    date: "22 Mar 2026",
    time: "07:30 IST",
    venue: "URSC Bengaluru",
    type: "Visit",
    status: "upcoming",
    seats: "45 seats",
    image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Clean-room walkthrough, payload briefing, and a conversation with scientists on spacecraft electronics.",
  },
  {
    id: "wie-summit",
    title: "WIE Leadership Summit",
    date: "05 Apr 2026",
    time: "09:30 IST",
    venue: "RRCE Seminar Hall",
    type: "Summit",
    status: "upcoming",
    seats: "200 seats",
    image: "https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Panels, CV clinics, and a fellowship lab for women in engineering. Open to all genders; priority for WIE members.",
  },
  {
    id: "circuit-clash",
    title: "Circuit Clash 3.0",
    date: "18 Apr 2026",
    time: "11:00 IST",
    venue: "CAS Lab Complex",
    type: "Contest",
    status: "upcoming",
    seats: "80 teams",
    image: "https://images.pexels.com/photos/37371667/pexels-photo-37371667.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Schematic to solder in one afternoon. Analog puzzles, mixed-signal debugging, and a live leaderboard.",
  },
  {
    id: "ieee-day",
    title: "IEEE Day 2025",
    date: "07 Oct 2025",
    time: "All day",
    venue: "Main Quad",
    type: "Celebration",
    status: "past",
    image: "https://images.pexels.com/photos/18999478/pexels-photo-18999478.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Blue-themed campus takeover with lightning talks, alumni hour, and the annual cake-cutting at 18:00 IST.",
  },
  {
    id: "techvista",
    title: "TechVista 2025",
    date: "12 Sep 2025",
    time: "09:00 IST",
    venue: "Campus-wide",
    type: "Summit",
    status: "past",
    image: "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Flagship technical fest. 2,400 attendees, 18 events, and undergraduate work that later reached IEEE Xplore.",
  },
  {
    id: "hardware-hack",
    title: "Hardware Hack 2025",
    date: "21 Aug 2025",
    time: "10:00 IST",
    venue: "RAS Bay",
    type: "Hackathon",
    status: "past",
    image: "https://images.pexels.com/photos/19895719/pexels-photo-19895719.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "24-hour build on assistive robotics. Winning team now incubating under the SIGHT grant.",
  },
  {
    id: "paper-contest",
    title: "Student Paper Contest",
    date: "04 Jul 2025",
    time: "14:00 IST",
    venue: "Library Seminar 2",
    type: "Contest",
    status: "past",
    image: "https://images.pexels.com/photos/14612128/pexels-photo-14612128.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Region-ready paper mentoring. Three manuscripts advanced to the IEEE Bangalore HUM 2025.",
  },
];

export const TEAM = [
  {
    name: "Dr. Suresh Menon",
    role: "Branch Counselor",
    dept: "Professor, ECE",
    img: "/images/faculty.jpg",
    focus: "Faculty",
  },
  {
    name: "Arjun Nair",
    role: "Student Branch Chair",
    dept: "Final Year, CSE",
    img: "/images/team-arjun.jpg",
    focus: "Execom",
  },
  {
    name: "Meera Iyer",
    role: "Vice Chair",
    dept: "Final Year, ECE",
    img: "/images/team-meera.jpg",
    focus: "Execom",
  },
  {
    name: "Rahul Deshmukh",
    role: "Secretary",
    dept: "Third Year, EEE",
    img: "/images/team-rahul.jpg",
    focus: "Execom",
  },
  {
    name: "Ananya Rao",
    role: "Treasurer",
    dept: "Third Year, CSE",
    img: "/images/team-ananya.jpg",
    focus: "Execom",
  },
  {
    name: "Vikram Shah",
    role: "Webmaster",
    dept: "Third Year, ISE",
    img: "/images/team-vikram.jpg",
    focus: "Execom",
  },
  {
    name: "Priya Kapoor",
    role: "WIE Chair",
    dept: "Final Year, ECE",
    img: "/images/team-priya.jpg",
    focus: "Execom",
  },
];

export const CORE = [
  { name: "Kabir Menon", role: "Technical Head", initials: "KM" },
  { name: "Sana Qureshi", role: "Design Head", initials: "SQ" },
  { name: "Dev Patel", role: "Publicity", initials: "DP" },
  { name: "Ishita Bose", role: "Documentation", initials: "IB" },
  { name: "Aryan Kulkarni", role: "Membership", initials: "AK" },
  { name: "Nisha Reddy", role: "Events", initials: "NR" },
  { name: "Farhan Ali", role: "RAS Lead", initials: "FA" },
  { name: "Leela Krishnan", role: "PES Lead", initials: "LK" },
];

export const TIMELINE = [
  { year: "2014", title: "Charter granted", text: "IEEE SB RRCE (STB20210) is listed under IEEE Bangalore Section with founding student members." },
  { year: "2017", title: "First Xplore paper", text: "Undergraduate work from the RAS chapter appears in IEEE Xplore." },
  { year: "2019", title: "WIE affinity", text: "Women in Engineering affinity group is inaugurated on campus." },
  { year: "2022", title: "Outstanding SB", text: "Named Outstanding Student Branch, IEEE Bangalore Section." },
  { year: "2024", title: "SIGHT grant", text: "Humanitarian solar-microgrid kit deployed across two partner villages." },
  { year: "2025", title: "520 members", text: "Largest membership year. NEXUS becomes a national-level hackathon." },
];

export const ACHIEVEMENTS = [
  { title: "Outstanding Student Branch", org: "IEEE Bangalore Section", year: "2024" },
  { title: "Best WIE Affinity Group", org: "IEEE Region 10", year: "2024" },
  { title: "Darrel Chong Bronze", org: "IEEE MGA", year: "2023" },
  { title: "Richard E. Merwin Scholar", org: "IEEE Computer Society", year: "2025" },
  { title: "SIGHT Project Grant", org: "IEEE HAC / SIGHT", year: "2024" },
  { title: "Student Paper Award", org: "IEEE INDICON", year: "2023" },
];

export const TESTIMONIALS = [
  {
    quote:
      "IEEE at RRCE is where I stopped being a student who attends workshops and started being an engineer who ships them.",
    name: "Meera Iyer",
    role: "Vice Chair, ECE '26",
  },
  {
    quote:
      "The counselor treats the branch like a professional society, not a club. That standard is why our papers and proposals get taken seriously.",
    name: "Dr. Suresh Menon",
    role: "Branch Counselor",
  },
  {
    quote:
      "NEXUS was my first 36-hour build. I walked in with a tutorial-level portfolio and walked out with an internship at a Bangalore deep-tech firm.",
    name: "Kabir Menon",
    role: "Technical Head, CSE '27",
  },
];

export const BENEFITS = [
  { title: "IEEE Xplore access", text: "Journals, conference proceedings, and standards that actually show up in your literature review." },
  { title: "Spectrum & Potentials", text: "Print + digital magazines that keep you current beyond the syllabus." },
  { title: "Scholarships & awards", text: "Merwin, Upsilon Pi Epsilon, travel grants, and section-level paper prizes." },
  { title: "Global network", text: "400,000+ members. Locally: Bangalore Section events, internships, and mentor hours." },
  { title: "Leadership track", text: "Execom roles, society chairs, and volunteering that reads as real responsibility." },
  { title: "Discounts", text: "Conference fees, certifications, and partner tools at member rates." },
];

export const FAQS = [
  {
    q: "Who can join IEEE SB RRCE?",
    a: "Any student enrolled at RajaRajeswari College of Engineering, Bengaluru. Faculty may join as professional members and mentor chapters.",
  },
  {
    q: "How much does student membership cost?",
    a: "IEEE student membership is approximately $32 USD per year (converted to INR at billing). Society memberships are optional add-ons, often $4–12 each.",
  },
  {
    q: "Do I need a technical background?",
    a: "No. IEEE is for every engineering and science programme on campus — CSE, ECE, EEE, ME, CV, ISE, and allied streams.",
  },
  {
    q: "How do I get an IEEE number?",
    a: "Join as a Student Member on ieee.org (official IEEE website). After payment, copy your 8–10 digit member number from myIEEE and paste it in the RRCE student portal.",
  },
  {
    q: "Can first-years hold office?",
    a: "First-years join as members and volunteers. Execom roles typically open from second year, once you have a year of contribution.",
  },
];

export const GALLERY = [
  { src: "https://images.pexels.com/photos/29180747/pexels-photo-29180747.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "Lecture", title: "Distinguished lecture hall" },
  { src: "https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "Lab", title: "Hardware studio hours" },
  { src: "https://images.pexels.com/photos/4384999/pexels-photo-4384999.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "Hackathon", title: "NEXUS night build" },
  { src: "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "Fest", title: "TechVista keynote" },
  { src: "https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "WIE", title: "WIE research lab" },
  { src: "https://images.pexels.com/photos/19895719/pexels-photo-19895719.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "RAS", title: "Drone assembly bay" },
  { src: "https://images.pexels.com/photos/14612128/pexels-photo-14612128.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "Seminar", title: "Paper clinic" },
  { src: "https://images.pexels.com/photos/3862623/pexels-photo-3862623.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "Lab", title: "Instrumentation bench" },
  { src: "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "CS", title: "Open source sprint" },
  { src: "https://images.pexels.com/photos/38846534/pexels-photo-38846534.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "Awards", title: "Section award night" },
  { src: "https://images.pexels.com/photos/37371667/pexels-photo-37371667.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "CAS", title: "Circuit debug" },
  { src: "https://images.pexels.com/photos/31139021/pexels-photo-31139021.jpeg?auto=compress&cs=tinysrgb&w=1600", tag: "Campus", title: "RRCE academic block" },
];

export const PARTNERS = ["IEEE Bangalore Section", "IEEE Computer Society", "IEEE WIE", "IEEE SIGHT", "RRCE Incubation", "NVIDIA DLI", "MathWorks", "Texas Instruments"];
