import React from "react";
import ParallaxText from "../parallax";
import Image from "next/image";
import spring from "../../../public/spring.png";

export default function SummerComponent() {
  return (
    <>
      <section className="relative w-screen bg-black text-black">
        <div className="grid h-screen grid-cols-5 grid-rows-5">
          <div className="space-y-y col-span-full row-span-3 row-start-2 flex w-full flex-col justify-center py-2 text-white">
            <ParallaxText fontsize={250} baseVelocity={-0.5}>
              Fleur d&apos;Homme
            </ParallaxText>
            <ParallaxText fontsize={100} baseVelocity={1}>
              Spring Spring
            </ParallaxText>
          </div>
        </div>
        <div className="h-screen w-screen "></div>
      </section>
    </>
  );
}
