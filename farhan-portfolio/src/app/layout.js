import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolioData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://farhan-portfolio-beige.vercel.app"),
  title: `${personalInfo.name} — ${personalInfo.role}`,
  description: personalInfo.tagline,
  keywords: [
    "Farhan Bayna Afdillah",
    "Informatics Student",
    "Network Engineering",
    "Mobile Development",
    "Cisco",
    "Mikrotik",
    "Flutter",
    "PHP",
    "Portfolio",
    "Jakarta",
  ],
  openGraph: {
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description: personalInfo.tagline,
    url: "https://farhan-portfolio-beige.vercel.app",
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: personalInfo.avatar,
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} Portfolio`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.role}`,
    description: personalInfo.tagline,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-[#080811] text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
