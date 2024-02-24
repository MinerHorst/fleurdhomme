import React from "react";
import ParallaxText from "../parallax";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

import autumn from "../../../public/autumn.jpg";
import autumn2 from "../../../public/autumn2.jpg";

export default function AutumnComponent() {
  return (
    <>
      <section className="relative z-[100] w-screen overflow-x-hidden bg-black text-black">
        <div className="space-y-y col-span-full row-span-3 row-start-2 flex w-full flex-col justify-center py-2 text-white">
          <ParallaxText fontsize={250} baseVelocity={-0.5}>
            Fleur d&apos;Homme
          </ParallaxText>
          <ParallaxText fontsize={100} baseVelocity={1}>
            Autumn Autumn
          </ParallaxText>
        </div>
        <div className="hidden grid-cols-1 place-items-center md:grid md:grid-cols-2 md:gap-[2rem] lg:h-[120vh] lg:grid-cols-4">
          <div className="col-span-1 flex h-[20vh] w-full flex-col justify-between md:h-[60vh] md:rotate-[20deg] lg:h-screen">
            <Parallax
              speed={5}
              className="flex h-full flex-col justify-between space-y-2"
            >
              <div className="h-[50%]">
                <Image
                  src={autumn}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
              <div className="h-[50%]">
                <Image
                  src={autumn}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
            </Parallax>
          </div>
          <div className="relative col-span-1 h-[20vh] w-full space-y-2 md:h-[60vh] md:rotate-[20deg] lg:h-screen">
            <Parallax
              speed={-5}
              className="relative flex h-full flex-col justify-between space-y-2"
            >
              <div className="h-[50%]">
                <Image
                  src={autumn}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>

              <div className="h-[50%]">
                <Image
                  src={autumn}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
            </Parallax>
          </div>
          <div className="col-span-1 h-[20vh] w-full md:h-[60vh] md:rotate-[20deg] lg:h-screen">
            <Parallax speed={5} className="flex h-full flex-col space-y-2">
              <div className="h-[50%]">
                <Image
                  src={autumn}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
              <div className="h-[50%]">
                <Image
                  src={autumn}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
            </Parallax>
          </div>
          <div className="col-span-1 h-[20vh] w-full md:h-[60vh] md:rotate-[20deg] lg:h-screen">
            <Parallax
              speed={5}
              className="flex h-full flex-col justify-between space-y-2"
            >
              <div className="h-[50%]">
                <Image
                  src={autumn}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
              <div className="h-[50%]">
                <Image
                  src={autumn}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
            </Parallax>
          </div>
        </div>
        <div className="grid h-screen grid-cols-3 bg-black">
          <div className="col-span-1 space-y-4">
            <p className="montserrat px-2 text-white">
              The Fleur d&apos;Homme Autumn blend defies convention, melding
              tradition with innovation. Oudh, celebrated for its intricate
              nature, reinvents the commonplace into something remarkable.
              Envision yourself amidst an autumnal tableau, enveloped by warm
              and spicy aromas. Allow our scent, with its brisk breeze and deep
              Oudh accords, to whisk you away to a realm of autumnal charm.
            </p>
            <button className="z-[56] h-9 w-[75%] bg-white text-black">
              Get Fleur d&apos;Homme Autumn.
            </button>
          </div>
          <div className="col-span-2">
            <Image src={autumn2} alt="image hand drawn autumn"></Image>
          </div>
        </div>
        <div className="h-[50vh] bg-red-500 md:hidden"></div>
      </section>
    </>
  );
}
