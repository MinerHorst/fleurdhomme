import React from "react";
import ParallaxText from "../parallax";

export default function WinterComponent() {
  return (
    <section className="relative z-[60] grid h-screen w-screen grid-cols-6 grid-rows-6 bg-black text-white">
      <div className="col-span-6 row-span-1 justify-between py-2">
        <ParallaxText fontsize={50} baseVelocity={-1}>
          Fleur d&apos;Homme
        </ParallaxText>
        <ParallaxText baseVelocity={1}>Autumn</ParallaxText>
      </div>
      <div className="col-span-2 row-span-5 row-start-2"></div>
    </section>
  );
}
