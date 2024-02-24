import React from "react";
import ParallaxText from "../parallax";
import Image from "next/image";
import springperfume from "../../../public/spring.jpg";
import { Parallax } from "react-scroll-parallax";
import spring from "../../../public/spring2.jpg";

export default function SummerComponent() {
  return (
    <>
      <section className="relative z-[100] w-screen overflow-x-hidden bg-black text-black">
        <div className="space-y-y col-span-full row-span-3 row-start-2 flex w-full flex-col justify-center py-2 text-white">
          <ParallaxText fontsize={250} baseVelocity={-0.5}>
            Fleur d&apos;Homme
          </ParallaxText>
          <ParallaxText fontsize={100} baseVelocity={1}>
            Spring Spring
          </ParallaxText>
        </div>
        <div className="hidden grid-cols-1 place-items-center opacity-80 md:grid md:grid-cols-2 md:gap-[2rem] lg:h-[120vh] lg:grid-cols-4">
          <div className="col-span-1 flex h-[20vh] w-full flex-col justify-between md:h-[60vh] md:-rotate-[20deg] lg:h-screen">
            <Parallax
              speed={15}
              className="flex h-full flex-col justify-between space-y-2"
            >
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
            </Parallax>
          </div>
          <div className="relative col-span-1 h-[20vh] w-full space-y-2 md:h-[60vh] md:-rotate-[20deg] lg:h-screen">
            <Parallax
              speed={0}
              className="relative flex h-full flex-col justify-between space-y-2"
            >
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>

              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
            </Parallax>
          </div>
          <div className="col-span-1 h-[20vh] w-full md:h-[60vh] md:-rotate-[20deg] lg:h-screen">
            <Parallax speed={20} className="flex h-full flex-col space-y-2">
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
            </Parallax>
          </div>
          <div className="col-span-1 h-[20vh] w-full md:h-[60vh] md:-rotate-[20deg] lg:h-screen">
            <Parallax
              speed={10}
              className="flex h-full flex-col justify-between space-y-2"
            >
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
              <div className="h-[50%]">
                <Image
                  src={springperfume}
                  className="h-full w-full"
                  alt="iamge of a nottel"
                ></Image>
              </div>
            </Parallax>
          </div>
        </div>
        <div className="grid h-screen grid-cols-3 bg-black">
          <div className="col-span-2 col-start-2 flex flex-col justify-center">
            <h1 className="montserrat text-white [font-size:_clamp(3em,4vw,12em)]">
              Enter a new era of spring perfumes with Fleur d'Homme.
            </h1>
            <div className="montserrat grid h-[50%] w-full grid-cols-4 grid-rows-2 gap-3">
              <div className="montserrat col-span-2 row-start-1 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ducimus inventore nam ut, similique quis a provident.
                Doloremque, iste libero voluptates perferendis consectetur
                molestiae? Perferendis itaque aliquam tempora maxime fugiat.
              </div>
              <div className="text-muted-foreground col-span-2 row-span-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptatem quae repellendus architecto, iste quam
                soluta quisquam necessitatibus porro eveniet culpa odit numquam
                dignissimos saepe! Amet odit minima dolor repudiandae!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                sint doloribus nisi sit unde cupiditate quas, quidem porro
                quisquam libero. Magnam animi odit libero quia repellat
                dignissimos voluptas, aspernatur aut.
              </div>
              <div className="col-span-2 row-start-2 flex flex-col justify-between text-white">
                <p className="montserrat text-muted-foreground">
                  Crafted from the finest of ingredients.
                </p>
                <ul className="montserrat text-muted-foreground">
                  <li>Oudh</li>
                  <li>Bergamot</li>
                  <li>Amber</li>
                  <li>Flowers</li>
                  <li>Vetiver</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-screen grid-cols-3 bg-black">
          <div className="col-span-2 opacity-80">
            <Image src={spring} alt="imag eof a perfume bottle"></Image>
          </div>
          <div className="montserrat relative col-span-1 space-y-4 px-2 text-white">
            <p>
              The Fleur d&apos;Homme Spring blend breaks free from the ordinary,
              infusing the classic with the unexpected. Oudh, renowned for its
              complexity, transforms the familiar into something extraordinary.
              Picture yourself in a blossoming landscape, surrounded by vibrant
              scents. Let our fragrance, with its crisp air and rich Oudh
              undertones, transport you to a new dimension of springtime allure.
            </p>
            <button className="z-[56] h-9 w-[75%] bg-white text-black">
              Get Fleur d&apos;Homme Spring.
            </button>
          </div>
        </div>
        <div className="h-[50vh] bg-red-500 md:hidden"></div>
      </section>
    </>
  );
}
