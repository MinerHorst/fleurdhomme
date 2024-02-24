import React from "react";

import Image from "next/image";

import summer2 from "../../../public/summer2.jpg";
import summer3 from "../../../public/summer3.jpeg";
import summer4 from "../../../public/summer4.webp";
import summer5 from "../../../public/summer5.webp";
import summer6 from "../../../public/summer6.jpeg";

export default function SummerPerfumeComponent() {
  return (
    <>
      <section className="relative z-[52] grid h-[250vh] grid-cols-4 grid-rows-[6] overflow-x-hidden text-white">
        <div className="col-start-2 row-span-1 row-start-1">
          <Image
            src={summer6}
            className="h-full w-full"
            alt="Summer image"
          ></Image>
        </div>
        <div className="col-start-4 row-span-1 row-start-2 rotate-12">
          <Image
            src={summer2}
            className="h-full w-full"
            alt="Summer image"
          ></Image>
        </div>
        <div className="col-start-2 row-span-1 row-start-3 -rotate-6">
          <Image
            src={summer3}
            className="h-full w-full"
            alt="Summer image"
          ></Image>
        </div>
        <div className="col-start-4 row-span-1 row-start-4">
          <Image
            src={summer4}
            className="h-full w-full"
            alt="Summer image"
          ></Image>
        </div>
        <div className="col-start-1 row-span-1 row-start-5 -rotate-6">
          <Image
            src={summer5}
            className="h-full w-full"
            alt="Summer image"
          ></Image>
        </div>
      </section>
      <section className="relative z-[60] grid h-screen grid-cols-3  bg-black px-4"></section>
    </>
  );
}
