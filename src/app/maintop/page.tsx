"use client";
import Image from "next/image";
import MainTop from "./maintop";

export default function mainpage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20">
      <MainTop></MainTop>
    </main>
  );
}
