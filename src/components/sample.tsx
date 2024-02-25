import Image from "next/image";
import React from "react";
import clouds from "../../public/spring2.jpg";

export default function SampleComponent() {
  return (
    <div className="relative z-[80] flex h-[150vh] w-screen flex-col items-center justify-end text-white">
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
            Fleur d&apos;Homme
          </div>
        </div>
        <div className="">Where scents linger even after the first spray.</div>
      </div>
      <div className="montserrat z-[20] flex h-[30%] w-[80%] flex-col justify-end">
        <div className="flex h-[25%] w-full justify-between">
          <div className="flex min-h-full w-[95%] flex-col space-y-2 pb-4 pt-10 text-sm text-white">
            <div className="grid h-full w-full grid-cols-4">
              <div className="col-span-2 flex flex-col justify-between md:flex-row">
                <p>© {new Date().getFullYear()} Fleur d&apos;Homme</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Docs</p>
              </div>
              <div className="col-span-2 col-start-5 flex-col justify-center">
                <div className="flex justify-evenly"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
