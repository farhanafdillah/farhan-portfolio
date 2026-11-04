// Portfolio Data for Farhan - Bento Grid Futuristic Edition

export const personalInfo = {
  name: "Farhan Bayna Afdillah",
  fullName: "Farhan Bayna Afdillah",
  role: "Informatics Student",
  subRole: "Seeking IT / Programming Internship",
  greeting: "Hello, I'm",
  tagline: "Informatics student at Universitas Bina Sarana Informatika with a strong interest in IT and programming. Experienced in designing and securing network topologies with Cisco and Mikrotik devices, and building mobile applications with Flutter and PHP.",
  extendedBio: "Seventh-semester Informatics student at Universitas Bina Sarana Informatika with a strong interest in IT and programming. Hands-on experience designing and securing network topologies with Cisco and Mikrotik devices, building a mobile ordering application with Flutter and PHP, and developing database-driven applications. Actively involved in campus event organizing and seeking an IT/programming internship to apply and grow technical skills in a real-world environment.",
  status: "",
  avatar: "/images/farhan.jpg",
  cv: "/cv-farhan.pdf",
  email: "farhanafdillah2435@gmail.com",
  whatsapp: "6285591203070",
  location: "Ciracas, East Jakarta, Indonesia",
  socials: {
    github: "https://github.com/farhanafdillah",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
  },
};

export const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Completed" },
  { value: "100%", label: "Dedication" },
];

export const skillsList = [
  { name: "React", category: "frontend", color: "#61DAFB" },
  { name: "Next.js", category: "frontend", color: "#FFFFFF" },
  { name: "TypeScript", category: "language", color: "#3178C6" },
  { name: "Tailwind CSS", category: "styling", color: "#38BDF8" },
  { name: "Node.js", category: "backend", color: "#68A063" },
  { name: "Python", category: "language", color: "#FFD43B" },
  { name: "GitHub", category: "tools", color: "#A855F7" },
  { name: "Figma", category: "design", color: "#F24E1E" },
];

export const allSkillsDetailed = [
  {
    category: "Web & Mobile Development",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "PHP", "Node.js", "HTML/CSS"],
  },
  {
    category: "Network Engineering",
    items: ["Cisco IOS", "Mikrotik RouterOS", "OSPF", "EIGRP", "Route Redistribution", "VLAN", "Network Security"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git & GitHub", "Figma", "VS Code", "Cisco Packet Tracer", "Winbox", "Microsoft Office"],
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Team Leadership", "Communication", "Time Management", "Event Coordination"],
  },
];

export const projects = [
  {
    id: "project-1",
    slug: "statistikataku-network-topology",
    title: "StatistikaKu & Network Topology",
    category: "Security & Network Infrastructure",
    description: "A data visualization dashboard and secure multi-segment network infrastructure topology.",
    image: "/images/project-network.svg",
    tags: ["Cisco", "Mikrotik", "Network Security", "Dashboard"],
    demoUrl: "#",
    githubUrl: "https://github.com/farhanafdillah",
    problem: "An organization required a structured, isolated, and highly secure network infrastructure to connect various departmental segments while preventing unauthorized access.",
    solution: "Engineered and deployed a segmented network topology integrating Cisco switches and Mikrotik routers with strict firewall filter rules, ACLs, and failover routing.",
    result: "Achieved 99.9% uptime with zero packet loss, isolated department data traffic, and centralized monitoring.",
  },
  {
    id: "project-2",
    slug: "edunexus-warteg-app",
    title: "EduNexus & Warteg Mobile App",
    category: "Mobile & Fullstack Application",
    description: "An online learning platform interface and cross-platform food ordering application.",
    image: "/images/project-warteg.svg",
    tags: ["Flutter", "PHP", "REST API", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/farhanafdillah",
    problem: "Traditional businesses and students struggled with long queues and lack of real-time visibility into digital catalogs and inventory availability.",
    solution: "Developed a responsive cross-platform mobile application using Flutter connected to a high-speed PHP REST API backend with MySQL database.",
    result: "Reduced ordering wait times by 65%, automated queue tracking, and supported real-time stock updates across devices.",
  },
  {
    id: "project-3",
    slug: "taskflow-network-routing",
    title: "TaskFlow & Dynamic Routing",
    category: "Productivity & Advanced Routing",
    description: "A productivity task management tool and dynamic OSPF & EIGRP route redistribution setup.",
    image: "/images/project-routing.svg",
    tags: ["Cisco", "OSPF", "EIGRP", "Route Redistribution"],
    demoUrl: "#",
    githubUrl: "https://github.com/farhanafdillah",
    problem: "Distinct corporate routing domains running different autonomous protocols were completely isolated from automatic routing exchanges.",
    solution: "Configured mutual route redistribution on Cisco ASBR with metric tuning, administrative distance adjustments, and route filtering to avoid routing loops.",
    result: "Seamless convergence across autonomous networks with zero routing loops and optimized multi-hop path selection.",
  },
];

export const educationHistory = [
  {
    institution: "Universitas Bina Sarana Informatika",
    degree: "Bachelor of Informatics — 7th Semester",
    period: "2023 — Present",
    description: "Focusing on software development, computer networks, database systems, and mobile applications engineering.",
  },
  {
    institution: "Futsal Komzustar Cup",
    degree: "Event Organizer — Tournament Committee Coordinator",
    period: "2024",
    description: "Spearheaded tournament match schedules, team coordination, logistics, and smooth operations for collegiate sporting events.",
  },
];

export const certifications = [
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2024",
  },
];
