import React, { useState } from "react";
import ParallaxText from "../parallax";
import Image from "next/image";
import spring1 from "../../../public/autumn.png";
import spring2 from "../../../public/springperfume.png";
import spring3 from "../../../public/summer.png";
import spring4 from "../../../public/spring.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AutumnComponent() {
  const images = [spring1, spring2, spring3, spring4];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const goToNextImage = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
    setLoading(true);
  };

  const goToPrevImage = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    setLoading(true);
  };

  return (
    <section className="relative z-[60] grid h-screen w-screen grid-cols-6 grid-rows-6 bg-[rgb(161,121,127)] text-white">
      <div className="col-span-6 row-span-1 justify-between py-2">
        <ParallaxText fontsize={50} baseVelocity={-1}>
          Fleur d&apos;Homme
        </ParallaxText>
        <ParallaxText baseVelocity={1}>Autumn</ParallaxText>
      </div>
      <div className="col-span-6 row-span-4 row-start-2 grid grid-cols-6 grid-rows-6 border">
        <div className="col-span-1 row-span-full flex flex-col items-end justify-center border">
          <ChevronLeft onClick={goToPrevImage} />
        </div>
        <div className="col-span-4 col-start-2 row-span-5 h-full w-full">
          <Image
            src={images[currentImgIndex] as any}
            alt="image for autumn"
            onLoad={() => setLoading(false)}
            className="h-full max-h-full w-full"
          />
        </div>
        <div className="col-span-1 col-start-6 row-span-6 flex flex-col items-start justify-center border">
          <ChevronRight onClick={goToNextImage} />
        </div>
      </div>
      <div className="relative col-span-4 col-start-2 flex w-full items-center justify-center border">
        <button className="z-[56] h-9 bg-white text-black">
          Get Fleur d'Homme Spring.
        </button>
      </div>
    </section>
  );
}
