import React, { useRef } from "react";
import BgVideo from "../../assets/video/backgroundvideo.mp4";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

type Product = {
  title: string;
  link: string;
  thumbnail: string;
};

export const HeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 150, damping: 35, bounce: 20 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 2], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 2], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col [perspective:1000px]"
    >
      {/* 🎥 Background Video in flat context */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-50] [transform-style:flat] pointer-events-none"
      >
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black overlay (flat context too) */}
      <div className="absolute inset-0 bg-black/70 z-[-40] [transform-style:flat] pointer-events-none" />

      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-10 will-change-transform [backface-visibility:hidden]"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard key={product.title} product={product} translate={translateX} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20 mb-20">
          {secondRow.map((product) => (
            <ProductCard key={product.title} product={product} translate={translateXReverse} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard key={product.title} product={product} translate={translateX} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => (
  <div className="max-w-7xl mx-auto py-20 md:py-40 px-4 w-full relative z-10">
    <h1 className="text-2xl md:text-7xl font-bold text-white">
      Audire Technologies <br />
    </h1>
    <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-300">
      Audire Technologies (Est 2008) is India's leading High End AV and Automation Company. Featuring brands including Meyer Sound, Barco, Wilson Audio, dCS, Dan D'Agostino, Screen Excellence, Audio Excellence, Lutron and many others.
    </p>
  </div>
);

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 shadow-lg will-change-transform [backface-visibility:hidden] z-10"
    >
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover object-left-top absolute h-full w-full inset-0"
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
