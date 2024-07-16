import React from "react";
import create from "zustand";

export enum ScrollDirection {
  Top,
  Bottom,
  Left,
  Right,
}

const DEFAUlT_DIRCTION = ScrollDirection.Bottom;
