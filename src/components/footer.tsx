import React from "react";

export default function FooterComponent() {
  return (
    <div>
      <div className="justify- relative flex h-[98vh] w-screen flex-col items-center justify-between pt-10 text-white">
        <div className="flex flex-col items-center justify-center space-y-20 text-center">
          <h4 className="flex flex-col items-center justify-center">
            <p className="copperplate">Fleur d&apos;homme</p>
            <p className="montserrat font-bold uppercase md:[font-size:_clamp(2em,4vw,6em)]">
              More than just a brand.
            </p>
          </h4>
        </div>

        <h2 className="montserrat z-50 space-y-4 text-center">
          <p className="montserrat">Developed by Luis Keßler</p>
          <p>
            Deeply inspired by{" "}
            <a
              className="text-muted-foreground"
              target="_blank"
              href="https://abstract-intelligence.com/"
            >
              abstract-intelligence.com
            </a>
          </p>
        </h2>
      </div>
    </div>
  );
}
