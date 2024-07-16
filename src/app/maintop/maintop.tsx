"use client";

import React from "react";

import "./index.css";
import ULearnSegment from "@/components/ULearnSegment";
import { MainContent } from "@/const/UConst";

const MainTop = () => {
  return (
    <div className="container flex flex-row mb-20">
      <div className="maintop card">
        <video
          className="video card-title"
          src="../../public/assets/video/web.mp4"
          controls
          autoPlay
          loop></video>
        <div className="card-title card-body bg-current">
          <div className="text-white">
            <ULearnSegment
              word={MainContent.en.word}
              pronunciation={MainContent.en.pronunciation}
              sentence={MainContent.en.sentence}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTop;
