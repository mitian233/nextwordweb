"use client";
import { WordsContext } from "@/context/words";
import { Word } from "@/lib/word";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import {
  IJoystickUpdateEvent,
  Joystick,
} from "react-joystick-component/build/lib/Joystick";
import {getWordData} from "@/app/(functional)/api/word/route";
import {wordDataAtom} from "@/lib/atom";
import {useAtom} from "jotai";

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
        // body: JSON.stringify({ messages: [word] }),
      });

      return response.body;
    },
    // add user input immediately
    onMutate(word) {
      addWord(word);
    },

    onSuccess: async (stream) => {
      if (!stream) throw new Error("No Stream Found");

      // add new message to context
      const id = nanoid();
      const responseMessage: Word = {
        id,
        isUserMessage: false,
        wordJson: "",
      };
      addWord(responseMessage);
      setIsWordUpdating(true);

      // read the stream and update the message
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

      // clean up the text-input after messages updated
      setIsWordUpdating(false);
      // setInput("");

      // refocus
      // setTimeout(() => {
      //   textareaRef.current?.focus();
      // }, 10);
    },
    onError: (err, message) => {
      console.log(err);
      // toast.error("Something went wrong. Please try again.");
      removeWord(message.id);
      // textareaRef.current?.focus();
    },
  });

  const [wordData, setWordData] = useAtom(wordDataAtom);

  const handleJoystickStop = async (event: IJoystickUpdateEvent) => {
    if (event.type === "stop") {
      let data
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
          console.log("RIGHT");
          data = await getWordData();
          setWordData(data)
          // console.log(data)
          // router.push("/learn/word");

          break;
        case "LEFT":
          console.log("LEFT");
          data = await getWordData();
          setWordData(data)
          // console.log(data)
          // router.push("/learn/word");
          break;
        default:
          setDirection("");
          break;
      }
      setDirection("");
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
