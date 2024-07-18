"use client";
// pages/index.js
import React, { useState, useEffect, useContext } from "react";
import MainBottom from "./mainbottom/mainbottom";
import Main from "./main/main";
import { WordsContext } from "@/context/words";
import { wordDataAtom } from "@/lib/atom";
import { useAtom } from "jotai";

export default function Home() {
  const { Words } = useContext(WordsContext);
  const inverseWords = [...Words].reverse();

  const [wordData, setWordData] = useAtom(wordDataAtom);

  useEffect(() => {
    console.log("words", Words);
    console.log(inverseWords);
    if (inverseWords[0].wordJson) {
      const data: WordJsonData = JSON.parse(inverseWords[0].wordJson);
      setWordData(data);
    }

    // Scroll to the MainPart position when the component mounts
    document.querySelector(".main-top")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main className="min-h-screen md:px-20">
      <div className="min-h-screen main-top">
        {wordData && <Main content={wordData} />}
      </div>
      <div className="min-h-screen main-bottom">
        {wordData && <MainBottom content={wordData} />}
      </div>
    </main>
  );
}
