import React from "react";
import SpringComponent from "./perfumes/spring";
import SummerComponent from "./perfumes/summer";
import AutumnComponent from "./perfumes/autumn";
import WinterComponent from "./perfumes/winter";
import SummerPerfumeComponent from "./perfumes/summerperfume";
import WinterPerfumeComponent from "./perfumes/winterperfume";

export default function PerfumeComponent() {
  return (
    <div className="h-full w-screen">
      <div className="">
        <SpringComponent />
      </div>
      <div className="sticky top-0 z-[51] h-[50vh]">
        <SummerComponent />
      </div>
      <div className="h-[350vh]">
        <SummerPerfumeComponent />
      </div>
      <div className="">
        <AutumnComponent />
      </div>
      <div className="sticky top-0 z-[55] h-[50vh]">
        <WinterComponent />
      </div>
      <div className="z-[56]">
        <WinterPerfumeComponent />
      </div>
      <div className="relative z-[65] h-screen w-screen bg-black"></div>
    </div>
  );
}
