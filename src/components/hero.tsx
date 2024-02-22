import Image from "next/image";
import React from "react";
import clouds from "../../public/clouds.png";
import Spline from "@splinetool/react-spline";
import { Parallax } from "react-scroll-parallax";
import ParallaxText from "./parallax";

export default function HeroComponent() {
  return (
    <>
      <div className="relative h-screen w-screen overflow-x-hidden">
        <div className="fixed left-0 top-0 hidden h-screen w-screen md:inline">
          <Spline scene="https://prod.spline.design/L4IIm7aypnJfw1tX/scene.splinecode" />
        </div>
        <div className="max-w-screen absolute left-0 top-0 flex h-screen flex-col items-center justify-start py-2 text-white">
          <ParallaxText fontsize={100} baseVelocity={1}>
            Fleur d&apos;Homme Fleur d&apos;Homme Fleur d&apos;Homme
          </ParallaxText>
        </div>
        <div className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center pt-[15rem]">
          <Parallax className="montserrat w-[80%] text-center text-white md:pt-20 md:[font-size:_clamp(1em,2vw,3em)]">
            <h1>
              We&apos;re more than just a perfume brand; we&apos;re artisans who
              weave narratives into every spray, crafting experiences that
              linger long after the scent fades.
            </h1>
          </Parallax>
        </div>
      </div>
    </>
  );
}
