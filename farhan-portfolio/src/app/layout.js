import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LangProvider } from "@/context/LangContext";
import { siteConfig } from "@/data/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title.en,
  description: siteConfig.description.en,
  keywords: [
    "portfolio",
    "informatics student",
    "IT internship",
    "flutter",
    "cisco",
    "mikrotik",
    "jakarta",
    "Farhan Bayna Afdillah",
  ],
  openGraph: {
    title: siteConfig.title.en,
    description: siteConfig.description.en,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title.en,
    description: siteConfig.description.en,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
