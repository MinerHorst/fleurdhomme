import React from "react";
import ParallaxText from "../parallax";

export default function SummerComponent() {
  return (
    <section className="grid h-screen w-screen grid-cols-6 grid-rows-6 bg-[rgb(96,133,169)] text-white">
      <div className="col-span-6 row-span-1 justify-between border">
        <ParallaxText baseVelocity={-1}>Fleur d&apos;Homme</ParallaxText>
        <ParallaxText baseVelocity={1}>Summer Summer</ParallaxText>
      </div>
      <div className="col-span-2 row-span-5 row-start-2 border"></div>
    </section>
  );
}
