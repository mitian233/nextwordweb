"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useConnect } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});
const navigation = [
  { name: "Marketplace", href: "/" },
  { name: "Share to X", href: "https://twitter.com/VitalikButerin" },
  { name: "Github", href: "https://github.com/NextWordApp" },
];

export const Navbar = ({ className }: { className: String }) => {
  const { connect } = useConnect();
  return (
    <nav
      className={cn(
        "flex items-center justify-between bg-transparent p-4",
        className
      )}>
      <Link href="/" className="flex items-center place-content-center">
        <div className="relative mr-4 h-8 w-8">
          <Image
            width={100}
            height={100}
            alt="Logo"
            src="/NextWordLogo.png"
            priority
            sizes=""
          />
        </div>
        <h1 className={cn("text-2xl font-bold", font.className)}>NEXT WORD</h1>
      </Link>
      <div className="hidden lg:flex lg:gap-x-12">
        {" "}
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-lg font-semibold leading-6 text-white"
            target="_blank">
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-x-2">
        <ConnectButton label="Connect Wallet"></ConnectButton>
      </div>
    </nav>
  );
};
