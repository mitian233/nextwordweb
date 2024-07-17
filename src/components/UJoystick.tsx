"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {
  IJoystickUpdateEvent,
  Joystick,
} from "react-joystick-component/build/lib/Joystick";

const UJoystick: React.FC = () => {
  const router = useRouter();

  const [direction, setDirection] = React.useState("");

  const handleJoystickMove = (event: IJoystickUpdateEvent) => {
    if (event.type === "move") {
      console.log("move");
      setDirection(event.direction ?? "");
    }
  };

  const handleJoystickStop = (event: IJoystickUpdateEvent) => {
    if (event.type === "stop") {
      switch (direction) {
        case "FORWARD":
          console.log("FORWARD");
          router.push("/maintop");
          break;
        case "RIGHT":
          console.log("RIGHT");
          // router.push("/mainright");
          break;
        case "LEFT":
          console.log("LEFT");
          // router.push("/mainleft");
          break;
        case "BACKWARD":
          console.log("BACKWARD");
          router.push("/mainbottom");
          break;

        default:
          setDirection("");
          break;
      }
    }
  };

  return (
    <div className="fixed bottom-0 right-0 mr-4 mb-36 text-center">
      <div className="block md:hidden transition duration-300 ease-in-out transform">
        <div className="flex items-center justify-start">
          <Joystick
            size={64}
            baseColor="#f1f1f1"
            stickColor="#4CAF50"
            move={handleJoystickMove}
            stop={handleJoystickStop}
          />
          {direction ? <span className="kbd ml-2">{direction}</span> : ""}
        </div>
      </div>
      <div className="hidden md:block transition duration-300 ease-in-out transform">
        <div className="flex flex-col items-center justify-center">
          {direction ? <span className="kbd mb-2">{direction}</span> : ""}
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
