import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Infosys Springboard',
      role: 'Remote Internship',
      project: 'Truth Seeker: Unmasking Fake News for a More Informed World',
      period: 'October 2024 – December 2024',
      location: 'Remote',
      achievements: [
        'Developed a Fake News Classifier using BiLSTM and Transformer models',
        'Performed text preprocessing using lemmatization and TF-IDF techniques',
        'Achieved 92% accuracy, demonstrating strong understanding of NLP and deep learning concepts',
      ],
    },
    {
      company: 'Prodigy Infotech',
      role: 'Web Development Intern',
      project: '',
      period: 'June 2024 – July 2024',
      location: 'Remote',
      achievements: [
        'Developed responsive web pages using HTML, CSS, and JavaScript',
        'Worked on multiple mini-projects following real-world development practices',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <Briefcase className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-lg text-cyan-400 mb-2">{exp.role}</p>
                  {exp.project && (
                    <p className="text-slate-300 italic mb-2">{exp.project}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
