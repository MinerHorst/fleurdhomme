import React from "react";
import SpringComponent from "./perfumes/spring";
import SummerComponent from "./perfumes/summer";
import AutumnComponent from "./perfumes/autumn";
import WinterComponent from "./perfumes/winter";

export default function PerfumeComponent() {
  return (
    <div className="w-screen">
      <div className="">
        <SpringComponent />
      </div>
      <div className="">
        <SummerComponent />
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
