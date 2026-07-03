'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { navLinks, images } from '../data/siteConfig';
import SocialIcons from './SocialIcons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-offwhite bg-black">
      <div className="flex items-center py-4">
        <a
          href="/"
          className="header-logo-link"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={images.headerLogo}
            alt="Naked By 9"
            width={2046}
            height={1398}
            priority
            className="img-pure-white h-10 w-auto object-contain"
          />
        </a>

        <nav aria-label="Main navigation" className="hidden flex-1 md:block">
          <ul className="flex items-center justify-center gap-20">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="nav-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialIcons className="ml-auto hidden shrink-0 pr-4 md:flex md:pr-6" />

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto mr-4 p-2 text-offwhite hover-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offwhite md:hidden"
        >
          {menuOpen ? (
            <X size={28} strokeWidth={2} />
          ) : (
            <Menu size={28} strokeWidth={2} />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t-2 border-offwhite md:hidden"
        >
          <ul>
            {navLinks.map(({ label, href }) => (
              <li key={label} className="border-b-2 border-offwhite/20">
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link block px-6 py-4 text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 py-4">
            <SocialIcons />
          </div>
        </nav>
      )}
    </header>
  );
}
