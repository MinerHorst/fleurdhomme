import React from "react";
import ParallaxText from "../parallax";

export default function WinterComponent() {
  return (
    <section className="relative z-[60] grid h-screen w-screen grid-cols-6 grid-rows-6 bg-black text-white">
      <div className="col-span-6 row-span-1 justify-between border">
        <ParallaxText baseVelocity={-1}>Fleur d&apos;Homme</ParallaxText>
        <ParallaxText baseVelocity={1}>Winter Winter</ParallaxText>
      </div>
      <div className="col-span-2 row-span-5 row-start-2 border"></div>
    </section>
  );
}
