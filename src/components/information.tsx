import React from "react";

export default function InformationComponent() {
  return (
    <>
      <div className="relative flex h-screen w-screen flex-col items-center justify-evenly text-white">
        <h4 className="z-20 flex w-[80%] flex-col uppercase">
          <div className="flex">
            <span className="flex h-fit w-fit flex-col">
              <span>
                <span>/</span> <span className="neubit--anim">you may ask</span>
              </span>
              <span>yourself</span>{" "}
            </span>
            <p className="montserrat w-fit font-bold leading-none md:[font-size:_clamp(2em,4vw,6em)]">
              Aren&apos;t there like one billion perfumes? What would make this
              one so different?
            </p>
          </div>
        </h4>
        <p className="montserrat hidden w-[50%] text-center md:inline">
          Fleur d&apos;Homme distinguishes itself by blending fresh florals with
          masculine depth, challenging gender norms in perfumery. Crafted with
          luxurious ingredients, it evokes emotions and memories, becoming an
          intimate companion and leaving a lasting impression with its unique
          and captivating scent.
        </p>
        <h2 className="montserrat">But, well just see for yourself.</h2>
      </div>
    </>
  );
}
