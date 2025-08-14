import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Interview Buddy",
  description:
    "An AI-First App to Get You Hired. Record, review, and refine your interviews, track opportunities, and tailor your CV all in one AI-powered workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
