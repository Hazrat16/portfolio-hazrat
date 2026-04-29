import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S.M. Hazrat Ali | Portfolio",
  description:
    "Software Engineer specializing in React, Next.js, and high-performance frontend experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
