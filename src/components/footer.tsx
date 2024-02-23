import React from "react";
import ParallaxText from "./parallax";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function FooterComponent() {
  return (
    <div>
      <div className="justify-endpt-10 relative flex h-[98vh] w-screen flex-col items-center  text-white">
        <Image src={logo} alt="logo" className="w-[75vh]"></Image>
        <h2 className="montserrat z-50 space-y-4 text-center">
          <p className="text-white [font-size:_clamp(1em,3vw,5em)]">
            More than just another
          </p>
          <h3 className="[font-size:_clamp(2em,12vw,16em)]">Brand.</h3>
        </h2>
      </div>
    </div>
  );
}
