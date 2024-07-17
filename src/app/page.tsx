"use client";
// pages/index.js
import MainPart from "./mainpage/mainpart";
import React from "react";
import MainBottom from "./mainbottom/mainbottom";
import MainTop from "./maintop/maintop";
import DifyChatbot from "@/components/chat/chatbot";

export default function Home() {
  return (
    <main className="min-h-screen md:px-20">
      <DifyChatbot />
      <div className="h-screen">
        <MainTop />
      </div>
      <div className="h-screen">
        <MainPart />
      </div>
      <div className="h-screen">
        <MainBottom />
      </div>
    </main>
  );
}
