import { motion } from "framer-motion";
interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export default function ParallaxText({ children }: ParallaxProps) {
  return (
    <div className="parallax">
      <motion.div>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
