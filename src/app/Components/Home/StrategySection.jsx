'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StrategySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 0.5], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section className="relative z-50 bg-[#e5e8ea] px-4 md:px-24 py-12 md:py-20">
      <div className="md:flex md:justify-between md:items-start gap-12">

        <div className="md:w-1/2 md:sticky md:top-16 mb-10 md:mb-0">
          <h1 className="text-4xl text-black sm:text-5xl md:text-6xl font-sans uppercase leading-tight">
            We Develop <br />
            Brands <br />
            From Strategy <br />
            To immersive <br />
            Experience.
          </h1>
        </div>

        <div ref={ref} className="md:w-1/2 space-y-14">

          <motion.div
            style={{ x, opacity }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <h2 className="text-neutral-950 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              1
            </h2>
            <div>
              <h3 className="text-neutral-950 text-2xl sm:text-3xl md:text-4xl font-semibold">
                Brand Strategy
              </h3>
              <p className="text-black text-base sm:text-lg md:text-xl mt-3">
                We create a strategy that aligns with your goals and resonates
                with your audience.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0.15, 0.6], [120, 0]),
              opacity: useTransform(scrollYProgress, [0.15, 0.5], [0, 1]),
            }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <h2 className="text-neutral-950 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              2
            </h2>
            <div>
              <h3 className="text-neutral-950 text-2xl sm:text-3xl md:text-4xl font-semibold">
                Brand Experience
              </h3>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-3">
                Visual identities and consistent brand presence.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0.3, 0.8], [120, 0]),
              opacity: useTransform(scrollYProgress, [0.3, 0.7], [0, 1]),
            }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <h2 className="text-neutral-950 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              3
            </h2>
            <div>
              <h3 className="text-neutral-950 text-2xl sm:text-3xl md:text-4xl font-semibold">
                Digital Growth
              </h3>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-3">
                Creativity, technology, and data-driven growth.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
