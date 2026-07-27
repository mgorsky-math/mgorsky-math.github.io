import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maximilian Gorsky — Structural Graph Theory",
  description:
    "Academic website of Maximilian Gorsky, senior researcher in structural graph theory at IBS-DIMAG.",
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
