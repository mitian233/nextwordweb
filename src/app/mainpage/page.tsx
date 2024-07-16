"use client";
import Image from "next/image";
import MainPart from "./mainpart";

export default function mainpage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20">
      <MainPart></MainPart>
    </main>
  );
}
