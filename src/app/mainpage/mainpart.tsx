"use client";

import React from "react";

import "./index.css";

import ULearnSegment from "@/components/ULearnSegment";
import { MainContent } from "@/const/UConst";

const MainPart = () => {
  return (
    <div className="container flex flex-row">
      <div className="card card-side">
        <div className="card_top card-body">
          <div className="card-title">
            <div className="flex flex-row gap-2">
              <div className="video w-2/3 flex-1">
                <video
                  className="video"
                  src="../../public/assets/video/web.mp4"
                  width={640}
                  controls
                  autoPlay
                  loop></video>
              </div>
              <div className="right_content w-1/3 flex-auto">
                <ULearnSegment
                  word={MainContent.en.word}
                  pronunciation={MainContent.en.pronunciation}
                  sentence={MainContent.en.sentence}
                />
              </div>
            </div>
          </div>
          <div className="paragraphs mt-1">
            <span className="font-serif">{MainContent.en.paragraphs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPart;
