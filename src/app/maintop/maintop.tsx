"use client";

import React from "react";

import "./index.css";
import ULearnSegment from "@/components/ULearnSegment";
import { MainContent } from "@/const/UConst";
import { GiphyGIF } from "@/const/UImage";

import Image from "next/image";
import UVideoPlayer from "@/components/player/UVideoplayer";
import UGifPlayer from "@/components/player/UGifplayer";

const MainTop = () => {
  return (
    <div className="container flex flex-row mb-20">
      <div className="maintop card">
        <div className="card-body">
          <UGifPlayer src={"/assets/video/giphy.gif"}/>
        </div>
        <div className="card-title bg-current">
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
