import React from "react";
import SpringComponent from "./perfumes/spring";
import SummerComponent from "./perfumes/summer";
import AutumnComponent from "./perfumes/autumn";
import WinterComponent from "./perfumes/winter";
import SummerPerfumeComponent from "./perfumes/summerperfume";

export default function PerfumeComponent() {
  return (
    <div className="w-screen">
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
      <div className="">
        <WinterComponent />
      </div>
    </div>
  );
}
