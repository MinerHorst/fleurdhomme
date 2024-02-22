import React from "react";

export default function SummerPerfumeComponent() {
  return (
    <section className="max-w-screen relative z-[52] grid h-full grid-cols-4 grid-rows-[6] overflow-x-hidden text-white">
      <div className="col-start-2 row-span-1 row-start-1 bg-black"></div>
      <div className="col-start-4 row-span-1 row-start-2 rotate-12 border bg-red-500"></div>
      <div className="col-start-2 row-span-1 row-start-3 -rotate-6 border bg-red-500"></div>
      <div className="col-start-4 row-span-1 row-start-4 border bg-red-500"></div>
      <div className="col-start-1 row-span-1 row-start-5 -rotate-6 border bg-red-500"></div>
      <div className="col-start-3 row-span-1 row-start-6 border bg-red-500"></div>
    </section>
  );
}
