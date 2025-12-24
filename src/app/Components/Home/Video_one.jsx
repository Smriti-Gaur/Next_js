'use client';
export default function Video_one() {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/video3.webm" type="video/webm" />
        <source src="/videos/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
