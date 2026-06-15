'use client';

const skillGroups = [
  {
    name: 'Analytics',
    skills: [
      'Data Analytics',
      'Data Visualization',
      'Business Intelligence',
      'KPI Development',
      'Dashboard Development',
      'Data Storytelling',
    ],
  },
  {
    name: 'Business',
    skills: [
      'Business Analysis',
      'Business Process Analysis',
      'Strategic Planning',
      'Design Thinking',
      'Product Discovery',
    ],
  },
  {
    name: 'Technical',
    skills: [
      'SQL',
      'Python',
      'Power BI',
      'Neo4j',
      'SPARQL',
      'Next.js',
      'TypeScript',
    ],
  },
  {
    name: 'Tools',
    skills: [
      'Figma',
      'GitHub',
      'Microsoft 365',
      'Google Workspace',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="max-w-4xl mx-auto">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Tools & Expertise</h2>
        <p className="section-subtitle mb-12">
          Analytical, business, and technical capabilities built through projects and coursework.
        </p>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-[0.15em] mb-4">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 bg-light dark:bg-dark-card text-primary dark:text-dark-text text-sm rounded-md border border-border dark:border-dark-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
