import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimation,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export default function ParallaxText({
  children,
  baseVelocity = 100,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-10, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  const controls = useAnimation();

  controls.start((i) => ({
    x: baseX.get() + directionFactor.current * baseVelocity * (i / 1000),
    transition: {
      type: "tween",
      duration: 0.1,
    },
  }));

  const updateDirectionFactor = () => {
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
  };

  updateDirectionFactor();

  return (
    <div className="parallax">
      <motion.div
        className="scroller montserrat font-bold"
        animate={controls}
        style={{ x }}
      >
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i}>{children} </span>
        ))}
      </motion.div>
    </div>
  );
}
