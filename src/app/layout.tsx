import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vincent Chen -- Full-Stack & AI Engineer",
  description:
    "Vincent Chen -- full-stack engineer and applied-AI builder shipping production platforms, RAG pipelines, and cloud-native infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0C0C0C]">
        {children}
      </body>
    </html>
  );
}
