import React from "react";
import ParallaxText from "../parallax";
import Image from "next/image";
import springperfume from "../../../public/magazine.png";
import { Parallax } from "react-scroll-parallax";
import spring from "../../../public/spring.png";

export default function SummerComponent() {
  return (
    <>
      <section className="relative z-[100] w-screen overflow-x-hidden bg-black text-black">
        <div className="space-y-y col-span-full row-span-3 row-start-2 flex w-full flex-col justify-center py-2 text-white">
          <ParallaxText fontsize={250} baseVelocity={-0.5}>
            Fleur d&apos;Homme
          </ParallaxText>
          <ParallaxText fontsize={100} baseVelocity={1}>
            Spring Spring
          </ParallaxText>
        </div>
        <div className="hidden grid-cols-1 place-items-center md:grid md:grid-cols-2 md:gap-[2rem] lg:h-[120vh] lg:grid-cols-4">
          <div className="col-span-1 flex h-[20vh] w-full flex-col justify-between md:h-[60vh] md:-rotate-[20deg] lg:h-screen">
            <Parallax
              speed={5}
              className="flex h-full flex-col justify-between space-y-2"
            >
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
            </Parallax>
          </div>
          <div className="relative col-span-1 h-[20vh] w-full space-y-2 md:h-[60vh] md:-rotate-[20deg] lg:h-screen">
            <Parallax
              speed={-5}
              className="relative flex h-full flex-col justify-between space-y-2"
            >
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>

              <div className="montserrat relative flex h-[50%] text-white">
                <div>
                  The Fleur d&apos;Homme Spring blend breaks free from the
                  ordinary, infusing the classic with the unexpected. Oudh,
                  renowned for its complexity, transforms the familiar into
                  something extraordinary. Picture yourself in a blossoming
                  landscape, surrounded by vibrant scents. Let our fragrance,
                  with its crisp air and rich Oudh undertones, transport you to
                  a new dimension of springtime allure.
                </div>
                <button className="absolute bottom-0 left-0 z-[56] h-9 w-[75%] bg-white text-black">
                  Get Fleur d&apos;Homme Spring.
                </button>
              </div>
            </Parallax>
          </div>
          <div className="col-span-1 h-[20vh] w-full md:h-[60vh] md:-rotate-[20deg] lg:h-screen">
            <Parallax speed={5} className="flex h-full flex-col space-y-2">
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
            </Parallax>
          </div>
          <div className="col-span-1 h-[20vh] w-full md:h-[60vh] md:-rotate-[20deg] lg:h-screen">
            <Parallax
              speed={5}
              className="flex h-full flex-col justify-between space-y-2"
            >
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
            </Parallax>
          </div>
        </div>
        <div className="grid h-screen grid-cols-3 bg-black">
          <div className="col-span-2">
            <Image src={spring} alt="imag eof a perfume bottle"></Image>
          </div>
          <div className="montserrat relative col-span-1 space-y-4 px-2 text-white">
            <p>
              The Fleur d&apos;Homme Spring blend breaks free from the ordinary,
              infusing the classic with the unexpected. Oudh, renowned for its
              complexity, transforms the familiar into something extraordinary.
              Picture yourself in a blossoming landscape, surrounded by vibrant
              scents. Let our fragrance, with its crisp air and rich Oudh
              undertones, transport you to a new dimension of springtime allure.
            </p>
            <button className="z-[56] h-9 w-[75%] bg-white text-black">
              Get Fleur d&apos;Homme Spring.
            </button>
          </div>
        </div>
        <div className="h-[50vh] bg-red-500 md:hidden"></div>
      </section>
    </>
  );
}
