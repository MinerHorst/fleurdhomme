import React from "react";
import ParallaxText from "../parallax";

export default function WinterComponent() {
  return (
    <>
      <section className="relative z-[55] flex h-screen w-screen flex-col bg-black text-white">
        <div className="z-50 flex h-fit w-screen flex-col items-center overflow-hidden">
          <ParallaxText fontsize={250} baseVelocity={0}>
            Fleur d&apos;Homme
          </ParallaxText>
          <ParallaxText fontsize={100} baseVelocity={0}>
            Winter Winter
          </ParallaxText>
        </div>
      </section>
    </>
  );
}
