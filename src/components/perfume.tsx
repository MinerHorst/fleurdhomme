import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import SpringComponent from "./perfumes/spring";
import SummerComponent from "./perfumes/summer";
import AutumnComponent from "./perfumes/autumn";
import WinterComponent from "./perfumes/winter";

export default function PerfumeComponent() {
  const MAX_HOVER_HISTORY = 10;
  const [hoverHistory, setHoverHistory] = useState<number[]>([]);

  const colors = ["#e7d5cb", "#b5b5b5", "#6b7c85", "#a3a3a3"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleMouseEnter = (index: number) => {
    setHoverHistory((prev) => {
      const newHoverHistory = [...prev, index];
      const truncatedHistory = newHoverHistory.slice(-MAX_HOVER_HISTORY);
      if (prev.length >= MAX_HOVER_HISTORY) {
        setTimeout(() => {
          setHoverHistory((prev) => prev.slice(1)); // Remove the first item
        }, 3000);
      }
      return truncatedHistory;
    });
  };

  return (
    <div className="h-[650vh] w-screen">
      <div className="sticky top-0 h-[150vh] border">
        <SpringComponent />
      </div>
      <div className="sticky top-0 h-[150vh] border">
        <SummerComponent />
      </div>
      <div className="sticky top-0 h-[150vh] border">
        <AutumnComponent />
      </div>
      <div className="sticky top-0 h-[100vh] border">
        <WinterComponent />
      </div>
    </div>
  );
}
