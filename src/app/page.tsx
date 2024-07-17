"use client";
// pages/index.js
import MainPart from "./mainpage/mainpart";
import React from "react";
import MainBottom from "./mainbottom/mainbottom";
import MainTop from "./maintop/maintop";
import DifyChatbot from "@/components/chat/UChatbot";
import Main from "./main/main";
import ReactDOM from "react-dom";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const durationFn = function (deltaTop: any) {
  return deltaTop;
};

const scrollToTop = () => {
  animateScroll.scrollToTop();
};
const scrollTo = (offset: any) => {
  scroller.scrollTo("scroll-to-element", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: offset,
  });
};
const scrollToWithContainer = () => {
  let goToContainer = new Promise((resolve, reject) => {
    Events.scrollEvent.register("end", () => {
      resolve(true);
      Events.scrollEvent.remove("end");
    });

    scroller.scrollTo("scroll-container", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  });

  goToContainer.then(() =>
    scroller.scrollTo("scroll-container-second-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      containerId: "scroll-container",
      offset: 50,
    })
  );
};

export default function Home() {
  return (
    <main className="min-h-screen md:px-20">
      <DifyChatbot />
      <div className="h-screen">
        <Main />
      </div>
      <div className="h-screen">
        <MainPart />
      </div>
      <div className="h-screen">
        <MainBottom />
      </div>
    </main>
  );
}
