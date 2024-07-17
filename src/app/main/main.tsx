// // "use client";import UGifPlayer from "@/components/player/UGifplayer";
import ULearnSegment from "@/components/ULearnSegment";
import React from "react";
import create from "zustand";
import UGifPlayer from "@/components/player/UGifplayer";

// Define the store
interface StoreState {
  scrollCount: number;
  overlayEle1: React.ReactNode;
  overlayEle2: React.ReactNode;
  imageUrl: string;
  firstHandle: () => void;
  secondHandle: () => void;
}

const ele1 = (text: string) => <div>{text}</div>;
const ele2 = (text: string) => <div>{text}</div>;

const useStore = create<StoreState>((set) => ({
  scrollCount: 0,
  overlayEle1: ele1(""),
  overlayEle2: ele2(""),
  imageUrl: "/assets/video/giphy.gif",

  firstHandle: () => {
    set((state) => ({
      overlayEle1: ele1("Updated overlay Text 1"),
      scrollCount: state.scrollCount + 1,
    }));
  },
  secondHandle: () => {
    set((state) => ({
      imageUrl: "/assets/video/new-image.gif",
      overlayEle1: ele1("Updated overlay Text 2"),
      overlayEle2: ele2("Updated overlay Text 3"),
      scrollCount: state.scrollCount + 1,
    }));
  },
}));

interface MainProps {
  content: WordJsonData;
}

const Main: React.FC<MainProps> = ({ content }) => {
  const {
    scrollCount,
    overlayEle1,
    overlayEle2,
    imageUrl,
    firstHandle,
    secondHandle,
  } = useStore();

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = event.currentTarget.scrollTop;
    if (scrollTop > 0) {
      if (scrollCount === 0) {
        firstHandle();
      } else if (scrollCount === 1) {
        secondHandle();
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <UGifPlayer src={imageUrl} />
        </div>
        <div
          className="relative w-full h-screen overflow-hidden m-4 md:mx-8 md:my-16 pointer-events-none"
          onScroll={handleScroll}>
          <div className="absolute z-1 bottom-0 w-full flex flex-col items-center text-white">
            <div className="absolute inset-x-0 bottom-0 h-full w-full bg-black opacity-50 z-0 p-4 md:p-8"></div>
            <div className="relative z-10 p-4 md:p-8">
              <ULearnSegment
                word={content.en.word}
                pronunciation={content.en.pronunciation}
                sentence={content.en.sentence}
              />
              <div className="paragraphs mt-1">
                <span className="font-serif">{content.en.paragraphs}</span>
              </div>
            </div>
          </div>
          <div className="absolute z-2 top-0 w-full text-center">
            <div className="pt-12"></div>
            {overlayEle1}
          </div>
          <div className="absolute z-2 bottom-0 w-full text-center">
            {overlayEle2}
            <div className="pb-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
