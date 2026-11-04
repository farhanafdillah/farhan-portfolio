// ============================================================
// DATA.JS — Edit semua konten portofolio di sini
// ============================================================

export const siteConfig = {
  name: "Farhan Bayna Afdillah",
  title: {
    id: "Farhan Bayna Afdillah — Portofolio",
    en: "Farhan Bayna Afdillah — Portfolio",
  },
  description: {
    id: "Mahasiswa Informatika yang membangun jaringan yang aman dan aplikasi mobile yang berguna.",
    en: "Informatics student building secure networks and useful mobile applications.",
  },
  url: "https://farhan-portfolio.vercel.app",
  ogImage: "/images/og-image.png",
  location: "Ciracas, Jakarta Timur",
  email: "farhanafdillah2435@gmail.com",
  whatsapp: "6285591203070", // Format internasional, jangan ubah format ini
  linkedin: "#",             // Ganti dengan URL LinkedIn kamu
  github: "#",               // Ganti dengan URL GitHub kamu
  cv: "/cv-placeholder.pdf", // Ganti dengan path CV kamu
};

export const navLinks = [
  { id: "about",          label: { id: "Tentang",        en: "About" } },
  { id: "skills",         label: { id: "Skills",          en: "Skills" } },
  { id: "projects",       label: { id: "Proyek",          en: "Projects" } },
  { id: "education",      label: { id: "Pendidikan",      en: "Education" } },
  { id: "certifications", label: { id: "Sertifikasi",     en: "Certs" } },
  { id: "contact",        label: { id: "Kontak",          en: "Contact" } },
];

export const hero = {
  greeting: { id: "Halo, saya", en: "Hi, I'm" },
  name: "Farhan Bayna Afdillah",
  tagline: {
    id: "Mahasiswa Informatika yang membangun jaringan yang aman dan aplikasi mobile yang berguna.",
    en: "Informatics student building secure networks and useful mobile applications.",
  },
  cta: {
    projects: { id: "Lihat Proyek", en: "View Projects" },
    cv:        { id: "Download CV",  en: "Download CV" },
  },
  avatar: "/images/avatar-placeholder.svg",
};

export const about = {
  title: { id: "Tentang Saya", en: "About Me" },
  body: {
    id: "Saya adalah Mahasiswa Informatika semester 6 di Universitas Bina Sarana Informatika (2023–sekarang) dengan minat kuat pada IT dan programming. Berpengalaman mendesain dan mengamankan topologi jaringan dengan Cisco dan Mikrotik, serta membangun aplikasi mobile dengan Flutter dan PHP. Aktif dalam kepanitiaan acara kampus dan sedang mencari magang IT/programming untuk menerapkan dan mengembangkan kemampuan saya di lingkungan kerja nyata.",
    en: "I am a 6th-semester Informatics student at Universitas Bina Sarana Informatika (2023–present) with a strong interest in IT and programming. Experienced in designing and securing network topologies using Cisco and Mikrotik, and in building mobile applications with Flutter and PHP. I am actively involved in campus event committees and am seeking an IT/programming internship to apply and grow my skills in a real work environment.",
  },
  highlights: [
    { icon: "GraduationCap", label: { id: "Informatika — UBSI",      en: "Informatics — UBSI" } },
    { icon: "MapPin",         label: { id: "Ciracas, Jakarta Timur",  en: "Ciracas, East Jakarta" } },
    { icon: "Briefcase",      label: { id: "Open to Internship",      en: "Open to Internship" } },
  ],
};

