import Image from "next/image";
import React from "react";
import clouds from "../../public/clouds.png";
import Spline from "@splinetool/react-spline";

export default function QuizComponent() {
  return (
    <div className="relative flex h-[150vh] w-screen flex-col items-center justify-around text-white">
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          loading="lazy"
          src={clouds}
          alt="Hero clouds background"
          className="h-full w-full"
        ></Image>
      </div>
      <h4 className="z-20 flex w-[80%] flex-col uppercase">
        <p>You might ask yourself.</p>
        <p className="w-fit font-bold leading-none md:[font-size:_clamp(2em,11vw,15em)]">
          How do I find the one that fits me best?
        </p>
      </h4>
      <div className="z-20 grid h-[30%] w-[80%] grid-cols-5 border">
        <Spline
          className="h-ft w-fit border"
          scene="https://prod.spline.design/lOzGPITbY7YEDbHx/scene.splinecode"
        />
        <div className="col-span-4 border">
            
        </div>
      </div>
    </div>
  );
}
