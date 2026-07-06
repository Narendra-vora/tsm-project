'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full bg-white sticky top-0 z-69 border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-22">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2.5 group pl-1 sm:pl-2">

            <img
              src="/Technik Spirit Medtech_logo.png"
              alt="Technik Spirits MedTech"
              style={{ height: 56, width: "auto" }}
            />
          </Link>


          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`font-semibold text-[15px] transition-colors py-2 border-b-2 ${pathname === '/' ? 'text-[#0b477b] border-[#0b477b]' : 'text-gray-600 border-transparent hover:text-[#0b477b]'}`}>
              Home
            </Link>

            <Link href="/about" className={`font-semibold text-[15px] transition-colors py-2 border-b-2 ${pathname === '/about' ? 'text-[#0b477b] border-[#0b477b]' : 'text-gray-600 border-transparent hover:text-[#0b477b]'}`}>
              About Us
            </Link>

            <div className="relative group">
              <div className="flex items-center">
                {/* Click → /products page */}
                <Link
                  href="/products"
                  className={`font-semibold text-[15px] transition-colors py-2 border-b-2 flex items-center gap-1 ${['/products', '/products/medical-air-compressor', '/products/oxygen', '/products/agss', '/products/cps', '/products/mgps-design'].includes(pathname)
                    ? 'text-[#0b477b] border-[#0b477b]'
                    : 'text-gray-600 border-transparent hover:text-[#0b477b]'
                    }`}
                >
                  Products
                </Link>

                {/* Arrow — hover trigger for dropdown */}
                <button className="p-1 ml-0.5 text-gray-600 hover:text-[#0b477b]">
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/products/Air" className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-[#eef5fc] hover:text-[#0b477b] ${pathname === '/products/Air' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700'}`}>
                    <span className="w-2 h-2 rounded-full bg-[#E05A36] flex-shrink-0"></span>
                    Air
                  </Link>
                  <Link href="/products/oxygen" className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-[#eef5fc] hover:text-[#0b477b] ${pathname === '/products/oxygen' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700'}`}>
                    <span className="w-2 h-2 rounded-full bg-[#E05A36] flex-shrink-0"></span>
                    Oxygen
                  </Link>
                  <Link href="/products/AGSS" className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-[#eef5fc] hover:text-[#0b477b] ${pathname === '/products/AGSS' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700'}`}>
                    <span className="w-2 h-2 rounded-full bg-[#E05A36] flex-shrink-0"></span>
                    AGSS
                  </Link>
                  <Link href="/products/cps" className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-[#eef5fc] hover:text-[#0b477b] ${pathname === '/products/cps' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700'}`}>
                    <span className="w-2 h-2 rounded-full bg-[#E05A36] flex-shrink-0"></span>
                    CPS
                  </Link>
                  <Link href="/products/mgps-design" className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-[#eef5fc] hover:text-[#0b477b] ${pathname === '/products/mgps-design' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700'}`}>
                    <span className="w-2 h-2 rounded-full bg-[#E05A36] flex-shrink-0"></span>
                    MGPS Design
                  </Link>
                </div>
              </div>
            </div>
            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className={`font-semibold text-[15px] transition-colors py-2 border-b-2 flex items-center gap-1 ${['/blogs', '/mguc', '/media&press'].includes(pathname) ? 'text-[#0b477b] border-[#0b477b]' : 'text-gray-600 border-transparent hover:text-[#0b477b]'}`}
              >
                Resources
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link
                    href="/blogs"
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-[#eef5fc] hover:text-[#0b477b] ${pathname === '/blogs' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700'}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E05A36] flex-shrink-0"></span>
                    Blogs
                  </Link>
                  <Link
                    href="/mguc"
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-[#eef5fc] hover:text-[#0b477b] ${pathname === '/mguc' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700'}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E05A36] flex-shrink-0"></span>
                    MGUS
                  </Link>
                  <Link
                    href="/media&press"
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-[#eef5fc] hover:text-[#0b477b] ${pathname === '/media&press' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700'}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E05A36] flex-shrink-0"></span>
                    Media & Press
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contact-us" className={`font-semibold text-[15px] transition-colors py-2 border-b-2 ${pathname === '/contact-us' ? 'text-[#0b477b] border-[#0b477b]' : 'text-gray-600 border-transparent hover:text-[#0b477b]'}`}>
              Contact Us
            </Link>
          </nav>

          {/* Right Action Section (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a href="mailto:sales@ts11.in" className="text-[#0d4c82] hover:text-[#E05A36] font-semibold text-base transition-colors decoration-1 underline-offset-4 hover:underline">
              sales@ts11.in
            </a>
            <Link href="#" className="bg-[#0b477b] hover:bg-[#0d599b] text-white px-8 py-3.5 rounded-full text-base font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200">
              Discuss Your Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#0b477b] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu (Overlay panel) */}
      {mounted && isOpen && (
        <MobileMenu pathname={pathname} setIsOpen={setIsOpen} />
      )}
    </header>
  );
}

function MobileMenu({ pathname, setIsOpen }) {
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-1">
      <Link href="/" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-semibold ${pathname === '/' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b477b]'}`}>
        Home
      </Link>
      <Link href="/about" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/about' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b477b]'}`}>
        About Us
      </Link>
      <Link href="/products" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/products' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b477b]'}`}>
        Products
      </Link>

      {/* Resources Accordion */}
      <div>
        <button
          onClick={() => setResourcesOpen(!resourcesOpen)}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${resourcesOpen ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b477b]'}`}
        >
          Resources
          <svg className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {resourcesOpen && (
          <div className="mt-1 ml-4 border-l-2 border-[#eef5fc] pl-3 space-y-1">
            <Link href="/blogs" onClick={() => setIsOpen(false)} className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${pathname === '/blogs' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b477b]'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E05A36]"></span>
              Blogs
            </Link>
            <Link href="/mguc" onClick={() => setIsOpen(false)} className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${pathname === '/mguc' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b477b]'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E05A36]"></span>
              MGUS
            </Link>
            <Link href="/media&press" onClick={() => setIsOpen(false)} className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${pathname === '/media&press' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b477b]'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E05A36]"></span>
              Media & Press
            </Link>
          </div>
        )}
      </div>

      <Link href="/contact-us" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === '/contact-us' ? 'text-[#0b477b] bg-[#eef5fc]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b477b]'}`}>
        Contact Us
      </Link>
      <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
        <a href="mailto:sales@ts11.in" className="text-[#0d4c82] font-semibold text-sm hover:underline">
          sales@ts11.in
        </a>
        <Link href="#" className="bg-[#0b477b] hover:bg-[#0d599b] text-white text-center px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all">
          Discuss Your Project
        </Link>
      </div>
    </div>
  );
}
