'use client';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <p className="section-label">About</p>
        <h2 className="section-title">Understanding Problems, Building Solutions</h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-8">
          <div className="space-y-5">
            <p className="text-base md:text-lg text-primary dark:text-dark-text leading-relaxed">
              I am an Information Systems undergraduate at Institut Teknologi Sepuluh Nopember (ITS) with interests in data analytics, business analysis, strategic planning, and product development.
            </p>
            <p className="text-base md:text-lg text-primary dark:text-dark-text leading-relaxed">
              Through academic projects, business case competitions, and independent products, I explore how data, technology, and structured thinking can help organizations make better decisions and build meaningful solutions.
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-base md:text-lg text-secondary dark:text-dark-secondary leading-relaxed">
              My approach combines analytical rigor with a product mindset — I don't just find answers; I ask the right questions, map the system, and design solutions that deliver measurable impact.
            </p>
            <div className="card">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Current Focus</h3>
              <ul className="space-y-2.5">
                {[
                  'Data Analytics & Visualization',
                  'Business Analysis',
                  'Strategic Planning',
                  'Product Management',
                  'Process Improvement',
                  'Digital Transformation',
                ].map((item) => (
                  <li key={item} className="text-sm text-primary dark:text-dark-text flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
