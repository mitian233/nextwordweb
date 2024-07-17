import { Word } from "@/lib/word";
import { nanoid } from "nanoid";
import { ReactNode, createContext, useState } from "react";
import { TestJsonData } from "@/const/UConst";
import { string } from "zod";

export const WordsContext = createContext<{
  Words: Word[];
  isWordUpdating: boolean;
  addWord: (message: Word) => void;
  removeWord: (id: string) => void;
  updateWord: (id: string, updateFn: (prevText: string) => string) => void;
  setIsWordUpdating: (isUpdating: boolean) => void;
}>({
  Words: [],
  isWordUpdating: false,
  addWord: () => {},
  removeWord: () => {},
  updateWord: () => {},
  setIsWordUpdating: () => {},
});

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [isWordUpdating, setIsWordUpdating] = useState<boolean>(false);
  const [words, setWords] = useState<Word[]>([
    {
      id: nanoid(),
      wordJson: JSON.stringify(TestJsonData),
      isUserMessage: false,
    },
  ]);

  const addWord = (w: Word) => {
    setWords((prev) => [...prev, w]);
  };

  const removeWord = (id: string) => {
    setWords((prev) => prev.filter((w) => w.id !== id));
  };

  const updateWord = (id: string, updateFn: (newtext: string) => string) => {
    setWords((prev) =>
      prev.map((message) => {
        if (message.id === id) {
          return { ...message, text: updateFn(message.wordJson) };
        }
        return message;
      })
    );
  };

  return (
    <WordsContext.Provider
      value={{
        Words: words,
        addWord: addWord,
        removeWord: removeWord,
        updateWord: updateWord,
        isWordUpdating: isWordUpdating,
        setIsWordUpdating: setIsWordUpdating,
      }}>
      {children}
    </WordsContext.Provider>
  );
}
