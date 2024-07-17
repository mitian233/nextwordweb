"use client";
import Image from "next/image";
import MainBottom from "./mainbottom";

export default function mainbottompage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-20">
      <MainBottom></MainBottom>
    </main>
  );
}
