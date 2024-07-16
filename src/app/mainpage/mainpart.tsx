"use client";

import React from "react";

import "./index.css";

import ULearnSegment from "@/components/ULearnSegment";
import { MainContent } from "@/const/UConst";
import Image from "next/image";
import { GiphyGIF } from "@/const/UImage";

const MainPart = () => {
  return (
    <div className="container flex flex-row mb-20">
      <div className="card card-side">
        <div className="card_top card-body">
          <div className="card-title">
            <div className="flex flex-row gap-2">
              <div className="w-2/3 flex-1">
                <Image
                  src={GiphyGIF.src}
                  alt="Context Image"
                  width={GiphyGIF.width}
                  height={GiphyGIF.height}
                />
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
