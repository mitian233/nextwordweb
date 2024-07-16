import React from "react";

interface ULearnSegmentProps {
  word: string;
  pronunciation: string;
  sentence: string;
}

const ULearnSegment: React.FC<ULearnSegmentProps> = ({
  word,
  pronunciation,
  sentence,
}) => {
  return (
    <div className="flex-auto">
      <div className="flex gap-4 align-text-bottom">
        <span className="font-bold text-3xl">{word}</span>
        <span className="flex-1"></span>
        <span className="text-lg text-gray-300">{pronunciation}</span>
      </div>
      <div className="word">
        <span className="font-light text-sm text-wrap">{sentence}</span>
      </div>
    </div>
  );
};

export default ULearnSegment;
