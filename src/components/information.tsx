import React from "react";

export default function InformationComponent() {
  return (
    <>
      <div className="relative hidden h-screen w-screen flex-col items-center justify-evenly text-white md:flex">
        <div className="montserrat hidden w-[50%] text-center md:inline">
          Fleur d&apos;Homme distinguishes itself by blending fresh florals with
          masculine depth, challenging gender norms in perfumery. Crafted with
          luxurious ingredients, it evokes emotions and memories, becoming an
          intimate companion and leaving a lasting impression with its unique
          and captivating scent.
        </div>
        <div className="montserrat">But, well just see for yourself.</div>
      </div>
    </>
  );
}
