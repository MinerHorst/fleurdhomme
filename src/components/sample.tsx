import Image from "next/image";
import React from "react";
import clouds from "../../public/clouds.png";
import sample from "../../public/sample.png";

export default function SampleComponent() {
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
      <div className="z-20 flex h-[60%] w-[80%] flex-col uppercase">
        <div>You might ask yourself.</div>
        <div className="w-fit font-bold leading-none md:[font-size:_clamp(2em,11vw,15em)]">
          How do I find the one that fits me best?
        </div>
      </div>
      <div className="z-20 grid h-[30%] w-[80%] grid-cols-5">
        <div className="col-span-4 flex">
          <div className="flex flex-col">
            <button className="h-15 montserrat bg-white p-3 text-black">
              Order our special samples.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
