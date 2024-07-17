"use client";

import React from "react";

import "./index.css";
import ULearnSegment from "@/components/ULearnSegment";
import { MainContent } from "@/const/UConst";
import { GiphyGIF } from "@/const/UImage";

import Image from "next/image";

const MainTop = () => {
  return (
    <div className="container flex flex-row mb-20">
      <div className="maintop card">
        {/* <div>
          <Image
            className="w-full"
            src={GiphyGIF.src}
            alt="Context Image"
            layout="fill"
            objectFit="cover"
            fill
          />
        </div> */}
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
