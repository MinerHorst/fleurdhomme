import React from "react";
import ParallaxText from "../parallax";
import Image from "next/image";
import summer from "../../../public/summer.png";

export default function SummerComponent() {
  return (
    <>
      <section className="relative z-[51] flex h-[50vh] w-screen flex-col text-white">
        <div className="z-50 flex h-fit w-screen flex-col items-center overflow-hidden">
          <ParallaxText fontsize={250} baseVelocity={0}>
            Fleur d&apos;Homme
          </ParallaxText>
          <ParallaxText fontsize={100} baseVelocity={0}>
            Summer Summer
          </ParallaxText>
        </div>
      </section>
    </>
  );
}
