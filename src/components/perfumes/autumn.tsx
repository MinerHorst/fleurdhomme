import React from "react";
import ParallaxText from "../parallax";

export default function AutumnComponent() {
  return (
    <section className="grid h-screen w-screen grid-cols-6 grid-rows-6 bg-[rgb(161,121,127)] text-white">
      <div className="col-span-6 row-span-1 justify-between border">
        <ParallaxText fontsize={50} baseVelocity={-1}>
          Fleur d&apos;Homme
        </ParallaxText>
        <ParallaxText baseVelocity={1}>Autumn Autumn</ParallaxText>
      </div>
      <div className="col-span-2 row-span-5 row-start-2 border"></div>
    </section>
  );
}
