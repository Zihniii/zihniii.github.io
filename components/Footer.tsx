'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border dark:border-dark-border">
      <div className="max-w-section mx-auto px-6 md:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary dark:text-dark-secondary">
            &copy; {year} Zihni Aryanto Putra Buana. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/zihni-aryanto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-secondary dark:text-dark-secondary hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/zihniaryanto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-secondary dark:text-dark-secondary hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
