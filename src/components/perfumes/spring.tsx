import React from "react";
import ParallaxText from "../parallax";
import Image from "next/image";
import spring from "../../../public/spring.png";

export default function SpringComponent() {
  return (
    <>
      <section className="grid h-screen w-screen grid-cols-6 grid-rows-6 bg-white py-2 text-black">
        <div className="0 dshadow-xl z-50 col-span-6 row-span-1 flex flex-col space-y-2 bg-white shadow-xl shadow-white">
          <ParallaxText baseVelocity={-1}>Fleur d&apos;Homme</ParallaxText>
          <ParallaxText baseVelocity={1}>Spring Spring</ParallaxText>
        </div>
        <div className="z-50 col-span-full row-span-1 bg-white shadow-xl shadow-white md:col-span-2 md:col-start-5 md:row-span-1 md:space-y-10">
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
        <div className="absolute left-0 top-0 z-10">
          <Image
            src={spring}
            alt="drawing of a spring scene."
            className="inverted"
          />
        </div>
      </section>
    </>
  );
}
