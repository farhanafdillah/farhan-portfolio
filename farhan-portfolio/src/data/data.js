// ============================================================
// DATA.JS — Full English Portfolio Content
// ============================================================

export const siteConfig = {
  name: "Farhan Bayna Afdillah",
  title: "Farhan Bayna Afdillah — Portfolio",
  description:
    "Informatics student building secure networks and useful mobile applications.",
  url: "https://farhan-portfolio-beige.vercel.app",
  ogImage: "/images/farhan.jpg",
  location: "Ciracas, East Jakarta, Indonesia",
  email: "farhanafdillah2435@gmail.com",
  whatsapp: "6287896636884",
  phone: "+6287896636884",
  linkedin: "https://linkedin.com/in/",
  github: "https://github.com/farhanafdillah",
  cv: "/cv-farhan.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  greeting: "Hi, I am",
  name: "Farhan Bayna Afdillah",
  tagline:
    "Informatics student building secure networks and useful mobile applications.",
  cta: {
    projects: "View Projects",
    cv: "Download CV",
  },
  avatar: "/images/farhan.jpg",
};

export const about = {
  title: "About Me",
  body: "I am a 7th-semester Informatics student at Universitas Bina Sarana Informatika (2023–present) with a deep passion for IT infrastructure, networking, and software development. Experienced in designing, configuring, and securing network topologies using Cisco and Mikrotik, as well as building cross-platform mobile applications with Flutter and PHP. I actively participate in campus event committees and am actively seeking an IT/programming internship opportunity to apply and expand my technical expertise in real-world professional environments.",
  highlights: [
    { icon: "GraduationCap", label: "Informatics — UBSI" },
    { icon: "MapPin", label: "Ciracas, East Jakarta" },
    { icon: "Briefcase", label: "Open to Internship" },
  ],
};

export const skills = {
  title: "Skills & Expertise",
  categories: [
    {
      name: "Networking",
      icon: "Network",
      items: [
        "Cisco",
        "Mikrotik",
        "OSPF",
        "EIGRP",
        "Route Redistribution",
        "Network Security",
      ],
    },
    {
      name: "Mobile & Web",
      icon: "Smartphone",
      items: ["Flutter", "PHP", "JavaScript", "HTML/CSS"],
    },
    {
      name: "Tools & Productivity",
      icon: "Wrench",
      items: ["Microsoft Office", "Cisco Packet Tracer", "Winbox", "Git & GitHub"],
    },
    {
      name: "Soft Skills",
      icon: "Users",
      items: [
        "Teamwork",
        "Communication",
        "Time Management",
        "Problem Solving",
        "Event Coordination",
      ],
    },
  ],
};

export const projects = {
  title: "Featured Projects",
  items: [
    {
      slug: "network-topology",
      title: "Network Topology & Security Design",
      summary:
        "Designed and implemented a secure, multi-segment network topology using Cisco and Mikrotik devices, enforcing robust access control policies and rock-solid connectivity.",
      image: "/images/project-network.svg",
      tags: ["Cisco", "Mikrotik", "Network Security", "VLAN"],
      demo: "#",
      source: "https://github.com/farhanafdillah",
      detail: {
        problem:
          "An organization required a structured, isolated, and highly secure network infrastructure to connect various department segments while preventing unauthorized access between sensitive zones.",
        solution:
          "Architected and deployed a segmented network topology integrating Cisco switches and Mikrotik routers. Implemented firewall filter rules, Access Control Lists (ACLs), and configured inter-VLAN routing with failover mechanisms to maintain high availability and data integrity.",
        result:
          "Successfully established a stable, high-performance network topology with verified end-to-end connectivity, strict segment isolation, and comprehensive traffic monitoring.",
      },
    },
    {
      slug: "warteg-app",
      title: "Warteg Menu Ordering Mobile App",
      summary:
        "Cross-platform mobile application for browsing traditional food menus and placing orders efficiently, engineered with Flutter (frontend) and PHP REST API (backend).",
      image: "/images/project-warteg.svg",
      tags: ["Flutter", "PHP", "REST API", "MySQL"],
      demo: "#",
      source: "https://github.com/farhanafdillah",
      detail: {
        problem:
          "Customers at traditional eateries (Warteg) frequently experienced prolonged waiting queues during peak dining hours and lacked real-time visibility into daily available food items.",
        solution:
          "Developed an intuitive mobile application using Flutter for dynamic client-side interactions and PHP with MySQL for order processing and inventory management. Connected both tiers via lightweight RESTful APIs for seamless menu synchronization and automated order queuing.",
        result:
          "Greatly streamlined customer ordering flow, minimized queue congestion, and enabled staff to update daily menu stock with instant mobile synchronization.",
      },
    },
    {
      slug: "network-routing",
      title: "Dynamic Routing & Route Redistribution",
      summary:
        "Multi-protocol routing deployment featuring OSPF and EIGRP dynamic routing with seamless two-way route redistribution across autonomous system boundaries.",
      image: "/images/project-routing.svg",
      tags: ["Cisco", "OSPF", "EIGRP", "Route Redistribution"],
      demo: "#",
      source: "https://github.com/farhanafdillah",
      detail: {
        problem:
          "Two separate corporate network domains operating on distinct routing protocols (OSPF Area 0 and EIGRP AS 100) were isolated and unable to exchange routing information automatically.",
        solution:
          "Configured OSPF and EIGRP protocols on Cisco routers, established an Autonomous System Boundary Router (ASBR), and deployed mutual route redistribution with metric tuning, route tags, and filtering to prevent suboptimal routing and routing loops.",
        result:
          "Achieved seamless, fully converged cross-domain communication with optimized path selection and zero packet drop verified through traceroute and routing table inspection.",
      },
    },
  ],
};

export const education = {
  title: "Education & Leadership",
  items: [
    {
      type: "education",
      institution: "Universitas Bina Sarana Informatika",
      degree: "Bachelor of Informatics — 7th Semester",
      period: "2023 — Present",
      description:
        "Focusing on computer science core concepts, computer network engineering, mobile application development, database management systems, and software engineering methodologies.",
    },
    {
      type: "organization",
      institution: "Futsal Komzustar Cup",
      degree: "Event Organizer — Tournament Committee Coordinator",
      period: "2024",
      description:
        "Spearheaded and coordinated an inter-collegiate futsal championship tournament, leading multi-team logistics, match scheduling, operational oversight, and stakeholder communication.",
    },
  ],
};

export const certifications = {
  title: "Certifications & Languages",
  certs: [
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      year: "2024",
      icon: "Award",
    },
  ],
  languages: [
    { lang: "Indonesian", level: "Native Proficiency" },
    { lang: "English", level: "Working Proficiency (Passive/Technical)" },
  ],
};

export const contact = {
  title: "Get In Touch",
  subtitle:
    "Interested in discussing internship opportunities, collaborations, or tech projects? Feel free to reach out anytime!",
  form: {
    name: "Full Name",
    email: "Email Address",
    message: "Your Message",
    send: "Send Message",
    placeholder: {
      name: "e.g. John Doe / HR Recruiter",
      email: "recruiter@company.com",
      message: "Hello Farhan, we would like to invite you for an internship interview...",
    },
  },
};

export const footer = {
  text: "© 2025 Farhan Bayna Afdillah. Built with passion using Next.js & Tailwind CSS.",
};
