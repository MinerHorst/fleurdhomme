import Head from "next/head";
import HeroComponent from "~/components/hero";
import InformationComponent from "~/components/information";
import PerfumeComponent from "~/components/perfume";
import { useState } from "react";
import FooterComponent from "~/components/footer";
import SampleComponent from "~/components/sample";

const MAX_HOVER_HISTORY = 10;

export default function Home() {
  const [hoverHistory, setHoverHistory] = useState<number[]>([]);

  const colors = ["#e7d5cb", "#b5b5b5", "#6b7c85", "#a3a3a3"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleMouseEnter = (index: number) => {
    setHoverHistory((prev) => {
      const newHoverHistory = [...prev, index];
      const truncatedHistory = newHoverHistory.slice(-MAX_HOVER_HISTORY);
      if (prev.length >= MAX_HOVER_HISTORY) {
        setTimeout(() => {
          setHoverHistory((prev) => prev.slice(1)); // Remove the first item
        }, 3000);
      }
      return truncatedHistory;
    });
  };

  return (
    <>
      <Head>
        <title>Fleur d&apos;Homme</title>
        <meta
          name="description"
          content="Fleur d'Homme the new fragrance for men with enriching scents."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="cursor">
        <div className="cursor__inner">
          {Array.from({ length: 25 * 25 }).map((_, index) => {
            const isHovered = hoverHistory.includes(index);
            const itemColor = isHovered ? getRandomColor() : "";
            return (
              <div
                key={index}
                className={`cursor__inner__item ${isHovered ? "hover" : ""}`}
                onMouseOver={() => handleMouseEnter(index)}
                style={{ background: itemColor }}
              ></div>
            );
          })}
        </div>
      </div>
      <main className="flex flex-col">
        <HeroComponent />
        <InformationComponent />
        <PerfumeComponent />
        <SampleComponent />
      </main>
    </>
  );
}
