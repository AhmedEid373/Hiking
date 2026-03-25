import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HostInking — Fast & Reliable Web Hosting",
  description:
    "Lightning-fast web hosting solutions. Shared hosting, VPS, dedicated servers, and more. Starting at $2.99/mo with 99.9% uptime guarantee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-navy-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}
