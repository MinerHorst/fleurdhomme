import React from "react";

import Image from "next/image";

import summer1 from "../../../public/summer1.jpeg";
import summer2 from "../../../public/summer2.jpeg";
import summer3 from "../../../public/summer3.jpeg";
import summer4 from "../../../public/summer4.webp";
import summer5 from "../../../public/summer5.webp";
import summer6 from "../../../public/summer6.jpeg";

export default function SummerPerfumeComponent() {
  return (
    <section className="relative z-[52] grid h-full grid-cols-4 grid-rows-[6] overflow-x-hidden text-white">
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
      <div className="montserrat col-start-3 row-span-1 row-start-6 space-y-4 bg-black text-center text-white">
        <p>
          The Fleur d'Homme Summer blend breaks away from the usual, blending
          the timeless with the unexpected. Oudh, famed for its complexity,
          reimagines the familiar into an extraordinary experience. Imagine
          yourself amidst a sun-kissed landscape, surrounded by lively
          fragrances. Let our scent, with its refreshing breeze and subtle Oudh
          undertones, transport you to a realm of summer enchantment.
        </p>
        <button className="z-[56] h-9 w-[75%] bg-white text-black">
          Get Fleur d'Homme Summer.
        </button>
      </div>
    </section>
  );
}
