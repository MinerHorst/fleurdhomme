import Image from "next/image";
import React from "react";
import clouds from "../../public/clouds.png";
import Spline from "@splinetool/react-spline";
import { Parallax } from "react-scroll-parallax";

export default function HeroComponent() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="fixed left-0 top-0 hidden h-screen w-screen md:inline">
          <Spline scene="https://prod.spline.design/L4IIm7aypnJfw1tX/scene.splinecode" />
        </div>
        <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-start">
          <Parallax
            className="copperplate w-[80%] text-center text-white [font-size:_clamp(1em,1.25vw,3em)] md:py-20"
            speed={-10}
          >
            <h1>Fleur d&apos;homme</h1>
          </Parallax>
        </div>
        <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center">
          <Parallax
            className="montserrat w-[80%] text-center font-bold text-white md:pt-20 md:[font-size:_clamp(1em,2vw,3em)]"
            speed={+20}
          >
            <h1>
              We&apos;re more than just a perfume brand; we&apos;re artisans who
              weave narratives into every spray, crafting experiences that
              linger long after the scent fades.
            </h1>
          </Parallax>
        </div>
        <div className="h-full w-full">
          <Image
            loading="lazy"
            src={clouds}
            alt="Hero clouds background"
            className="h-full w-full"
          ></Image>
        </div>
      </div>
    </>
  );
}
