import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/scss/style.scss";
import "@/styles/globals.css";

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
    template: "%s | REEBAU",
    default: "REEBAU",
  },
  description:
    "REEBAU ist ein zuverlässiges Bau- und Trockenbauunternehmen mit Fokus auf Qualität, Professionalität und präzise handwerkliche Umsetzung.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* eslint-disable @next/next/no-css-tags -- prebuilt vendor CSS served as-is from /public so its own relative font/asset url()s keep resolving, same convention the theme's own SCSS uses */}
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
      </head>
      {/* eslint-enable @next/next/no-css-tags */}
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
