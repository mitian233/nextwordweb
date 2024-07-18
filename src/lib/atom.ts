import {atom} from "jotai";
import { TestJsonData } from "@/const/UConst";

const wordJsonData = TestJsonData as WordJsonData;

export const wordDataAtom = atom<WordJsonData|null>(wordJsonData);

export const showSkeletonAtom = atom<boolean>(true);
