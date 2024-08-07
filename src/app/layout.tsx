import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import React from "react";
import UJoystick from "@/components/UJoystick";

import MainContent from "../../public/assets/data/main.json";
import { Navbar } from "../components/navbar";
import { Providers } from "./provider";
import DifyChatbot from "@/components/chat/UChatbot";

// const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NEXT WORD",
  description: "Learn languages in the NEXT Word",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Providers>
          <Navbar
            className={metadata.title?.toString() ?? "NEXT WORD"}></Navbar>
          {children}
          <DifyChatbot />
          <UJoystick />
        </Providers>
      </body>
    </html>
  );
}
