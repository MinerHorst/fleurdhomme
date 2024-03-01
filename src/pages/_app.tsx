import { type AppType } from "next/dist/shared/lib/utils";
import { ReactLenis } from "@studio-freight/react-lenis";

import "~/styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <ReactLenis root>
        <Component {...pageProps} />;{" "}
      </ReactLenis>
    </ParallaxProvider>
  );
};

export default MyApp;
