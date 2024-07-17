"use client";

import React, { Suspense } from "react";

import "./index.css";
import ULearnSegment from "@/components/ULearnSegment";
import { TestJsonData } from "@/const/UConst";
import { GiphyGIF } from "@/const/UImage";

import Image from "next/image";
import UVideoPlayer from "@/components/player/UVideoplayer";
import UGifPlayer from "@/components/player/UGifplayer";
import { USkeleton } from "@/components/USkeleton";

const MainTop = () => {
  return (
    <div className="container flex flex-row mb-20">
      <div className="maintop card">
        <div className="card-body">
          <UGifPlayer src={"/assets/video/giphy.gif"} />
        </div>
        <div className="card-title bg-current">
          <div className="text-white">
            <ULearnSegment
              word={TestJsonData.en.word}
              pronunciation={TestJsonData.en.pronunciation}
              sentence={TestJsonData.en.sentence}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTop;
