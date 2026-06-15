'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-border dark:border-dark-border">
      <nav className="max-w-section mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center"
        >
          <img src="/favicon.svg" alt="Z" className="h-8 w-8" />
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-dark-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggle}
            className="p-2 text-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-dark-text transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          <button
            className="md:hidden p-2 text-secondary dark:text-dark-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border dark:border-dark-border bg-white dark:bg-black">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-dark-text transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
