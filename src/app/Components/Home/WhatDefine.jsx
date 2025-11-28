// components/WhatDefinesUs.tsx
export default function WhatDefinesUs() {
  return (
    <section className="relative z-20 bg-slate-100  flex flex-col lg:flex-row items-start justify-between gap-12 py-24 px-6 lg:px-16 sticky top-16 md:top-20   min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
      {/* LEFT */}
      <div className="flex flex-col items-start gap-10 lg:w-1/2">
        <div>
          <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-slate-900">WHAT</h2>
          <h2 className="text-6xl sm:text-7xl font-extrabold text-slate-900 -mt-2">
            DEFINES <span className="text-black">US</span>
          </h2>
        </div>

        {/* dots */}
        <div className="flex items-center gap-3 mt-4">
          <span className="h-3 w-3 bg-blue-500 rounded-full" />
          <span className="h-3 w-3  bg-blue-700 rounded-full" />
          <span className="h-3 w-3 bg-emerald-300 rounded-full" />
          <span className="h-3 w-3 bg-fuchsia-800 rounded-full" />
          <span className="h-3 w-3 bg-fuchsia-700 rounded-full" />
        </div>

        {/* arrow circle */}
        <div className="flex items-center justify-center h-28 w-28 border-[3px] border-black rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               className="w-12 h-12" stroke="black" strokeWidth={2} fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:w-1/2 space-y-8">
        <p className="text-2xl sm:text-3xl font-semibold text-slate-900 leading-snug">
         We’re innovators at heart, designers by passion, and tech explorers by mindset.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
         Fueled by creativity and precision, we merge strategy, storytelling, and technology to shape brands that inspire and perform. Our mission is to redefine possibilities and put your brand on the map globally and meaningfully.
          and technology leaders to push the boundaries of creativity and put your brand on the global stage.
        </p>
      </div>
    </section>
  );
}
