import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore: side-effect CSS import without type declarations
import "./globals.css";
import { AdminProvider } from "@/lib/adminContext";
import { ConditionalLayout } from "@/components/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Docta Consultation",
  description: "Consult a doctor anytime, anywhere by video call",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AdminProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </AdminProvider>
      </body>
    </html>
  );
}
