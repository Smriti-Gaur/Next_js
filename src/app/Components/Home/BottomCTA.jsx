'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CTASection() {
  const words = ['idea', 'product', 'brand', 'startup', 'vision',"#@%*!"];

  const [index, setIndex] = useState(0);

  const ROTATION_SPEED = 250; 
  const PAUSE_AFTER_CYCLE = 1000; 

  useEffect(() => {
    let timeout;

    if (index === words.length - 1) {
      timeout = setTimeout(() => {
        setIndex(0);
      }, PAUSE_AFTER_CYCLE);
    } else {
      timeout = setTimeout(() => {
        setIndex(index + 1);
      }, ROTATION_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [index, words.length]);

  return (
    <section className="relative  bottom-0 z-50 bg-[#e5e8ea] text-[#0a0f1c] px-4 md:px-24 py-12 md:py-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">

        <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[6.2rem] font-serif leading-none">
          <span className="block tracking-tight">
            let’s discuss your
          </span>

          <span className="block">
            <span className="mr-2 sm:mr-4">next</span>

            <span className="inline-block align-middle translate-y-[-2px] text-xl sm:text-3xl md:text-6xl px-2">
              ➡️
            </span>

            <span className="ml-1 sm:ml-2 font-serif ">
              {words[index]}
            </span>
          </span>
        </h1>

        <div className="text-center md:text-left pt-10">
          <p className="md:text-3xl">Big ambitions?</p>
          <p className="md:text-3xl">We match the energy.</p>

          <Link href="/Components/ContactUs">
            <button className="mt-4 bg-black text-white rounded-md px-4 py-3 text-xl font-semibold hover:bg-gray-700">
              CONTACT US
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
