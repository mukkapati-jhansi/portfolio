import { Code, Layers, Database, Wrench, Brain } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'C', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks',
      icon: Layers,
      skills: ['TensorFlow', 'Flask', 'Django'],
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['GitHub', 'VS Code', 'PyCharm'],
    },
    {
      title: 'Concepts',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning', 'NLP'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-indigo-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-lg text-sm border border-slate-600 hover:border-indigo-500/40 hover:text-indigo-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30">
          <h3 className="text-2xl font-bold text-slate-200 mb-4 text-center">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-indigo-400 mb-2">92%</p>
              <p className="text-slate-300">Model Accuracy</p>
              <p className="text-slate-400 text-sm">Fake News Detection</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-400 mb-2">3+</p>
              <p className="text-slate-300">Certifications</p>
              <p className="text-slate-400 text-sm">Industry Recognized</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-400 mb-2">2+</p>
              <p className="text-slate-300">Major Projects</p>
              <p className="text-slate-400 text-sm">Full Stack & ML</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
