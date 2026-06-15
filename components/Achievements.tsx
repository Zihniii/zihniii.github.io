'use client';

const items = [
  {
    title: '3rd Winner — IEEE BIG Business Case Competition 2024',
    subtitle: 'Business case analysis and strategic recommendation',
  },
  {
    title: '2nd Winner — ISCOM Business Case Competition 2024',
    subtitle: 'Data-backed logistics industry strategy proposal',
  },
  {
    title: '3rd Place — World Robot Olympiad Indonesia 2022',
    subtitle: 'Robot design and programming at national level',
  },
  {
    title: 'Awardee GenBI Scholarship 2026',
    subtitle: 'Bank Indonesia',
  },
  {
    title: 'Awardee Bakti BCA Scholarship 2025',
    subtitle: 'BCA',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-container">
      <div className="max-w-4xl mx-auto">
        <p className="section-label">Achievements</p>
        <h2 className="section-title">Competitions & Recognition</h2>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {items.map((item) => (
            <article key={item.title} className="card">
              <h3 className="text-base font-semibold text-primary dark:text-dark-text mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-secondary dark:text-dark-secondary leading-relaxed">
                {item.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
