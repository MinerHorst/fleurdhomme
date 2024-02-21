import React from "react";
import ParallaxText from "../parallax";
import Image from "next/image";
import pixelclouds from "../../../public/pixelclouds.png";

export default function SummerComponent() {
  return (
    <>
      <section className="relative z-[51] grid h-[200vh] w-screen grid-cols-5 grid-rows-5 border bg-black text-black">
        <div className="space-y-y z-50 col-span-6 flex h-screen w-full flex-col border py-2 text-white">
          <ParallaxText fontsize={100} baseVelocity={-1}>
            Fleur d&apos;Homme
          </ParallaxText>
          <ParallaxText fontsize={100} baseVelocity={1}>
            Spring Spring
          </ParallaxText>
        </div>
        <div className="z-50 col-span-2 row-start-2 h-screen  p-2">
          <p className="montserrat z-50 hidden flex-col space-y-2 md:flex">
            The Fleur d&apos;Homme Spring blend breaks free from the ordinary,
            infusing the classic with the unexpected. Oudh, renowned for its
            complexity, transforms the familiar into something extraordinary.
            Picture yourself in a blossoming landscape, surrounded by vibrant
            scents. Let our fragrance, with its crisp air and rich Oudh
            undertones, transport you to a new dimension of springtime allure.
          </p>
          <div className="montserrat flex flex-col space-y-2 md:hidden">
            Fleur d&apos;Homme Spring combines the earthy tone of Oudh with the
            freshness of the spring. Embark on a journey to experience
            fragrances like never before.
          </div>
        </div>
      </section>
    </>
  );
}
