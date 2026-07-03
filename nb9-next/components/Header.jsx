import Image from 'next/image';
import { navLinks, images } from '../data/siteConfig';
import SocialIcons from './SocialIcons';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-offwhite bg-black">
      <div className="flex items-center py-4">
        <a href="/" className="header-logo-link">
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

        <SocialIcons className="ml-auto hidden shrink-0 pr-4 sm:flex md:pr-6" />
      </div>

      {/* Mobile nav */}
      <nav
        aria-label="Mobile navigation"
        className="border-t-2 border-offwhite md:hidden"
      >
        <ul className="flex overflow-x-auto">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="shrink-0">
              <a
                href={href}
                className="nav-link block px-6 py-3 text-xs"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
