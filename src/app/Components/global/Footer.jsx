import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-30 bg-black text-slate-200">
      <div className="w-full px-6 lg:px-16 py-14 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-extrabold tracking-tight">
                <span className="text-[#00C9A7]">C</span>
                <span className="text-[#00B8D9]">R</span>
                <span className="text-[#0091FF]">E</span>
                <span className="text-[#6C63FF]">O</span>
                <span className="text-[#00E5A0]">V</span>
                <span className="text-[#40C4FF]">A</span>
                <span className="text-[#EC407A]">T</span>
                <span className="text-[#F48FB1]">E</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 transition-all hover:scale-105 hover:border-[#1877F2] hover:bg-[#1877F2]"
              >
                <FaFacebookF className="text-xl text-slate-200 hover:text-white" />
              </Link>

             
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 transition-all hover:scale-105 hover:border-[#0077B5] hover:bg-[#0077B5]"
              >
                <FaLinkedinIn className="text-xl text-slate-200 hover:text-white" />
              </Link>

            
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 transition-all hover:scale-105 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent"
              >
                <FaInstagram className="text-xl text-slate-200 hover:text-white" />
              </Link>

             
              <Link
                href="https://youtube.com"
                target="_blank"
                aria-label="YouTube"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 transition-all hover:scale-105 hover:border-[#FF0000] hover:bg-[#FF0000]"
              >
                <FaYoutube className="text-xl text-slate-200 hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Links</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/careers" className="hover:text-white">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Find It Fast
            </h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="text-slate-300">
            <div className="space-y-3">
              <p>
                Nv Vihar TechHub,<br />
                Noida West, UP – 201306
              </p>
              <p>
                <a
                  href="mailto:info@creovate.com"
                  className="hover:text-white"
                >
                  info@creovate.com
                </a>
              </p>
              <p>
                <a href="tel:+9167898990" className="hover:text-white">
                  +91 67898 990
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-slate-800" />

      
      <div className="py-6 text-center text-slate-400 text-sm">
        © {year} Copyright Creovate. All Rights Reserved.
      </div>
    </footer>
  );
}
