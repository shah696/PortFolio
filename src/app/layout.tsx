import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shah Hussain | Frontend Developer — React.js & Next.js",
    template: "%s | Shah Hussain",
  },
  description:
    "Frontend Developer with 1+ year of professional experience building production-ready web applications with React.js, Next.js, TypeScript, and Tailwind CSS. Specialized in REST API integration, technical SEO, and performance optimization.",
  keywords: [
    "Shah Hussain",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Technical SEO",
    "Web Developer Pakistan",
  ],
  authors: [{ name: "Shah Hussain" }],
  openGraph: {
    title: "Shah Hussain | Frontend Developer — React.js & Next.js",
    description:
      "Frontend Developer building production-ready web applications with React.js, Next.js, TypeScript, and Tailwind CSS.",
    type: "website",
    images: ["/icons/profile2.jpg"],
  },
  icons: {
    icon: "/icons/profile4.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-white`}
      >
        {/* Decorative ambient background glow */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
