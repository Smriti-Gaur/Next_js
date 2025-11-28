'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50  h-16 md:h-20 bg-slate-100 border-b border-slate-300 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.jpeg" alt="RBSH studio" width={90} height={32} priority className=" object-contain w-12 h-12 rounded-lg" />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-10">
          <Link href="/" className="text-gray-800 tracking-wider font-semibold  hover:text-orange-950">HOME</Link>
          <Link href="/Components/About" className="text-gray-800 tracking-wider font-semibold hover:text-orange-950">ABOUT</Link>
          <Link href="/Components/OurServices" className="text-gray-800 tracking-wider font-semibold hover:text-orange-950">OUR SERVICES</Link>
          <Link href="/Components/Blog" className="text-gray-800 tracking-wider font-semibold hover:text-orange-950">BLOG</Link>
          <Link href="/Components/Career" className="text-gray-800 tracking-wider font-semibold hover:text-orange-950">CAREER</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/Components/ContactUs" className="hidden md:inline-block px-5 py-2 rounded-full bg-black text-white font-semibold shadow-md">
            Contact Us
          </Link>

          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden relative z-50 flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`w-6 h-0.5 bg-black block transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-6 h-0.5 bg-black block transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-6 h-0.5 bg-black block transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-brandbg border-t border-branddark/60 overflow-y-auto transition-[max-height] duration-300 ${open ? 'max-h-[80vh]' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-3">
          <Link href="/" className="block text-gray-800 font-semibold">HOME</Link>
          <Link href="/Components/About" className="block text-gray-800 font-semibold">ABOUT</Link>
          <Link href="/Components/OurServices" className="block text-gray-800 font-semibold">OUR SERVICES</Link>
          <Link href="/Components/Blog" className="block text-gray-800 font-semibold">BLOG</Link>
          <Link href="/careers" className="block text-gray-800 font-semibold">CAREER</Link>
          <Link href="/contact" className="mt-2 w-full text-center px-5 py-2 rounded-full bg-black text-white font-semibold">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}
