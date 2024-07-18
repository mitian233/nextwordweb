"use client";
import { WordsContext } from "@/context/words";
import { Word, WordJsonSchema } from "@/lib/word";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import {
  IJoystickUpdateEvent,
  Joystick,
} from "react-joystick-component/build/lib/Joystick";
import { wordDataAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import {
  Castle,
  Illustrate,
  Impact,
  Nextword,
  Sauce,
  Scarce,
} from "@/const/UConst";

const UJoystick: React.FC = () => {
  const {
    Words,
    addWord,
    removeWord,
    updateWord,
    isWordUpdating,
    setIsWordUpdating,
  } = useContext(WordsContext);

  const router = useRouter();

  const [direction, setDirection] = React.useState("");

  const [num, setNum] = React.useState(0);

  const Datalist = [Nextword, Illustrate, Castle, Impact, Sauce, Scarce];

  const handleJoystickMove = (event: IJoystickUpdateEvent) => {
    if (event.type === "move") {
      console.log("move");
      setDirection(event.direction ?? "");
    }
  };

  const { mutate: sendReq, isPending } = useMutation({
    mutationFn: async (word: Word) => {
      const response = await fetch("/api/word", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.body;
    },
    // add user input immediately
    onMutate(word) {
      addWord(word);
    },

    onSuccess: async (stream) => {
      if (!stream) throw new Error("No Stream Found");

      const id = nanoid();
      const responseMessage: Word = {
        id,
        isUserMessage: false,
        wordJson: "",
      };
      addWord(responseMessage);
      setIsWordUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        // console.log(chunkValue);
        updateWord(id, (prev) => prev + chunkValue);
      }

      setIsWordUpdating(false);
    },
    onError: (err, message) => {
      console.log(err);
      removeWord(message.id);
    },
  });

  const [wordData, setWordData] = useAtom(wordDataAtom);

  const handleJoystickStop = async (event: IJoystickUpdateEvent) => {
    if (event.type === "stop") {
      switch (direction) {
        case "FORWARD":
          console.log("FORWARD");
          window.scrollBy({
            top: -window.innerHeight,
            behavior: "smooth",
          });
          break;
        case "BACKWARD":
          console.log("BACKWARD");
          window.scrollBy({
            top: window.innerHeight * 3,
            behavior: "smooth",
          });
          break;
        case "RIGHT":
          getNextWord();
          break;
        case "LEFT":
          getNextWord();
          break;
        default:
          setDirection("");
          break;
      }
    }
    setDirection("");

    function getNextWord() {
      console.log("RIGHT: ", num);

      const data: WordJsonData = Datalist[num % Datalist.length];

      // data = await getWordData();
      console.log(data);

      if (typeof data === "object" && data !== null) {
        // 确保 data 是 WordJsonData 类型的对象
        setWordData(data);
      } else {
        // data 类型不正确，可以设置为 null，或者抛出错误
        setWordData(null);
      }
      setNum(num + 1);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 mr-4 mb-36 text-center">
      <div className="block md:hidden transition duration-300 ease-in-out transform">
        <div className="flex items-center justify-start">
          {direction ? (
            <span className="kbd-sm mr-2 text-sm text-green-500">
              {direction}
            </span>
          ) : (
            ""
          )}
          <Joystick
            size={64}
            baseColor="#f1f1f1"
            stickColor="#4CAF50"
            move={handleJoystickMove}
            stop={handleJoystickStop}
          />
        </div>
      </div>
      <div className="hidden md:block transition duration-300 ease-in-out transform">
        <div className="flex flex-col items-center justify-center">
          {direction ? (
            <span className="kbd-sm mb-2 text-sm text-green-500">
              {direction}
            </span>
          ) : (
            ""
          )}
          <Joystick
            size={100}
            baseColor="#f1f1f1"
            stickColor="#4CAF50"
            move={handleJoystickMove}
            stop={handleJoystickStop}
          />
        </div>
      </div>
    </div>
  );
};

export default UJoystick;
