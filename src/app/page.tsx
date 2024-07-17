"use client";
// pages/index.js
import MainPart from "./mainpage/mainpart";
import React, { useState, useEffect } from "react";
import MainBottom from "./mainbottom/mainbottom";
import DifyChatbot from "@/components/chat/UChatbot";
import Main from "./main/main";
import { TestJsonData } from "@/const/UConst";

const wordJsonData = TestJsonData as WordJsonData;
const json_from_api = async () => {
  try {
    const requestData: RequestData = { address: "0Xsdfasjfksls" };

    const jsonData = await processData(requestData);
    return jsonData;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default function Home() {
  const [jsonData, setJsonData] = useState(wordJsonData);

  useEffect(() => {
    // Fetch data from the API and update the state
    const fetchData = async () => {
      const data = await json_from_api();
      if (data) {
        setJsonData(data);
      }
    };
    fetchData();

    // Scroll to the MainPart position when the component mounts
    document.querySelector(".main-top")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main className="min-h-screen md:px-20">
      <DifyChatbot />
      <div className="min-h-screen main-top">
        {jsonData && <Main content={jsonData} />}
      </div>
      <div className="min-h-screen main-bottom">
        {jsonData && <MainBottom content={jsonData} />}
      </div>
    </main>
  );
}
