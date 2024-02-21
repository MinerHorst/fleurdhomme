import React from "react";
import ParallaxText from "../parallax";
import Image from "next/image";
import summer from "../../../public/summer.png";

export default function SummerComponent() {
  return (
    <>
      <section className="relative grid h-screen w-screen grid-cols-5 grid-rows-5 bg-[rgb(165,176,142)] text-black">
        <div className="space-y-y z-50 col-span-6 flex h-fit w-full flex-col bg-[rgb(165,176,142)] py-2 shadow-xl shadow-[rgb(165,176,142)]">
          <ParallaxText fontsize={100} baseVelocity={-1}>
            Fleur d&apos;Homme
          </ParallaxText>
          <ParallaxText fontsize={100} baseVelocity={1}>
            Summer Summer
          </ParallaxText>
        </div>
        <div className="z-50 col-span-3 col-start-2 row-start-3 h-fit bg-[rgb(165,176,142)] shadow-xl shadow-[rgb(165,176,142)] md:col-span-2 md:col-start-2">
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
        <div className="absolute left-0 top-0 z-10 hidden md:inline">
          <Image
            className="max-w-screen max-h-screen min-h-screen"
            src={summer}
            alt="drawing of a summer scene."
          />
        </div>
      </section>
    </>
  );
}
