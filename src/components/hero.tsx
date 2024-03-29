import React from "react";
import Spline from "@splinetool/react-spline";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

import heroimg from "../../public/spring2.jpg";

export default function HeroComponent() {
  return (
    <>
      <div className="relative h-screen w-screen overflow-x-hidden">
        <div className="fixed left-0 top-0 z-[55] hidden h-screen w-screen opacity-95 md:inline">
          <Spline scene="https://prod.spline.design/L4IIm7aypnJfw1tX/scene.splinecode" />
        </div>
        <div className="absolute left-0 top-0 z-[56] flex h-screen w-screen flex-col items-center justify-center pt-[15rem]">
          <Parallax className="montserrat w-[80%] text-center text-white md:pt-20 md:[font-size:_clamp(1em,2vw,3em)]">
            <div>
              We&apos;re more than just a perfume brand; we&apos;re artisans who
              weave narratives into every spray, crafting experiences that
              linger long after the scent fades.
            </div>
          </Parallax>
        </div>
        <div className=" absolute left-0 top-0 flex h-screen w-screen opacity-50">
          <Image src={heroimg} className="w-screen" alt="spring scene"></Image>
        </div>
      </div>
    </>
  );
}
