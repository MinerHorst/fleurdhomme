import { type AppType } from "next/dist/shared/lib/utils";
import { ReactLenis } from "@studio-freight/react-lenis";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "~/styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <ReactLenis root>
        <SpeedInsights />
        <Component {...pageProps} />;{" "}
      </ReactLenis>
    </ParallaxProvider>
  );
};

export default MyApp;
