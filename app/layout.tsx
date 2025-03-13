import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Dock } from "@/components/dock";
import Chat from "@/components/chat";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Yogesh Pal",
  description: "portfolio of Yogesh",
  icons: {
    icon: '/favicons/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <script async src="https://cdn.seline.so/seline.js" data-token="16c6158aa7fc8b5"></script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
        <Dock />
        <Chat />
      </body>
    </html>
  );
}
