"use client";
// pages/index.js
import MainPart from "./mainpage/mainpart";
import React, { useState, useEffect, useContext } from "react";
import MainBottom from "./mainbottom/mainbottom";
import DifyChatbot from "@/components/chat/UChatbot";
import Image from "next/image";
import Main from "./main/main";
import { WordsContext } from "@/context/words";
import { wordDataAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import { requestJsonData, requestOneSentenceJsonData } from "@/lib/URequest";

export default function Home() {
  const { Words } = useContext(WordsContext);
  const inverseWords = [...Words].reverse();

  const [wordData, setWordData] = useAtom(wordDataAtom);

  useEffect(() => {
    console.log("words", Words);
    console.log(inverseWords);
    if (inverseWords[0].wordJson) {
      // 使用 JSON.parse() 方法将 JSON 字符串解析为对象实例
      const data: WordJsonData = JSON.parse(inverseWords[0].wordJson);
      setWordData(data);
    }

    // Scroll to the MainPart position when the component mounts
    document.querySelector(".main-top")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleRequest = () => {
    requestJsonData().then(console.log).catch(console.error);
    requestOneSentenceJsonData().then(console.log).catch(console.error);
  };

  return (
    <main className="min-h-screen md:px-20">
      <div className="min-h-screen main-top">
        {wordData && <Main content={wordData} />}
      </div>
      <div className="min-h-screen main-bottom">
        {wordData && <MainBottom content={wordData} />}
      </div>
      <div>
        <div className="btn btn-primary" onClick={handleRequest}>
          Get Data
        </div>
        <div>
          <Image
            src="https://dalleprodsec.blob.core.windows.net/private/images/0a6335b5-937f-43cc-9dc3-523ee08e0fd1/generated_00.png?se=2024-07-19T07%3A54%3A35Z&sig=O6kngn6fEfXoPQqPl%2FR6ccQw126j5n5oVicyc0%2FpuxQ%3D&ske=2024-07-24T10%3A26%3A37Z&skoid=e52d5ed7-0657-4f62-bc12-7e5dbb260a96&sks=b&skt=2024-07-17T10%3A26%3A37Z&sktid=33e01921-4d64-4f8c-a055-5bdaffd5e33d&skv=2020-10-02&sp=r&spr=https&sr=b&sv=2020-10-02"
            alt="hello"
            width={400}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}
