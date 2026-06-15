'use client';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-primary dark:text-dark-text">
          Zihni Aryanto
        </h1>

        <p className="text-xl md:text-2xl text-secondary dark:text-dark-secondary font-medium mb-4">
          Information Systems Student | Business & Data Analyst | Product-Minded Builder
        </p>

        <p className="text-base md:text-lg text-secondary dark:text-dark-secondary leading-relaxed max-w-2xl mx-auto mb-10">
          I enjoy turning complex business problems into structured insights, digital solutions, and actionable decisions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/zihni-aryanto"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/zihniii"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 text-secondary dark:text-dark-secondary text-sm">
          <svg className="w-5 h-5 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
