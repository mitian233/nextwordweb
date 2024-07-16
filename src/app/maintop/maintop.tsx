"use client";

import React from "react";

import "./index.css";

const MainTop = () => {
  return (
    <div className="container flex flex-row ">
      <div className="maintop card">
        <video
          className="video card-title"
          src="../../public/assets/video/web.mp4"
          controls
          autoPlay
          loop></video>
        <div className="card-title card-body bg-current">
          <div className="text-white">
            <div className="text-pretty grid-flow-col space-x-8">
              <span className="font-bold text-5xl grid-cols-4">Next Word</span>
              <span className="font-mono text-xl grid-cols-4 text-gray-500">
                /nekst wɜːd/
              </span>
            </div>
            <span className="text-lg mt-4">
              Next Word: Elevate your English vocabulary with AI-powered
              learning. Next Word is an innovative English learning software
              that utilizes artificial intelligence to enhance your vocabulary.
              It adapts to your learning pace, offering personalized word
              recommendations and engaging exercises to improve language
              proficiency.
            </span>
            <button
              className="btn-outline"
              onClick={() => {
                console.log(process.cwd());
              }}>
              cwd
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTop;
