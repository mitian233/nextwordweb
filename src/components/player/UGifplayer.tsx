import React, { useRef, useState } from "react";
import { useGifController } from "gif-tsx";
import { USkeleton } from "../USkeleton";
import { cn } from "@/lib/utils";
interface UGifPlayerProps {
  src: string;
  onClick?: () => void;
}

const UGifPlayer: React.FC<UGifPlayerProps> = ({ src, onClick }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controller = useGifController(src, canvasRef);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (controller.state === "resolved") {
      if (isPlaying) {
        controller.pause();
        setIsPlaying(false);
      } else {
        controller.play();
        setIsPlaying(true);
      }
    }

    // 调用传入的 onClick 回调函数
    if (onClick) {
      onClick();
    }
  };

  // 根据 controller 的状态渲染不同的 UI
  if (controller.state === "loading") {
    return (
      <div className="relative w-full h-screen flex items-center justify-center">
        <USkeleton />
      </div>
    );
  }

  if (controller.state === "error") {
    console.error(controller.errorMessage);
    return <div>Error loading the GIF</div>;
  }

  // 渲染 canvas 元素和控制按钮
  return (
    <div
      onClick={handleClick}
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <canvas
        {...controller.canvasProps}
        ref={canvasRef}
        className={cn(
          "w-full h-full object-contain",
          isPlaying ? "" : "opacity-60"
        )}
      />
      {!isPlaying && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}>
          ❚❚
        </div>
      )}
    </div>
  );
};

export default UGifPlayer;
