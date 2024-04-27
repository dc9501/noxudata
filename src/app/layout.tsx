import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NoxuData",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="text-[length:var(--fs-body)] text-[var(--clr-slate-900)] bg-[var(--clr-slate-0)] flex flex-col min-h-svh">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}