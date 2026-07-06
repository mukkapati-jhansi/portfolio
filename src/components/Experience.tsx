import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Infosys Springboard',
      role: 'Remote Internship',
      project: 'Truth Seeker: Unmasking Fake News for a More Informed World',
      period: 'October 2024 – December 2024',
      location: 'Remote',
      certificate: 'images/infosys-internship.png',
      achievements: [
        'Developed a Fake News Classifier using BiLSTM and Transformer models.',
        'Performed text preprocessing using lemmatization and TF-IDF techniques.',
        'Achieved 92% accuracy, demonstrating strong understanding of NLP and deep learning concepts.',
      ],
    },
    {
      company: 'Prodigy Infotech',
      role: 'Web Development Intern',
      project: '',
      period: 'June 2024 – July 2024',
      location: 'Remote',
      certificate: 'images/prodigy-internship.png',
      achievements: [
        'Developed responsive and interactive web pages using HTML, CSS, and JavaScript.',
        'Built and deployed multiple web development projects including a Portfolio Website, Stopwatch, Weather Application, and Tic-Tac-Toe Game.',
        'Implemented responsive layouts to ensure compatibility across different devices.',
        'Applied DOM manipulation, event handling, and API integration in real-world projects.',
        'Enhanced website usability through modern UI design, clean code, and optimized performance.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 bg-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700 hover:border-indigo-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2"
            >

              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">

                <div>

                  <div className="flex items-center gap-3 mb-2">

                    <div className="p-2 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {exp.company}
                    </h3>

                  </div>

                  <p className="text-lg text-indigo-300 font-medium">
                    {exp.role}
                  </p>

                  {exp.project && (
                    <p className="text-slate-300 italic mt-2">
                      {exp.project}
                    </p>
                  )}

                </div>

                <div className="flex flex-col gap-2 mt-4 md:mt-0 text-slate-400">

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>

                </div>

              </div>

              {/* Achievements */}
              <ul className="space-y-3">

                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></span>

                    <span>{achievement}</span>

                  </li>
                ))}

              </ul>

              {/* Certificate Button */}
              <div className="mt-8">

                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
                >
                  <ExternalLink size={18} />
                  View Internship Certificate
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}