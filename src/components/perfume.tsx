import React from "react";
import SpringComponent from "./perfumes/spring";
import SummerComponent from "./perfumes/summer";
import AutumnComponent from "./perfumes/autumn";
import WinterComponent from "./perfumes/winter";

export default function PerfumeComponent() {
  return (
    <div className="h-[650vh] w-screen">
      <div className="sticky top-0 z-[50] h-[150vh]">
        <SpringComponent />
      </div>
      <div className="sticky top-0 z-[51] h-[150vh]">
        <SummerComponent />
      </div>
      <div className="sticky top-0 z-[52] h-[150vh]">
        <AutumnComponent />
      </div>
      <div className="sticky top-0 z-[53] h-[100vh]">
        <WinterComponent />
      </div>
    </div>
  );
}
