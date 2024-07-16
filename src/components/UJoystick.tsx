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
    <div className="fixed bottom-0 right-0 mr-4 mb-4 text-center">
      <Joystick
        size={100}
        baseColor="#f1f1f1"
        stickColor="#4CAF50"
        move={handleJoystickMove}
        stop={handleJoystickStop}
      />
      {direction ? <span className="kbd mt-1">{direction}</span> : ""}
    </div>
  );
};

export default UJoystick;