export const skills = {
  title: { id: "Skills", en: "Skills" },
  categories: [
    {
      name: { id: "Jaringan", en: "Networking" },
      icon: "Network",
      items: ["Cisco", "Mikrotik", "OSPF", "EIGRP", "Route Redistribution", "Network Security"],
    },
    {
      name: { id: "Mobile & Web", en: "Mobile & Web" },
      icon: "Smartphone",
      items: ["Flutter", "PHP"],
    },
    {
      name: { id: "Tools", en: "Tools" },
      icon: "Wrench",
      items: ["Microsoft Office"],
    },
    {
      name: { id: "Soft Skills", en: "Soft Skills" },
      icon: "Users",
      items: ["Teamwork", "Komunikasi", "Manajemen Waktu", "Problem Solving", "Koordinasi Acara"],
    },
  ],
};

export const projects = {
  title: { id: "Proyek", en: "Projects" },
  items: [
    {
      slug: "network-topology",
      title: { id: "Network Topology & Security Design", en: "Network Topology & Security Design" },
      summary: {
        id: "Merancang dan membangun topologi jaringan dengan Cisco & Mikrotik, dilengkapi keamanan jaringan untuk kontrol akses.",
        en: "Designed and built a network topology with Cisco & Mikrotik, including network security measures for access control.",
      },
      image: "/images/project-network.svg",
      tags: ["Cisco", "Mikrotik", "Network Security"],
      demo: "#",
      source: "#",
      detail: {
        problem: {
          id: "Dibutuhkan topologi jaringan yang terstruktur dan aman untuk menghubungkan beberapa segmen jaringan dengan kontrol akses yang ketat.",
          en: "A structured and secure network topology was needed to connect multiple network segments with strict access control.",
        },
        solution: {
          id: "Merancang topologi menggunakan perangkat Cisco dan Mikrotik, menerapkan kebijakan keamanan jaringan, dan mengonfigurasi perangkat agar konektivitas antar segmen stabil.",
          en: "Designed the topology using Cisco and Mikrotik devices, applied network security policies, and configured devices for stable inter-segment connectivity.",
        },
        result: {
          id: "Topologi jaringan berhasil diimplementasikan dengan konektivitas stabil antar segmen dan keamanan data yang terjamin.",
          en: "The network topology was successfully implemented with stable inter-segment connectivity and ensured data security.",
        },
      },
    },
    {
      slug: "warteg-app",
      title: { id: "Warteg Menu Ordering App", en: "Warteg Menu Ordering App" },
      summary: {
        id: "Aplikasi mobile lintas platform untuk memesan menu warteg dengan Flutter (front-end) dan PHP (back-end).",
        en: "A cross-platform mobile app for ordering warteg menus, built with Flutter (front-end) and PHP (back-end).",
      },
      image: "/images/project-warteg.svg",
      tags: ["Flutter", "PHP"],
      demo: "#",
      source: "#",
      detail: {
        problem: {
          id: "Pelanggan warteg kesulitan melihat dan memesan menu secara efisien tanpa harus mengantre panjang.",
          en: "Warteg customers had difficulty viewing and ordering menus efficiently without long queues.",
        },
        solution: {
          id: "Membangun aplikasi mobile dengan Flutter untuk front-end dan PHP untuk back-end pengelolaan menu dan pemrosesan pesanan, lalu mengintegrasikan keduanya agar alur pemesanan berjalan lancar.",
          en: "Built a mobile app with Flutter for the front-end and PHP for the back-end to manage menus and process orders, integrating both for a smooth ordering flow.",
        },
        result: {
          id: "Aplikasi berhasil mengintegrasikan front-end dan back-end, memungkinkan pelanggan melihat menu dan memesan dengan mudah.",
          en: "The app successfully integrated front-end and back-end, allowing customers to view menus and order with ease.",
        },
      },
    },
    {
      slug: "network-routing",
      title: { id: "Network Routing Configuration", en: "Network Routing Configuration" },
      summary: {
        id: "Konfigurasi routing dinamis OSPF & EIGRP dengan route redistribution antar protokol untuk konektivitas antar domain.",
        en: "Dynamic routing configuration with OSPF & EIGRP and route redistribution between protocols for cross-domain connectivity.",
      },
      image: "/images/project-routing.svg",
      tags: ["Cisco", "OSPF", "EIGRP"],
      demo: "#",
      source: "#",
      detail: {
        problem: {
          id: "Dua domain routing yang menggunakan protokol berbeda (OSPF dan EIGRP) tidak dapat berkomunikasi satu sama lain.",
          en: "Two routing domains using different protocols (OSPF and EIGRP) could not communicate with each other.",
        },
        solution: {
          id: "Mengonfigurasi routing dinamis OSPF dan EIGRP pada perangkat Cisco, kemudian melakukan route redistribution antar protokol dan memverifikasi routing table serta melakukan troubleshooting konektivitas.",
          en: "Configured dynamic OSPF and EIGRP routing on Cisco devices, performed route redistribution between protocols, and verified routing tables while troubleshooting connectivity.",
        },
        result: {
          id: "Kedua domain routing berhasil berkomunikasi setelah redistribution dikonfigurasi dengan benar dan routing table menunjukkan jalur yang optimal.",
          en: "Both routing domains successfully communicated after redistribution was correctly configured, with routing tables showing optimal paths.",
        },
      },
    },
  ],
};

