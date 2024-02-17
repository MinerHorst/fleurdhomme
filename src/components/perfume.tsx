import React, { useState } from "react";
import SpringComponent from "./perfumes/spring";
import SummerComponent from "./perfumes/summer";
import AutumnComponent from "./perfumes/autumn";
import WinterComponent from "./perfumes/winter";

export default function PerfumeComponent() {
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
