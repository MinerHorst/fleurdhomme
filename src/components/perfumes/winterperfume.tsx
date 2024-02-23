import React from "react";
import winter1 from "../../../public/winter1.jpeg";
import winter2 from "../../../public/winter2.jpeg";
import Image from "next/image";

export default function WinterPerfumeComponent() {
  return (
    <section className="relative z-[56] grid h-[100vh] w-screen grid-cols-3 gap-4 overflow-x-hidden text-white">
      <div className="col-span-1 col-start-1 flex flex-col justify-end">
        <div className="h-[60vh]">
          <Image
            src={winter1}
            className="h-full"
            alt="winter landscape"
          ></Image>
        </div>
      </div>
      <div className="col-span-1 col-start-2 flex flex-col justify-end">
        <div className="montserrat flex h-[60vh] bg-black text-center">
          Fleur d&apos;Homme Winter embodies the essence of pristine glacial ice
          water, artfully blended with the allure of oudh. This harmonious
          fusion creates a fragrance that captures the purity of winter&apos;s
          embrace and the captivating depth of ancient forests. With its elegant
          composition and luxurious presentation, Fleur d&apos;Homme Winter
          invites you on a journey of sensory delight, where cool freshness
          meets warm sophistication.
        </div>
      </div>
      <div className="col-span-1 col-start-3 flex flex-col justify-end">
        <div className="flex h-[60vh] bg-red-500">
          <Image src={winter2} alt="winter landscape"></Image>
        </div>
      </div>
    </section>
  );
}