export const education = {
  title: { id: "Pendidikan & Organisasi", en: "Education & Organization" },
  items: [
    {
      type: "education",
      institution: { id: "Universitas Bina Sarana Informatika", en: "Universitas Bina Sarana Informatika" },
      degree: { id: "S1 Informatika — Semester 6", en: "Bachelor of Informatics — Semester 6" },
      period: "2023 — Sekarang",
      description: {
        id: "Mempelajari dasar-dasar ilmu komputer, jaringan komputer, pemrograman mobile, dan rekayasa perangkat lunak.",
        en: "Studying fundamentals of computer science, networking, mobile programming, and software engineering.",
      },
    },
    {
      type: "organization",
      institution: { id: "Futsal Komzustar Cup", en: "Futsal Komzustar Cup" },
      degree: { id: "Event Organizer — Panitia Turnamen Futsal", en: "Event Organizer — Futsal Tournament Committee" },
      period: "2024",
      description: {
        id: "Mengoordinasi turnamen futsal antar mahasiswa, termasuk penjadwalan pertandingan, koordinasi tim, dan memastikan kelancaran acara.",
        en: "Coordinated an inter-student futsal tournament, including match scheduling, team coordination, and ensuring smooth event operations.",
      },
    },
  ],
};

export const certifications = {
  title: { id: "Sertifikasi & Bahasa", en: "Certifications & Languages" },
  certs: [
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      year: "2024",
      icon: "Award",
    },
  ],
  languages: [
    { lang: { id: "Indonesia", en: "Indonesian" }, level: { id: "Native",         en: "Native" } },
    { lang: { id: "Inggris",   en: "English" },    level: { id: "Dasar / Pasif",  en: "Basic / Passive" } },
  ],
};

export const contact = {
  title: { id: "Kontak", en: "Contact" },
  subtitle: {
    id: "Tertarik untuk berkolaborasi atau membuka peluang magang? Hubungi saya!",
    en: "Interested in collaborating or offering an internship opportunity? Let's connect!",
  },
  form: {
    name:    { id: "Nama",    en: "Name" },
    email:   { id: "Email",   en: "Email" },
    message: { id: "Pesan",   en: "Message" },
    send:    { id: "Kirim",   en: "Send" },
    placeholder: {
      name:    { id: "Nama kamu",                   en: "Your name" },
      email:   { id: "email@kamu.com",              en: "email@you.com" },
      message: { id: "Tulis pesanmu di sini...",    en: "Write your message here..." },
    },
  },
};

export const footer = {
  text: {
    id: "© 2025 Farhan Bayna Afdillah. Dibuat dengan ❤️ menggunakan Next.js & Tailwind CSS.",
    en: "© 2025 Farhan Bayna Afdillah. Built with ❤️ using Next.js & Tailwind CSS.",
  },
};
