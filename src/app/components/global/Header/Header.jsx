'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brandbg/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="RBSH studio" width={140} height={40} priority />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-10">
          <Link href="/" className="text-gray-200 tracking-wider font-semibold hover:text-white">HOME</Link>
          <Link href="/about" className="text-gray-200 tracking-wider font-semibold hover:text-white">ABOUT</Link>
          <Link href="/services" className="text-gray-200 tracking-wider font-semibold hover:text-white">OUR SERVICES</Link>
          <Link href="/blog" className="text-gray-200 tracking-wider font-semibold hover:text-white">BLOG</Link>
          <Link href="/careers" className="text-gray-200 tracking-wider font-semibold hover:text-white">CAREER</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:inline-block px-5 py-2 rounded-full bg-black text-white font-semibold shadow-md">
            Contact Us
          </Link>

         
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`w-6 h-0.5 bg-gray-300 block transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-300 block transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-6 h-0.5 bg-gray-300 block transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-brandbg border-t border-branddark/60 overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-3">
          <Link href="/" className="block text-gray-200 font-semibold">HOME</Link>
          <Link href="/about" className="block text-gray-200 font-semibold">ABOUT</Link>
          <Link href="/services" className="block text-gray-200 font-semibold">OUR SERVICES</Link>
          <Link href="/blog" className="block text-gray-200 font-semibold">BLOG</Link>
          <Link href="/careers" className="block text-gray-200 font-semibold">CAREER</Link>
          <Link href="/contact" className="mt-2 inline-block px-5 py-2 rounded-full bg-black text-white font-semibold">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}
