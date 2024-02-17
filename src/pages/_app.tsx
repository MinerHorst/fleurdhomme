import { type AppType } from "next/dist/shared/lib/utils";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import "~/styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

const MyApp: AppType = ({ Component, pageProps }) => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ParallaxProvider>
      <ReactLenis root>
        <Component {...pageProps} />;{" "}
      </ReactLenis>
    </ParallaxProvider>
  );
};

export default MyApp;
