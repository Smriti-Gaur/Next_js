'use client';

import { useState, useRef } from 'react';

export default function FramedVideo() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.muted = false;
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section
      className="relative z-50 w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/tabbg.png')" }}
    >
      <div
        className="relative bg-white rounded-3xl shadow-lg p-2 w-[80%] max-w-4xl cursor-none"
        onMouseMove={(e) =>
          setMouse({ x: e.clientX, y: e.clientY })
        }
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        <div className="bg-black rounded-2xl p-2">
          <div className="overflow-hidden rounded-xl">

            <video
              ref={videoRef}                 
              onClick={togglePlay}          
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              src="/videos/video2.mp4"
              loop
              playsInline
            />
          </div>
        </div>
      </div>

      {showCursor && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: mouse.x,
            top: mouse.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="
              w-20 h-20
              rounded-full
              border border-white/70
              bg-black/90
              backdrop-blur-sm
              flex flex-col items-center justify-center
              text-white
              text-xs
              tracking-widest
            "
          >
            <span className="text-lg">
              {isPlaying ? '❚❚' : '▶'}
            </span>
            <span className="mt-1">
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </span>
          </div>
        </div>
      )}

    </section>
  );
}
