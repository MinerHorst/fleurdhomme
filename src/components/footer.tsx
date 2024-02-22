import React from "react";
import ParallaxText from "./parallax";

export default function FooterComponent() {
  return (
    <div>
      <div className="justify- relative flex h-[98vh] w-screen flex-col items-center justify-end pt-10 text-white">
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
