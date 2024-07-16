"use client";
// pages/index.js
import MainPart from "./mainpage/mainpart";
import React from "react";
import MainBottom from "./mainbottom/mainbottom";
import MainTop from "./maintop/maintop";

export default function Home() {
  return (
    <main className="min-h-screen px-20">
      <MainTop />
      <MainPart />
      <MainBottom />
    </main>
  );
}
