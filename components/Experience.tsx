'use client';

const experiences = [
  {
    title: 'EwA (Product) Marketing',
    company: 'AIESEC in Surabaya',
    period: 'Jan 2025 — Jan 2026',
    logo: '/aiesecindonesia_logo.jpg',
    highlights: [
      'Collaborated with cross-functional product and marketing teams in a multicultural organization.',
      'Developed visual and written content reaching 10,000+ impressions.',
      'Conducted light user and audience analysis to align messaging with product positioning.',
      'Designed publication materials using Figma and executed multi-channel campaigns.',
    ],
  },
  {
    title: 'Sponsorship and External Relations Intern',
    company: 'Barunastra ITS',
    period: 'Feb 2024 — Mar 2024',
    logo: '/team_barunastra_its_logo.jpg',
    highlights: [
      'Supported external partnership processes and stakeholder coordination workflows.',
      'Assisted in preparing structured sponsorship materials to improve documentation and communication flow.',
      'Gained exposure to organizational processes within a technical team environment.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="max-w-4xl mx-auto">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Professional Background</h2>
        <p className="section-subtitle mb-12">
          Roles and projects where I have contributed to business outcomes.
        </p>

        <div className="relative pl-8 space-y-12">
          <div className="timeline-line" />
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="timeline-dot" />
              <div className="card">
                <div className="flex items-start gap-4 mb-4">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-10 h-10 mt-0.5 object-contain rounded"
                    />
                  )}
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-primary dark:text-dark-text">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-accent font-medium">{exp.company}</p>
                    </div>
                    <p className="text-xs text-secondary dark:text-dark-secondary font-medium whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-primary dark:text-dark-text flex items-start gap-2">
                      <span className="text-accent mt-1">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
}
