'use client';

const Skills = () => {
  const productSkills = [
    'Product Documentation',
    'User Research',
    'Business Process Analysis',
    'Design Thinking',
    'Product Requirement Writing',
    'Data Storytelling',
    'Stakeholder Communication',
    'Market Research',
  ];

  const technicalSkills = [
    'SQL',
    'Python',
    'Power BI',
    'Next.js',
    'TypeScript',
    'Figma',
    'Microsoft 365',
    'Google Workspace',
  ];

  return (
    <section id="skills" className="section-container bg-gradient-to-br from-cyan-100 to-purple-100 border-4 border-solid border-cyan-400 m-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Product & Business + Technical Arsenal
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6 uppercase">
              📊 Product & Business
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {productSkills.map((skill) => (
                <div
                  key={skill}
                  className="font-black uppercase text-center p-4 border-4 border-pink-500 bg-gradient-to-br from-cyan-200 to-blue-300 transform hover:rotate-2 hover:-translate-y-2 transition-all duration-300 cursor-pointer text-sm"
                  style={{
                    boxShadow: '4px 4px 0px #FF006E, 8px 8px 0px rgba(181,55,242,0.3)'
                  }}
                >
                  <p className="text-pink-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6 uppercase">
              💻 Technical
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {technicalSkills.map((skill) => (
                <div
                  key={skill}
                  className="font-black uppercase text-center p-4 border-4 border-cyan-500 bg-gradient-to-br from-purple-200 to-pink-300 transform hover:rotate-2 hover:-translate-y-2 transition-all duration-300 cursor-pointer text-sm"
                  style={{
                    boxShadow: '4px 4px 0px #00D9FF, 8px 8px 0px rgba(255,107,53,0.3)'
                  }}
                >
                  <p className="text-purple-700">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-none border-4 border-yellow-400" style={{
          boxShadow: '6px 6px 0px #FF006E, 12px 12px 0px rgba(181,55,242,0.3)'
        }}>
          <h3 className="text-xl font-black text-primary mb-4 uppercase">
            Proficiency Areas
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-black text-primary mb-2 uppercase">
                Analysis & Strategy
              </h4>
              <p className="font-bold text-pink-700">
                Business analysis, market research, competitive analysis, and
                strategic planning
              </p>
            </div>

            <div>
              <h4 className="font-black text-primary mb-2 uppercase">
                Product Development
              </h4>
              <p className="font-bold text-pink-700">
                Requirements gathering, wireframing, prototyping, and user
                testing
              </p>
            </div>

            <div>
              <h4 className="font-black text-primary mb-2 uppercase">
                Communication
              </h4>
              <p className="font-bold text-pink-700">
                Stakeholder alignment, documentation, and data storytelling
              </p>
            </div>

            <div>
              <h4 className="font-black text-primary mb-2 uppercase">
                AI & Technology
              </h4>
              <p className="font-bold text-pink-700">
                AI product strategy, LLM integration, and emerging tech evaluation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
