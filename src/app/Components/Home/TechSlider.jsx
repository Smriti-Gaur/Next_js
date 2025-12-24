'use client';

const technologies = [
  {
    name: 'Node.js',
    desc: 'Fast JavaScript runtime for scalable web applications.',
    image: '/TechIcons/technology1.webp',
  },
  {
    name: 'React.js',
    desc: 'Library for building dynamic user interfaces.',
    image: '/TechIcons/technology5.webp',
  },
  {
    name: 'Google Analytics',
    desc: 'React framework for production-grade apps.',
    image: '/TechIcons/technology3.webp',
  },
  {
    name: 'Mail Chimps',
    desc: 'NoSQL database for modern applications.',
    image: '/TechIcons/technology4.webp',
  },
  {
    name: 'DaVinci Resolve',
    desc: 'NoSQL database for modern applications.',
    image: '/TechIcons/technology2.webp',
  },
  {
    name: 'Meta',
    desc: 'NoSQL database for modern applications.',
    image: '/TechIcons/technology6.webp',
  },
  {
    name: 'Hub-spot',
    desc: 'NoSQL database for modern applications.',
    image: '/TechIcons/technology7.webp',
  },
  {
    name: 'Google Adds',
    desc: 'NoSQL database for modern applications.',
    image: '/TechIcons/technology8.webp',
  },
  {
    name: 'Next.js',
    desc: 'NoSQL database for modern applications.',
    image: '/TechIcons/technology9.webp',
  },
  {
    name: 'Canva',
    desc: 'NoSQL database for modern applications.',
    image: '/TechIcons/technology10.webp',
  },
  {
    name: 'Google Trends',
    desc: 'NoSQL database for modern applications.',
    image: '/TechIcons/technology11.webp',
  },
  {
    name: 'Adobe creative cloud ',
    desc: 'NoSQL database for modern applications.',
    image: '/TechIcons/technology12.webp',
  },
];


export default function TechSlider() {
  return (
    <section className="relative z-50 bg-[#e5e8ea] py-10 overflow-hidden">
      <div className="flex w-max  gap-6 animate-tech-scroll will-change-transform">

        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white rounded-lg shadow-md p-4
                       w-[70vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw]
                       flex flex-col items-center text-center"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-19 h-17 mb-4"
              loading="lazy"
            />
            <h3 className="text-black text-lg font-semibold mb-2">
              {tech.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {tech.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
