'use client';

const WORDS = [
  'TREND',
  'CREATE',
  'INNOVATE',
  'GROW',
  'SUCCEED',
];

export default function Marquee() {
  return (
    <section className=" bg-black text-white overflow-hidden py-4 relative">
      
      {/* Moving row */}
      <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">

        {/* Duplicate content for infinite loop */}
        {[...WORDS, ...WORDS, ...WORDS].map((word, index) => (
          <span
            key={index}
            className="flex items-center text-lg sm:text-xl font-semibold uppercase tracking-wide"
          >
            {word}
            <span className="ml-10 h-2 w-2 bg-yellow-400 rounded-full" />
          </span>
        ))}

      </div>
    </section>
  );
}
