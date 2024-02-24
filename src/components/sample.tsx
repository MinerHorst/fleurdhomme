import Image from "next/image";
import React from "react";
import clouds from "../../public/spring2.jpg";

export default function SampleComponent() {
  return (
    <div className="relative z-[80] flex h-[150vh] w-screen flex-col items-center justify-around text-white">
      <div className="absolute left-0 top-0 h-full w-full opacity-50">
        <Image
          loading="lazy"
          src={clouds}
          alt="Hero clouds background"
          className="h-full w-full"
        ></Image>
      </div>
      <div className="z-20 flex h-[60%] w-[80%] flex-col justify-between uppercase">
        <div>
          <div>Welcome to the world of</div>
          <div className="w-fit font-bold leading-none md:[font-size:_clamp(2em,11vw,15em)]">
            Fleur d'Homme
          </div>
        </div>

        <div className="">Where scents linger even after the first spray.</div>
      </div>
    </div>
  );
}
