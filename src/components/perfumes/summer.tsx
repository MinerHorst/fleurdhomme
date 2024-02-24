import React from "react";
import ParallaxText from "../parallax";
import Image from "next/image";
import summer2 from "../../../public/summer2.jpg";

export default function SummerComponent() {
  return (
    <>
      <section className="relative z-[51] flex h-[50vh] w-screen flex-col text-white">
        <div className="montserrat z-50 flex w-screen flex-col items-center font-bold">
          <p className="text-white [font-size:_clamp(2em,12vw,12em)]">
            Fleur d&apos;Homme
          </p>
          <p className="text-white [font-size:_clamp(2em,12vw,12em)]">Summer</p>
        </div>
      </section>
    </>
  );
}
