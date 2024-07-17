"use client";
// pages/index.js
import MainPart from "./mainpage/mainpart";
import React, { useState, useEffect, useContext } from "react";
import MainBottom from "./mainbottom/mainbottom";
import DifyChatbot from "@/components/chat/UChatbot";
import Main from "./main/main";
import { TestJsonData } from "@/const/UConst";
import { WordsContext } from "@/context/words";

const wordJsonData = TestJsonData as WordJsonData;
const json_from_api = async () => {
  try {
    // const requestData: RequestData = { address: "0Xsdfasjfksls" };

    // const jsonData = await processData(requestData);
    const jsonData = await fetch("/api/word", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ messages: [message] }),
    });

    return jsonData.body;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default function Home() {
  const { Words } = useContext(WordsContext);
  const inverseWords = [...Words].reverse();

  const [jsonData, setJsonData] = useState(wordJsonData);

  useEffect(() => {
    // Fetch data from the API and update the state
    // const fetchData = async () => {
    //   const data = await json_from_api();
    //   if (data) {
    //     setJsonData(data);
    //   }
    // };
    // fetchData();

    console.log("words", Words);
    console.log(inverseWords);
    if (inverseWords[0].wordJson) {
      // 使用 JSON.parse() 方法将 JSON 字符串解析为对象实例
      const data: WordJsonData = JSON.parse(inverseWords[0].wordJson);
      setJsonData(data);
    }

    // Scroll to the MainPart position when the component mounts
    document.querySelector(".main-top")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main className="min-h-screen md:px-20">
      <div className="min-h-screen main-top">
        {jsonData && <Main content={jsonData} />}
      </div>
      <div className="min-h-screen main-bottom">
        {jsonData && <MainBottom content={jsonData} />}
      </div>
    </main>
  );
}
