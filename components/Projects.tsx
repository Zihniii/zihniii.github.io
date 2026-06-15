'use client';

import { useState } from 'react';

const analyticsProjects = [
  {
    name: 'PT Indofood KPI Monitoring Dashboard',
    context: 'Business Intelligence academic project.',
    problem: 'Organizations need visibility into strategic IT performance across multiple dimensions.',
    approach: 'Designed a KPI monitoring dashboard using the IT Balanced Scorecard framework. Mapped business objectives into measurable KPIs across Corporate Contribution, User Orientation, Operational Excellence, and Future Orientation.',
    tools: ['Power BI', 'Excel'],
    outcome: 'Created an interactive dashboard supporting strategic performance monitoring and decision-making.',
    learning: 'How strategic goals can be translated into measurable performance indicators.',
  },
  {
    name: 'Knowledge Graph Analysis',
    context: 'Business Intelligence and Data Integration project.',
    problem: 'Business relationships across brands, products, industries, and countries are often fragmented.',
    approach: 'Constructed a knowledge graph using Wikidata and DBpedia. Built graph models and analyzed hidden relationships between entities.',
    tools: ['Neo4j', 'SPARQL', 'Wikidata', 'DBpedia'],
    outcome: 'Generated insights for competitor discovery and business relationship analysis.',
    learning: 'How graph-based data structures reveal hidden business intelligence.',
  },
  {
    name: 'Electricity Consumption Forecasting',
    context: 'Predictive Analytics project.',
    problem: 'Accurate electricity demand forecasting is critical for planning and resource allocation.',
    approach: 'Compared GRU, Bi-LSTM, and Ensemble GRU-LightGBM models. Designed validation and evaluation pipelines for time series forecasting.',
    tools: ['Python', 'LightGBM'],
    outcome: 'Ensemble model achieved the strongest forecasting performance across evaluation metrics.',
    learning: 'Balancing model complexity, interpretability, and forecasting accuracy.',
  },
];

const productProjects = [
  {
    name: 'SpecFast',
    context: 'AI-powered product specification generator.',
    problem: 'Founders struggle to convert ideas into structured requirements.',
    solution: 'Created a guided workflow that transforms rough ideas into actionable product specifications through a structured 7-step process.',
    role: ['Product Design', 'Workflow Design', 'Prompt Engineering', 'Frontend Development'],
    tech: ['Next.js', 'TypeScript', 'Groq API'],
    learning: 'Reducing ambiguity is often more valuable than adding features.',
  },
  {
    name: 'PitchForge',
    context: 'AI startup pitch simulator.',
    problem: 'Students and founders rarely receive realistic pitching feedback.',
    solution: 'Built an AI-powered pitch evaluation experience with structured feedback across multiple dimensions.',
    role: ['Product Planning', 'UX Design', 'Prompt Engineering'],
    tech: ['Next.js', 'TypeScript', 'OpenAI API'],
    learning: 'Feedback quality drives user value more than interface complexity.',
  },
  {
    name: 'AromaOps',
    context: 'AI-assisted operations support platform.',
    problem: 'Operational workflows are repetitive and fragmented across tools.',
    solution: 'Designed an AI-supported workflow prototype to streamline repetitive operational tasks.',
    role: ['Business Analysis', 'Process Mapping', 'Requirement Definition'],
    tech: ['Next.js', 'TypeScript'],
    learning: 'Good operations begin with understanding processes before automating them.',
  },
];

function CollapsibleGroup({
  title,
  subtitle,
  defaultOpen,
  children,
}: {
  title: string;
  subtitle: string;
  defaultOpen: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 group cursor-pointer"
      >
        <div className="text-left">
          <p className="section-label mb-1">{title}</p>
          <h2 className="section-title mb-0">{subtitle}</h2>
        </div>
        <svg
          className={`w-5 h-5 text-secondary dark:text-dark-secondary transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-4xl mx-auto">
        <CollapsibleGroup
          title="Analytics Projects"
          subtitle="Data-Driven Case Studies"
          defaultOpen={true}
        >
          <p className="section-subtitle mb-12">
            Projects that showcase my experience in data analysis, business intelligence, forecasting, and turning data into actionable insights.
          </p>
          <div className="project-grid">
            {analyticsProjects.map((project, idx) => (
              <article key={project.name} className="border-b border-border dark:border-dark-border pb-16 md:pb-20 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-2 mb-6">
                  <span className="text-accent text-sm font-mono mt-1">0{idx + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-primary dark:text-dark-text">
                    {project.name}
                  </h3>
                </div>

                <div className="grid md:grid-cols-6 gap-6 md:gap-8">
                  <div className="md:col-span-2 space-y-5">
                    <div>
                      <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Context</p>
                      <p className="text-sm text-primary dark:text-dark-text leading-relaxed">{project.context}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Problem</p>
                      <p className="text-sm text-primary dark:text-dark-text leading-relaxed">{project.problem}</p>
                    </div>
                  </div>

                  <div className="md:col-span-4 space-y-5">
                    <div>
                      <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Approach</p>
                      <p className="text-sm text-primary dark:text-dark-text leading-relaxed">{project.approach}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Tools</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span key={tool} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Outcome</p>
                        <p className="text-sm text-primary dark:text-dark-text leading-relaxed">{project.outcome}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Key Learning</p>
                        <p className="text-sm text-primary dark:text-dark-text leading-relaxed">{project.learning}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </CollapsibleGroup>

        <div className="my-12 divider" />

        <CollapsibleGroup
          title="Product Projects"
          subtitle="Building Solutions with Ownership"
          defaultOpen={false}
        >
          <p className="section-subtitle mb-12">
            Product-driven projects focused on problem discovery, decision-making, and delivering value.
          </p>
          <div className="project-grid">
            {productProjects.map((project, idx) => (
              <article key={project.name} className="border-b border-border dark:border-dark-border pb-16 md:pb-20 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-2 mb-6">
                  <span className="text-accent text-sm font-mono mt-1">0{idx + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-primary dark:text-dark-text">
                    {project.name}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6">
                  <div>
                    <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Context</p>
                    <p className="text-sm text-primary dark:text-dark-text leading-relaxed">{project.context}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Problem</p>
                    <p className="text-sm text-primary dark:text-dark-text leading-relaxed">{project.problem}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Solution</p>
                  <p className="text-sm text-primary dark:text-dark-text leading-relaxed">{project.solution}</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Role</p>
                    <ul className="space-y-1">
                      {project.role.map((r) => (
                        <li key={r} className="text-sm text-primary dark:text-dark-text">— {r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Tech</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary dark:text-dark-secondary uppercase tracking-widest mb-1.5">Key Learning</p>
                    <p className="text-sm text-primary dark:text-dark-text leading-relaxed">{project.learning}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </CollapsibleGroup>
      </div>
    </section>
  );
}
