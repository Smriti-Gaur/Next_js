import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen  flex gap-6 px-4 lg:px-12 pt-0 pb-16">
        <div className="hidden md:block sticky top-20 z-10 h-[80vh] w-[30vw] min-w-[280px] max-w-[420px] self-start">
          <div className="relative h-full w-full  shadow-lg p-0">
            <Image
              src="/images/right-visual-1.jpeg"
              alt="Left "
              fill
              className="object-cover rounded-xl"
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 100vw"
              priority
            />
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-auto lg:mx-0 pt-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-slate-900 text-center">
            TURN IMAGINATION<br />
            INTO IMPACT WITH<br />
            DESIGN &amp; TECHNOLOGY
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-center text-slate-700">
            RBSH Studio delivers <span className="font-semibold">creative</span> designs that bring your vision
            to life and set your brand apart.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="rounded-full border-2 border-fuchsia-700 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-700 px-8 py-4 text-lg font-semibold hover:shadow-md transition">
              CONTACT US
            </button>
          </div>

        </div>


        <div className="hidden lg:block fixed right-0 top-0 h-screen w-[33vw] z-0 pointer-events-none">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/right-visual-2.jpeg"
              alt="Right  "
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
              priority
            />
          </div>
        </div>

    
        <div className="hidden lg:block shrink-0 w-[33vw]" aria-hidden />
      </section>

      
      <section className="lg:hidden px-4 sm:px-6 pb-16">
        <div className="relative mt-10 h-[50vh] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/right-visual-2.jpeg"
            alt="Right  fallback"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>
    </>
  );
}
